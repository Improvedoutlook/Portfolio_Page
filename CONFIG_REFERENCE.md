# Configuration Reference

Quick reference for common customizations.

## Color Palette

Update these values in `css/styles.css`:

### Primary Gradient
```css
/* Used for: Logo, titles, buttons */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
- **Color 1**: `#667eea` (Purple)
- **Color 2**: `#764ba2` (Dark Purple)

### Accent Gradient
```css
/* Used for: Hover effects, special highlights */
background: linear-gradient(135deg, #764ba2 0%, #f093fb 100%);
```
- **Color 3**: `#f093fb` (Pink)

### Background
```css
/* Main background */
background: #0a0a0f;  /* Very dark gray/black */

/* Secondary background */
background: #1a1a2e;  /* Dark blue-gray */
```

### Text Colors
```css
/* Primary text */
color: #ffffff;       /* White */

/* Secondary text */
color: #a0a0b0;       /* Muted gray */

/* Muted text */
color: #666;          /* Dark gray */
```

## Animation Configuration

### Hero Timeline
Location: `js/animations.js` - Line ~17
```javascript
heroTimeline
    .from(".hero-text", {
        y: 100,           // Start offset (pixels)
        opacity: 0,       // Start transparent
        duration: 1,      // Animation length (seconds)
        stagger: 0.2      // Delay between elements (seconds)
    })
```

**Adjust for:**
- Faster entrance: Change `duration` from 1 to 0.5
- Slower entrance: Change `duration` from 1 to 2
- More delay between words: Increase `stagger` to 0.4
- Bigger entrance: Increase `y` value to 150

### Scroll Animations
Location: `js/animations.js` - Lines ~45+
```javascript
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",      // When to start (80% down viewport)
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    y: 100,                    // Animation offset
    opacity: 0,
    duration: 0.8,             // How long animation takes
    stagger: 0.2,              // Delay between cards
    ease: "power2.out"         // Motion curve
});
```

**Trigger Points:**
- `"top 80%"` - Animates when section is 80% in viewport (earlier)
- `"top 50%"` - Animates when section is 50% in viewport (middle)
- `"top 20%"` - Animates when section is 20% in viewport (later)

**Easing Options:**
- `"power1.out"` - Subtle
- `"power2.out"` - Moderate
- `"power3.out"` - Strong
- `"back.out(1.2)"` - Bouncy
- `"elastic.out(1)"` - Springy
- `"circ.inOut"` - Smooth circular

### Particle Effects
Location: `js/animations.js` - Line ~90
```javascript
const particleCount = 30;  // Number of particles (reduce for performance)
```

**Adjust for:**
- More particles: Increase to 40-50 (performance impact)
- Fewer particles: Decrease to 10-20 (better performance)
- No particles: Set to 0 (or comment out createParticles())

## Spacing & Layout

### Section Padding
Location: `css/styles.css`
```css
.projects {
    padding: 5rem 5%;  /* Top/Bottom | Left/Right */
}
```

**Standard values:**
- Generous: `5rem 5%`
- Compact: `3rem 5%`
- Wide: `7rem 5%`

### Grid Layout
Location: `css/styles.css` - `.projects-grid`
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;  /* Space between cards */
```

**Adjust for:**
- Larger cards: Increase `minmax(300px` to `400px`
- More columns: Decrease to `250px`
- Less gap: Change `2rem` to `1.5rem` or `1rem`

## Typography

### Font Families
Current: `'Inter'` with system font fallback

**Alternative options:**
```css
/* Modern and bold */
font-family: 'Poppins', sans-serif;

/* Elegant */
font-family: 'Raleway', sans-serif;

/* Technical */
font-family: 'JetBrains Mono', monospace;

/* Professional */
font-family: 'IBM Plex Sans', sans-serif;
```

### Font Sizes
```css
/* Hero heading */
font-size: clamp(2.5rem, 8vw, 5rem);  /* Min | Mobile | Max */

/* Section titles */
font-size: clamp(2rem, 5vw, 3.5rem);

/* Regular text */
font-size: 1.1rem;
```

### Line Height
```css
/* Headings - tighter */
line-height: 1.1;

/* Body text - readable */
line-height: 1.8;
```

## Button Styling

### CTA Button
Location: `css/styles.css` - `.cta-button`
```css
padding: 1rem 2.5rem;           /* Vertical | Horizontal */
border-radius: 50px;            /* Roundness (50px = fully rounded) */
font-size: 1.1rem;
font-weight: 600;
```

**Modify for:**
- Larger button: Increase padding to `1.2rem 3rem`
- Smaller button: Decrease to `0.8rem 2rem`
- Less rounded: Change `50px` to `20px` or `10px`

## Breakpoints (Mobile Responsive)

Location: `css/styles.css`
```css
@media (max-width: 768px) {   /* Tablets and below */
}

@media (max-width: 480px) {   /* Mobile phones */
}
```

**Standard breakpoints:**
- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: Under 768px
- Small mobile: Under 480px

## Navigation Bar

Location: `css/styles.css` - `nav`
```css
nav {
    padding: 2rem 5%;           /* Vertical | Horizontal */
    backdrop-filter: blur(10px); /* Glass effect strength */
    background: rgba(10, 10, 15, 0.7);  /* Transparency */
}
```

**Adjust for:**
- Thicker navbar: Increase padding
- More transparent: Reduce 0.7 to 0.5
- Less blurred: Reduce blur(10px) to blur(5px)

## Card Effects

### Glass Morphism
Location: `css/styles.css` - `.project-card`
```css
background: rgba(255, 255, 255, 0.05);  /* Opacity level */
backdrop-filter: blur(10px);             /* Blur strength */
border: 1px solid rgba(255, 255, 255, 0.1);  /* Border opacity */
```

**Adjust for:**
- More solid: Increase opacity 0.05 to 0.15
- More blurred: Increase blur from 10px to 20px
- More visible border: Increase 0.1 to 0.3

## Transitions & Hover Effects

### Hover Transition
Location: `css/styles.css` - `.project-card:hover`
```css
transform: translateY(-10px);        /* Move up on hover */
box-shadow: 0 20px 40px rgba(...);   /* Shadow on hover */
```

**Adjust for:**
- Less lift: Change -10px to -5px
- More lift: Change -10px to -15px
- Softer shadow: Reduce blur value (20px)
- Harder shadow: Increase blur value (40px)

## File Size & Performance

### Critical Resources
- `index.html` - ~12 KB
- `css/styles.css` - ~15 KB
- `js/animations.js` - ~10 KB
- **GSAP library** - ~90 KB (from CDN)

### Optimization Paths

**Reduce particles for better performance:**
```javascript
const particleCount = 10;  // Instead of 30
```

**Minify CSS before deployment:**
```bash
# Use online minifiers or build tools
cssnano, clean-css, etc.
```

**Lazy load images (when added):**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## CDN Resources

### GSAP Libraries Used
```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<!-- ScrollTrigger Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- ScrollTo Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
```

### Alternative CDN
If cdnjs.cloudflare.com is unavailable:
```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
```

## SEO Meta Tags

Location: `index.html` - `<head>` section
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, portfolio, projects">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Professional description">
```

## Deployment Configuration

### For GitHub Pages Root Domain
No changes needed - deploy directly

### For GitHub Pages Subdirectory
Add to HTML `<head>`:
```html
<base href="/portfolio/">
```

Update GSAP CDN if needed (usually not required)

---

**Last Updated**: December 2025
**Version**: 1.0
