# Mark Owens' Portfolio

A retro-terminal-themed portfolio site showcasing projects, skills, and a blog about software engineering — built with Jekyll and animated with GSAP.

🌐 **Live site:** [improvedoutlook.github.io/Portfolio_Page](https://improvedoutlook.github.io/Portfolio_Page/)

---

## ✨ Features

### Design
- 🎮 **Retro terminal aesthetic** — monospace `Courier New` typography, CRT scan-line overlay, blinking block cursors, and orange/amber (`#DD8B2C`) accents on a charcoal (`#2b2b2b`) background
- 🟧 **Pixel-panel blog layout** with mock-prompt prefixes (`>`, `##`, `▸`) and bordered content blocks
- 🧭 **Fixed nav bar** with logo, animated border highlight, and active-link indicator
- 📱 **Fully responsive** down to small mobile screens (single-column nav on `<768px`, condensed blog typography)
- ♿ **Accessibility** — `prefers-reduced-motion` slows the global GSAP timeline, focus-visible outlines on icon links, `aria-label`s on social icons

### Animations (GSAP)
- 🪄 **Hero reveal** — staggered `y`/`opacity` entrance for headline, subtitle, and CTA
- 🧱 **Scroll-triggered reveals** for project cards, skill categories, about content, contact content, and every `.section-title`
- 🖱️ **Interactive card hovers** — soft scale-up on enter, scale-back on leave
- 🌌 **Floating particle field** on blog pages only (30 animated dots with twinkle)
- 🌀 **Mouse-tracked background pan** (subtle `backgroundPosition` shift on mousemove) + scroll-driven **vertical parallax** on the blog background
- 🔗 **Smooth scroll-to** for nav anchors and the hero CTA (`ScrollToPlugin`, with a native fallback if the plugin fails to load)

### Sections
1. **Home / Hero** — name + opening line, then the hero subtitle ("A Software Engineer who's always looking for a new problem to solve…"), and a "View My Work" CTA that smooth-scrolls to projects (the site's Jekyll-level `tagline` is a shorter `"Software Engineer"` used elsewhere)
2. **Featured Projects** — three highlighted projects (each card opens its live URL; some have inline source links)
3. **Skills & Technologies** — organized under Frontend / Backend / Tools & DevOps
4. **About** — personal narrative with bordered retro styling
5. **Get In Touch** — Web3Forms-powered contact form (no `mailto:` spam exposure) and inline-svg social icons (GitHub, LinkedIn, daily.dev)

### Blog
- 📝 A Jekyll-backed blog at `/blog/` with a paginated post list and individual post pages
- 🔖 The most recent post is marked with a `▸ LATEST` badge
- ⬅️ Each post has a "← Back to Blog List" CTA at the bottom
- ✍️ Posts include extended-form writing with retro treatments like `.numbered-area` (left-bordered callouts) and `.terminal-list` (prefixed code-style lists)

---

## 🧰 Featured Projects

| Project | Stack | Description |
|---|---|---|
| [**AboveMe**](https://improvedoutlook.github.io/AboveMe/) | C#, Blazor WebAssembly, ASP.NET Core, HTML/CSS, JS | Astronomy dashboard — moon phases, constellations, comets, NASA APOD, JWST images, and meteor showers based on your location |
| [**Logger**](https://github.com/Improvedoutlook/Logger) | C, Win32, GCC | Desktop work-log aggregator with timestamped entries, spellcheck, expandable dictionary, and text-file export |
| [**Programmer_Man**](https://improvedoutlook.github.io/Programmer_Man/) | Zig, Raylib | Retro 2D platformer — play as a programmer battling bugs inside a motherboard. Playable in the browser. [Source](https://github.com/Improvedoutlook/Programmer_Man/tree/develop-main) |

---

## 🧪 Skills

**Frontend:** HTML/CSS, JavaScript, Bootstrap, GSAP, Razor, Blazor WebAssembly
**Backend:** C#, ASP.NET, SQL, Entity Framework Core, Dapper
**Tools & DevOps:** Azure, Git, GitHub, Visual Studio, VS Code

---

## 🚀 Tech Stack

- **[Jekyll](https://jekyllrb.com/)** — static site generator (GitHub Pages builds it without a Gemfile)
- **HTML5 / Liquid** — semantic markup + layouts/includes/partials
- **CSS3** — hand-rolled retro styling, scan lines, blink animation, responsive breakpoints
- **JavaScript (ES6+)** with progressive enhancement — animation logic guards every selector, falls back gracefully if any GSAP plugin fails to load
- **[GSAP 3](https://greensock.com/gsap/)** (CDN) — Core + ScrollTrigger + ScrollToPlugin

---

## 📁 Project Structure

```
Portfolio_Page/
├── _config.yml              # Jekyll config (title, url, baseurl, defaults)
├── _layouts/
│   ├── default.html         # Shared shell (head, nav, footer, scripts)
│   └── post.html            # Individual blog post layout
├── _includes/
│   ├── head.html            # <meta>, title, stylesheet link
│   ├── nav.html             # Logo + nav links (Home, Projects, Skills, About, Contact, Blog)
│   ├── scripts-gsap.html    # GSAP + ScrollTrigger + ScrollToPlugin from CDN
│   └── scripts-app.html     # Local animations.js (blog pages only)
├── _posts/
│   ├── 2025-12-20-post-1.md # "How to AI When You're a newer Dev"
│   ├── 2026-01-01-post-2.md # "Why Computer History Matters"
│   ├── 2026-02-10-post-3.md # "My Coding Journey: From Spare-Time Learner to Developer in 9 Months"
│   ├── 2026-04-04-post-4.md # "Why Communicating Technical Things is so Hard"
│   └── 2026-07-07-post-5.md # "Verification Matters More Than Ever"
├── blog/
│   └── index.html           # /blog/ index — lists posts newest-first with LATEST badge
├── assets/
│   └── Programmer_Man.png   # Logo image shown in the nav
├── css/
│   └── styles.css           # All styling (home + blog), terminal aesthetic, responsive
├── js/
│   └── animations.js        # GSAP animation logic with safe selectors / plugin guards
├── index.html               # Home page (Hero, Projects, Skills, About, Contact)
└── README.md                # ← you are here
```

Doc-only files (this README, the other `*.md` guides, `SETUP_COMPLETE.txt`, etc.) are listed in `_config.yml`'s `exclude:` so they're never built as pages. The `_posts/` files, by contrast, are intentionally processed — that's what makes them appear on `/blog/`.

---

## ✍️ Adding a New Blog Post

Posts are Markdown files in `_posts/`. The filename follows Jekyll's `YYYY-MM-DD-title.md` convention, and the front matter sets the title and date:

```markdown
---
title: "Your Post Title"
date: 2026-MM-DD
---

Write your content in standard Markdown. For retro styling, you can use:

- `<section class="numbered-area">…</section>` — left-bordered callout blocks for each numbered point
- `<ul class="terminal-list">…</ul>` — bulleted lists styled with `>` prompts

Posts automatically:
- Appear on `/blog/` (newest first)
- Get the `▸ LATEST` badge if they're at the top
- Land at a stable URL like `/blog/your-slug.html`
- Pick up the post layout (`.pixel-panel`, title + meta header, "← Back to Blog List" CTA)

---

## 🛠️ Local Development

GitHub Pages builds the site with Jekyll automatically, but you can preview locally if you'd like:

### Option A — quick (no install)
Just open `index.html` in a browser. Animations will run, but Jekyll layouts/includes won't be processed.

### Option B — full Jekyll preview
```bash
# Install Ruby + Bundler once (varies by OS)
bundle install        # installs dependencies from the (optional) Gemfile
bundle exec jekyll serve
```
Then visit `http://localhost:4000/Portfolio_Page/`.

> Tip: the `baseurl: "/Portfolio_Page"` in `_config.yml` is what makes local previews and the live GitHub Pages deploy line up at the same relative paths.

---

## 🌐 Deployment

The site is built and hosted by **GitHub Pages**:

1. Push to the `main` branch of this repo.
2. GitHub Pages runs `jekyll build` automatically.
3. The site is published at **https://improvedoutlook.github.io/Portfolio_Page/**

No CI, Gemfile, or secrets required — everything Jekyll needs is already in source.

---

## 🎨 Design Tokens

| Token | Value | Used for |
|---|---|---|
| Background | `#2b2b2b` | Page base |
| Text | `#e8e8e8` / `#b8b8b8` | Primary / secondary |
| Accent | `#DD8B2C` (amber) | Borders, bullets, prompts, hover highlights, blinking cursors |
| Muted border | `#444` | Panels, separators |
| Font | `Courier New, Courier, monospace` | Everything |

---

## 📝 License

Personal portfolio of Mark Owens — feel free to read through the source for inspiration, but please don't republish the content as your own.

---

**Built with ❤️ using Jekyll, GSAP, and a love of retro terminals.**
