# Cursor + GitHub Prompt Guide for NextivaDeck

## How Cursor Works

### Opening Chat
Press **Cmd+L** to open the chat panel on the right side of Cursor.

### Agent Mode vs Ask Mode
At the bottom of the chat panel, there's a mode dropdown:
- **Agent mode** — Cursor can edit files, run commands, commit, push, and make changes. **Use this for everything below.**
- **Ask mode** — Read-only. Cursor can only answer questions, not change anything.

Always make sure you're in **Agent mode** when you want Cursor to do something.

### Referencing Files
Type `@` in the chat to tag a specific file or folder so Cursor knows exactly what you're talking about.

Example: *"Look at @src/components/slides/CoverSlide.tsx and change the subtitle text."*

### Screenshots
Click the **camera icon** in the chat input to capture part of your screen. Then describe what you want changed alongside the image.

Example: *"[screenshot attached] This spacing looks off — tighten the gap between the title and the metrics cards."*

### One Task at a Time
Don't combine five things into one message. Finish one task, verify it looks right, then ask for the next. Cursor works best with focused, single requests.

---

## How to Talk About Slides

The deck has three views in the catalog. When telling Cursor which slide you mean, always specify which view you're referring to:

| View | What it means | Current count |
|---|---|---|
| **Published** | Slides visible in the live deck | 37 slides |
| **Hidden** | Slides that exist but are hidden from the deck | 60 slides |
| **All Slides** | Every slide in the full catalog order | 97 slides |

### The Right Way to Reference a Slide

**Good — be specific:**

- *"Look at **published slide 15** — that's the CX Portfolio Thomas slide. Change the title."*
- *"Look at **catalog position 45** — that's the Monetization Evolution slide."*
- *"Go to the **Yaniv-VersionG** branch, find **their published slide 22**, and bring it to main."*
- *"The slide with ID `ai-defensibility-v2-copy-2`."*
- *"The slide called 'AI Agents in Action'."*

**Bad — too vague:**

- *"Look at slide 15"* — Cursor won't know if you mean published 15, catalog 15, or hidden 15.
- *"The AI slide"* — there are 20+ AI-related slides.

### Reference Patterns

| You want to say | Say it like this |
|---|---|
| A slide by its position in the live deck | *"Published slide 8"* |
| A slide by its position in the full catalog | *"Catalog position 26, the Market slide"* |
| A slide by name | *"The slide called 'AI Agents in Action'"* |
| A slide by ID | *"The slide with ID `ai-defensibility-v2-copy-2`"* |
| A slide on another branch | *"Published slide 22 on the Yaniv-VersionG branch"* |

---

## Basic Git Operations

### Pushing Your Changes

**Simple push:**
> Commit and push my changes to main.

**See what changed first, then push:**
> Show me what files I've changed, then commit and push to main.

**Custom commit message:**
> Commit with the message "Update financials slide numbers" and push to main.

**What happens:** Cursor will stage your files, create a commit, and push to the `main` branch on GitHub. You should see `main -> main` in the output confirming it went through.

---

### Pulling Latest Changes

**Get the latest (no local changes):**
> Pull the latest changes from main.

**You have uncommitted work you want to keep:**
> I have local changes I want to keep. Fetch and pull the latest from main without losing my work.

**What happens:** Cursor will stash your local work, pull the latest, then re-apply your changes on top. If there's a conflict, it will show you and ask how to resolve it.

---

### Checking Status

**Where am I? What have I changed?**
> What branch am I on? Do I have any uncommitted changes? Show me.

**Recent history:**
> Show me the last 10 commits on main.

---

### Working with Branches

**See all branches:**
> Show me all Git branches, local and remote.

**Switch to a branch:**
> Switch to the Yaniv-VersionG branch.

**Switch and start the dev server:**
> Check out Yaniv-VersionG and run the dev server so I can see it.

**Go back to main:**
> Switch back to main.

---

### Undoing Things

**Undo uncommitted changes:**
> Undo all my uncommitted changes. Go back to the last commit.

**Undo the last commit (haven't pushed yet):**
> Undo my last commit but keep the file changes.

**Pushed something bad:**
> Revert the last commit on main and push the revert.

---

## Slide Operations

### Bringing a Slide from Another Branch

> Go to the **Yaniv-VersionG** branch and find their **published slide 22**. Bring that slide into main. **Check `slideRegistry.ts` and `slide-order.json` for ID conflicts — if the ID already exists on main, create a new unique one** (e.g. append `-v2`). Register it in `slideRegistry.ts` and add it to `slide-order.json` as the last published slide. Run `npm run build` to make sure there are no errors, then push to main.

### Creating a New Slide

> Create a new dark-theme slide called "Q4 Financial Results". **Generate a unique kebab-case ID and verify it doesn't already exist in `slideRegistry.ts` or `slide-order.json`.** Create the component file, register it in `slideRegistry.ts` under `SLIDE_COMPONENTS` and `DEFAULT_SLIDE_ORDER`, and add it to `slide-order.json` as the last published slide. Run `npm run build` to confirm it compiles, then push to main.

### Duplicating a Slide

> Duplicate published slide 25 ("Revenue & Margin"). **Create a new unique ID** — don't reuse the original. Create a new component file, register it in `slideRegistry.ts`, and add it to `slide-order.json` right after the original. Run `npm run build`, then push to main.

### Moving a Slide

> Move the "Leadership" slide to be right after "Financial Overview" in the published deck.

### Hiding / Showing a Slide

> Hide the "AI Tandem" slide from the published deck.

> Un-hide the "Summary" slide so it shows up in the published deck again.

### Editing a Slide

> Open published slide 22 ("AI Defensibility") and change the subtitle to "Three Pillars of Competitive Advantage".

> [attach screenshot] Make this slide match the screenshot. Adjust the spacing, font sizes, and colors to match.

### Pulling Multiple Slides from Another Branch

> From Yaniv-VersionG, bring over their published slides 10, 15, and 22 into main. For each one, **check for ID conflicts in `slideRegistry.ts` and `slide-order.json`**. If an ID already exists, create a unique one with a suffix. Add them as the last published slides in order. **Confirm zero duplicate IDs when done.** Run `npm run build`, then push to main.

---

## Dealing with Build Errors and Deployment

### The Red X on GitHub

After you push to main, go to GitHub and look at your latest commit. You'll see either:
- **Green checkmark** — The Vercel build passed. Your changes will show up on the live site.
- **Red X** — The Vercel build failed. Your changes are pushed but the live site will NOT update until this is fixed.

**If you see a red X, tell Cursor:**

> The Vercel deployment failed after my last push. Run `npm run build` locally, show me the errors, fix them, and push again.

### Making Sure Builds Pass Before Pushing

To avoid red Xs in the first place, get in the habit of asking Cursor to build before pushing:

> Run `npm run build` to check for errors. If it passes, commit and push to main.

Or just add it to any push prompt:

> Commit my changes, run `npm run build` first to make sure it compiles, then push to main.

**What happens:** `npm run build` compiles the entire app the same way Vercel does. If there are TypeScript errors, import issues, or broken references, they'll show up here instead of failing on GitHub after the push.

### Changes Not Showing Up on the Live Site

If you pushed and GitHub shows a green checkmark but the live site hasn't updated:
- Wait 1-2 minutes — Vercel deployments take a moment.
- Hard refresh the page (Cmd+Shift+R) to clear browser cache.

If GitHub shows a red X:
> The deployment failed. Run `npm run build`, fix the errors, push again.

---

## When Things Go Wrong

### White Screen / Error Messages

If the app shows a white screen or a big red error message in the browser:

1. **Copy the error text** from the browser screen (or the terminal if the dev server crashed).
2. **Paste it into Cursor chat and say:**

> Fix this error: [paste the error message here]

Cursor will read the error, find the broken file, and fix it. If the error is in the terminal (dev server), you can also just say:

> The dev server crashed. Look at the terminal error and fix it.

### Import Errors After Bringing In a Slide

If you brought a slide from another branch and now get errors like `Module not found` or `Cannot find module`:

> I imported a slide from another branch and now there are import errors. Check that the component file exists, that it's registered in `slideRegistry.ts` with the correct import path, and that the ID is in `slide-order.json`. Fix whatever is missing.

### Merge Conflicts

If Cursor tells you there are merge conflicts:

> I have merge conflicts. Show me what's conflicting and help me resolve them. Keep my changes where there's a conflict.

---

## Defensive Phrases — Add These to Any Slide Prompt

These are short add-ons you can tack onto the end of any prompt to prevent common problems:

| Add this to your prompt | What it prevents |
|---|---|
| *"Check for ID conflicts in `slideRegistry.ts` and `slide-order.json`"* | Duplicate IDs silently breaking slides |
| *"Create a new unique ID if one already exists"* | Overwriting an existing slide |
| *"Register it in all three places: component file, `slideRegistry.ts`, and `slide-order.json`"* | Slide existing in code but not appearing in the deck |
| *"Confirm there are no duplicate IDs when done"* | Cursor skipping the verification step |
| *"Make it the last published slide"* | Slide ending up hidden or in the wrong position |
| *"Run `npm run build` before pushing"* | Build failures on GitHub (red X) |
| *"Push to main"* | Cursor committing but forgetting to push |

**Example — building a safe prompt:**

Start simple:
> Grab slide 15 from Yaniv-VersionG and add it to main.

Add defense:
> Grab **published slide 15** from Yaniv-VersionG and add it to main. **Check for ID conflicts in `slideRegistry.ts` and `slide-order.json`, create a unique ID if needed, register it in all three places. Run `npm run build` to verify, then push to main.**

---

## Quick Reference Card

| I want to... | Say this |
|---|---|
| Push my work | *"Run `npm run build`, commit and push to main"* |
| Pull latest | *"Pull latest from main"* |
| See what I changed | *"Show me git status and diff"* |
| Switch branches | *"Switch to Yaniv-VersionG"* |
| Undo everything | *"Undo all uncommitted changes"* |
| Grab a slide from another branch | *"Grab published slide 22 from Yaniv-VersionG, check for ID conflicts, register everywhere, build, push"* |
| Edit a slide | *"Open published slide 8 and change the title to X"* |
| Create a new slide | *"Create a new slide called X with a unique ID, register it everywhere, build, push to main"* |
| Hide a slide | *"Hide the Leadership slide"* |
| Fix an error | *"Fix this error: [paste error]"* |
| Fix failed deployment | *"Run `npm run build`, fix the errors, push again"* |
| Start the dev server | *"Run the dev server"* |
| Check what branch I'm on | *"What branch am I on?"* |

---

## Golden Rules

1. **Always specify which view** — say "published slide 15" not just "slide 15"
2. **Always mention ID conflicts** when creating or importing slides
3. **Run `npm run build` before pushing** to catch errors before they hit GitHub
4. **Say "push to main" explicitly** — Cursor won't assume you want to push
5. **Use Agent mode** — Ask mode can only answer questions, not make changes
6. **One task per prompt** — don't bundle multiple things together
7. **Verify before pushing** — say "show me what changed" if you're unsure
8. **Use screenshots** for visual issues — attach one and say "make it look like this"
9. **If you see a white screen or error** — copy the error text, paste it into chat, say "fix this"
10. **If the live site isn't updating** — check GitHub for red Xs on your commits
