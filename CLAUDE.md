# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Mark Owens' personal portfolio + blog: a static Jekyll site with a retro-terminal aesthetic, animated with GSAP. No frontend framework, no build tooling, no package.json — just HTML/Liquid, one CSS file, and one JS file. GitHub Pages builds it directly from `main` with no Gemfile or CI required.

## Commands

There is no build/lint/test tooling in this repo (no package.json, no test suite). The only relevant local commands are for previewing the Jekyll build:

```bash
bundle install              # only needed once, if previewing locally with a Gemfile
bundle exec jekyll serve    # serves at http://localhost:4000/Portfolio_Page/
```

Without Ruby/Jekyll installed, `index.html` can be opened directly in a browser, but Liquid includes/layouts won't render — only useful for checking the standalone hero page in isolation, not `/blog/`.

Deployment is automatic: push to `main` and GitHub Pages runs `jekyll build`.

## Architecture

**Jekyll templating.** `_layouts/default.html` is the shared shell (head, nav, footer, GSAP script includes) used by every page. `_layouts/post.html` wraps `default` for individual blog posts. Partials live in `_includes/`: `head.html`, `nav.html`, `scripts-gsap.html` (GSAP core + ScrollTrigger + ScrollToPlugin from CDN), `scripts-app.html` (loads local `js/animations.js`).

**baseurl gotcha.** The site is served at `/Portfolio_Page/`, set via `baseurl` in `_config.yml`. All internal links in templates use Liquid's `relative_url` filter (e.g. `{{ '/blog/' | relative_url }}`) rather than hardcoded paths — preserve this pattern in any new links so local preview and the live GitHub Pages URL stay in sync.

**Blog posts vs. permalink.** Posts live in `_posts/` using Jekyll's `YYYY-MM-DD-title.md` naming. `_config.yml` sets `permalink: /blog/:slug.html` scoped to `type: posts` only (via `defaults:`), so post URLs stay stable and don't collide with other pages. When adding new `defaults:` scopes in `_config.yml`, put more specific scopes last — Jekyll applies them bottom-up and later entries win on overlap.

**One CSS/JS file each.** All styling is in `css/styles.css` (retro terminal theme: `#2b2b2b` background, `#DD8B2C` amber accent, `Courier New` monospace throughout — see the Design Tokens table in `README.md`). All animation logic is in `js/animations.js`, loaded on every page but written so each block is a no-op where its target doesn't exist.

**Animation guard pattern (important when editing `js/animations.js`).** The home page and blog pages share this one script, so every GSAP block is gated:
- `hasScrollTrigger` / `hasScrollToPlugin` flags check plugin availability before registering or using them, with vanilla-JS fallbacks (e.g. `scrollIntoView`) if a CDN plugin fails to load.
- The `pageHas(selector)` helper skips a block entirely if no matching element exists on the current page, avoiding GSAP's "target not found" console warnings.
- Follow this same guard style for any new animation block — don't assume hero/project/blog elements are all present on every page.

**Blog-only chrome.** The floating particle background (`.background` div + `createParticles()`) and scroll-driven parallax only apply on blog pages — `default.html` conditionally renders `<div class="background">` when `is_blog_page` (`page.layout == 'post'` or URL contains `/blog/`), and `createParticles()` itself no-ops if `.background` isn't present.

**Excluded docs.** `_config.yml`'s `exclude:` list keeps root-level `*.md` guides and `SETUP_COMPLETE.txt` out of the built site — only `_posts/` content and page-like files (`index.html`, `blog/index.html`) are rendered.

**Stale docs, prefer README.md.** `00_START_HERE.md`, `QUICK_START.md`, `DEVELOPMENT_GUIDE.md`, `CONFIG_REFERENCE.md`, `PROJECT_SUMMARY.md`, `INDEX.md`, and `SETUP_COMPLETE.txt` describe an earlier "cyberpunk" gradient-theme version of the site that predates the current retro-terminal redesign and Jekyll blog migration (e.g. they reference colors like `#667eea`/`#f093fb` and a `Your Name` placeholder that no longer exist in the codebase). Treat `README.md` as the current source of truth over these files; they're excluded from the built site and are effectively historical scaffolding notes.

## Adding a blog post

Create `_posts/YYYY-MM-DD-slug.md` with front matter:

```markdown
---
title: "Your Post Title"
date: 2026-MM-DD
---
```

It will automatically appear on `/blog/` (newest first, with the `▸ LATEST` badge) and land at `/blog/slug.html`. Retro content treatments available in post body: `<section class="numbered-area">` for left-bordered callouts, `<ul class="terminal-list">` for `>`-prefixed lists.
