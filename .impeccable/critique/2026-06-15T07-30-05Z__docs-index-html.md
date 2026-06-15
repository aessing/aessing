---
target: docs/index.html
total_score: 29
p0_count: 0
p1_count: 1
timestamp: 2026-06-15T07-30-05Z
slug: docs-index-html
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active desktop nav and hover states work, but mobile has no visible section position. |
| 2 | Match System / Real World | 3 | Personal copy lands well, but Databricks and Lakebase can pull the page toward vendor framing. |
| 3 | User Control and Freedom | 3 | Anchor navigation is clear on desktop, but hidden on mobile. |
| 4 | Consistency and Standards | 3 | Strong visual system, with some repeated section grammar. |
| 5 | Error Prevention | 3 | Static page has few error paths, external links are clear enough. |
| 6 | Recognition Rather Than Recall | 3 | CTAs and headings are labeled, but mobile users must scroll to discover sections. |
| 7 | Flexibility and Efficiency | 2 | Desktop section jumps exist, mobile has no equivalent. |
| 8 | Aesthetic and Minimalist Design | 3 | Hero is memorable, work cards feel more generic than the rest. |
| 9 | Error Recovery | 3 | No forms or destructive actions, low risk. |
| 10 | Help and Documentation | 3 | Contact paths are visible, no extra help needed for this page type. |
| **Total** | | **29/40** | **Good, with polish needed before it feels fully personal.** |

#### Anti-Patterns Verdict

The page does not immediately read as AI-generated. The custom character, anchored full-viewport hero, strong type scale, and dark teal/amber direction give it a distinct identity.

The risk is in the lower sections: numbered cards, repeated small kickers, and generic section-card grammar are common AI-landing-page moves. They are not broken, but they are less personal than the hero.

Deterministic scan: attempted on `docs/index.html`, but the bundled detector failed with `bundled detector not found`.

Visual overlays: overlay injection was attempted in the Browser path, but mutable script injection is unavailable in this runtime. No reliable user-visible overlay exists. Browser console had no errors or warnings.

#### Overall Impression

The hero is the strongest part and should stay the visual anchor. The page feels warm, technical, and personal enough to match the GitHub-profile extension idea. The biggest opportunity is making the sections below the hero feel as authored and specific as the hero image.

#### What's Working

- The hero has a clear first impression: name, positioning, human character, and strong visual confidence.
- The palette is committed enough for a brand page without becoming a generic purple-blue tech gradient.
- The layout is scannable: three core work areas, then experience, community, and contact.

#### Priority Issues

**[P1] Vendor gravity is still a bit too high**

Why it matters: The third hero CTA is `Databricks`, and the work copy names Lakebase. That can make the page feel like a Databricks side page instead of Andre's personal page, which conflicts with the stated direction.

Fix: Keep Databricks in the experience paragraph, but make the hero CTA personal. Use `Contact`, `Speaking`, or `Work with me` instead of `Databricks`. Mention Lakebase only once and frame it as database-system experience, not a product pitch.

Suggested command: `impeccable clarify`

**[P2] Mobile loses orientation after the hero**

Why it matters: The desktop nav is useful and active, but mobile hides it entirely. A mobile visitor has no quick way to jump to Work, Experience, Community, or Contact.

Fix: Add a compact mobile section rail after the hero CTAs, or a simple sticky bottom anchor row with four short labels. Avoid a hamburger, this page is too small to need one.

Suggested command: `impeccable adapt`

**[P2] The mobile character is now grounded but too small**

Why it matters: The anchored fix works, but on 390px mobile the character becomes a small sticker at the bottom. The most memorable brand asset loses impact.

Fix: Give the character slightly more size again, then reserve space by lifting the CTA group or reducing the hero vertical gap. Keep the bottom anchor intact.

Suggested command: `impeccable polish`

**[P2] Work cards are competent but generic**

Why it matters: The hero feels custom, while the work section falls back to numbered cards. It reads more like a template than a personal professional narrative.

Fix: Replace at least one card pattern with a story-led artifact: a short timeline strip, a database-to-AI bridge diagram, or a small "things I keep coming back to" narrative layout.

Suggested command: `impeccable bolder`

**[P3] Focus states could be more explicit**

Why it matters: Focus exists, but some states rely on color and subtle border changes. Keyboard users should see a clear focus ring.

Fix: Add a consistent `:focus-visible` outline or ring token for all links and CTAs.

Suggested command: `impeccable harden`

#### Persona Red Flags

**Jordan, First-Timer**: Understands the hero in under five seconds. Risk starts below the fold: `Lakebase`, `Databricks`, and vendor links may require domain context.

**Casey, Mobile User**: The hero CTAs are thumb-friendly and 48px tall. After the hero, Casey has no mobile nav and must scroll through the whole page.

**Riley, Stress Tester**: No broken console output, no horizontal overflow, and anchor navigation works. Riley would flag external links not opening in new tabs only if that is a preference, not a functional defect.

#### Minor Observations

- The desktop Work section is stronger than the mobile Work section because the asymmetry is visible.
- The repeated gold section kickers work visually, but they make the sections feel more system-generated.
- Reduced-motion support exists.
- Decorative character image is correctly hidden from assistive tech.

#### Questions to Consider

- Should the primary path be `GitHub -> LinkedIn -> Contact`, with Databricks only in the story?
- Should the Work section become more narrative and less card-based?
- Should the character stay playful only in the hero, or become a recurring tiny motif in later sections?
