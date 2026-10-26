/* =========================================================================
   CONTENT — shared helpers and section list.
   Every word and number on the slides comes from Group01_Presentation_v10.pptx
   (see CONTENT-CHECK.md for the slide-by-slide source and the few corrections).
   ========================================================================= */
window.DECK = {
  meta: {
    title: "Pink in Public: The PIP AI Growth Engine",
    course: "OPIM639",
    group: "Group 01",
    members: ["Wee Khee", "Rizwan", "Sanesh", "Kartik", "Josephine"],
  },
  sections: [
    { id: "context", name: "PIP today" },
    { id: "proposal", name: "Our proposal" },
    { id: "landlord", name: "Landlord Engine" },
    { id: "advertiser", name: "Advertiser Engine" },
    { id: "supplier", name: "Supplier Engine" },
    { id: "value", name: "Benefit, cost & payback" },
    { id: "exec", name: "AI processes & execution" },
    { id: "close", name: "Close & Q&A" },
  ],
  slides: [],
};

/* icon helper: I("megaphone") → inline Lucide SVG */
window.I = function (name, extra) {
  const p = (window.ICONS || {})[name] || "";
  return `<span class="ic${extra ? " " + extra : ""}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg></span>`;
};

/* slide header: eyebrow + title */
window.HEAD = function (eyebrow, num, titleHtml, cls) {
  return `<header class="head">
    <div class="eyebrow" data-a="down" data-d="0"><span class="dot"></span>${eyebrow}<span class="num">· ${String(num).padStart(2, "0")}</span></div>
    <h1 class="title ${cls || ""}" data-a="up" data-d="80">${titleHtml}</h1>
  </header>`;
};

/* KPI tile */
window.TILE = function (o) {
  const attrs = `${o.step ? ` data-step="${o.step}"` : ""}${o.d != null ? ` data-d="${o.d}"` : ""} data-a="${o.a || "pop"}"`;
  return `<div class="card tile${o.row ? " row" : ""}${o.punch ? " punch-on-show" : ""}"${attrs}>
    <div class="ti">${I(o.icon)}</div>
    ${o.row ? `<div class="txt">` : ""}<div class="big"${o.count ? " data-count" : ""}>${o.big}</div><div class="lbl">${o.lbl}</div>${o.row ? `</div>` : ""}
  </div>`;
};
