# GitHub Pages Onepager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fancy static one-page GitHub Pages site under `docs/` that extends Andre Essing's GitHub profile with a cinematic, personal Data + AI web presence.

**Architecture:** The site is a no-build static page served from `docs/index.html`. CSS owns the full visual system, layout, responsive behavior, and animation. JavaScript is optional progressive enhancement for scroll reveal, pointer-responsive hero lighting, and small interaction states.

**Tech Stack:** HTML5, CSS with OKLCH color tokens and responsive `clamp()`, vanilla JavaScript, existing PNG/JPG image assets, GitHub Pages from `/docs` on `main`.

---

## File Structure

- Create: `docs/index.html`
  - Semantic single-page structure, SEO meta tags, Open Graph tags, navigation, hero, work, experience, community, and contact sections.
- Create: `docs/assets/site.css`
  - Design tokens, cinematic background, responsive layout, typography, motion, reduced-motion fallback, and accessibility states.
- Create: `docs/assets/site.js`
  - Optional progressive enhancement for scroll reveal, pointer light position, and active navigation state.
- Create: `docs/assets/images/andre-character.png`
  - Copy of the transparent character cutout from `images/andre-character.png`.
- Create: `docs/assets/images/social-preview.jpg`
  - Copy of the GitHub-compliant social preview from `images/social-preview.jpg`.

## Task 1: Prepare GitHub Pages Asset Tree

**Files:**
- Create: `docs/assets/images/andre-character.png`
- Create: `docs/assets/images/social-preview.jpg`

- [ ] **Step 1: Create the asset directories**

Run:

```bash
mkdir -p docs/assets/images
```

Expected: `docs/assets/images` exists.

- [ ] **Step 2: Copy the existing image assets**

Run:

```bash
cp images/andre-character.png docs/assets/images/andre-character.png
cp images/social-preview.jpg docs/assets/images/social-preview.jpg
```

Expected: both files exist under `docs/assets/images`.

- [ ] **Step 3: Verify dimensions and social preview size**

Run:

```bash
sips -g pixelWidth -g pixelHeight docs/assets/images/andre-character.png docs/assets/images/social-preview.jpg
wc -c docs/assets/images/social-preview.jpg
```

Expected:
- `andre-character.png` keeps its transparent cutout dimensions
- `social-preview.jpg` is `1280x640`
- `social-preview.jpg` remains below `1048576` bytes

## Task 2: Create Static HTML Page

**Files:**
- Create: `docs/index.html`

- [ ] **Step 1: Add the full page document**

Create `docs/index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Andre Essing | Data + AI, Cloud Native, Community</title>
    <meta name="description" content="Andre Essing helps turn messy data ideas into useful systems, with a focus on Data + AI, cloud-native platforms, database experience, and community.">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Andre Essing | Data ideas, made useful">
    <meta property="og:description" content="A personal one-page profile for Data + AI, cloud-native architecture, database experience, and community work.">
    <meta property="og:image" content="assets/images/social-preview.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Andre Essing | Data ideas, made useful">
    <meta name="twitter:description" content="Data + AI, cloud-native architecture, database experience, and community.">
    <meta name="twitter:image" content="assets/images/social-preview.jpg">
    <link rel="stylesheet" href="assets/site.css">
    <script defer src="assets/site.js"></script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Andre Essing home">AE</a>
      <nav class="site-nav" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#community">Community</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main id="main">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero__field" aria-hidden="true"></div>
        <div class="hero__content">
          <p class="intro">Hi, I'm Andre</p>
          <h1 id="hero-title">Data ideas, made useful.</h1>
          <p class="hero__copy">I help turn messy data ideas into useful systems, and I still like when technology feels a little human.</p>
          <div class="hero__links" aria-label="Profile links">
            <a class="button button--primary" href="https://github.com/aessing">GitHub</a>
            <a class="button" href="https://www.linkedin.com/in/aessing/">LinkedIn</a>
            <a class="button button--quiet" href="https://www.databricks.com/">Databricks</a>
          </div>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <img src="assets/images/andre-character.png" width="1122" height="1402" alt="">
        </div>
      </section>
      <section class="section section--work" id="work" aria-labelledby="work-title">
        <h2 id="work-title">The work I like to make real</h2>
        <div class="work-lanes">
          <article><h3>Data + AI strategy</h3><p>Turning ideas into focused roadmaps, measurable outcomes, and platforms teams can actually use.</p></article>
          <article><h3>Cloud-native data platforms</h3><p>Designing open, pragmatic architectures that reduce complexity and support long-term growth.</p></article>
          <article><h3>Database systems</h3><p>Connecting transactional realities with analytical platforms, including emerging patterns around Lakebase.</p></article>
        </div>
      </section>
      <section class="section section--experience" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Built from enterprise reality</h2>
        <p>With 25+ years in enterprise IT and consulting, I have helped customers move from complex legacy platforms toward clearer, faster, more sustainable data foundations.</p>
        <p>My work spans modernizing Teradata and Hadoop environments, enabling AI-ready data foundations, and shaping analytics solutions in demanding industries such as aviation.</p>
      </section>
      <section class="section section--community" id="community" aria-labelledby="community-title">
        <h2 id="community-title">Community is part of the craft</h2>
        <p>Beyond customer work, I am an international speaker, community leader, former Microsoft MVP, and Friend of Redgate. I previously led the PASS Munich Data Platform community and organized SQL Saturday and PowerShell Saturday events.</p>
      </section>
      <section class="section section--contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let's connect</h2>
        <p>If you want to talk about Data + AI, data platforms, architecture, or communities, you can find me here.</p>
        <div class="contact-links">
          <a href="https://github.com/aessing">github.com/aessing</a>
          <a href="https://www.linkedin.com/in/aessing/">linkedin.com/in/aessing</a>
          <a href="https://www.databricks.com/">databricks.com</a>
        </div>
      </section>
    </main>
  </body>
</html>
```

Expected: `docs/index.html` contains the agreed `/docs/assets` references and no root-level asset paths.

## Task 3: Add Visual System And Responsive Layout

**Files:**
- Create: `docs/assets/site.css`

- [ ] **Step 1: Add CSS tokens, layout, and animation**

Create `docs/assets/site.css` with:

```css
:root {
  color-scheme: dark;
  --ink: oklch(98% 0.01 83);
  --muted: oklch(83% 0.035 230);
  --bg: oklch(17% 0.035 245);
  --bg-deep: oklch(11% 0.026 248);
  --teal: oklch(70% 0.13 188);
  --cyan: oklch(81% 0.115 215);
  --orange: oklch(74% 0.17 56);
  --amber: oklch(89% 0.105 83);
  --line: oklch(78% 0.08 200 / 0.24);
  --shadow: 0 32px 90px oklch(7% 0.02 250 / 0.52);
  --max: 1160px;
  --pad: clamp(1.25rem, 3vw, 3.5rem);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg-deep); color: var(--ink); }
img { max-width: 100%; display: block; }
a { color: inherit; }
.skip-link { position: absolute; left: -999px; top: 1rem; z-index: 20; }
.skip-link:focus { left: 1rem; }
.site-header { position: fixed; z-index: 10; inset: 0 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 1rem var(--pad); color: var(--ink); }
.brand { display: grid; place-items: center; width: 2.7rem; height: 2.7rem; border: 1px solid var(--line); border-radius: 50%; text-decoration: none; font-weight: 900; background: oklch(16% 0.03 245 / 0.76); }
.site-nav { display: flex; gap: clamp(.7rem, 2vw, 1.4rem); font-size: .92rem; color: var(--muted); }
.site-nav a { text-decoration: none; }
.site-nav a:hover, .site-nav a.is-active { color: var(--amber); }
.hero { position: relative; min-height: 100svh; display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, 44vw); align-items: end; overflow: hidden; padding: 8rem var(--pad) 0; background: radial-gradient(circle at var(--mx, 72%) var(--my, 24%), oklch(86% 0.14 77 / .22), transparent 22rem), linear-gradient(135deg, var(--bg-deep), oklch(25% 0.08 205) 52%, oklch(63% 0.13 64) 145%); }
.hero::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(115deg, transparent 0 48%, oklch(84% 0.13 202 / .16) 49%, transparent 50% 100%), linear-gradient(90deg, oklch(78% 0.09 195 / .12) 1px, transparent 1px); background-size: 160px 160px, 72px 72px; mask-image: linear-gradient(90deg, transparent, #000 18%, #000 80%, transparent); animation: drift 18s linear infinite; }
.hero__content { position: relative; z-index: 2; align-self: center; max-width: 690px; padding-bottom: clamp(3rem, 12vh, 7rem); }
.intro { margin: 0 0 1.2rem; color: var(--amber); font-weight: 800; letter-spacing: .02em; }
h1, h2, h3, p { margin-top: 0; }
h1 { margin-bottom: 1.25rem; max-width: 10ch; font-size: clamp(4rem, 12vw, 9rem); line-height: .82; letter-spacing: 0; }
.hero__copy { max-width: 58ch; color: oklch(90% 0.03 230); font-size: clamp(1.15rem, 1.9vw, 1.55rem); line-height: 1.45; }
.hero__links, .contact-links { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: 2rem; }
.button, .contact-links a { border: 1px solid var(--line); border-radius: 999px; padding: .85rem 1.15rem; text-decoration: none; font-weight: 800; background: oklch(15% 0.03 245 / .58); }
.button--primary { background: var(--amber); color: oklch(17% 0.04 245); border-color: transparent; }
.button--quiet { color: var(--muted); }
.hero__visual { position: relative; z-index: 1; align-self: end; justify-self: end; width: min(44vw, 540px); min-width: 320px; filter: drop-shadow(0 36px 72px oklch(8% 0.02 245 / .45)); }
.hero__visual img { transform-origin: 55% 100%; animation: float 6s ease-in-out infinite; }
.section { position: relative; padding: clamp(5.5rem, 10vw, 9rem) var(--pad); background: var(--bg-deep); }
.section > * { max-width: var(--max); margin-left: auto; margin-right: auto; }
.section h2 { max-width: 780px; margin-bottom: 1.8rem; font-size: clamp(2.3rem, 6vw, 5.4rem); line-height: .95; }
.section p { max-width: 75ch; color: var(--muted); font-size: clamp(1.05rem, 1.45vw, 1.25rem); line-height: 1.7; }
.work-lanes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 2.2rem; }
.work-lanes article { min-height: 260px; padding: clamp(1.2rem, 2.4vw, 2rem); border: 1px solid var(--line); border-radius: 1.4rem; background: linear-gradient(180deg, oklch(23% 0.052 220 / .82), oklch(16% 0.036 245 / .72)); box-shadow: var(--shadow); }
.work-lanes h3 { font-size: clamp(1.35rem, 2vw, 2rem); }
.section--experience { background: linear-gradient(180deg, var(--bg-deep), oklch(18% 0.05 198)); }
.section--community { background: radial-gradient(circle at 14% 20%, oklch(77% 0.14 61 / .18), transparent 20rem), var(--bg-deep); }
.section--contact { min-height: 72svh; display: grid; align-content: center; background: linear-gradient(135deg, oklch(13% 0.03 245), oklch(25% 0.09 192)); }
.is-revealed { animation: reveal .75s cubic-bezier(.22, 1, .36, 1) both; }
@keyframes drift { to { background-position: 160px 160px, 72px 0; } }
@keyframes float { 50% { transform: translateY(-1.1rem) rotate(-1deg); } }
@keyframes reveal { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 820px) {
  .site-nav { display: none; }
  .hero { grid-template-columns: 1fr; min-height: auto; padding-top: 7rem; }
  .hero__content { padding-bottom: 1rem; }
  .hero__visual { width: min(82vw, 410px); min-width: 0; justify-self: center; }
  h1 { font-size: clamp(3.8rem, 18vw, 5.9rem); }
  .work-lanes { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
}
```

Expected: the page has a cinematic first viewport, the character is visible, the work lanes are responsive, and motion respects `prefers-reduced-motion`.

## Task 4: Add Progressive Enhancement

**Files:**
- Create: `docs/assets/site.js`

- [ ] **Step 1: Add optional JavaScript behavior**

Create `docs/assets/site.js` with:

```js
const hero = document.querySelector(".hero");
if (hero) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    hero.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  });
}

const revealTargets = document.querySelectorAll(".section, .work-lanes article");
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 })
  : null;

revealTargets.forEach((target) => {
  if (revealObserver) {
    revealObserver.observe(target);
  } else {
    target.classList.add("is-revealed");
  }
});

const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && navLinks.length > 0) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-42% 0px -48% 0px" });

  sections.forEach((section) => navObserver.observe(section));
}
```

Expected: JavaScript enhances the page but is not required for reading or navigation.

## Task 5: Serve And Verify

**Files:**
- Verify: `docs/index.html`
- Verify: `docs/assets/site.css`
- Verify: `docs/assets/site.js`
- Verify: `docs/assets/images/andre-character.png`
- Verify: `docs/assets/images/social-preview.jpg`

- [ ] **Step 1: Start a local static server**

Run:

```bash
python3 -m http.server 52187 --directory docs
```

Expected: the server serves `docs/index.html` at `http://localhost:52187/`.

- [ ] **Step 2: Inspect in browser**

Open:

```text
http://localhost:52187/
```

Expected:
- hero has large "Data ideas, made useful." headline
- transparent character appears on the right on desktop
- next section is hinted below the first viewport
- sections are readable and visually varied
- no text overlaps on desktop or mobile

- [ ] **Step 3: Verify file references and copy constraints**

Run:

```bash
rg -n "Azure Databricks|Mission-Critical|mission-critical|images/|TODO|TBD" docs/index.html docs/assets/site.css docs/assets/site.js
rg -n "assets/images/social-preview.jpg|assets/images/andre-character.png" docs/index.html
```

Expected:
- first command finds no unwanted terms or stale root image paths
- second command finds the expected asset references

- [ ] **Step 4: Verify dimensions and repository scope**

Run:

```bash
sips -g pixelWidth -g pixelHeight docs/assets/images/andre-character.png docs/assets/images/social-preview.jpg
git status --short
git diff --stat
```

Expected:
- image dimensions are valid
- staged or unstaged diff includes only `docs/**` site files and the implementation plan
- `.superpowers/` remains untracked and is not staged

## Task 6: Commit Implementation

**Files:**
- Add: `docs/index.html`
- Add: `docs/assets/site.css`
- Add: `docs/assets/site.js`
- Add: `docs/assets/images/andre-character.png`
- Add: `docs/assets/images/social-preview.jpg`
- Add: `docs/superpowers/plans/2026-06-15-github-pages-onepager.md`

- [ ] **Step 1: Stage implementation files**

Run:

```bash
git add docs/index.html docs/assets/site.css docs/assets/site.js docs/assets/images/andre-character.png docs/assets/images/social-preview.jpg docs/superpowers/plans/2026-06-15-github-pages-onepager.md
```

Expected: only the website files and this plan are staged.

- [ ] **Step 2: Commit**

Run:

```bash
git commit --no-gpg-sign -m "Build GitHub Pages onepager"
```

Expected: a local commit is created. Do not push.

## Self-Review

- Spec coverage: deployment, `/docs/assets`, static page, personal Data + AI focus, assets, motion, accessibility, and verification are covered.
- Placeholder scan: no `TODO`, `TBD`, or unspecified implementation steps remain.
- Scope check: the work is one static website and fits a single implementation plan.
