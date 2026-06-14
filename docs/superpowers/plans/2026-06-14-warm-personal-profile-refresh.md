# Warm Personal Profile Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the GitHub profile README with a warm personal hero, minimal text additions, and a GitHub-ready Social Preview image.

**Architecture:** This repository is a GitHub profile repo, so the implementation is static Markdown plus image assets. The README remains simple and GitHub-safe, while visual polish is handled by generated and composed PNG assets under `images/`.

**Tech Stack:** GitHub-flavored Markdown, PNG assets, local image inspection/composition tools, Git.

---

## File Structure

- Modify: `README.md`
  - replace the existing hero alt text if needed
  - preserve existing prose
  - add a database/transactional systems sentence
  - add a compact highlights table

- Modify: `images/banner.png`
  - new README hero image
  - optimized static PNG

- Create: `images/social-preview.jpg`
  - 1280x640 px GitHub Social Preview upload asset
  - under 1 MB

- Optional create: `images/andre-character.png`
  - transparent character cutout if it improves asset composition

## Task 1: Baseline And Inputs

**Files:**
- Read: `README.md`
- Read: `images/banner.png`
- Read: `/Users/andre/Downloads/039dd01b1ba44ea9a0739d9664e1d718ac3d154cb7182b510955e4fb77e7d3e0.jpeg`

- [x] **Step 1: Inspect current files**

Run:

```bash
git status --short
sed -n '1,220p' README.md
sips -g pixelWidth -g pixelHeight images/banner.png
sips -g pixelWidth -g pixelHeight /Users/andre/Downloads/039dd01b1ba44ea9a0739d9664e1d718ac3d154cb7182b510955e4fb77e7d3e0.jpeg
```

Expected: README is readable, current banner is 1280x640, source image is readable.

- [x] **Step 2: Check available local image tooling**

Run:

```bash
python3 -c "from PIL import Image; print('pillow ok')"
```

Expected: `pillow ok`. If Pillow is missing, use built-in macOS `sips` for inspection and request approval only if installing dependencies becomes necessary.

## Task 2: Create Static Assets

**Files:**
- Modify: `images/banner.png`
- Create: `images/social-preview.jpg`
- Optional create: `images/andre-character.png`

- [x] **Step 1: Generate or derive the character asset**

Use the provided profile image as the visual reference. Keep the character friendly, warm, Muppet-like, orange hoodie, glasses, and cap. Avoid adding company/product branding.

If a transparent cutout is created, save it as:

```text
images/andre-character.png
```

- [x] **Step 2: Compose `images/banner.png`**

Create a 1280x640 JPG with:

- warm personal color palette
- character as the focal point
- text: `Andre Essing`
- compact tagline around Data + AI and pragmatic engineering
- no Databricks-led visual framing
- no Aviation/Lakehouse dominance

- [x] **Step 3: Compose `images/social-preview.jpg`**

Create a 1280x640 PNG with:

- same visual family as the banner
- legible name and short personal tagline
- solid background
- file size under 1 MB

- [x] **Step 4: Verify image dimensions and size**

Run:

```bash
sips -g pixelWidth -g pixelHeight images/banner.png
sips -g pixelWidth -g pixelHeight images/social-preview.jpg
wc -c images/social-preview.jpg
```

Expected: both images are 1280x640 px, `images/social-preview.jpg` is below 1,048,576 bytes.

## Task 3: Update README

**Files:**
- Modify: `README.md`

- [x] **Step 1: Replace hero alt text**

Set the top image to:

```markdown
<img src="https://raw.githubusercontent.com/aessing/aessing/main/images/banner.png" alt="Warm illustrated banner for Andre Essing with a friendly character and Data plus AI tagline">
```

- [x] **Step 2: Add the transactional systems sentence**

Insert this sentence into the existing About text near the enterprise IT paragraph:

```text
I also bring deep database experience from transactional systems through analytical platforms, which helps me connect operational data realities with modern Data and AI foundations, including emerging patterns around Lakebase.
```

- [x] **Step 3: Keep the About text concise**

Do not add a separate highlights block. The existing text should carry the story without repeating the same points in a table.

## Task 4: Verify And Commit

**Files:**
- Verify: `README.md`
- Verify: `images/banner.png`
- Verify: `images/social-preview.jpg`

- [x] **Step 1: Inspect rendered Markdown structure**

Run:

```bash
sed -n '1,260p' README.md
```

Expected: README keeps the existing text mostly intact, contains the new sentence, and includes the compact highlights table.

- [x] **Step 2: Verify final git diff**

Run:

```bash
git diff -- README.md images/banner.png images/social-preview.jpg docs/superpowers/plans/2026-06-14-warm-personal-profile-refresh.md
git status --short
```

Expected: product diff includes README, image assets, and this plan. `.superpowers/` may remain untracked but must not be staged or committed.

- [x] **Step 3: Commit implementation**

Run:

```bash
git add README.md images/banner.png images/social-preview.jpg docs/superpowers/plans/2026-06-14-warm-personal-profile-refresh.md
git add images/andre-character.png
git commit -m "Refresh profile with warm personal visuals"
```

Expected: commit succeeds. If `images/andre-character.png` was not created, omit that `git add` line.
