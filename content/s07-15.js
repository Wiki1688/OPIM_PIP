/* Slides 7–15 · the three engines (speaker notes copied word for word from the PPTX) */
(function () {
  const S = window.DECK.slides;
  const stp = (n, cls, head, body, step, d) => `
    <div class="stp ${cls}"${step ? ` data-step="${step}"` : ""} data-a="up"${d != null ? ` data-d="${d}"` : ""}>
      <div class="n">${n}</div>
      <div><h3>${head}</h3>${body}</div>
    </div>`;

  /* ================================================================ LANDLORD ENGINE */
  /* ---------------------------------------------------------------- 7 */
  S.push({
    id: "landlord-intro", section: "landlord", cls: "bg-paper sec-landlord s7", short: "Landlord Engine: Build like Airbnb",
    title: "Landlord Engine: Build like Airbnb",
    speaker: "Rizwan", budget: 40,
    notes: "Rizwan · 2:30–3:00. SAY: {{Airbnb card is already on screen. Click first, then speak.}} Airbnb owns no rooms. Yet hosts list anyway. / Why? Because Airbnb brings the guests — and shows each host what their room earns. [CLICK] Pink in Public is built the same way: landlords give the space, co-owners fund the machines, PIP brings the shoppers. But today a new site comes by **referral and chance**, signing takes **six to eight weeks**, and **17%** of our sites are poor sites, flagged for possible relocation. [CLICK] We fix that with two words. **Match.** / And **prove.** [CLICK] {{“Prove” lands one second after “Match”.}} CUE: the Airbnb card is on screen when the slide opens. Click 1: the Pink in Public card, then the three ‘today’ chips follow on their own. Click 2: ‘Match.’ appears; ‘Prove.’ follows one second later — say ‘And prove’ as it lands. Pause after ‘Why?’ and after ‘Match.’ Next slide: Match.",
    html: `
      ${HEAD("Landlord Engine · Rizwan", 7, `Landlord Engine: <span class="hl">Build like Airbnb</span>`)}
      <div class="e-lead" data-a="up" data-d="200">Landlords give the space, co-owners the machines;<br>the AI shows what each site earns.</div>
      <div class="analogy">
        <div class="card" data-a="left" data-d="350">
          <h3 class="alt"><img class="brand-logo" src="assets/img/logo-airbnb.svg" alt="Airbnb"></h3>
          <p>Owns no rooms.<br>Hosts list anyway.</p>
          <div class="hr"></div>
          <p>Why? Airbnb brings the guests…<br>…and shows each host what their room earns.</p>
        </div>
        <div class="eq" data-step="1" data-a="pop">=</div>
        <div class="card glow" data-step="1" data-a="right" data-d="120">
          <h3>Pink in Public</h3>
          <p>Owns no buildings: landlords give the space; co-owners, the investors, fund the machines.</p>
          <div class="hr" style="background:var(--accent)"></div>
          <p>PIP brings the shoppers to the lobby…<br>…and the AI shows what each site earns.</p>
        </div>
      </div>
      <div class="photo" data-a="blur" data-d="300"><img src="assets/img/lobby-smartmart.webp" alt="Shoppers at a row of PIP smart vending machines in a lobby"><span class="cap">A PIP SmartMart lobby</span></div>
      <div class="card band today-gold" data-a="up" data-d="500">
        <div>
          <div class="kicker" style="color:#A8770A">${I("clock")} TODAY, BEFORE THE ENGINE</div>
          <div class="today">
            <div class="t" data-step="1" data-a="up" data-d="700"><div class="tt">${I("user-plus")}<span>By referral<br>and chance</span></div><div class="ts">(how a new site is found today)</div></div>
            <div class="t" data-step="1" data-a="up" data-d="1000"><div class="tt">${I("calendar-days")}<span>6–8 weeks<br>to sign</span></div><div class="ts">(with a bespoke deck for every landlord)</div></div>
            <div class="t" data-step="1" data-a="up" data-d="1300"><div class="tt">${I("map-pin")}<span>17%<br>in poor sites</span></div><div class="ts">(sites flagged for possible relocation)</div></div>
          </div>
        </div>
        <div class="sep"></div>
        <div>
          <div class="kicker" data-step="2" data-a="fade">WE FIX THAT WITH TWO WORDS:</div>
          <div class="fix">
            <div class="f mt" data-step="2" data-a="zoom" data-d="150"><div class="fw">${I("crosshair")} Match.</div><div class="fs">before a landlord signs</div><div class="fd">site score · proposal in a day · rent rule.</div></div>
            <div class="f pk" data-step="2" data-a="zoom" data-d="1150"><div class="fw">${I("chart-column")} Prove.</div><div class="fs">after the landlord signs</div><div class="fd">monthly scorecard · keep-or-move · co-owner portal.</div></div>
          </div>
        </div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 8 */
  S.push({
    id: "landlord-match", section: "landlord", cls: "bg-paper sec-landlord s8", short: "Landlord Engine: MATCH",
    title: "Landlord Engine: MATCH",
    speaker: "Rizwan", budget: 40,
    notes: "Rizwan · 3:00–3:30. SAY: Before a landlord signs anything, the AI scores the address — from what our **300 sites** already sell, plus open data: residents within 400 metres, offices, MRT traffic, and who else sells nearby. [CLICK] One day later: a two-page proposal with the landlord’s 10%, **in dollars**. [CLICK] And one rule: if the machine cannot pay the rent **twice over**, we do not sign. [CLICK] One bad lease in five — avoided. [CLICK] CUE: ‘Score’, the 300-sites tile and the score bars build by themselves when the slide opens. Click 1: ‘Propose’ with the proposal strip and the 1-day tile. Click 2: ‘One rule’ and the 2× tile. Click 3: the ‘1 in 5’ tile — the punchline, click as you say it. Next slide: Prove.",
    html: `
      ${HEAD("Landlord Engine · Rizwan", 8, `Landlord Engine: <span class="hl">MATCH</span>`)}
      <div class="lead lead-abs" data-a="up" data-d="200">Before a landlord signs, the AI scores the address and prices the deal within a day.</div>
      <div class="left-steps steps" style="top:270px;width:800px">
        ${stp(1, "n-gold", "Score —", `<p>The AI reads the address: what PIP’s 300 sites already sell, plus open data on who lives within 400 m, who works nearby, MRT volume and who else sells nearby.</p>`, 0, 350)}
        ${stp(2, "n-gold", "Propose —", `<p>One day later: a two-page proposal with the landlord’s 10% share in dollars. No bespoke deck, no six-week wait.</p>`, 1)}
        ${stp(3, "n-gold", "One rule —", `<p>If the machine cannot pay the rent twice over, PIP does not sign. Weak sites are declined before the lease, not after.</p>`, 2)}
      </div>
      <div class="card panel right-panel" style="top:236px;width:930px" data-a="right" data-d="450">
        <div class="tag-ill" style="color:var(--muted)">SITE SCORE • WHAT THE TEAM SEES • ILLUSTRATIVE</div>
        <h4>New address: condominium lobby</h4>
        <div class="score" style="margin:6px 0 2px"><span class="big" style="font-size:100px" data-count>82</span><span class="of">/100</span></div>
        <div class="meter"><div class="lab">Residents within 400 m</div><div class="val">High</div><div class="bar"><i style="--w:81%;background:linear-gradient(90deg,#C98A00,#E3A935)"></i></div></div>
        <div class="meter"><div class="lab">Offices nearby</div><div class="val">Medium</div><div class="bar"><i style="--w:61%;background:linear-gradient(90deg,#C98A00,#E3A935)"></i></div></div>
        <div class="meter"><div class="lab">MRT volume</div><div class="val">High</div><div class="bar"><i style="--w:68%;background:linear-gradient(90deg,#C98A00,#E3A935)"></i></div></div>
        <div class="meter"><div class="lab">Who else sells nearby (lower is better)</div><div class="val">Low</div><div class="bar"><i style="--w:50%;background:linear-gradient(90deg,#C98A00,#E3A935)"></i></div></div>
        <div class="proposal" data-step="1" data-a="up" data-d="150">${I("file-text")}<div><b>Two-page proposal, ready in 1 day:</b><br>your 10% share, in S$ per month.</div></div>
      </div>
      <div class="tiles-row tiles" style="left:50px;right:50px;top:836px;grid-template-columns:repeat(4,1fr);--accent:#B27A00;--accent-soft:#FBF1DC">
        ${TILE({ icon: "database", big: "300 sites", lbl: "of PIP’s own sales data behind every score", d: 700, row: true })}
        ${TILE({ icon: "clock", big: "1 day", lbl: "to a proposal with the share in dollars", step: 1, d: 300, row: true })}
        ${TILE({ icon: "refresh-cw", big: "2×", lbl: "PIP’s income must cover the rent twice", step: 2, d: 300, row: true })}
        ${TILE({ icon: "shield-check", big: "1 in 5", lbl: "bad SmartMart leases avoided", step: 3, punch: true, row: true })}
      </div>`,
  });

  /* ---------------------------------------------------------------- 9 */
  S.push({
    id: "landlord-prove", section: "landlord", cls: "bg-paper sec-landlord s9", short: "Landlord Engine: PROVE",
    title: "Landlord Engine: PROVE",
    speaker: "Rizwan", budget: 40,
    notes: "Rizwan · 3:30–4:00. SAY: After signing, every landlord gets a monthly scorecard: what the lobby sold, who bought, and their 10%, paid. [CLICK] Every machine gets a decision — fix first, move second — and a person signs every move: **at most 2%** of the fleet a year, against 17% today. [CLICK] Co-owners see the real income of every machine they funded. [CLICK] We start with **20 pilot sites**. Good sites say yes in three to four weeks — / not eight. Sanesh: the screens. {{Say “not eight” as the tile lands. Pass the clicker.}} CUE: ‘Scorecard’ and its first three rows build by themselves. Click 1: ‘Keep-or-move’, the KEEP decision row and the ≤2% tile. Click 2: ‘Co-owner portal’ and the 2-years tile. Click 3: the 20-sites tile, then the 6–8 → 3–4 tile lands a second later — say ‘not eight’ as it does. Hand over: ‘Sanesh, the screens.’",
    html: `
      ${HEAD("Landlord Engine · Rizwan", 9, `Landlord Engine: <span class="hl">PROVE</span>`)}
      <div class="lead lead-abs" style="width:800px" data-a="up" data-d="200">After signing, every site shows what it earned; good sites say yes in 3–4 weeks.</div>
      <div class="left-steps steps" style="top:330px;width:760px">
        ${stp(1, "n-gold", "Scorecard", `<p>Every month the landlord sees what the lobby sold, how many shoppers bought, and the 10% share paid.</p>`, 0, 350)}
        ${stp(2, "n-gold", "Keep-or-move", `<p>Fix first, move second. A person signs off on every move: at most 2% of the fleet a year, against 17% flagged today.</p>`, 1)}
        ${stp(3, "n-gold", "Co-owner portal", `<p>Co-owners see the real income of every machine they funded. After two years the machine is PIP’s.</p>`, 2)}
      </div>
      <div class="card panel right-panel" style="top:250px;width:960px;padding:24px 34px" data-a="right" data-d="450">
        <div class="ph">${I("building-2")}<span class="tag-ill">LOBBY SCORECARD · WHAT THE LANDLORD SEES · ILLUSTRATIVE</span></div>
        <div class="rows" style="margin-top:8px">
          <div class="r"><span style="font-weight:800;font-size:30px">Condominium lobby · October 2026</span><span class="v" style="color:var(--gold)">${I("calendar-days")}</span></div>
          <div class="r" data-a="up" data-d="700"><span>Machine sales this month</span><span class="v"><span data-count>$24,860</span><small><span class="up">▲</span> up on last month</small></span></div>
          <div class="r" data-a="up" data-d="900"><span>Shoppers who bought</span><span class="v"><span data-count>312</span><small><span class="up">▲</span> up on last month</small></span></div>
          <div class="r" data-a="up" data-d="1100"><span>Your 10% share paid on the 5th</span><span class="v"><span data-count>$2,486</span> <span style="color:var(--gold)">${I("calendar-days")}</span></span></div>
          <div class="r" data-step="1" data-a="up"><span>Decision</span><span class="v"><span class="decision">${I("check")} KEEP</span></span></div>
        </div>
      </div>
      <div class="tiles-row tiles" style="left:50px;right:50px;top:850px;grid-template-columns:repeat(4,1fr)">
        ${TILE({ icon: "building", big: "20", lbl: "sites in the pilot, each signed in ≤4 weeks.", step: 3, row: true })}
        ${TILE({ icon: "clock", big: "6–8 → 3–4", lbl: "weeks for a good site to say yes.", step: 3, d: 1000, punch: true, row: true })}
        ${TILE({ icon: "shield-check", big: "≤2%", lbl: "of the fleet moved a year.", step: 1, d: 250, row: true })}
        ${TILE({ icon: "flag", big: "17%", lbl: "flagged today.", step: 1, d: 450, row: true })}
      </div>`,
  });

  /* ================================================================ ADVERTISER ENGINE */
  /* ---------------------------------------------------------------- 10 */
  S.push({
    id: "advertiser-intro", section: "advertiser", cls: "bg-paper sec-advertiser s10", short: "Advertiser Engine: Funded like Google",
    title: "Advertiser Engine: Funded like Google",
    speaker: "Sanesh",
    notes: "Sanesh · 4:00–4:30. SAY: {{Slides animate on their own: one click per slide.}} Landlords give PIP the space. Advertisers pay for it. / Google is free for the people searching, yet advertisers pay — because Google reaches people who are looking, and **proves** what happened next. PIP is the same: free for the shopper, paid for by brands on **500 screens** — 70% of our revenue. But today we sell those screens with a pitch. Only **60%** are sold, a screen earns S$210 of the S$300 promised, and **half the brands never come back**. Our fix: Match, and Prove. [CLICK]",
    html: `
      ${HEAD("Advertiser Engine · Sanesh", 10, `Advertiser Engine: <span class="hl">Funded like Google</span>`)}
      <div class="e-lead center" data-a="up" data-d="200">Landlords give the space; advertisers pay for it, because the AI<br>proves who stood there and what they did next.</div>
      <div class="analogy">
        <div class="card" data-a="left" data-d="400">
          <h3 class="alt"><img class="brand-logo" src="assets/img/logo-google.svg" alt="Google"></h3>
          <p>Free for the people searching.<br>Advertisers pay anyway.</p>
          <div class="hr"></div>
          <p>Why? Google reaches people who are looking…<br>…and <b style="color:var(--teal)">proves</b> what happened next.</p>
        </div>
        <div class="eq" data-a="pop" data-d="800">=</div>
        <div class="card glow" style="--accent:#D6007A" data-a="right" data-d="1000">
          <h3>Pink in Public</h3>
          <p>Free for the shopper at the machine. Brands pay for the <b style="color:var(--pink)">500 screens: 70% of PIP’s revenue.</b></p>
          <div class="hr" style="background:var(--pink)"></div>
          <p>The AI finds the buildings that hold the brand’s customers…<br>…and the till <b style="color:var(--teal)">proves</b> who stood there and what they bought.</p>
        </div>
      </div>
      <div class="collage" data-a="blur" data-d="600"><img src="assets/img/advertisers-collage.webp" alt="PIP screens showing live campaigns, and logos of brands that have advertised on PIP screens"></div>
      <div class="card band today-teal" data-a="up" data-d="1300">
        <div>
          <div class="kicker" style="color:var(--teal)">${I("circle-alert")} TODAY, BEFORE THE ENGINE</div>
          <div class="today">
            <div class="t" data-a="up" data-d="1500"><div class="tt">${I("chart-column")}<span data-count>60%</span></div><div class="ts"><b style="color:var(--ink);font-size:22px">of screen-months sold</b><br>(a pitch and an estimate of passers-by)</div></div>
            <div class="t" data-a="up" data-d="1700"><div class="tt">${I("dollar-sign")}<span>S$210 <small style="font-size:20px">earned</small><br><small style="font-size:20px">vs S$300 promised</small></span></div><div class="ts">(coverage 0.70 per screen)</div></div>
            <div class="t" data-a="up" data-d="1900"><div class="tt">${I("chart-line")}<span data-count>50%</span></div><div class="ts"><b style="color:var(--ink);font-size:22px">of brands never buy again</b><br>(about one campaign-month each)</div></div>
          </div>
        </div>
        <div class="sep"></div>
        <div>
          <div class="kicker" style="color:var(--ink)" data-a="fade" data-d="2200">WE FIX THAT WITH TWO WORDS:</div>
          <div style="display:grid;gap:14px">
            <div class="fix" style="grid-template-columns:1fr"><div class="f tl" data-a="zoom" data-d="2400" style="display:grid;grid-template-columns:270px 1fr;align-items:center;padding:12px 18px"><div class="fw">${I("target")} Match.</div><div><div class="fs" style="margin:0">before a brand books</div><div class="fd">brand-fit score · right screens · right hour</div></div></div></div>
            <div class="fix" style="grid-template-columns:1fr"><div class="f pk" data-a="zoom" data-d="2900" style="display:grid;grid-template-columns:270px 1fr;align-items:center;padding:12px 18px"><div class="fw">${I("shield-check")} Prove.</div><div><div class="fs" style="margin:0">after the ad plays</div><div class="fd">verified presence · response · sales lift</div></div></div></div>
          </div>
        </div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 11 */
  const m2 = (lab, lvl, cls, w, d) => `<div class="meter2" data-a="up" data-d="${d}"><span>${lab}</span><span class="lvl ${cls}">${lvl}</span><div class="bar"><i style="--w:${w};background:linear-gradient(90deg,#1B7F8C,#2DB7AE)"></i></div></div>`;
  S.push({
    id: "advertiser-match", section: "advertiser", cls: "bg-paper sec-advertiser s11", short: "Advertiser Engine: MATCH",
    title: "Advertiser Engine: MATCH",
    speaker: "Sanesh",
    notes: "Sanesh · 4:30–5:00. SAY: Match happens before a brand books. The AI scores every screen from what its shoppers actually buy, **by the hour** — 50,000 purchases a month. A sports-drink brand gets the screens that sell the most drinks after 6 pm, near gyms and offices. It books from a catalogue with an instant quote. A proposal drops from **four hours to fifteen minutes**; one salesperson handles **150** accounts, not 60; and screen-time sold rises from 60% to **70% by 2028**. [CLICK]",
    html: `
      ${HEAD("Advertiser Engine · Sanesh", 11, `Advertiser Engine: <span class="hl">MATCH</span>`)}
      <div class="lead lead-abs" style="width:1060px" data-a="up" data-d="200">Before a brand books, the AI picks the buildings that hold its customers and the hour they pass.</div>
      <div class="left-steps steps" style="top:300px;width:860px;gap:20px">
        ${stp(1, "n-teal", "Score —", `<p>The AI reads each screen: what its shoppers buy, by hour, from ~50,000 purchases a month on the tills, plus public data for the area. A brand needs no product in the machine.</p>`, 0, 400)}
        ${stp(2, "n-teal", "Book —", `<p>The brand gets the screens that fit and the hours its customers pass, from a catalogue with an instant quote. Agencies book the same way; no bespoke proposal.</p>`, 0, 900)}
        ${stp(3, "n-teal", "Play —", `<p>The ad plays at the right hour, not all day to everyone. Proof-of-play logs every minute it ran.</p>`, 0, 1400)}
      </div>
      <div class="card panel right-panel" style="top:250px;width:900px" data-a="right" data-d="550">
        <div class="tag-ill" style="color:var(--muted)">BRAND-FIT SCORE · WHAT THE TEAM SEES · ILLUSTRATIVE</div>
        <h4 style="font-weight:600;font-size:27px">Brief: sports-drink brand, 4-week campaign.</h4>
        <div class="score" style="margin:6px 0 0"><span class="big" style="font-size:140px" data-count>88</span><span class="of">/100</span></div>
        <div style="font-size:26px;color:var(--ink-2);margin-bottom:10px">top screens</div>
        <div style="border-top:2px solid #E6F0EF;padding-top:6px">
          ${m2("Drinks sold at this screen after 6 pm", "High", "hi", "84%", 800)}
          ${m2("Gyms and offices nearby", "High", "hi", "60%", 900)}
          ${m2("Residents within 400 m", "Medium", "md", "47%", 1000)}
          ${m2("Similar brands already showing (lower is better)", "Low", "lo", "25%", 1100)}
        </div>
      </div>
      <div class="tiles-row tiles flow-tiles" style="left:50px;right:50px;top:850px;grid-template-columns:repeat(4,1fr)">
        ${TILE({ icon: "clock", big: "4 h → 15 min", lbl: "to a proposal with a quote", d: 1700 })}
        ${TILE({ icon: "user-check", big: "60 → 150", lbl: "accounts per salesperson", d: 1850 })}
        ${TILE({ icon: "chart-column", big: "60% → 70%", lbl: "screen-time sold, 2026 → 2028", d: 2000 })}
        ${TILE({ icon: "handshake", big: "20% → 30%", lbl: "agency share of sales", d: 2150 })}
      </div>`,
  });

  /* ---------------------------------------------------------------- 12 */
  const rr = (k, v, d) => `<div class="r" data-a="left" data-d="${d}"><span>${k}</span><span class="v">${v} ${I("sparkles")}</span></div>`;
  S.push({
    id: "advertiser-prove", section: "advertiser", cls: "bg-paper sec-advertiser s12", short: "Advertiser Engine: PROVE",
    title: "Advertiser Engine: PROVE",
    speaker: "Sanesh",
    notes: "Sanesh · 5:00–5:30. SAY: Prove happens after the ad plays. Because the screen sits on a till, every purchase is a real person at that screen, at that minute. / **No lobby panel can count that. Our till can.** Then the response: a scan, a coupon, a sale — and sales compared with twin screens that did not show the ad. Brands that see proof come back: repeat buyers rise from 50% to **65%**, and coverage of the co-owner promise from 0.70 to **0.88** by 2028. Kartik: what goes on the shelf. {{Pass the clicker.}}",
    html: `
      ${HEAD("Advertiser Engine · Sanesh", 12, `Advertiser Engine: <span class="hl">PROVE</span>`)}
      <div class="lead lead-abs" data-a="up" data-d="200">After the ad plays, the till proves who stood there and what they did next.</div>
      <div class="left-steps steps" style="top:270px;width:790px;gap:16px;--accent:#1B7F8C">
        ${stp(1, "n-pink", "Verified presence —", `<p>Every purchase is a real person at that screen at that minute. No lobby panel can count that.</p>`, 0, 400)}
        ${stp(2, "n-pink", "Response —", `<p>A scan, a coupon, a survey, a sale. PIP Club (pay, scan the QR, join on Telegram, no app) turns opt-in shoppers into one closed-loop report per campaign.</p>`, 0, 900)}
        ${stp(3, "n-pink", "Sales lift —", `<p>For products in the machine, sales are compared with “twins”: matched screens that did not show the ad. The rate card follows the evidence.</p>`, 0, 1400)}
      </div>
      <div class="card panel right-panel rep" style="top:260px;width:960px;--accent:#D6007A" data-a="right" data-d="550">
        <div class="tag-ill" style="font-size:22px">CAMPAIGN REPORT · WHAT THE BRAND GETS · ILLUSTRATIVE</div>
        <h4 style="font-weight:600;font-size:27px;margin-bottom:6px">Sports-drink brand · 4 weeks · 40 screens</h4>
        <div class="rows">
          ${rr("Plays logged, by the minute", "every play", 800)}
          ${rr("Verified presence: purchases while the ad ran", "counted", 950)}
          ${rr("Response: QR scans, coupons, surveys", "tracked", 1100)}
          ${rr("Sales lift vs twin screens", "measured", 1250)}
          ${rr("Closed-loop report", "one per campaign", 1400)}
        </div>
      </div>
      <div class="tiles-row tiles flow-tiles" style="left:50px;right:50px;top:800px;grid-template-columns:repeat(4,1fr)">
        ${TILE({ icon: "users", big: "50% → 65%", lbl: "repeat buyers<br>2026 → 2028", d: 1700 })}
        ${TILE({ icon: "badge-check", big: "S$350 → S$375", lbl: "rate card follows the proof", d: 1850 })}
        ${TILE({ icon: "gauge", big: "0.70 → 0.88", lbl: "coverage of the S$300 promise", d: 2000 })}
        ${TILE({ icon: "megaphone", big: "201 → 506", lbl: "active advertisers", d: 2150 })}
      </div>`,
  });

  /* ================================================================ SUPPLIER ENGINE */
  /* ---------------------------------------------------------------- 13 */
  S.push({
    id: "supplier-intro", section: "supplier", cls: "bg-paper sec-supplier s13", short: "Supplier Engine: Run like Amazon",
    title: "Supplier Engine: Run like Amazon",
    speaker: "Kartik", budget: 40,
    notes: "Kartik · 5:30–6:00. SAY: {{Amazon card is already on screen. Click first, then speak.}} Amazon has no shopkeeper. A model forecasts what each warehouse sells, places the stock, and reorders before it runs out. [CLICK] Pink in Public has no shopkeeper either: **670 machines**, and suppliers consign the stock — they own it until it sells. But today a supplier ships **on a guess**: 27 suppliers against 100, the same 25 products everywhere, and a refill takes three days. [CLICK] We fix that with two words. **Match.** / And **plan.** [CLICK] CUE: the Amazon card is on screen when the slide opens. Click 1: the Pink in Public card, then the three 'today' chips follow on their own. Click 2: 'Match.' appears; 'Plan.' follows one second later — say 'And plan' as it lands. Pause after 'guess' and after 'Match.' Next slide: Match.",
    html: `
      ${HEAD("Supplier Engine · Kartik", 13, `Supplier Engine: <span class="hl">Run like Amazon</span>`)}
      <div class="e-lead center" data-a="up" data-d="200">Suppliers consign the stock and PIP’s 670 machines have no shopkeeper;<br>the AI shows each supplier where its product sells, before it ships.</div>
      <div class="analogy">
        <div class="card" data-a="left" data-d="350">
          <h3 class="alt"><img class="brand-logo" src="assets/img/logo-amazon.svg" alt="Amazon"></h3>
          <div class="hr"></div>
          <p>No shopkeeper. A model forecasts what each warehouse sells. Why? It puts stock where it sells… and reorders before it runs out.</p>
        </div>
        <div class="eq" data-step="1" data-a="pop">=</div>
        <div class="card glow" data-step="1" data-a="right" data-d="120">
          <h3>Pink in Public</h3>
          <div class="hr" style="background:var(--pink)"></div>
          <p>No shopkeeper either: suppliers consign the stock to 670 machines and own it until it sells.</p>
          <p style="margin-top:10px">One model learns from 50,000 purchases a month what sells in each building… and tells the supplier before it ships.</p>
        </div>
      </div>
      <div class="trio">
        <div class="photo" data-a="up" data-d="450"><img src="assets/img/machine-levelup.webp" alt="A PIP double-door smart vending machine stocked with drinks and snacks"></div>
        <div class="photo" data-a="up" data-d="600"><img src="assets/img/shelf-consigned.webp" alt="Supplier-consigned snacks on PIP machine shelves"></div>
        <div class="photo" data-a="up" data-d="750"><img src="assets/img/till-screen.webp" alt="The machine’s touch-screen till and card reader"></div>
      </div>
      <div class="card band today-rose" data-a="up" data-d="500" style="background:linear-gradient(180deg,#FFF6FA,#FCEAF2)">
        <div>
          <div class="kicker" style="color:#C2006E">${I("clock")} TODAY, BEFORE THE ENGINE</div>
          <div class="today">
            <div class="t" data-step="1" data-a="up" data-d="700"><div class="tt">${I("handshake")}<span>27 of 100<br><small style="font-size:21px;font-weight:600">suppliers signed so far</small></span></div><div class="ts">(25 of 27 stay, but signing is slow).</div></div>
            <div class="t" data-step="1" data-a="up" data-d="1000"><div class="tt">${I("package")}<span>25 SKUs<br><small style="font-size:21px;font-weight:600">the same in every location</small></span></div><div class="ts">(nothing chosen for the building).</div></div>
            <div class="t" data-step="1" data-a="up" data-d="1300"><div class="tt">${I("truck")}<span>~3 days<br><small style="font-size:21px;font-weight:600">to refill after an alert</small></span></div><div class="ts">(stock checks and shipping by hand).</div></div>
          </div>
        </div>
        <div class="sep"></div>
        <div>
          <div class="kicker" data-step="2" data-a="fade">WE FIX THAT WITH TWO WORDS:</div>
          <div class="fix">
            <div class="f pk" data-step="2" data-a="zoom" data-d="150"><div class="fw">${I("target")} Match.</div><div class="fd" style="margin-top:8px">before a supplier ships — ranked pipeline, what sells where, a four-week Launchpad test on 20 machines.</div></div>
            <div class="f pk" data-step="2" data-a="zoom" data-d="1150"><div class="fw">${I("calendar-days")} Plan.</div><div class="fd" style="margin-top:8px">after the supplier signs — facings per machine, refill before the stock-out, share per machine.</div></div>
          </div>
        </div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 14 */
  const m3 = (lab, lvl, col, w) => `<div class="meter3"><span>${lab} <em style="color:${col}">(${lvl})</em></span><div class="bar"><i style="--w:${w}"></i></div></div>`;
  S.push({
    id: "supplier-match", section: "supplier", cls: "bg-paper sec-supplier s14", short: "Supplier Engine: MATCH",
    title: "Supplier Engine: MATCH",
    speaker: "Kartik", budget: 40,
    notes: "Kartik · 6:00–6:30. SAY: Before a supplier ships a single unit, the AI reads **50,000 purchases a month** and ranks who to approach. [CLICK] Then it places the product: machines that behave alike are twins, so a protein bar goes to **20 office towers at 3 pm** — not condominiums — with 1,840 units expected. [CLICK] We test it: a four-week Launchpad, 20 machines, **S$1,500**. [CLICK] One gate: expand only if those machines run **5% ahead** of their twins. / Real sales decide, not a pitch. [CLICK] CUE: 'Rank', the 50,000 tile and the fit bars build by themselves when the slide opens. Click 1: 'Place' with the forecast headline and the 20-machines tile. Click 2: 'Test' and the S$1,500 tile. Click 3: the +5% tile — the gate, click as you say it. Next slide: Plan.",
    html: `
      ${HEAD("Supplier Engine · Kartik", 14, `Supplier Engine: <span class="hl">MATCH</span>`)}
      <div class="e-lead center" style="top:170px;font-size:30px" data-a="up" data-d="200">Before a supplier ships a single unit, the AI names the 20 machines where<br>its product will sell and the units to expect in four weeks.</div>
      <div class="left-steps steps" style="top:272px;width:880px;gap:10px">
        ${stp(1, "n-gold", "Rank —", `<p>The AI ranks which suppliers to approach this month: category demand per location, margin, shelf life, pack size and halal status, learned from 50,000 purchases a month.</p><p class="note">Candidates, not confirmed: Dododots, Cosbiz Holdings, Maxsoft.</p>`, 0, 350)}
        ${stp(2, "n-gold", "Place —", `<p>Machines that behave alike are twins. A product that sold in 30 machines goes to their twins: the 20 machines where it will sell and the units to expect in four weeks.</p><p class="note">A protein bar goes to office towers at 3 pm, not condominiums.</p>`, 1)}
        ${stp(3, "n-gold", "Test —", `<p>Launchpad: a four-week paid test on those 20 machines for S$1,500, share-only consignment. One gate: expand only if the pilot machines run 5% ahead of their twins.</p><p class="note">Real sales decide, not a pitch.</p>`, 2)}
      </div>
      <div class="card panel right-panel" style="top:268px;width:900px;padding:24px 32px" data-a="right" data-d="450">
        <div class="tag-ill">PRODUCT FORECAST • WHAT THE SUPPLIER SEES • ILLUSTRATIVE</div>
        <div style="font-size:24px;color:var(--ink-2);margin-top:4px">New product: protein bar · 20 machines · 4 weeks</div>
        <div class="score" style="margin:4px 0 0"><span class="big" style="color:#C98A00" data-count>84</span><span class="of" style="color:#C98A00">/100 fit</span></div>
        <div data-step="1" data-a="left" data-d="100" style="font-size:30px;font-weight:800;color:var(--ink);padding-bottom:10px;border-bottom:2px solid #F6D7E5;margin-bottom:8px"><span data-count>1,840</span> units expected in four weeks</div>
        ${m3("Office towers, 3 pm peak", "High", "#D6007A", "95%")}
        ${m3("Gyms and sports halls", "High", "#D6007A", "67%")}
        ${m3("MRT-adjacent lobbies", "Medium", "#C98A00", "50%")}
        ${m3("Condominiums", "Low", "#8C8C8C", "28%")}
        <div class="lp-note" data-step="2" data-a="up" data-d="200">Launchpad test, ready to start: 4 weeks on these 20 machines for S$1,500; expand if 5% ahead of twins.</div>
      </div>
      <div class="tiles-row tiles" style="left:40px;right:40px;top:890px;grid-template-columns:repeat(4,1fr);--accent:#D6007A">
        ${TILE({ icon: "database", big: "50,000", lbl: "purchases a month behind every forecast", d: 800, row: true, count: true })}
        ${TILE({ icon: "map-pin", big: "20", lbl: "machines named before a supplier ships a unit", step: 1, d: 300, row: true })}
        ${TILE({ icon: "dollar-sign", big: "S$1,500", lbl: "four-week Launchpad test, share-only consignment", step: 2, d: 350, row: true })}
        ${TILE({ icon: "trending-up", big: "+5%", lbl: "ahead of twin machines: the gate to expand", step: 3, row: true, punch: true })}
      </div>`,
  });

  /* ---------------------------------------------------------------- 15 */
  const sc = (icon, k, v, step, d, cls) => `<div class="sc-row${cls ? " " + cls : ""}"${step ? ` data-step="${step}"` : ""} data-a="up"${d != null ? ` data-d="${d}"` : ""}><span class="si">${I(icon)}</span><span>${k}</span><span class="v">${v}</span></div>`;
  S.push({
    id: "supplier-plan", section: "supplier", cls: "bg-paper sec-supplier s15", short: "Supplier Engine: PLAN",
    title: "Supplier Engine: PLAN",
    speaker: "Kartik", budget: 40,
    notes: "Kartik · 6:30–7:00. SAY: Then we keep the shelf full. One forecast per product per machine sets the facings and the trips. [CLICK] The model calls the refill **before** the shelf empties: three days becomes under one. [CLICK] And PIP’s share is set per machine — lower to prove a new product, higher for a prime facing. That is **Lim, Wang and Wu’s** consignment contract, run on 670 machines. [CLICK] Suppliers grow from 27 to 66 by 2028 and 110 by 2031, each selling **12% more**. / Josephine: what it is worth. {{Look at Prof Lim on “Lim, Wang and Wu”. Pass the clicker.}} CUE: 'Facings' and the scorecard's first two rows build by themselves. Click 1: 'Refill before the stock-out', the refills row and the 3 days → <1 tile. Click 2: 'Share per machine', the payout row and the −18% tile. Click 3: the 27→66→110 tile, then the +12% tile lands a second later — say '12% more' as it does. Say 'Lim, Wang and Wu' once. Hand over: 'Josephine, what it is worth.'",
    html: `
      ${HEAD("Supplier Engine · Kartik", 15, `Supplier Engine: <span class="hl">PLAN</span>`)}
      <div class="e-lead center" style="top:168px;font-size:30px" data-a="up" data-d="200">After signing, every shelf is refilled before it empties and every slot<br>earns its share; suppliers grow 27 → 66 → 110.</div>
      <div class="left-steps steps" style="top:276px;width:860px;gap:12px">
        ${stp(1, "n-gold", "Facings — One forecast per product per machine", `<p>sets the shelf slots, the refills and the trips. The plan changes weekly; the supplier gets a S$150-a-month sell-through report instead of a guess.</p>`, 0, 350)}
        ${stp(2, "n-gold", "Refill before the stock-out —", `<p>The model calls the refill before the shelf empties: 3 days → under 1 after the alert, and 18% fewer trips. Alert-driven restocking replaces manual stock checks.</p>`, 1)}
        ${stp(3, "n-gold", "Share per machine —", `<p>Suppliers own the stock until it sells; PIP’s share is set per machine: lower to prove a new product, standard in most slots, higher for a prime facing (Lim, Wang &amp; Wu 2015). A named person signs every change.</p>`, 2)}
      </div>
      <div class="card panel right-panel" style="top:262px;width:900px;padding:18px 30px" data-a="right" data-d="450">
        <div class="ph"><span style="font-size:46px;color:var(--pink)">${I("shield-check")}</span><div><div class="tag-ill" style="font-size:18px">SUPPLIER SCORECARD • WHAT THE SUPPLIER SEES • ILLUSTRATIVE</div><div style="font-size:22px;color:var(--ink-2)">Protein bar · 20 office towers · November 2026</div></div></div>
        <div style="margin-top:8px">
          ${sc("clipboard-list", "Units sold this month", `<span data-count>1,920</span><small><span class="up">▲</span> 4% above forecast</small>`, 0, 700)}
          ${sc("users", "Refills called before the stock-out", `14 of 14<small>(each within a day)</small>`, 1, 150)}
          ${sc("user", "Facings next month", `2 → 3<small>(in 6 towers, 2 → 1 in 3)</small>`, 0, 900)}
          ${sc("briefcase", "Your payout, paid on the 5th", `<span data-count>S$4,210</span><small>(PIP share 18%: new-product rate)</small>`, 2, 150)}
          ${sc("check", "Decision", `EXPAND<small>to 60 twin machines</small>`, 3, 0, "go")}
        </div>
      </div>
      <div class="tiles-row tiles" style="left:40px;right:40px;top:880px;grid-template-columns:repeat(4,1fr)">
        ${TILE({ icon: "users", big: "27→66→110", lbl: "suppliers<br>2026 → 2028 → 2031", step: 3, row: true })}
        ${TILE({ icon: "truck", big: "3 days → &lt;1", lbl: "to refill after a low-stock alert", step: 1, d: 300, row: true })}
        ${TILE({ icon: "refresh-cw", big: "−18%", lbl: "restock trips, as in the Coca-Cola Amatil trial", step: 2, d: 300, row: true })}
        ${TILE({ icon: "percent", big: "+12%", lbl: "sales per supplier by 2028 (benchmark +15%)", step: 3, d: 1000, row: true, punch: true })}
      </div>
      <div class="foot-note" data-a="fade" data-d="1200">Targets, not results. Benchmark: HIVERY / Coca-Cola Amatil assortment-AI trial, +15% sales and −18% restocking visits (Insider Trends, 2017). Every AI recommendation is signed by a named person.</div>`,
  });
})();
