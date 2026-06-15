# GitHub Pages Onepager Design

## Decision

Build the selected **A, Cinematic Profile** direction as a static one-page website for Andre Essing's GitHub profile repository.

The page should feel personal, warm, and visually memorable. It should extend the README profile into a richer web experience without becoming a Databricks marketing page.

## Deployment Constraints

- GitHub Pages source: `main` branch, `/docs` folder
- Entry point: `docs/index.html`
- Site assets: `docs/assets/**`
- No framework and no build step
- No generated files outside the agreed website scope
- Existing repository README remains a GitHub profile README

## Asset Plan

Copy the existing visual assets into the GitHub Pages asset tree:

- `images/andre-character.png` to `docs/assets/images/andre-character.png`
- `images/social-preview.jpg` to `docs/assets/images/social-preview.jpg`
- optional: `images/banner.png` to `docs/assets/images/banner.png` only if useful for Open Graph or fallback content

The page should use the transparent character cutout as the primary hero visual. The Social Preview image should be referenced in Open Graph and Twitter meta tags.

## Visual Direction

Use the selected cinematic profile direction:

- dark blue and teal stage-like background
- warm orange accents that connect to the character hoodie
- high-contrast typography with generous scale
- a full first viewport with a visible hint of the next section
- animated data-line details, light sweeps, and subtle parallax
- no decorative text pills that repeat the copy
- no generic SaaS card grid
- no Databricks-led color system

Color strategy: full palette, with tinted dark neutrals, teal/cyan data-light, warm orange, and soft cream text. Use OKLCH in CSS where practical, with sensible fallback values where needed.

Theme scene: a visitor opens the page from GitHub after seeing the profile README. They should immediately understand that Andre is a technical Data + AI person with a human, community-minded personality.

## Information Architecture

The onepager should contain these sections:

1. **Hero**
   - Name: Andre Essing
   - Headline direction: "Data ideas, made useful."
   - Short supporting copy based on the README's "I help..." language
   - Primary links: GitHub and LinkedIn
   - Secondary link: Databricks, clearly framed as employer context rather than the page focus
   - Hero visual: the Muppet-like character cutout with animated data-field background

2. **Work**
   - Three compact lanes:
     - Data + AI strategy
     - Cloud-native data platforms
     - Database experience from transactional systems to analytical platforms
   - Lakebase may be mentioned once in the database lane, not as a main theme

3. **Experience**
   - A narrative section using the existing README text as source
   - Include aviation experience, but as proof of complex enterprise work rather than the page theme
   - Keep Databricks wording cloud agnostic where possible

4. **Community**
   - Speaker, community leader, former Microsoft MVP, Friend of Redgate
   - PASS Munich, SQL Saturday, PowerShell Saturday
   - Tone should be personal and practical

5. **Contact**
   - GitHub, LinkedIn, Databricks
   - A short invitation to connect

## Copy Rules

- Keep the profile personal.
- Do not rewrite the whole README story from scratch.
- Adapt existing text into shorter website copy.
- Avoid "Mission-Critical", "Aviation", "Lakehouse", or "Lakebase" as dominant themes.
- Prefer "Data + AI" as the main technical umbrella.
- Use "Databricks", not "Azure Databricks".
- Avoid hype copy and marketing claims.

## Interaction And Motion

Use small static-site interactions:

- smooth anchor scrolling
- scroll reveal for sections
- pointer-responsive hero light field on desktop
- subtle moving data lines
- reduced-motion fallback

JavaScript should be optional enhancement. The page must remain readable and usable without it.

## Accessibility And Performance

- Semantic landmarks and headings
- Keyboard-accessible links and navigation
- Strong text contrast
- Responsive layout for mobile, tablet, and desktop
- No text overflow at narrow widths
- Image dimensions and alt text set explicitly
- Avoid external runtime dependencies
- Keep total page weight reasonable by reusing existing compressed assets

## Files To Create

- `docs/index.html`
- `docs/assets/site.css`
- `docs/assets/site.js`
- `docs/assets/images/andre-character.png`
- `docs/assets/images/social-preview.jpg`

Optional if useful:

- `docs/assets/images/banner.png`

## Verification

Before completion:

- serve `docs` locally with a static HTTP server
- inspect the page in the in-app browser
- verify desktop and mobile viewport screenshots
- verify all local assets load
- verify links open the intended targets
- verify Open Graph image path points to `assets/images/social-preview.jpg`
- verify no stale root-level site assumptions exist
- verify `git diff` excludes `.superpowers/`

## Spec Self-Review

- No placeholders remain.
- The `/docs` deployment constraint is explicit.
- The `/docs/assets` asset constraint is explicit.
- The design stays personal and Data + AI focused.
- Databricks is present as context, not as the page's main story.
- The scope fits a single static onepage implementation.
