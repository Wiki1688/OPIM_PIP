/* Presenter view: notes, timers, current + next slide, synced with the audience window */
(function () {
  "use strict";
  const D = window.DECK, N = D.slides.length;
  const $ = (s) => document.querySelector(s);
  // count build steps the same way the deck does
  D.slides.forEach((sd) => {
    const m = sd.html.match(/data-step="(\d+)"/g) || [];
    sd.max = m.reduce((a, x) => Math.max(a, +x.match(/\d+/)[0]), 0);
  });

  const st = { i: 0, step: 0, express: false, linked: false };
  const m = location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);
  if (m) { st.i = Math.max(0, Math.min(N - 1, +m[1] - 1)); st.step = +(m[2] || 0); }

  let ch = null;
  try { ch = new BroadcastChannel("pip-ai-growth-engine-deck"); } catch (e) {}
  const send = (cmd, extra) => ch && ch.postMessage(Object.assign({ type: "cmd", cmd }, extra || {}));

  // ---------- timers ----------
  let t0 = null, paused = 0, pauseAt = null, slideT0 = Date.now();
  const fmt = (ms) => { const s = Math.max(0, Math.floor(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  function startTimer() {
    if (t0 == null) { t0 = Date.now(); $("#t-start").textContent = "Pause"; return; }
    if (pauseAt == null) { pauseAt = Date.now(); $("#t-start").textContent = "Resume"; }
    else { paused += Date.now() - pauseAt; pauseAt = null; $("#t-start").textContent = "Pause"; }
  }
  function resetTimer() { t0 = null; paused = 0; pauseAt = null; slideT0 = Date.now(); $("#t-start").textContent = "Start timer"; }
  function tick() {
    const now = Date.now();
    const el = t0 == null ? 0 : (pauseAt || now) - t0 - paused;
    $("#t-total").textContent = fmt(el);
    const tgt = (+$("#tgt").value || 10) * 60000;
    $("#t-left").textContent = t0 == null ? "" : (el <= tgt ? `${fmt(tgt - el)} left` : `${fmt(el - tgt)} over`);
    $("#tb-total").className = "tbox" + (el > tgt ? " over" : el > tgt * .85 ? " warn" : "");
    const se = now - slideT0;
    $("#t-slide").textContent = fmt(se);
    const b = D.slides[st.i].budget;
    $("#tb-slide").className = "tbox" + (b ? (se > b * 1000 ? " over" : se > b * 800 ? " warn" : "") : "");
    $("#t-clock").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // ---------- notes ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function renderNotes() {
    const sd = D.slides[st.i];
    let html = "";
    if (sd.notes) {
      let say = sd.notes, cue = "";
      const ci = say.indexOf("CUE:");
      if (ci > -1) { cue = say.slice(ci + 4).trim(); say = say.slice(0, ci).trim(); }
      let k = 0;
      say = esc(say)
        .replace(/SAY:/, '<span class="lbl">SAY</span>')
        .replace(/\{\{(.+?)\}\}/g, '<span class="dir">$1</span>')
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/ \/ /g, ' <span class="pause">/</span> ')
        .replace(/\[CLICK\]/g, () => { k++; return `<span class="click${k <= st.step ? " done" : ""}">CLICK ${k}</span>`; });
      html = `<div class="say">${say}</div>`;
      if (cue) html += `<div class="cue"><span class="lbl">CUE</span>${esc(cue)}</div>`;
    } else {
      html = `<div class="none">No speaker notes in the PPTX for this slide. Key points on the slide:</div><ul>${(sd.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`;
    }
    $("#notes").innerHTML = html;
  }

  // ---------- render ----------
  function render(fromRemote) {
    const sd = D.slides[st.i];
    $("#cur-title").textContent = `${st.i + 1}. ${sd.short || sd.title}`;
    const spk = $("#cur-spk");
    spk.hidden = !sd.speaker; spk.textContent = sd.speaker ? sd.speaker.toUpperCase() + (sd.budget ? ` · ${sd.budget}s` : "") : "";
    $("#next-title").textContent = st.i < N - 1 ? `${st.i + 2}. ${D.slides[st.i + 1].short || D.slides[st.i + 1].title}` : "End of deck";
    $("#count").textContent = `${st.i + 1} / ${N}`;
    $("#steps").innerHTML = sd.max ? `<span style="font-size:12px;opacity:.7;margin-right:4px">BUILDS</span>` + Array.from({ length: sd.max }, (_, k) => `<i class="${k < st.step ? "on" : ""}"></i>`).join("") : "";
    $("#b-express").setAttribute("aria-pressed", st.express);
    renderNotes();
    try { const fc = $("#f-cur").contentWindow; if (fc && fc.DeckAPI) fc.DeckAPI.go(st.i, st.step, false); } catch (e) {}
    try { const fn = $("#f-next").contentWindow; if (fn && fn.DeckAPI) fn.DeckAPI.go(Math.min(N - 1, st.i + 1), "end", true); } catch (e) {}
    if (!fromRemote) history.replaceState(null, "", `#/${st.i + 1}${st.step ? "/" + st.step : ""}`);
  }
  $("#f-cur").addEventListener("load", () => render(true));
  $("#f-next").addEventListener("load", () => render(true));

  function setSlide(i, step) {
    if (i !== st.i) slideT0 = Date.now();
    st.i = i; st.step = step; render();
  }

  // local fallback navigation when no audience window is linked
  function localNext() {
    const sd = D.slides[st.i];
    if (!st.express && st.step < sd.max) setSlide(st.i, st.step + 1);
    else if (st.i < N - 1) setSlide(st.i + 1, 0);
  }
  function localPrev() {
    if (!st.express && st.step > 0) setSlide(st.i, st.step - 1);
    else if (st.i > 0) setSlide(st.i - 1, D.slides[st.i - 1].max);
  }
  const act = {
    next: () => { if (t0 == null) startTimer(); st.linked ? send("next") : localNext(); },
    prev: () => (st.linked ? send("prev") : localPrev()),
    all: () => (st.linked ? send("all") : setSlide(st.i, D.slides[st.i].max)),
    express: () => { if (st.linked) send("express"); else { st.express = !st.express; render(); } },
    video: () => send("video"),
    black: () => send("black"),
  };

  if (ch) {
    ch.onmessage = (ev) => {
      const msg = ev.data || {};
      if (msg.type !== "state") return;
      if (!st.linked) { st.linked = true; $("#link").textContent = "Linked to the audience window"; $("#link").classList.add("on"); }
      if (msg.i !== st.i) slideT0 = Date.now();
      st.i = msg.i; st.step = msg.step; st.express = !!msg.express;
      render(true);
    };
    ch.postMessage({ type: "hello" });
    setInterval(() => { if (!st.linked) ch.postMessage({ type: "hello" }); }, 1500);
  }

  // ---------- controls ----------
  $("#b-next").onclick = act.next;
  $("#b-prev").onclick = act.prev;
  $("#b-all").onclick = act.all;
  $("#b-express").onclick = act.express;
  $("#b-video").onclick = act.video;
  $("#b-black").onclick = act.black;
  $("#b-open").onclick = () => window.open("index.html" + location.hash, "pip-audience");
  $("#t-start").onclick = startTimer;
  $("#t-reset").onclick = resetTimer;
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    const k = e.key;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); act.next(); }
    else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); act.prev(); }
    else if (k === "a" || k === "A") act.all();
    else if (k === "x" || k === "X") act.express();
    else if (k === "k" || k === "K") act.video();
    else if (k === "b" || k === "B" || k === ".") act.black();
    else if (k === "s" || k === "S") startTimer();
  });
  render();
})();
