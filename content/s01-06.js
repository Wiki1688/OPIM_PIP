/* Slides 1–6 · Opening, PIP today, problem, proposal */
(function () {
  const S = window.DECK.slides;

  /* ---------------------------------------------------------------- 1 */
  S.push({
    id: "title", section: "context", cls: "s-hero", short: "Introduction",
    title: "Pink in Public: The PIP AI Growth Engine",
    speaker: "Wee Khee",
    notes: "Wee Khee · 0:00–0:12. SAY: Good afternoon, Prof Lim and fellow MBAI Leaders! We are Group 01 and we are honoured to be the 1st group to kick start our OPIM Group presentation the Strategic Business Plan for our company of choice - Pink in Public. We call this the PIP AI Growth Engine! [CLICK]",
    points: ["Pink in Public: The PIP AI Growth Engine.", "OPIM639 · Group 01 · Strategic business plan with AI execution steps.", "Team: Wee Khee, Rizwan, Sanesh, Kartik, Josephine."],
    html: `
      <img class="hero" src="assets/img/hero-title.webp" alt="Neon-lit row of Pink in Public smart vending machines with screens">
      <div class="shade"></div>
      <canvas data-particles width="1920" height="1080" aria-hidden="true"></canvas>
      <div class="t-band" data-a="blur" data-d="200">
        <div class="t-l1" data-a="up" data-d="450">Pink in Public:</div>
        <div class="t-l2" data-a="up" data-d="800">The PIP AI Growth Engine</div>
      </div>
      <div class="members">
        <span data-a="pop" data-d="1300">Wee Khee</span>
        <span data-a="pop" data-d="1420">Rizwan</span>
        <span data-a="pop" data-d="1540">Sanesh</span>
        <span data-a="pop" data-d="1660">Kartik</span>
        <span data-a="pop" data-d="1780">Josephine</span>
      </div>
      <div class="t-foot" data-a="up" data-d="2000">OPIM639 &nbsp;·&nbsp; GROUP 01 &nbsp;·&nbsp; STRATEGIC BUSINESS PLAN WITH AI EXECUTION STEPS</div>`,
  });

  /* ---------------------------------------------------------------- 2 */
  S.push({
    id: "network", section: "context", short: "Singapore's 1st smart retail network",
    title: "Singapore’s 1st Smart Retail Network",
    speaker: "Wee Khee",
    notes: "Wee Khee · 0:12–0:40. SAY: Pink in Public is Singapore’s first smart retail network: mini-shops with **no shopkeeper**, each with a screen on top. Four machine types, seven SmartMarts, and **five sides** on one platform. Shoppers buy in their own lobby. Advertisers rent the screen. Suppliers consign the stock. Landlords host the machine rent-free for a 10% share. Co-owners fund it. / It is a multi-sided marketplace — the Chapter 8 platform, standing in a lobby. [CLICK] {{Point at the five icons as you name them.}}",
    points: ["Singapore’s 1st smart retail network: a multi-side platform of smart vending machines, each with a screen on top.", "Four machine types; 7 SmartMarts launched.", "Each machine has a “till” that records every purchase, product, price and minute.", "Five sides: shoppers, advertisers, suppliers, landlords, co-owners."],
    html: `
      <div class="abs wordmark" style="left:70px;top:48px" data-a="left" data-d="0"><b>PINK IN</b><i>PUBLIC</i></div>
      <div class="s2-h1" data-a="zoom" data-d="100"><h1>Singapore’s 1st<br>Smart Retail Network</h1></div>
      <div class="s2-sub" data-a="up" data-d="350">
        <div class="a">A Multi-side Online Platform Biz<br>with Smart Vending Machines</div>
        <div class="b">(“Mini-Retail Shops with no shopkeeper”)<br>each with a screen on top</div>
      </div>
      <div class="machines" data-a="up" data-d="550">
        <div class="machine" data-a="up" data-d="700"><div class="ml">AI SMARTBOX<br>(2 DOORS)</div><img src="assets/img/machine-type-1.webp" alt="AI Smartbox, two doors"></div>
        <div class="machine" data-a="up" data-d="820"><div class="ml">YOLK &amp; GO<br>SMARTBOX</div><img src="assets/img/machine-type-2.webp" alt="Yolk &amp; Go Smartbox"></div>
        <div class="machine" data-a="up" data-d="940"><div class="ml">SMARTCANTEEN</div><img src="assets/img/machine-type-3.webp" alt="SmartCanteen"></div>
        <div class="machine" data-a="up" data-d="1060"><div class="ml">SMARTSCALE X MINI</div><img src="assets/img/machine-type-4.webp" alt="SmartScale X Mini"></div>
      </div>
      <div class="card s2-till" data-a="up" data-d="1250">
        <div class="ti">${I("receipt")}</div>
        <p>A <b>PIP Smart Vending Machine</b> – a pick-up station with a “till” (machine’s cash register – records every purchase, product, price and minute)</p>
      </div>
      <div class="card map-card" data-a="right" data-d="500">
        <h3>7 SmartMarts Launched</h3>
        <img src="assets/img/smartmart-map.webp" alt="Map of Singapore with the 7 SmartMarts: 1 Burlington Square, 2 Miltonia Residences, 3 Changi Business Park, 4 Bedok North 129, 5 Stratford Court, 6 Hillview Petals, 7 Hillsta">
      </div>
      <div class="card who" data-a="right" data-d="800">
        <h3>Who is in the marketplace?</h3>
        <div class="ws">
          <div class="w" data-a="pop" data-d="1000"><div class="wi" style="background:#EE6FA6">${I("shopping-bag")}</div><b>Shoppers</b><span>buy everyday items at their own lobby or office</span></div>
          <div class="w" data-a="pop" data-d="1100"><div class="wi" style="background:#2F7FD6">${I("megaphone")}</div><b>Advertisers</b><span>rent the screen to showcase their brands</span></div>
          <div class="w" data-a="pop" data-d="1200"><div class="wi" style="background:#F08A1C">${I("truck")}</div><b>Suppliers</b><span>Sell products thru consignment; restock themselves</span></div>
          <div class="w" data-a="pop" data-d="1300"><div class="wi" style="background:#2EA866">${I("building-2")}</div><b>Landlords</b><span>host machines rent-free (revenue sharing)</span></div>
          <div class="w" data-a="pop" data-d="1400"><div class="wi" style="background:#7B48C8">${I("chart-column")}</div><b>Co-owners</b><span>fund the machines to scale as investment</span></div>
        </div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 3 */
  S.push({
    id: "loop", section: "context", short: "Growth loop",
    title: "Pink in Public Growth Loop",
    speaker: "Wee Khee",
    notes: "Wee Khee · 0:40–1:02. SAY: It grows as a loop. Four hundred co-owners pay S$13,000 a machine for S$300 a month. That funds **300-plus sites**, which bring shoppers, which attract **200 advertisers** and **27 suppliers** — whose revenue attracts more co-owners. / Revenue fuels growth. But only if every turn of the loop **pays**. [CLICK] {{Trace the ring clockwise, 1 to 5.}}",
    points: ["Growth loop: more co-owners → more locations → more shoppers → more advertisers & suppliers → more revenue → more co-owners.", "400+ co-owners pay S$13,000 per machine for S$300 a month; 300+ landlord sites; 200 advertisers; 27 suppliers."],
    html: `
      <svg class="loop-svg" viewBox="0 0 1920 1080" aria-hidden="true">
        <defs><linearGradient id="loopGrad" x1="0" x2="1"><stop offset="0" stop-color="#F4A3CB"/><stop offset="1" stop-color="#D6007A"/></linearGradient></defs>
        <path class="ring" d="M 210,545 A 750,410 0 1,1 1710,545 A 750,410 0 1,1 210,545" />
        <path class="flow" pathLength="1000" style="stroke-dasharray:70 930" d="M 210,545 A 750,410 0 1,1 1710,545 A 750,410 0 1,1 210,545" />
        <path class="flow" pathLength="1000" style="stroke-dasharray:70 930;animation-delay:-3s" d="M 210,545 A 750,410 0 1,1 1710,545 A 750,410 0 1,1 210,545" />
      </svg>
      <div class="hub" data-a="zoom" data-d="0">
        <div class="hi">${I("users")}</div>
        <h1>Pink in Public<br>Growth Loop</h1>
        <p>A virtuous cycle of growth that creates value for co-owners, locations, shoppers, advertisers, suppliers and PIP.</p>
        <div class="heart">♥</div>
        <div class="rf">${I("refresh-cw")} REVENUE FUELS GROWTH ${I("arrow-right")}</div>
      </div>

      <div class="card ln" style="left:50px;top:60px;width:630px" data-a="left" data-d="400">
        <div class="lh"><span class="no">1</span><h3>MORE CO-OWNERS</h3></div>
        <div class="stat"><b>S$13,000</b>per machine<br><b style="font-size:24px">S$300</b>per month</div>
        <p>400+ co-owners pay S$13,000 per machine for S$300 a month and money back over two years, then the machine becomes PIP’s.</p>
        <div class="foot">${I("circle-check")} Money back over 2 years, then machine becomes PIP’s.</div>
      </div>

      <div class="card ln" style="left:1240px;top:50px;width:630px" data-a="right" data-d="700">
        <div class="lh"><span class="no">2</span><h3>MORE LOCATIONS</h3></div>
        <p>300+ landlord sites hosting machines rent-free for 10% of product sales, or shop units under S$2,500 a month as SmartMart</p>
        <div class="places"><span>OFFICES</span><span>MALLS</span><span>TRANSIT HUBS</span><span>PUBLIC SPACES</span></div>
        <div class="foot">${I("store")} Smart Vending Machines deployed across offices, malls, transit hubs and public spaces.</div>
      </div>

      <div class="card ln" style="left:1320px;top:470px;width:560px" data-a="right" data-d="1000">
        <div class="lh"><span class="no">3</span><h3>MORE SHOPPERS</h3></div>
        <p>Diverse people buying products and viewing advertisements on the digital screens of the machines.</p>
        <div class="foot">${I("monitor")} Shop. Enjoy. Discover. Ads on every screen, every day.</div>
      </div>

      <div class="card ln" style="left:560px;top:800px;width:800px" data-a="up" data-d="1300">
        <div class="lh"><span class="no">4</span><h3>MORE ADVERTISERS &amp; SUPPLIERS</h3></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
          <p>${I("megaphone")} 200 active advertisers paying S$4,000–7,000 per campaign-month for the screens.</p>
          <p>${I("truck")} 27 active suppliers consigning stock <span class="muted">(they own and restock it, PIP keeps a share of sales)</span></p>
        </div>
        <div class="partners"><b>Trusted partners include:</b> Meiji · Glico · Calbee · Nestlé · Oreo &nbsp;—&nbsp; Strong partnerships. Shared growth. More value for everyone.</div>
      </div>

      <div class="card ln" style="left:40px;top:470px;width:570px" data-a="left" data-d="1600">
        <div class="lh"><span class="no">5</span><h3>MORE REVENUE</h3></div>
        <p>Higher sales and advertising earnings driving growth.</p>
        <div class="foot">${I("rocket")} More revenue attracts more co-owners. The loop continues.</div>
      </div>`,
  });

  /* ---------------------------------------------------------------- 4 */
  const proc = (n, icon, title, text, auto, d) => `
    <div class="card proc" data-a="up" data-d="${d}">
      <span class="pb">P${n}</span>
      <div class="pv">${I(icon)}</div>
      <div><h3>${title}</h3><p>${text}</p></div>
      <span class="st ${auto ? "auto" : "manual"}">${auto ? I("settings") + " Automated" : I("file-text") + " Manual"}</span>
    </div>`;
  S.push({
    id: "processes", section: "context", short: "6 core processes (current)",
    title: "Pink in Public: 6 Core Processes (Current)",
    speaker: "Wee Khee",
    notes: "Wee Khee · 1:02–1:20. SAY: Today that loop runs by hand. Of six core processes, **five are manual**: screens sold by bespoke pitch, refills in about three days, sites signed in six to eight weeks, results reported by screenshot, partners paid twice a year. Only ad scheduling is automated. [CLICK]",
    points: ["Six core processes today; five are manual, only advert scheduling is automated.", "Only 60% of screen-months sold; refill ~3 days after an alert; signing a site takes 6–8 weeks."],
    html: `
      ${HEAD("PIP today · how the work is done now", 4, `Pink in Public: <span class="hl">6 Core Processes</span> (Current)`)}
      <div class="tally" data-a="left" data-d="1400"><span style="background:#F07F12">5 manual</span><span style="background:#1A9452">1 automated</span></div>
      <div class="proc-grid">
        ${proc(1, "monitor", "Selling Screen-Months", "Sales team calls brands for bespoke proposals. Only 60% of screen-months sold.", false, 250)}
        ${proc(2, "package", "Restocking Products", "Suppliers own &amp; refill stock (~25 SKUs per location). Low-stock alert → refill in ~3 days.", false, 400)}
        ${proc(3, "building-2", "Signing Sites", "Sites found by referral/chance, visited &amp; pitched. Co-owner funds machine; SmartSys installs. 6–8 weeks.", false, 550)}
        ${proc(4, "square-play", "Scheduling Adverts", "Booked ads loaded into scheduler and play on the screen.", true, 700)}
        ${proc(5, "chart-column", "Reporting Results", "Screenshots and sales figures compiled by hand on request.", false, 850)}
        ${proc(6, "calendar-days", "Paying Partners", "Every 6 months: landlord’s 10% and co-owner’s S$300 calculated and paid.", false, 1000)}
      </div>`,
  });

  /* ---------------------------------------------------------------- 5 */
  S.push({
    id: "problem", section: "context", short: "Problem: the 3 pillars",
    title: "Problem: Scaling, Attracting, Sustaining the 3 Pillars",
    speaker: "Wee Khee",
    notes: "Wee Khee · 1:20–2:00. SAY: Here is the founder, Ferlyn. [CLICK] {{The click PLAYS the clip (0:18). Step aside, don’t talk over it. When it ends:}} Her three pillars are under strain. Advertisers: only **60%** of screen-months sold — so a screen earns S$210 against the S$300 promised, a coverage ratio of **0.70**. Suppliers: **27** of the hundred she wants. Landlords: **17%** of sites flagged to move. / Growing the fleet without proof only grows that gap. [CLICK] CUE: Ferlyn’s clip (0:18) is on this slide. Press → (or click the play button, or K) to play it; press → again to move on. The clip pauses when you leave the slide.",
    points: ["Advertisers: 60% of screen-months sold; a screen earns S$210 against the S$300 promised (coverage 0.70).", "Suppliers: 27 of the 100 Ferlyn wants.", "Landlords: 17% of sites flagged for relocation.", "Coverage ratio = what a screen earns ÷ what it promises."],
    html: `
      ${HEAD("PIP today · the problem", 5, `Problem: Scaling, Attracting, <span class="hl">Sustaining the 3 Pillars</span>`, "sm")}
      <div class="vcard" data-a="left" data-d="250">
        <div class="vid">
          <img class="vposter" src="assets/img/ferlyn-poster.webp" alt="">
          <video data-hook src="assets/video/ferlyn-founder.mp4" poster="assets/img/ferlyn-poster.webp" preload="auto" playsinline controls controlslist="nodownload noplaybackrate" disablepictureinpicture aria-label="Video: Ferlyn, founder of PIP (18 seconds)"></video>
          <button class="vplay" aria-label="Play Ferlyn’s video"><svg viewBox="0 0 24 24" fill="#fff"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg></button>
          <span class="vlen">0:18</span>
        </div>
        <div class="vcap">Ferlyn, founder of PIP</div>
      </div>
      <div class="pillars">
        <div class="card pillar p-adv" data-a="up" data-d="450">
          <div class="pi">${I("megaphone")}</div>
          <div class="pn">Advertisers Pillar</div>
          <div class="big" data-count>60%</div>
          <div class="bl">of screen-months sold</div>
          <ul><li>a screen earns S$210 a month against the S$300 promised to co-owner (coverage ratio 0.70)</li><li>half the brands never advertise again</li></ul>
        </div>
        <div class="card pillar p-sup" data-a="up" data-d="650">
          <div class="pi">${I("handshake")}</div>
          <div class="pn">Suppliers Pillar</div>
          <div class="big fit">27 <small>of</small> 100</div>
          <div class="bl">suppliers Ferlyn wants</div>
          <ul><li>Limited products (~25 SKUs)</li><li>Restocking ~3 days after low-stock alert</li></ul>
        </div>
        <div class="card pillar p-land" data-a="up" data-d="850">
          <div class="pi">${I("building-2")}</div>
          <div class="pn">Landlords Pillar</div>
          <div class="big" data-count>17%</div>
          <div class="bl">of sites flagged for relocation</div>
          <ul><li>Sites come by referral and chance</li><li>Six to eight weeks to secure each site</li><li>Not all sites are good</li></ul>
        </div>
      </div>
      <div class="card why" data-a="up" data-d="1150">
        <div class="wi">${I("chart-column")}</div>
        <p><b>Why it matters.</b> Ferlyn’s targets (S$2.7M in 2027 to S$7.0M in 2031) grow the fleet while yield stays near S$225 a machine a month. Growth without proof scales the gap: more co-owners promised S$300 from screens that earn S$210.</p>
      </div>
      <div class="formula" data-a="up" data-d="1350">${I("calculator")} Coverage ratio = what a screen earns ÷ what it promises (S$210 ÷ S$300 = 0.70)</div>`,
  });

  /* ---------------------------------------------------------------- 6 */
  const pr = (icon, label, text) => `<div class="pr"><div class="pi">${I(icon)}</div><div><b>${label}</b><span>${text}</span></div></div>`;
  S.push({
    id: "proposal", section: "proposal", short: "Our proposal",
    title: "Our Proposal: The PIP AI Growth Engine",
    speaker: "Wee Khee",
    notes: "Wee Khee · 2:00–2:30. SAY: Our answer is the PIP AI Growth Engine: **proof from the till**. Built like **Airbnb** for landlords and co-owners. Funded like **Google** for advertisers. Run like **Amazon** for suppliers. One AI model keeps all three promises with four jobs: **Match, Plan, Prove, Learn**. The model writes the list; a named person signs it. / Rizwan starts where every machine starts — the site. {{Hand the clicker to Rizwan.}}",
    points: ["Proof from the Till: built like Airbnb (landlords, co-owners), funded like Google (advertisers), run like Amazon (suppliers).", "One AI model keeps all 3 promises and does 4 jobs: Match, Plan, Prove, Learn."],
    html: `
      ${HEAD("Our proposal", 6, `Our Proposal: <span class="hl">The PIP AI Growth Engine</span>`)}
      <div class="s6-lead" data-a="up" data-d="200">The PIP AI Growth Engine answers with <b>“Proof from the Till:”</b></div>
      <div class="card prom airbnb" data-a="up" data-d="400">
        <div class="brand"><img class="brand-logo" src="assets/img/logo-airbnb.svg" alt="Airbnb"></div>
        <h3>Built like Airbnb</h3><div class="pw">the promise to landlords and co-owners.</div>
        ${pr("house", "THEY GIVE", "the space, and S$13,000 a machine for two years.")}
        ${pr("cpu", "THE AI DOES", "scores the address from PIP’s 300 sites and public data; shows the 10% share in dollars before signing; a monthly scorecard after.")}
        ${pr("users", "WHY THEY SAY YES", "a site in three to four weeks, not six to eight; co-owners see the real income of their machines.")}
      </div>
      <div class="card prom google" data-a="up" data-d="600">
        <div class="brand"><img class="brand-logo" src="assets/img/logo-google.svg" alt="Google"></div>
        <h3>Funded like Google</h3><div class="pw">the promise to advertisers.</div>
        ${pr("dollar-sign", "THEY GIVE", "S$350 a screen-month")}
        ${pr("map-pin", "THE AI DOES", "finds the buildings that hold the brand’s customers, plays the ad at the hour they pass, proves a verified presence and measures the response.")}
        ${pr("chart-column", "WHY THEY SAY YES", "the report a brand gets from Google and no lobby panel gives today; screen-time sold 60% → 80% by 2031.")}
      </div>
      <div class="card prom amazon" data-a="up" data-d="800">
        <div class="brand"><img class="brand-logo" src="assets/img/logo-amazon.svg" alt="Amazon"></div>
        <h3>Run like Amazon</h3><div class="pw">the promise to suppliers</div>
        ${pr("package", "THEY GIVE", "consigned stock and a share of each sale.")}
        ${pr("brain", "THE AI DOES", "learns what sells in each building from 50,000 purchases a month; shows the 20 machines where a product will sell; refills before the shelf is empty; sets a fair share per machine.")}
        ${pr("trending-up", "WHY THEY SAY YES", "a forecast before they ship; suppliers 27 → 110 by 2031, sales per supplier +12–15%")}
      </div>
      <div class="card jobs" data-a="up" data-d="1100">
        <h3>One AI model keeps all 3 promises &amp; does 4 jobs:</h3>
        <div class="jr">
          <div class="job match" data-a="pop" data-d="1300">${I("network")} Match</div><div class="jarrow">${I("arrow-right")}</div>
          <div class="job plan" data-a="pop" data-d="1450">${I("calendar-days")} Plan</div><div class="jarrow">${I("arrow-right")}</div>
          <div class="job prove" data-a="pop" data-d="1600">${I("shield-check")} Prove</div><div class="jarrow">${I("arrow-right")}</div>
          <div class="job learn" data-a="pop" data-d="1750">${I("refresh-cw")} Learn</div>
        </div>
      </div>`,
  });
})();
