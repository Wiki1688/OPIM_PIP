/* =========================================================================
   PIP AI Growth Engine — deck engine
   Reads window.DECK (content/slides.js). No build step, no dependencies.
   ========================================================================= */
(function () {
  "use strict";

  const D = window.DECK;
  const params = new URLSearchParams(location.search);
  const EMBED = params.has("embed");          // presenter previews
  const STATIC_EMBED = params.has("static");  // fully built, no motion
  const CH_NAME = "pip-ai-growth-engine-deck";
  const W = 1920, H = 1080;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const icon = (n) => `<span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${(window.ICONS || {})[n] || ""}</svg></span>`;

  const stage = $("#stage");
  const viewport = $("#viewport");
  const body = document.body;
  if (EMBED) body.classList.add("embed");

  // ---------- state ----------
  const S = {
    i: 0, step: 0,
    express: false,
    laser: false,
    orig: false,
    reading: false,
    playedVideo: new Set(),
    timerStart: null,
  };
  try { S.express = localStorage.getItem("pipdeck.express") === "1"; } catch (e) {}

  // ---------- render slides ----------
  const slides = D.slides.map((sd, idx) => {
    const el = document.createElement("section");
    el.className = "slide " + (sd.cls || "bg-paper");
    el.dataset.i = idx;
    el.setAttribute("aria-roledescription", "slide");
    el.setAttribute("aria-label", `Slide ${idx + 1} of ${D.slides.length}: ${sd.title}`);
    el.innerHTML = `<div class="inner">${sd.html}</div>`;
    // any element with a step but no animation type gets the default
    $$("[data-step]", el).forEach((n) => { if (!n.hasAttribute("data-a")) n.setAttribute("data-a", "up"); });
    sd.max = $$("[data-step]", el).reduce((m, n) => Math.max(m, +n.dataset.step || 0), 0);
    stage.appendChild(el);
    return el;
  });
  const N = slides.length;

  // Original PPTX view layer (inside the stage so it shares the 1920×1080 canvas)
  const orig = document.createElement("div");
  orig.className = "orig";
  orig.innerHTML = `<img alt=""><div class="ot-layer"></div>`;
  stage.appendChild(orig);
  const origBadge = document.createElement("div");
  origBadge.className = "orig-badge";
  origBadge.textContent = "ORIGINAL PPTX VIEW · V TO RETURN";
  stage.appendChild(origBadge);

  // ---------- scaling ----------
  function fit() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const s = Math.min(vw / W, vh / H);
    const x = (vw - W * s) / 2, y = (vh - H * s) / 2;
    stage.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    if (S.reading) scaleClones($(".read-list"));
  }
  window.addEventListener("resize", fit);

  // ---------- reveal helpers ----------
  function setDelay(el, ms) { el.style.setProperty("--d", Math.max(0, Math.round(ms)) + "ms"); }

  function show(el, delay, animate = true) {
    setDelay(el, animate ? delay : 0);
    el.classList.add("shown");
    if (el.classList.contains("punch-on-show")) el.classList.add("punch");
    const counters = el.matches("[data-count]") ? [el] : [];
    counters.push(...$$("[data-count]", el));
    counters.forEach((c) => countUp(c, animate ? delay + 150 : 0, animate));
  }
  function hide(el) {
    el.classList.remove("shown", "punch");
    $$("[data-count]", el).concat(el.matches("[data-count]") ? [el] : []).forEach(resetCount);
  }

  // count-up keeps the exact original text and only animates the first number in it
  const NUM_RE = /(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?/;
  function resetCount(el) {
    if (el._raf) cancelAnimationFrame(el._raf);
    if (el.dataset.orig != null) el.textContent = el.dataset.orig;
  }
  function countUp(el, delay, animate) {
    if (el.dataset.orig == null) el.dataset.orig = el.textContent;
    const txt = el.dataset.orig;
    const m = txt.match(NUM_RE);
    if (!m || !animate || S.reduced) { el.textContent = txt; return; }
    const intPart = m[1], dec = m[2] || "";
    const target = parseFloat(intPart.replace(/,/g, "") + dec);
    const places = dec ? dec.length - 1 : 0;
    const commas = intPart.includes(",");
    const pre = txt.slice(0, m.index), post = txt.slice(m.index + m[0].length);
    const fmt = (v) => {
      let s = v.toFixed(places);
      if (commas) { const [a, b] = s.split("."); s = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (b ? "." + b : ""); }
      return pre + s + post;
    };
    el.textContent = fmt(0);
    const dur = +el.dataset.dur || 1200;
    let t0 = null;
    if (el._raf) cancelAnimationFrame(el._raf);
    const tick = (t) => {
      if (t0 == null) t0 = t + delay;
      const p = Math.min(1, Math.max(0, (t - t0) / dur));
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = p >= 1 ? txt : fmt(target * e);
      if (p < 1) el._raf = requestAnimationFrame(tick);
    };
    el._raf = requestAnimationFrame(tick);
  }

  function animEls(slide) { return $$("[data-a]", slide); }
  function stepOf(el) { return +el.dataset.step || 0; }

  // Enter a slide. mode: "start" (base layer only), "end" (all steps), "express" (all, animated in sequence)
  function enter(slide, step, mode, instant) {
    let order = 0, lastBase = 0;
    const els = animEls(slide);
    els.forEach((el) => {
      const s = stepOf(el);
      if (s !== 0) return;
      const d = el.dataset.d != null ? +el.dataset.d : 120 + order++ * 85;
      lastBase = Math.max(lastBase, d);
      show(el, d, !instant);
    });
    if (step > 0) {
      els.forEach((el) => {
        const s = stepOf(el);
        if (s === 0 || s > step) return;
        let d = 0;
        if (mode === "express" && !instant) d = lastBase + 300 + (s - 1) * 420 + (+el.dataset.d || 0);
        show(el, d, !instant && mode === "express");
      });
    }
    startCanvas(slide);
  }
  function resetSlide(slide) {
    animEls(slide).forEach(hide);
    $$("video", slide).forEach((v) => { try { v.pause(); } catch (e) {} });
    stopCanvas(slide);
  }
  function revealStep(slide, step) {
    animEls(slide).forEach((el) => { if (stepOf(el) === step) show(el, +el.dataset.d || 0, true); });
  }
  function unrevealStep(slide, step) {
    animEls(slide).forEach((el) => { if (stepOf(el) === step) hide(el); });
  }

  // ---------- navigation ----------
  let leaveTimers = new Map();
  let lastSection = null;

  function go(i, step = 0, opts = {}) {
    i = Math.max(0, Math.min(N - 1, i | 0));
    const sd = D.slides[i];
    const prevI = S.i;
    const changed = i !== prevI || opts.force;
    if (step === "end") step = sd.max;
    step = Math.max(0, Math.min(sd.max, step | 0));
    const mode = opts.mode || (S.express ? "express" : step === sd.max && step > 0 ? "end" : "start");
    if (S.express) step = sd.max;

    if (changed) {
      const old = slides[prevI];
      slides.forEach((s, k) => {
        s.classList.toggle("current", k === i);
        s.classList.toggle("past", k < i);
      });
      if (old && old !== slides[i]) {
        clearTimeout(leaveTimers.get(old));
        leaveTimers.set(old, setTimeout(() => { if (!old.classList.contains("current")) resetSlide(old); }, 750));
        $$("video", old).forEach((v) => { try { v.pause(); } catch (e) {} });
      }
      const cur = slides[i];
      clearTimeout(leaveTimers.get(cur));
      resetSlide(cur);
      // force style flush so transitions replay
      void cur.offsetWidth;
      S.i = i; S.step = step;
      enter(cur, step, mode, !!opts.instant);
      if (lastSection !== null && sd.section !== lastSection && !opts.instant && !EMBED) {
        const w = $("#wipe"); w.classList.remove("go"); void w.offsetWidth; w.classList.add("go");
      }
      lastSection = sd.section;
    } else if (step !== S.step) {
      const cur = slides[i];
      if (step > S.step) for (let s = S.step + 1; s <= step; s++) opts.instant ? animEls(cur).forEach((el) => { if (stepOf(el) === s) show(el, 0, false); }) : revealStep(cur, s);
      else for (let s = S.step; s > step; s--) unrevealStep(cur, s);
      S.step = step;
    }
    updateOrig();
    updateChrome();
    if (!EMBED) {
      const h = `#/${i + 1}${S.step ? "/" + S.step : ""}`;
      if (location.hash !== h) history.replaceState(null, "", h);
      broadcast();
    }
  }

  function next() {
    const sd = D.slides[S.i];
    const v = $("video[data-hook]", slides[S.i]);
    if (v && !S.express && !S.playedVideo.has(S.i)) { S.playedVideo.add(S.i); playVideo(v); return; }
    if (!S.express && S.step < sd.max) go(S.i, S.step + 1);
    else if (S.i < N - 1) go(S.i + 1, 0);
  }
  function prev() {
    if (!S.express && S.step > 0) go(S.i, S.step - 1);
    else if (S.i > 0) go(S.i - 1, "end", { mode: "end", instant: false });
  }
  function revealAll() {
    const sd = D.slides[S.i];
    if (S.step >= sd.max) { toast("Everything on this slide is showing"); return; }
    const cur = slides[S.i];
    for (let s = S.step + 1; s <= sd.max; s++) {
      animEls(cur).forEach((el) => { if (stepOf(el) === s) show(el, (s - S.step - 1) * 260 + (+el.dataset.d || 0) * .4, true); });
    }
    S.step = sd.max;
    updateChrome(); broadcast();
    if (!EMBED) history.replaceState(null, "", `#/${S.i + 1}/${S.step}`);
  }
  function setExpress(on) {
    S.express = on;
    try { localStorage.setItem("pipdeck.express", on ? "1" : "0"); } catch (e) {}
    if (on) revealAll();
    updateChrome();
    toast(on ? "Quick mode ON: every slide shows in full, one click per slide" : "Quick mode OFF: builds step by step");
    broadcast();
  }

  // ---------- video ----------
  function playVideo(v) {
    try {
      v.muted = false;
      const p = v.play();
      if (p && p.catch) p.catch(() => { v.muted = true; v.play().catch(() => {}); toast("Browser blocked sound: click the video to unmute"); });
    } catch (e) {}
  }
  function toggleVideo() {
    const v = $("video", slides[S.i]);
    if (!v) { toast("No video on this slide"); return; }
    if (v.paused) { S.playedVideo.add(S.i); playVideo(v); } else v.pause();
  }
  // big play button
  slides.forEach((s, idx) => {
    $$(".vid", s).forEach((wrap) => {
      const v = $("video", wrap), b = $(".vplay", wrap);
      if (!v) return;
      const sync = () => wrap.classList.toggle("playing", !v.paused && !v.ended);
      ["play", "pause", "ended"].forEach((ev) => v.addEventListener(ev, sync));
      v.addEventListener("ended", () => { try { v.currentTime = 0; } catch (e) {} });
      if (b) b.addEventListener("click", (e) => { e.stopPropagation(); S.playedVideo.add(idx); playVideo(v); });
      if (EMBED) { v.removeAttribute("controls"); v.muted = true; }
    });
  });

  // ---------- particles (title & Q&A) ----------
  const canvases = new Map();
  function startCanvas(slide) {
    $$("canvas[data-particles]", slide).forEach((cv) => {
      if (STATIC_EMBED || S.reduced) return;
      let st = canvases.get(cv);
      if (!st) {
        const ctx = cv.getContext("2d");
        const parts = Array.from({ length: 140 }, () => spawn(true));
        st = { ctx, parts, raf: 0 };
        canvases.set(cv, st);
      }
      cancelAnimationFrame(st.raf);
      const loop = () => {
        const { ctx, parts } = st;
        ctx.clearRect(0, 0, W, H);
        for (const p of parts) {
          p.y -= p.v; p.x += Math.sin((p.y + p.seed) / 90) * .4; p.t += p.tw;
          if (p.y < -20) Object.assign(p, spawn(false));
          const a = (.35 + .65 * Math.abs(Math.sin(p.t))) * p.a;
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(1, `rgba(${p.c},0)`);
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2); ctx.fill();
        }
        st.raf = requestAnimationFrame(loop);
      };
      st.raf = requestAnimationFrame(loop);
    });
  }
  function spawn(anyY) {
    const cols = ["255,90,170", "255,200,230", "255,255,255", "190,120,255", "255,60,140"];
    return { x: Math.random() * W, y: anyY ? Math.random() * H : H + 20, r: .8 + Math.random() * 2.6, v: .25 + Math.random() * .9, a: .4 + Math.random() * .6, t: Math.random() * 6, tw: .02 + Math.random() * .05, seed: Math.random() * 1000, c: cols[(Math.random() * cols.length) | 0] };
  }
  function stopCanvas(slide) { $$("canvas[data-particles]", slide).forEach((cv) => { const st = canvases.get(cv); if (st) cancelAnimationFrame(st.raf); }); }

  // ---------- original PPTX view ----------
  function updateOrig() {
    body.classList.toggle("show-orig", S.orig);
    if (!S.orig) return;
    const n = String(S.i + 1).padStart(2, "0");
    $("img", orig).src = `assets/original/slide-${n}.webp`;
    const layer = $(".ot-layer", orig);
    const items = (window.ORIG_TITLES || {})[S.i + 1] || [];
    layer.innerHTML = items.map((it) => {
      const [x, y, w, h] = it.box.map((v, k) => v / 100 * (k % 2 ? H : W));
      const bar = "";
      const txt = it.paras.map((p) => p.map((r) => r.sup ? `<sup>${esc(r.t)}</sup>` : esc(r.t)).join("")).join("<br>");
      return `${bar}<div class="ot" style="left:${x}px;top:${y}px;width:${w}px;font-size:${it.pt * 2}px">${txt}</div>`;
    }).join("");
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- chrome ----------
  const chrome = $("#chrome");
  const countEl = $("#count");
  const progress = $("#progress");
  function buildSegs() {
    const wrap = $("#segs");
    const total = N;
    wrap.innerHTML = D.sections.map((sec) => {
      const idx = D.slides.map((s, k) => s.section === sec.id ? k : -1).filter((k) => k >= 0);
      const w = Math.max(16, Math.round(idx.length / total * 300));
      return `<div class="seg" data-sec="${sec.id}" data-first="${idx[0]}" role="button" tabindex="0" aria-label="Jump to ${esc(sec.name)}"><i style="width:${w}px"><b></b></i><span class="tip">${esc(sec.name)}</span></div>`;
    }).join("");
    $$(".seg", wrap).forEach((s) => {
      const f = () => go(+s.dataset.first, 0);
      s.addEventListener("click", f);
      s.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f(); } });
    });
  }
  function updateChrome() {
    if (EMBED) return;
    const sd = D.slides[S.i];
    countEl.textContent = `${S.i + 1} / ${N}`;
    countEl.title = sd.title;
    progress.style.width = ((S.i + (sd.max ? S.step / (sd.max + 1) : 0)) / (N - 1) * 100) + "%";
    $$(".seg").forEach((sg) => {
      const idx = D.slides.map((s, k) => s.section === sg.dataset.sec ? k : -1).filter((k) => k >= 0);
      const done = idx.filter((k) => k < S.i).length + (idx.includes(S.i) ? 1 : 0);
      $("b", sg).style.width = (done / idx.length * 100) + "%";
      sg.classList.toggle("cur", sg.dataset.sec === sd.section);
    });
    chrome.classList.toggle("has-more", !S.express && S.step < sd.max);
    $("#btn-express").setAttribute("aria-pressed", S.express);
    $("#btn-orig").setAttribute("aria-pressed", S.orig);
    $("#btn-laser").setAttribute("aria-pressed", S.laser);
    $("#btn-reading").setAttribute("aria-pressed", S.reading);
    const pills = [];
    if (S.express) pills.push("Quick mode");
    $("#mode-pill").innerHTML = pills.map((p) => `<span>${p}</span>`).join("");
    const left = sd.max - S.step;
    $("#btn-all").title = left > 0 && !S.express ? `Show all: reveal the ${left} remaining build${left > 1 ? "s" : ""} on this slide (A)` : "Show all (A): this slide is fully shown";
  }

  // idle-hide the control bar
  let idleT;
  function wake() {
    chrome.classList.remove("idle");
    clearTimeout(idleT);
    idleT = setTimeout(() => { if (!chrome.matches(":hover") && !chrome.contains(document.activeElement) && !S.reading) chrome.classList.add("idle"); }, 2800);
  }
  if (!EMBED) { ["mousemove", "pointerdown", "touchstart"].forEach((ev) => window.addEventListener(ev, wake, { passive: true })); wake(); }

  // toast
  let toastT;
  function toast(msg) {
    if (EMBED) return;
    const t = $("#toast"); t.textContent = msg; t.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2200);
  }

  // ---------- clones for overview & reading ----------
  function cloneSlide(k) {
    const c = slides[k].cloneNode(true);
    c.classList.add("current", "static");
    c.classList.remove("past");
    c.removeAttribute("aria-roledescription");
    $$("[data-a]", c).forEach((n) => n.classList.add("shown"));
    $$("[data-orig]", c).forEach((n) => { n.textContent = n.dataset.orig; });
    $$("video", c).forEach((v) => { const img = document.createElement("img"); img.src = v.getAttribute("poster"); img.className = v.className; img.alt = ""; img.style.cssText = "width:100%;height:100%;object-fit:cover"; v.replaceWith(img); });
    $$("canvas", c).forEach((cv) => cv.remove());
    $$("[id]", c).forEach((n) => { if (!n.closest("defs")) n.removeAttribute("id"); });
    const wrap = document.createElement("div"); wrap.className = "tclip"; wrap.appendChild(c);
    return wrap;
  }
  function scaleClones(root) {
    if (!root) return;
    $$(".tclip", root).forEach((t) => { const w = t.parentElement.clientWidth; t.style.transform = `scale(${w / W})`; });
  }
  let ovBuilt = false;
  function openOverview() {
    const ov = $("#overview");
    if (!ovBuilt) {
      const body = $(".ov-body", ov);
      body.innerHTML = "";
      D.sections.forEach((sec) => {
        const box = document.createElement("div"); box.className = "ov-sec";
        box.innerHTML = `<h3>${esc(sec.name)}</h3><div class="ov-grid"></div>`;
        const grid = $(".ov-grid", box);
        D.slides.forEach((sd, k) => {
          if (sd.section !== sec.id) return;
          const th = document.createElement("div");
          th.className = "thumb"; th.tabIndex = 0; th.dataset.k = k;
          th.setAttribute("role", "button"); th.setAttribute("aria-label", `Go to slide ${k + 1}: ${sd.title}`);
          th.appendChild(cloneSlide(k));
          th.insertAdjacentHTML("beforeend", `<span class="tn">${k + 1} · ${esc(sd.short || sd.title)}</span>`);
          const f = () => { closeOverlays(); go(k, 0); };
          th.addEventListener("click", f);
          th.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); f(); } });
          grid.appendChild(th);
        });
        body.appendChild(box);
      });
      ovBuilt = true;
    }
    ov.classList.add("open"); ov.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
      scaleClones(ov);
      $$(".thumb", ov).forEach((t) => t.classList.toggle("cur", +t.dataset.k === S.i));
      const c = $(".thumb.cur", ov); if (c) { c.scrollIntoView({ block: "center" }); c.focus({ preventScroll: true }); }
    });
  }
  let readBuilt = false;
  function setReading(on) {
    S.reading = on;
    body.classList.toggle("reading", on);
    const list = $(".read-list");
    if (on && !readBuilt) {
      D.slides.forEach((sd, k) => {
        const it = document.createElement("div"); it.className = "read-item"; it.id = "read-" + (k + 1);
        it.appendChild(cloneSlide(k));
        // real, playable video in reading mode too
        const vSrc = $("video", slides[k]);
        if (vSrc) {
          const ph = $(".vid img:not(.vposter)", it);
          if (ph) { const v = vSrc.cloneNode(true); v.removeAttribute("data-hook"); v.controls = true; ph.replaceWith(v); }
        }
        list.appendChild(it);
      });
      readBuilt = true;
    }
    if (on) {
      requestAnimationFrame(() => { scaleClones(list); const t = $("#read-" + (S.i + 1)); if (t) t.scrollIntoView({ block: "start" }); });
      $$("video", slides[S.i]).forEach((v) => v.pause());
    } else {
      // land on the slide closest to the top of the reading list
      const items = $$(".read-item", list);
      let best = S.i, bd = Infinity;
      items.forEach((it, k) => { const d = Math.abs(it.getBoundingClientRect().top - 60); if (d < bd) { bd = d; best = k; } });
      $$("video", list).forEach((v) => v.pause());
      window.scrollTo(0, 0);
      go(best, 0, { force: true });
      fit();
    }
    updateChrome();
  }
  function closeOverlays() {
    let closed = false;
    $$(".overlay.open").forEach((o) => { o.classList.remove("open"); o.setAttribute("aria-hidden", "true"); closed = true; });
    return closed;
  }

  // ---------- fullscreen, presenter, laser, blackout, timer ----------
  function toggleFull() {
    const d = document, el = d.documentElement;
    if (!d.fullscreenElement && !d.webkitFullscreenElement) (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    else (d.exitFullscreen || d.webkitExitFullscreen).call(d);
  }
  document.addEventListener("fullscreenchange", () => $("#btn-full").innerHTML = (document.fullscreenElement ? icon("minimize") : icon("maximize")) + '<span class="lbl-sm">Full screen</span>');
  function openPresenter() {
    const w = window.open("presenter.html" + location.hash, "pip-presenter", "width=1400,height=860");
    if (!w) toast("Allow pop-ups to open the presenter view");
  }
  function setLaser(on) { S.laser = on; body.classList.toggle("laser-on", on); updateChrome(); toast(on ? "Laser pointer on (L to turn off)" : "Laser pointer off"); }
  window.addEventListener("pointermove", (e) => { if (!S.laser) return; const l = $("#laser"); l.style.left = e.clientX + "px"; l.style.top = e.clientY + "px"; }, { passive: true });
  function toggleBlack() { $("#blackout").classList.toggle("on"); }
  let timerRAF;
  function toggleTimer() {
    const t = $("#mini-timer");
    if (t.classList.contains("on")) { t.classList.remove("on"); cancelAnimationFrame(timerRAF); return; }
    S.timerStart = S.timerStart || Date.now();
    t.classList.add("on");
    const tick = () => { const s = Math.floor((Date.now() - S.timerStart) / 1000); t.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; timerRAF = requestAnimationFrame(tick); };
    tick();
  }

  // ---------- keyboard ----------
  let digits = "", digitT;
  function onKey(e) {
    if (EMBED) return;
    if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable]")) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const k = e.key;
    const ovOpen = $(".overlay.open");
    if (k === "Escape") { if (closeOverlays()) return; if ($("#blackout").classList.contains("on")) return toggleBlack(); if (S.laser) return setLaser(false); if (S.orig) { S.orig = false; updateOrig(); updateChrome(); } return; }
    if (ovOpen) { if (k === "o" || k === "O" || k === "?") closeOverlays(); return; }
    if (S.reading && !["r", "R", "f", "F", "?"].includes(k)) return;
    if (/^[0-9]$/.test(k)) { digits += k; clearTimeout(digitT); digitT = setTimeout(() => (digits = ""), 2000); toast(`Go to slide ${digits} — press Enter`); return; }
    if (k === "Enter" && digits) { const n = parseInt(digits, 10); digits = ""; go(n - 1, 0); return; }
    switch (k) {
      case "ArrowRight": case "ArrowDown": case "PageDown": case " ": case "Enter": case "n": case "N":
        e.preventDefault(); next(); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp": case "Backspace":
        e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); go(0, 0); break;
      case "End": e.preventDefault(); go(N - 1, 0); break;
      case "f": case "F": toggleFull(); break;
      case "o": case "O": case "g": case "G": openOverview(); break;
      case "a": case "A": revealAll(); break;
      case "x": case "X": setExpress(!S.express); break;
      case "v": case "V": S.orig = !S.orig; updateOrig(); updateChrome(); break;
      case "p": case "P": openPresenter(); break;
      case "l": case "L": setLaser(!S.laser); break;
      case "r": case "R": setReading(!S.reading); break;
      case "b": case "B": case ".": toggleBlack(); break;
      case "t": case "T": toggleTimer(); break;
      case "k": case "K": toggleVideo(); break;
      case "?": case "h": case "H": $("#help").classList.add("open"); break;
      default: return;
    }
  }
  document.addEventListener("keydown", onKey);

  // touch / swipe
  let sx = null, sy = null;
  viewport.addEventListener("touchstart", (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; }, { passive: true });
  viewport.addEventListener("touchend", (e) => {
    if (sx == null) return;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) dx < 0 ? next() : prev();
  }, { passive: true });

  // ---------- buttons ----------
  if (!EMBED) {
    const bind = (id, f) => { const b = $(id); if (b) b.addEventListener("click", (e) => { e.currentTarget.blur(); f(); }); };
    bind("#btn-prev", prev);
    bind("#btn-next", next);
    bind("#btn-all", revealAll);
    bind("#btn-express", () => setExpress(!S.express));
    bind("#btn-overview", openOverview);
    bind("#btn-orig", () => { S.orig = !S.orig; updateOrig(); updateChrome(); });
    bind("#btn-presenter", openPresenter);
    bind("#btn-laser", () => setLaser(!S.laser));
    bind("#btn-reading", () => setReading(!S.reading));
    bind("#btn-full", toggleFull);
    bind("#btn-help", () => $("#help").classList.add("open"));
    countEl.addEventListener("click", openOverview);
    $$("[data-close]").forEach((b) => b.addEventListener("click", closeOverlays));
    $$(".overlay").forEach((o) => o.addEventListener("click", (e) => { if (e.target === o) closeOverlays(); }));
    buildSegs();
  }

  // ---------- presenter sync ----------
  let ch = null;
  try { ch = new BroadcastChannel(CH_NAME); } catch (e) {}
  function broadcast() { if (ch && !EMBED) ch.postMessage({ type: "state", i: S.i, step: S.step, express: S.express, max: D.slides[S.i].max }); }
  if (ch && !EMBED) {
    ch.onmessage = (ev) => {
      const m = ev.data || {};
      if (m.type === "hello") broadcast();
      if (m.type !== "cmd") return;
      if (m.cmd === "next") next();
      else if (m.cmd === "prev") prev();
      else if (m.cmd === "goto") go(m.i, m.step || 0);
      else if (m.cmd === "all") revealAll();
      else if (m.cmd === "express") setExpress(!S.express);
      else if (m.cmd === "video") toggleVideo();
      else if (m.cmd === "black") toggleBlack();
    };
  }

  // public API (used by presenter previews)
  window.DeckAPI = {
    go: (i, step, instant) => go(i, step, { instant: !!instant }),
    count: N,
    slides: D.slides,
  };

  // ---------- start ----------
  S.reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function parseHash() {
    const m = location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);
    return m ? [Math.max(0, +m[1] - 1), +(m[2] || 0)] : [0, 0];
  }
  fit();
  const [hi, hs] = parseHash();
  if (STATIC_EMBED) { body.classList.add("no-anim"); }
  go(hi, hs, { force: true, instant: STATIC_EMBED || hs > 0 });
  window.addEventListener("hashchange", () => { const [a, b] = parseHash(); if (a !== S.i || b !== S.step) go(a, b); });
  // phones default to reading mode
  if (!EMBED && window.matchMedia("(max-width: 700px) and (orientation: portrait)").matches) setReading(true);
  if (!EMBED && S.express) setTimeout(() => toast("Quick mode is on (X to turn off)"), 600);
})();
