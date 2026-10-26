# OPIM_PIP · Pink in Public: The PIP AI Growth Engine

OPIM639 Group 01 project presentation (Wee Khee, Rizwan, Sanesh, Kartik, Josephine), rebuilt from
`Group01_Presentation_v10.pptx` as an animated web deck that runs on GitHub + Vercel.

| Page | What it is |
| --- | --- |
| `/` (`index.html`) | The audience deck: 22 slides, animated builds, video, charts |
| `/presenter` (`presenter.html`) | Presenter view: speaker notes, timers, current + next slide, synced with the deck |
| `/notes` (`notes.html`) | Phone speaker notes: the 9-minute script by speaker, big text, timer, Q&A answers |

No build step and no dependencies: plain HTML, CSS and JavaScript. Fonts and icons are bundled, so the
deck does not depend on outside services once loaded.

## Present it

1. Open the deck and press **F** for full screen on the projector.
2. Optional: press **P** to open the presenter view in a second window (laptop screen). Both windows stay in
   sync: moving in either one moves both. Press **Start timer** when you begin.
3. Use **→ / Space / PgDn** (or a clicker) to step through. A small pulsing dot next to the slide counter
   means the slide still has builds to show.

| Key | Action |
| --- | --- |
| → Space PgDn Enter | Next build, then next slide |
| ← PgUp | Back |
| **A** | **Show all**: reveal every remaining build on the current slide |
| **X** | **Quick mode**: every slide arrives fully built, one click per slide (use when time is short) |
| O (or click the counter) | All slides, grouped by section; click any slide to jump |
| 1 2 then Enter | Go to slide 12 |
| F | Full screen |
| P | Presenter view |
| K | Play / pause Ferlyn’s video (slide 5). The first → on slide 5 also starts it; the next → moves on |
| V | Original PPTX view of the current slide (for checking or Q&A) |
| L | Laser pointer |
| B or . | Black screen |
| T | Elapsed-time clock |
| R | Reading mode: all slides on one scrolling page (phones open in this mode) |
| Esc | Close panels, laser, black screen |

The control bar at the bottom hides itself after a few seconds; move the mouse to bring it back. The
coloured segments jump to each section (PIP today, proposal, the three engines, value, execution, close).

### Builds that follow the speaker cues
Slides 7–9 (Rizwan) and 13–15 (Kartik) follow the CUE lines in the PPTX notes click by click, for example
slide 7: the Airbnb card is on screen; click 1 brings the Pink in Public card and the three “today” chips;
click 2 brings “Match.” and then “Prove.” one second later. All other slides animate in on their own and need
one click to move on.

## Deploy (GitHub → Vercel)

1. Put these files at the top level of the `Wiki1688/OPIM_PIP` repository (keep the folders as they are)
   and commit to `main`. On github.com: **Add file → Upload files**, drag in everything from this folder, then
   **Commit changes**. Or from a terminal:
   ```bash
   git clone https://github.com/Wiki1688/OPIM_PIP.git && cd OPIM_PIP
   # copy the contents of this folder here, then:
   git add -A && git commit -m "Add web deck" && git push
   ```
2. On vercel.com: **Add New → Project → Import** `Wiki1688/OPIM_PIP`. Framework preset: **Other**. Leave the
   build command empty and the output directory as the repository root. Click **Deploy**.
3. The deck is at `https://<your-project>.vercel.app/` and the presenter view at `/presenter`.
   Every later push to `main` redeploys automatically.

Everything in a public repository is public. The presenter page is marked `noindex`, but anyone with the link
can open it.

## Run it locally

```bash
python3 -m http.server 5173     # or: npx serve .
```
Then open <http://localhost:5173/>. (Opening `index.html` straight from the file system also works, but the
presenter sync needs a local server.)

## Files

```
index.html, presenter.html, vercel.json
content/_base.js           helpers + section list
content/s01-06.js          slides 1–6   (title, network, growth loop, processes, problem, proposal)
content/s07-15.js          slides 7–15  (Landlord, Advertiser, Supplier engines; notes word for word)
content/s16-22.js          slides 16–22 (benefit, cost, AI processes, execution, close, course map, Q&A)
content/orig-titles.js     title positions for the Original PPTX view
assets/css/deck.css        engine + components     assets/css/slides.css   slide layouts
assets/js/deck.js          navigation, builds, modes  assets/js/presenter.js presenter view
assets/img/                photos from the PPTX (WebP)  assets/video/ferlyn-founder.mp4 (H.264/AAC, 0:18)
assets/original/           the 22 original slides as images (Original view)
CONTENT-CHECK.md           slide-by-slide source check and the few corrections made
```

To change wording, edit the `content/` file for that slide. Mark an element with `data-step="1"` to make it a
click build, and `data-d="600"` to delay it by 600 ms.

## Credits
Fonts: Plus Jakarta Sans and Roboto Slab (SIL Open Font License). Icons: Lucide (ISC licence).
Photos and video: Pink in Public / Group 01 PPTX.
