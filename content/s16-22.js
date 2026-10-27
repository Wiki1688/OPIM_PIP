/* Slides 16–22 · benefit, cost, AI processes, execution, close, course map, Q&A */
(function () {
  const S = window.DECK.slides;

  /* ---------------------------------------------------------------- 16 · revenue chart */
  function revenueChart() {
    const years = ["2026", "2027", "2028", "2029", "2030", "2031"];
    const bau = [1.81, 2.69, 4.04, 4.81, 5.48, 6.73], bauL = ["1.8", "2.7", "4.0", "4.8", "5.5", "6.7"];
    const plan = [1.81, 3.06, 5.40, 7.03, 8.54, 11.20], planL = ["1.8", "3.1", "5.4", "7.0", "8.5", "11.2"];
    const X0 = 96, X1 = 1220, Y0 = 486, YT = 30, MAX = 12;
    const sy = (v) => Y0 - (v / MAX) * (Y0 - YT);
    const gw = (X1 - X0) / years.length, bw = 66, gap = 10;
    let g = "";
    for (let v = 0; v <= 12; v += 2) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${sy(v)}" y2="${sy(v)}"/><text class="ax" x="${X0 - 16}" y="${sy(v) + 8}" text-anchor="end">${v}</text>`;
    let bars = "";
    years.forEach((y, k) => {
      const cx = X0 + gw * k + gw / 2;
      const xb = cx - bw - gap / 2, xp = cx + gap / 2;
      const d1 = 250 + k * 170, d2 = d1 + 90;
      bars += `<g class="hov"><title>${y}: business as usual S$${bauL[k]}M · the plan S$${planL[k]}M</title>
        <rect class="g-bar" style="transition-delay:${d1}ms" x="${xb}" y="${sy(bau[k])}" width="${bw}" height="${Y0 - sy(bau[k])}" rx="4" fill="#A9A3A6"/>
        <rect class="g-bar" style="transition-delay:${d2}ms" x="${xp}" y="${sy(plan[k])}" width="${bw}" height="${Y0 - sy(plan[k])}" rx="4" fill="#E0418C"/>
        <text class="vl" style="transition-delay:${d1 + 700}ms" x="${xb + bw / 2}" y="${sy(bau[k]) - 12}" text-anchor="middle">${bauL[k]}</text>
        <text class="vl" style="transition-delay:${d2 + 700}ms;fill:#B5005F" x="${xp + bw / 2}" y="${sy(plan[k]) - 12}" text-anchor="middle">${planL[k]}</text>
        <text class="yr" x="${cx}" y="${Y0 + 36}" text-anchor="middle">${y}</text></g>`;
    });
    return `<svg class="chart" data-a="fade" data-d="300" viewBox="0 0 1240 530" width="1180" height="485" role="img" aria-label="Revenue in S$ millions, business as usual versus the plan, 2026 to 2031">
      <defs><linearGradient id="planGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0559A"/><stop offset="1" stop-color="#D6127B"/></linearGradient></defs>
      ${g}<text class="ax" x="16" y="${(Y0 + YT) / 2}" text-anchor="middle" transform="rotate(-90 16 ${(Y0 + YT) / 2})" style="font-weight:800">Revenue (S$M)</text><line x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}" stroke="#7d7378" stroke-width="2"/>${bars}</svg>`;
  }
  S.push({
    id: "benefit", section: "value", cls: "bg-paper sec-value s16", short: "Size of the benefit",
    title: "Size of the Benefit: 3× the revenue by 2028, S$11.2M by 2031 in line with industry, further elevated by AI adoption",
    speaker: "Josephine",
    cue: "",
    points: ["Revenue S$1.8M (2026) → S$5.4M in 2028, three times 2026; business as usual S$4.0M.", "S$11.2M in 2031: S$4.5M a year above Ferlyn’s own plan (S$6.7M).", "Coverage of the S$300 promise 0.70 → 1.17 (0.88 in 2028, 0.99 in 2029).", "Coverage link: in 2028 every 0.01 of coverage ≈ S$40,000 of advertising; at 0.88 the top-up falls from S$1.2M a year to S$0.5M.", "Business as usual reproduces Ferlyn’s targets within 4%."],
    html: `
      ${HEAD("Benefit · Josephine", 16, `Size of the Benefit: <span class="hl">3× the revenue by 2028, S$11.2M by 2031</span> in line with industry, further elevated by AI adoption`, "xs")}
      <div class="card chart-card" style="left:50px;top:232px;width:1290px;height:580px" data-a="up" data-d="150">
        <div class="legend" style="justify-content:space-between"><b style="font-size:22px;color:var(--ink)">Revenue, S$M: business as usual (Ferlyn’s targets, reproduced within 4%) vs the plan</b></div>
        <div class="legend" style="margin:8px 0 0"><span><i style="background:#A9A3A6"></i>Business as usual (Ferlyn’s targets, reproduced within 4%)</span><span><i style="background:#E0418C"></i>The plan</span></div>
        ${revenueChart()}
      </div>
      <div class="card kcard" style="left:1380px;top:232px;width:490px;--kc:#1B7F8C" data-a="right" data-d="1600"><div class="big">S$<span data-count>5.4</span>M</div><p>revenue in 2028, three times of 2026; business as usual S$4.0M</p></div>
      <div class="card kcard" style="left:1380px;top:430px;width:490px;--kc:#D6007A" data-a="right" data-d="1900"><div class="big">S$<span data-count>11.2</span>M</div><p>in 2031, S$4.5M a year above Ferlyn’s own plan (S$6.7M)</p></div>
      <div class="card kcard" style="left:1380px;top:628px;width:490px;--kc:#C98A00" data-a="right" data-d="2200"><div class="big">0.70 → 1.17</div><p>coverage of the S$300 promise; 0.88 in 2028, 0.99 in 2029</p></div>
      <div class="card cov" data-a="up" data-d="2400">
        <div class="ci">${I("trending-up")}</div>
        <div class="ct">Coverage of the S$300 promise</div>
        <div class="cv">
          <div data-a="pop" data-d="2550"><b>0.70</b><span>2026</span></div>
          <div data-a="pop" data-d="2650"><b>0.75</b><span>2027</span></div>
          <div data-a="pop" data-d="2750"><b>0.88</b><span>2028</span></div>
          <div data-a="pop" data-d="2850"><b>0.99</b><span>2029</span></div>
          <div class="par" data-a="pop" data-d="2950"><b>1.08</b><span>2030</span></div>
          <div class="par" data-a="pop" data-d="3050"><b>1.17</b><span>2031</span></div>
        </div>
      </div>
      <div class="card link-card" data-a="up" data-d="2700">
        <div class="ci">${I("link")}</div>
        <p><b>The coverage link.</b> In 2028 every 0.01 of coverage is about S$40,000 of advertising; at 0.88 the top-up of the promise falls from S$1.2M a year to S$0.5M.</p>
      </div>
      <div class="method" data-a="fade" data-d="3000"><b>Method note:</b> Business as usual reproduces Ferlyn’s targets within 4%; the plan is in line with industry growth and further elevated by AI adoption. All figures in S$ millions.</div>`,
  });

  /* ---------------------------------------------------------------- 17 · profit chart */
  function profitChart() {
    const years = ["2027", "2028", "2029", "2030", "2031"];
    const yr = [-0.23, 0.75, 1.43, 2.08, 3.19], yrL = ["−0.23", "+0.75", "+1.43", "+2.08", "+3.19"];
    const cum = [-0.23, 0.52, 1.95, 4.04, 7.23], cumL = ["−0.23", "+0.52", "1.95", "4.04", "7.23"];
    const X0 = 70, X1 = 1080, YT = 24, YB = 408, MIN = -1, MAX = 8;
    const sy = (v) => YT + (MAX - v) / (MAX - MIN) * (YB - YT);
    const gw = (X1 - X0) / years.length, bw = 92;
    let g = "";
    for (let v = MIN; v <= MAX; v++) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${sy(v)}" y2="${sy(v)}"/><text class="ax" x="${X0 - 14}" y="${sy(v) + 8}" text-anchor="end">${v < 0 ? "−" + Math.abs(v) : v}</text>`;
    let bars = "", pts = [], dots = "", labs = "";
    years.forEach((y, k) => {
      const cx = X0 + gw * k + gw / 2;
      const top = yr[k] >= 0 ? sy(yr[k]) : sy(0), h = Math.abs(sy(yr[k]) - sy(0));
      const d = 250 + k * 180;
      bars += `<g class="hov"><title>${y}: ${yrL[k]} in the year · cumulative ${cumL[k]} (S$M)</title><rect class="g-bar${yr[k] < 0 ? " neg" : ""}" style="transition-delay:${d}ms" x="${cx - bw / 2}" y="${top}" width="${bw}" height="${h}" rx="3" fill="#E0418C"/></g>
        <text class="vl" style="transition-delay:${d + 600}ms;fill:#B5005F" x="${yr[k] < 0 ? cx : cx + bw / 2 + 8}" y="${yr[k] < 0 ? sy(yr[k]) + 30 : (sy(yr[k]) + sy(0)) / 2 + 9}" text-anchor="${yr[k] < 0 ? "middle" : "start"}">${yrL[k]}</text>
        <text class="yr" x="${cx}" y="${YB + 36}" text-anchor="middle">${y}</text>`;
      pts.push([cx, sy(cum[k])]);
      dots += `<circle class="dot" style="transition-delay:${1100 + k * 300}ms" cx="${cx}" cy="${sy(cum[k])}" r="10"/>`;
      labs += `<text class="vl" style="transition-delay:${1200 + k * 300}ms;fill:#13606A" x="${cx - 14}" y="${sy(cum[k]) - 18}" text-anchor="end">${cumL[k]}</text>`;
    });
    const path = "M" + pts.map((p) => p.join(",")).join(" L");
    return `<svg class="chart" data-a="fade" data-d="300" viewBox="0 0 1100 450" width="1000" height="410" style="margin-left:40px" role="img" aria-label="Incremental profit by year and cumulative, S$ millions, 2027 to 2031">
      <defs><linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F0559A"/><stop offset="1" stop-color="#D6127B"/></linearGradient></defs>
      ${g}<line x1="${X0}" x2="${X1}" y1="${sy(0)}" y2="${sy(0)}" stroke="#7d7378" stroke-width="2"/>
      ${bars}<path class="line" pathLength="1" d="${path}"/>${dots}${labs}</svg>`;
  }
  const vc = (k, v, w, d) => `<div class="vc" data-a="left" data-d="${d}"><span>${k}</span><div class="bar"><i style="--w:${w}%"></i></div><b>${v}</b></div>`;
  S.push({
    id: "cost", section: "value", cls: "bg-paper sec-value s17", short: "Cost, payback, scenarios",
    title: "What it costs; When it pays back; What if we are wrong",
    speaker: "Josephine",
    cue: "",
    points: ["Cost S$4.25M over 2027–31: S$0.49M fixed build, S$3.76M variable.", "2027 is the investment year: −S$0.23M on a S$597k budget.", "Payback 2028: cumulative profit +S$0.52M in 2028, S$7.2M by 2031.", "Scenarios for 2031: late proof S$1.5M (coverage 0.93) · base S$3.2M (1.17) · programmatic demand S$4.9M (1.42).", "Quote: “We run 90-day pilots. We test, measure, and only scale what works.”"],
    html: `
      ${HEAD("Cost & payback · Josephine", 17, `What it costs; <span class="hl">When it pays back;</span> What if we are wrong`, "sm")}
      <div class="card chart-card" style="left:50px;top:200px;width:1150px;height:505px;padding-top:16px" data-a="up" data-d="150">
        <div class="legend" style="justify-content:space-between"><b style="font-size:22px;color:var(--ink)">Incremental profit by year and cumulative, S$M (incremental revenue − additional cost)</b></div>
        <div class="legend" style="margin:6px 0 0"><span><i style="background:#E0418C"></i>Incremental profit in the year</span><span><i style="background:var(--teal);height:6px;vertical-align:4px"></i>Cumulative • payback 2028</span></div>
        ${profitChart()}
      </div>
      <div class="card pcard" style="top:200px" data-a="right" data-d="1500"><div class="ph" style="background:#E0418C">S$4.25M</div><p>cost over 2027–31:<br>S$0.49M fixed build, S$3.76M variable</p></div>
      <div class="card pcard" style="top:370px" data-a="right" data-d="1750"><div class="ph" style="background:#161616">−S$0.23M</div><p>2027, the investment year,<br>on a S$597k budget</p></div>
      <div class="card pcard glow" style="top:540px;--accent:#1B7F8C" data-a="right" data-d="2000"><div class="ph" style="background:#1B7F8C">Payback 2028</div><p>cumulative profit +S$0.52M<br>in 2028, S$7.2M by 2031</p></div>
      <div class="card vcost" data-a="up" data-d="2200">
        <h4>INSIDE THE S$3.76M VARIABLE COST (S$M)</h4>
        ${vc("People", "1.98", 100, 2300)}
        ${vc("Exchange fees and commissions", "0.92", 46.5, 2400)}
        ${vc("Site data, moves, trials", "0.32", 16.2, 2500)}
        ${vc("Launchpad delivery and PIP Club", "0.28", 14.1, 2600)}
        ${vc("Cloud and attribution", "0.26", 13.1, 2700)}
      </div>
      <div class="card scen" style="left:905px" data-a="pop" data-d="2600"><div class="sh" style="background:#EDB92E;color:#2B2B2B">Late proof<br>fill 70%, rate S$400</div><div class="sv" style="color:#C98A00">S$1.5M in 2031</div><div class="sc">coverage 0.93</div></div>
      <div class="card scen glow" style="left:1240px" data-a="pop" data-d="2750"><div class="sh" style="background:#E0418C">Base case<br>fill 80%, rate S$440</div><div class="sv" style="color:#D6007A">S$3.2M in 2031</div><div class="sc">coverage 1.17</div></div>
      <div class="card scen" style="left:1575px;width:300px" data-a="pop" data-d="2900"><div class="sh" style="background:#1F95C9">Programmatic demand<br>fill 85%, rate S$500</div><div class="sv" style="color:#1B7F8C">S$4.9M in 2031</div><div class="sc">coverage 1.42</div></div>
      <div class="quote" data-a="up" data-d="3150">${I("quote")}We run 90-day pilots. We test, measure, and only scale what works. PIP Club is our filter—real operators, real problems, real proof.</div>`,
  });

  /* ---------------------------------------------------------------- 18 · AI-enhanced processes */
  const aip = (n, icons, title, items, d) => `
    <div class="card aip" data-a="up" data-d="${d}">
      <span class="pb">P${n}</span>
      <div class="pv">${I(icons[0])}${I(icons[1])}</div>
      <div><h3>${title}</h3><ul>${items.map((t) => `<li>${t}</li>`).join("")}</ul><span class="signs">${I("user-check")} Human signs list</span></div>
    </div>`;
  S.push({
    id: "ai-processes", section: "exec", cls: "bg-paper sec-exec s18", short: "AI-enhanced processes",
    title: "Pink in Public: AI-Enhanced Processes",
    speaker: "Wee Khee",
    cue: "",
    points: ["The same six processes as slide 4, now run by the engine’s four jobs (Match, Plan, Prove, Learn).", "In every process the AI writes the list and a named person signs it."],
    html: `
      ${HEAD("From manual to AI-enhanced", 18, `Pink in Public: <span class="hl">AI-Enhanced Processes</span>`)}
      <div class="ai-grid">
        ${aip(1, ["smartphone", "cpu"], "Selling Screen-Months (Match)", ["AI Match scores every screen for every brand from till data.", "Sales calls the right 20 brands with a one-page brief; agencies book from catalogue with instant quote.", "Proposal 15 min (not 4 hrs); 1 person handles 150 accounts (not 60); fill 60% → 70% by 2028."], 250)}
        ${aip(2, ["chart-line", "brain"], "Restocking Products (Plan)", ["AI Plan forecasts per product per machine (twins learned across fleet).", "Decides assortment, calls refill before empty, groups trips, sets consignment share.", "Refill &lt;1 day (from 3); trips −18%; sales/supplier +12%; suppliers 27 → 66."], 400)}
        ${aip(3, ["building-2", "shield-check"], "Signing Sites (Match)", ["AI Match scores any address from PIP sales + open data; writes 2-page proposal with landlord 10% in dollars within a day.", "Signing 3–4 weeks (from 6–8); avoids 1 in 5 bad leases."], 550)}
        ${aip(4, ["square-play", "target"], "Scheduling Adverts (Match + Learn)", ["AI Match plays ad when brand’s customers pass; never shows sold-out product.", "From 2028 Learn tests creatives and keeps winners; yield management by hour.", "Playback automatic, now precisely placed."], 700)}
        ${aip(5, ["chart-column", "circle-check"], "Reporting Results (Prove)", ["AI Prove auto-writes report within 24 hrs: verified presence, response, sales lift vs twin screens.", "Suppliers get monthly sell-through; landlords get scorecard.", "Rate card can rise S$350 → S$440; repeat advertisers 50% → 65%."], 850)}
        ${aip(6, ["lock", "coins"], "Paying Partners (Prove + transparency)", ["Same dataset shows co-owners why: real sales &amp; ad income, S$300 coverage visible per machine.", "Keep-or-move scorecard (person approves, ≤2% fleet/year).", "Transparent payouts; after 2 years machine is PIP’s."], 1000)}
      </div>
      <div class="card mppl" data-a="up" data-d="1250">
        <div class="m" style="color:#D6127B" data-a="pop" data-d="1400">${I("target")}<div><b>Match</b><span>Right fit. Right partner.</span></div></div>
        <div class="m" style="color:#1B7F8C" data-a="pop" data-d="1550">${I("brain")}<div><b>Plan</b><span>Predict. Decide. Act.</span></div></div>
        <div class="m" style="color:#D6127B" data-a="pop" data-d="1700">${I("shield-check")}<div><b>Prove</b><span>Verify. Report. Build trust.</span></div></div>
        <div class="m" style="color:#1B7F8C" data-a="pop" data-d="1850">${I("graduation-cap")}<div><b>Learn</b><span>Test. Improve. Compound.</span></div></div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 19 · Execution */
  const rows19 = [
    ["r1", "users", "Advertisers", ["Test acquisition and utilisation with early adopters", "Define ad rules, segments, and pricing governance", "Expand to more verticals and test learned models", "Optimise ROI, refresh creatives, and scale high-performers"]],
    ["r2", "truck", "Suppliers", ["Pilot supplier onboarding and machine certification", "Build certification, compliance, and audit framework", "Grow supplier network and automate compliance", "Deepen integration, predictive maintenance, and scale"]],
    ["r3", "building", "Landlords and co-owners", ["Landlord pilots: placement, sharing, and service rules", "Standardise landlord agreements and co-owner policies", "Onboard more locations and refine revenue share", "Expand coverage and introduce performance incentives"]],
    ["r4", "brain", "Data the brain<br>PIP Club", ["Define core events, dashboards, and success metrics", "Build data foundation, privacy, and measurement framework", "Launch learned models and A/B testing engine", "AI optimisation, predictive analytics, and ecosystem insights"]],
  ];
  const mx = rows19.map(([cls, ic, name, cells], r) => `<div class="rh ${cls}">${I(ic)}<span>${name}</span></div>` + cells.map((c, k) => `<div class="c" data-a="fade" data-d="${700 + k * 380 + r * 70}">${c}</div>`).join("")).join("");
  S.push({
    id: "execution", section: "exec", cls: "bg-paper sec-exec s19", short: "Execution roadmap",
    title: "Execution: 90-Day Pilot; 3 Phases to 2,500 Machines; Rules 1st, Learned AI Models in 2028",
    speaker: "Wee Khee",
    cue: "",
    points: ["Q1 2027 pilot, 90 days, 670 machines, inside the 2027 budget.", "2027 foundation, rules first: 1,000 machines, S$597k (S$325k build + S$272k running).", "2028 scale and learn: 1,500 machines, S$611k, payback year.", "2029–31 optimise and expand: 2,500 machines, S$0.8M → S$1.3M a year.", "Gates after 90 days and four decisions for Ferlyn."],
    html: `
      ${HEAD("Execution", 19, `Execution: <span class="hl">90-Day Pilot</span>; 3 Phases to 2,500 Machines; Rules 1<sup>st</sup>, Learned AI Models in 2028`, "xs")}
      <div class="phases">
        <div class="phz p1" data-a="left" data-d="250"><b>Q1 2027 · Pilot, 90 days</b><span>670 machines · inside the 2027 budget</span></div>
        <div class="phz p2" data-a="left" data-d="630"><b>2027 · Foundation: rules first</b><span>1,000 machines · S$597k (S$325k build + S$272k running)</span></div>
        <div class="phz p3" data-a="left" data-d="1010"><b>2028 · Scale and learn</b><span>1,500 machines · S$611k · payback year</span></div>
        <div class="phz p4" data-a="left" data-d="1390"><b>2029–31 · Optimise and expand</b><span>2,500 machines · S$0.8M → S$1.3M a year</span></div>
      </div>
      <div class="card mx" data-a="up" data-d="450">${mx}</div>
      <div class="card ex3" style="left:40px;width:590px" data-a="up" data-d="2300">
        <h4>${I("briefcase")} RESOURCES REQUIRED</h4>
        <div class="res"><span class="ri">${I("users")}</span><div><b>People</b><span>Core team (3–4) + specialists, part-time champions</span></div></div>
        <div class="res"><span class="ri">${I("dollar-sign")}</span><div><b>Money</b><span>Inside 2027 budget: S$597k total (S$325k build + S$272k running)</span></div></div>
        <div class="res"><span class="ri">${I("handshake")}</span><div><b>Partners</b><span>Advertisers, suppliers, landlords, co-owners, tech &amp; data partners</span></div></div>
      </div>
      <div class="card ex3" style="left:655px;width:560px" data-a="up" data-d="2500">
        <h4>${I("shield-check")} GATES AFTER 90 DAYS</h4>
        <ul class="gates"><li>Pilot results meet adoption, utilisation, and ROI thresholds</li><li>Rules framework and governance approved</li><li>Data foundation and core metrics in place</li><li>Go / no-go for 2027 scaling</li></ul>
      </div>
      <div class="card ex3" style="left:1240px;width:640px" data-a="up" data-d="2700">
        <h4><span style="color:var(--purple)">${I("user")}</span> WHO SIGNS AND WHAT FERLYN DECIDES</h4>
        <ol class="decides"><li>Ferlyn decides: pilot scope, 90-day success metrics, and go / no-go criteria</li><li>Ferlyn decides: rules framework, budget allocation, and scaling plan</li><li>Ferlyn decides: model learning roadmap, investment, and payback governance</li><li>Ferlyn decides: optimisation priorities, expansion targets, and annual budget</li></ol>
      </div>`,
  });

  /* ---------------------------------------------------------------- 20 · Close */
  S.push({
    id: "close", section: "close", cls: "bg-paper s20", short: "Built like Airbnb · Funded like Google · Run like Amazon",
    title: "Built like Airbnb. Funded like Google. Run like Amazon",
    speaker: "Wee Khee",
    cue: "",
    points: ["Partners own it. Screens pay for it. Every purchase teaches it what to stock, what to show and where to grow.", "PIP today: 670 machines, 500 screens, 300+ sites, S$1.8M a year.", "One brain, four jobs: Match, Plan, Prove, Learn.", "Worth: S$5.4M revenue in 2028; coverage 0.70 → 1.17; payback 2028.", "Close: PIP does not only need more screens. It needs the One Brain."],
    html: `
      ${HEAD("The pitch in one line", 20, `Built like Airbnb <span class="hl">·</span> Funded like Google <span class="hl">·</span> Run like Amazon`)}
      <div class="s20-lead" style="top:172px" data-a="up" data-d="200">Partners own it. Screens pay for it. Every purchase teaches it what to stock, what to show and where to grow.</div>
      <div class="card col3" style="left:50px;top:230px;height:690px" data-a="up" data-d="400">
        <div class="chd" style="background:linear-gradient(90deg,#D6127B,#EC4B97)">1 · PIP today, and the gap</div>
        <div class="cb">
          <div class="facts">
            <div class="fact">${I("store")}<div><b data-count>670</b><span>machines</span></div></div>
            <div class="fact">${I("monitor")}<div><b data-count>500</b><span>screens</span></div></div>
            <div class="fact">${I("map-pin")}<div><b data-count>300+</b><span>sites</span></div></div>
            <div class="fact">${I("piggy-bank")}<div><b>S$<span data-count>1.8</span>M</b><span>a year</span></div></div>
          </div>
          <div class="parts">
            <div style="background:#FDE4EF;color:#C2006E">${I("users")}<span style="color:var(--ink)">Co-owners</span></div>
            <div style="background:#ECE2FA;color:#6E3FB0">${I("building")}<span style="color:var(--ink)">Landlords</span></div>
            <div style="background:#E3EEFA;color:#2F6FD6">${I("truck")}<span style="color:var(--ink)">Suppliers</span></div>
            <div style="background:#FDEEDC;color:#E07A10">${I("megaphone")}<span style="color:var(--ink)">Advertisers</span></div>
          </div>
          <div class="gaps"><h4>${I("circle-alert")} The gaps</h4>
            <ul><li>No single brain decides what to stock, what to show and where to grow.</li><li>Screens, shelves and sites do not all pay their way.</li><li>Data sits in silos. Learning is slow and manual.</li><li>Growth is spread thin instead of compounded.</li></ul></div>
        </div>
      </div>
      <div class="card col3" style="left:670px;top:230px;height:690px" data-a="up" data-d="700">
        <div class="chd" style="background:#161616">2 · The idea: one brain, four jobs</div>
        <div class="cb">
          <div class="four" data-a="left" data-d="1000"><span class="fi" style="background:#E0418C">${I("target")}</span><div><b style="color:#D6127B">1 MATCH</b><span>Right product. Right screen. Right place. Right time.</span></div></div>
          <div class="four" data-a="left" data-d="1150"><span class="fi" style="background:#1B8F8C">${I("calendar-days")}</span><div><b style="color:#1B7F8C">2 PLAN</b><span>What to stock. What to retire. Where to open next.</span></div></div>
          <div class="four" data-a="left" data-d="1300"><span class="fi" style="background:#D99A00">${I("circle-check")}</span><div><b style="color:#B27A00">3 PROVE</b><span>Every screen and site must earn its keep.</span></div></div>
          <div class="four" data-a="left" data-d="1450"><span class="fi" style="background:#161616">${I("brain")}</span><div><b>4 LEARN</b><span>Every purchase teaches the brain. Every day.</span></div></div>
          <div class="onebrain">${I("sparkles")}<span>One brain to match, plan, prove and learn — so every screen and site becomes a profit engine.</span></div>
        </div>
      </div>
      <div class="card col3" style="left:1290px;top:230px;height:690px" data-a="up" data-d="1000">
        <div class="chd" style="background:linear-gradient(90deg,#1B7F8C,#24A3A2)">3 · What it is worth</div>
        <div class="cb">
          <div class="worth" data-a="right" data-d="1300"><span style="color:#1B7F8C">${I("chart-column")}</span><div><b style="color:#1B7F8C">S$<span data-count>5.4</span>M</b><span>Revenue in 2028, three times 2026</span></div></div>
          <div class="worth" data-a="right" data-d="1450"><span style="color:#D6007A">${I("trending-up")}</span><div><b style="color:#D6007A">0.70 → 1.17</b><span>Coverage of the S$300 promise, 2026 → 2031</span></div></div>
          <div class="worth" data-a="right" data-d="1600"><span style="color:#C98A00">${I("calendar-days")}</span><div><b style="color:#C98A00">Payback 2028</b><span>Path to liquidity and scaled returns</span></div></div>
          <div class="benef">
            <div>${I("users")}<span>Partners retain ownership. They get liquidity and upside.</span></div>
            <div>${I("eye")}<span>Advertisers get measured outcomes, not blind spend.</span></div>
            <div>${I("handshake")}<span>The network compounds value for every participant.</span></div>
          </div>
        </div>
      </div>
      <div class="s20-foot" data-a="up" data-d="1900">PIP does not only need more screens. It needs <span>the One Brain:</span><br><span>The PIP AI Growth Engine</span> that makes every screen, shelf and site prove its worth!</div>`,
  });

  /* ---------------------------------------------------------------- 21 · Course map */
  const mod = (x, y, w, icon, head, learn, impact, d, extra) => `
    <div class="card mod" style="left:${x}px;top:${y}px;width:${w}px" data-a="zoom" data-d="${d}">
      <div class="mh">${I(icon)}<b>${head}</b></div>
      <ul><li><b>Learning:</b> ${learn}</li><li><b>PIP Impact:</b> ${impact}</li></ul>${extra || ""}
    </div>`;
  const C = [960, 610];
  const link = (x, y, d) => `<path pathLength="1" style="--d:${d}ms" d="M${C[0]},${C[1]} L${x},${y}"/>`;
  S.push({
    id: "course-map", section: "close", cls: "bg-paper s21", short: "One Brain: course map",
    title: "PIP AI Growth Engine – An AI Innovation to Boost PIP Revenue, Enhance Service level & Reduce Costs!",
    speaker: "Wee Khee",
    cue: "",
    points: ["Ch. 3 · Session 3 “One Brain” Analytics & AI sits at the centre of every course topic.", "Service level: coverage 0.70 → 1.17 (a screen earns S$210 → S$351 against the S$300 promised to co-owners). Revenue +S$4.5M (2031 impact). Cost −18% (restock & supply-chain optimisation)."],
    html: `
      <header class="head" style="text-align:center">
        <h1 class="title xs" data-a="up" data-d="0" style="margin-top:0">PIP AI Growth Engine – <span class="hl">An AI Innovation</span> to<br>Boost PIP Revenue, Enhance Service level &amp; Reduce Costs!</h1>
      </header>
      <svg class="hubsvg" data-a="fade" data-d="200" viewBox="0 0 1920 1080" aria-hidden="true">
        ${link(520, 330, 200)}${link(970, 320, 260)}${link(1415, 330, 320)}${link(720, 610, 380)}${link(1200, 610, 440)}${link(525, 860, 500)}${link(970, 860, 560)}${link(1415, 860, 620)}
      </svg>
      <div class="brain" data-a="pop" data-d="100">${I("brain")}<b>Ch. 3 · Session 3 ·</b><i>“One Brain”</i><b>Analytics &amp; AI</b></div>
      ${mod(300, 196, 440, "lightbulb", "Week 9 · Project Innovations", "Discover AI-driven innovations that drive measurable growth.", "New revenue streams and capability upgrades.", 500, `<span class="rg">${I("chart-column")} REVENUE GROWTH</span>`)}
      ${mod(760, 196, 420, "shopping-cart", "Ch. 1 · Session 1<br>Online retailing", "Understand online retail models, customer journeys, and digital value creation.", "Stronger digital channels and higher customer conversion.", 600)}
      ${mod(1200, 196, 430, "store", "Ch. 2 · Session 2<br>Online marketplaces", "Explore marketplace ecosystems, platforms, and growth levers.", "Wider reach, higher visibility, and scalable sales.", 700)}
      ${mod(1180, 498, 450, "truck", "Ch. 4 · Session 4<br>Supply chain", "Build resilient supply chains with visibility, agility, and AI insights.", "Better availability, fewer stockouts, and lower disruption risk.", 800)}
      ${mod(1200, 768, 430, "package", "Ch. 6 · Session 5<br>Order fulfilment", "Optimize fulfilment processes with smart routing and automation.", "Faster orders, higher accuracy, and improved customer trust.", 900)}
      ${mod(760, 768, 420, "map-pin", "Ch. 7 · Session 6<br>Last-mile delivery", "Master last-mile strategies, technologies, and cost drivers.", "Lower delivery costs, on-time performance, and delighted customers.", 1000)}
      ${mod(300, 768, 440, "settings", "Ch. 8 · Session 7<br>Service platforms", "Leverage platforms that power seamless service experiences.", "Higher productivity, better service levels, and recurring value.", 1100)}
      ${mod(290, 498, 450, "shopping-bag", "Ch. 9 · Session 8<br>Omnichannel Retailing", "Integrate channels for a unified customer experience.", "Higher engagement, loyalty, and lifetime value.", 1200)}
      <div class="side" style="left:24px;top:200px;width:250px" data-a="up" data-d="1400">
        <div class="arrow" style="color:#D9A230">${I("arrow-up")}</div>
        <b style="color:#B27A00">SERVICE LEVEL</b><div class="sv" style="color:#B27A00">0.70 → 1.17</div>
        <p>Coverage: a screen earns S$210 → S$351 against the S$300 promised to co-owners.</p>
        <div style="font-size:64px;color:#D9A230;margin-top:8px">${I("shield-check")}</div>
      </div>
      <div class="card q21" data-a="up" data-d="1600">“PIP’s machine is proving the ad, proving the purchase, and proving the lobby — all at once.”<span class="by">— From the PIP AI Growth Engine Narrative</span></div>
      <div class="side" style="left:1650px;top:200px;width:250px" data-a="up" data-d="1500">
        <div class="arrow" style="color:#EE4F8F">${I("arrow-up")}</div>
        <b style="color:#D6007A">REVENUE</b><div class="sv" style="color:#D6007A">+S$4.5M</div>
        <p>(2031 impact)<br>Powered by innovations, marketplaces, and AI-driven demand growth.</p>
      </div>
      <div class="side" style="left:1650px;top:640px;width:250px" data-a="up" data-d="1700">
        <b style="color:#2F6FD6">COST</b><div class="sv" style="color:#2F6FD6">−18%</div>
        <p>(Restock &amp; Supply Chain Optimization)</p>
        <div class="arrow" style="color:#3D86E0">${I("arrow-down")}</div>
        <p>Smarter stocking, fewer emergency moves, and leaner operations.</p>
      </div>`,
  });

  /* ---------------------------------------------------------------- 22 · Q&A */
  S.push({
    id: "qa", section: "close", cls: "s-hero", short: "Q & A",
    title: "Q & A",
    speaker: "Wee Khee",
    cue: "",
    points: ["Take questions; route each one to the owner of that engine or of the numbers."],
    html: `
      <img class="hero" src="assets/img/hero-qa.webp" alt="Three neon-lit PIP smart vending machines in a network of light">
      <div class="shade" style="background:radial-gradient(900px 500px at 50% 50%, rgba(20,4,30,.35), rgba(10,2,8,.1) 70%)"></div>
      <canvas data-particles width="1920" height="1080" aria-hidden="true"></canvas>
      <div class="qa"><h1 data-a="blur" data-d="200">Q &amp; A</h1></div>
      <div class="qa-foot" data-a="up" data-d="900">PINK IN PUBLIC · THE PIP AI GROWTH ENGINE · OPIM639 GROUP 01</div>`,
  });
})();
