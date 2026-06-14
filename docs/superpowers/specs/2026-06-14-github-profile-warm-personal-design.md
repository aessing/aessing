# GitHub Profile Warm Personal Design

Date: 2026-06-14

## Goal

Refresh this GitHub profile repository so it feels more personal, polished, and visually memorable while staying appropriate for a GitHub profile README.

The profile should lead with Andre as a person, not with a company, product, industry, or campaign. Data + AI can remain the light professional frame. Databricks, Lakehouse, Lakebase, aviation, and mission-critical experience must not become the primary theme.

## Current State

The repository is intentionally small:

- `README.md`
- `images/banner.png`
- standard community files

The current README text is already directionally good. The implementation should preserve the existing prose and only add focused detail where needed.

## Markdown Constraints

The profile surface is GitHub-flavored Markdown, so the design must not depend on:

- custom CSS
- JavaScript
- custom fonts
- hover states
- animation
- responsive web layout logic

Visual quality must come from static image assets, Markdown structure, limited inline HTML, badges, tables, and concise sectioning. The README must render reasonably in GitHub light and dark modes.

## Visual Direction

Use the approved "Warm Personal" direction:

- friendly and personal first impression
- warm color palette with orange, teal, and dark neutral tones
- Muppet-like character inspired by the provided profile image
- serious substance below the playful hero
- no corporate advertising tone
- no dominant aviation or Lakehouse theme

The new visual language should feel handcrafted enough to be memorable, but not so loud that the profile loses credibility.

## Assets

Create or update these assets:

- `images/banner.png`
  - README hero banner
  - static image, optimized for GitHub rendering
  - includes Andre's name, a compact personal tagline, and the Muppet-like character
  - should replace the existing first image

- `images/social-preview.jpg`
  - repository Social Preview image for manual upload in GitHub repository settings
  - JPG, chosen to keep the higher-quality character art under GitHub's file-size limit
  - 1280x640 px target size
  - under 1 MB
  - solid background preferred for cross-platform reliability, even though GitHub supports transparent PNGs

- optional `images/andre-character.png`
  - transparent cutout of the character
  - only create this if it helps compose the banner or future README sections
  - do not reference it from the README unless it adds value

GitHub Social Preview guidance used for this spec: GitHub recommends PNG, JPG, or GIF under 1 MB, at least 640x320 px, with 1280x640 px for best display. GitHub also supports transparent PNGs, but recommends a solid background when platform behavior is uncertain.

Source: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/customizing-your-repositorys-social-media-preview

## README Changes

Keep the existing README prose mostly intact.

Allowed README changes:

- replace the current banner image with the new `images/banner.png`
- update the banner alt text to match the new visual
- add a small scan-friendly section after the main About text
- add one focused sentence about database experience with transactional systems
- connect that database experience lightly to modern Data + AI foundations and Lakebase
- leave aviation as a supporting experience detail where it already exists
- keep the existing links and disclaimer unless a rendering issue is found

Avoid:

- rewriting the full About section
- making Databricks the main story
- making Aviation, Mission Critical, Lakehouse, or Lakebase the main story
- adding too many badges
- adding visual clutter that makes the README feel like a marketing page

## Suggested Text Additions

Add one concise sentence to the existing About section, near the paragraph that discusses enterprise IT and consulting:

> I also bring deep database experience from transactional systems through analytical platforms, which helps me connect operational data realities with modern Data + AI foundations, including emerging patterns around Lakebase.

Do not add a separate highlights block. The existing text should carry the story without repeating the same points in a table.

The exact wording can be tuned during implementation, but the meaning should stay close to this.

## Implementation Notes

1. Preserve the current README tone and most existing paragraphs.
2. Generate or edit the new character/banner asset from the provided profile image.
3. Prefer a single strong README banner over several decorative images.
4. Optimize image files before finalizing.
5. Keep filenames stable and predictable.
6. Do not push changes without explicit permission.

## Verification

Before calling implementation complete:

- verify Markdown renders structurally with the intended image paths
- verify `images/banner.png` exists and has plausible dimensions
- verify `images/social-preview.jpg` exists, is 1280x640 px, and is under 1 MB
- verify README keeps the existing text mostly intact
- verify `git diff` does not include companion files from `.superpowers/`
