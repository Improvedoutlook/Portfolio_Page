# Development & Customization Guide

Complete guide to customize and extend your portfolio.

## 🎨 Design Customization

### Color Scheme

Edit the gradient colors in `css/styles.css`:

```css
/* Primary gradient (purple to pink) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
color: #f093fb;

/* Background dark */
background: #0a0a0f;

/* Muted text */
color: #a0a0b0;
```

**Popular Color Combinations:**

1. **Cyberpunk** (Current):
   - Primary: `#667eea` → `#764ba2`
   - Accent: `#f093fb`

2. **Ocean Vibes**:
   - Primary: `#0099ff` → `#006FFF`
   - Accent: `#00d4ff`
   - Background: `#0a1428`

3. **Sunset**:
   - Primary: `#ff6b6b` → `#ee5a6f`
   - Accent: `#ffd93d`
   - Background: `#2d1b2e`

### Typography

Current fonts stack:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Change to other options:
- `'Poppins'` - Modern and bold
- `'Raleway'` - Elegant and thin
- `'Space Mono'` - Technical feel
- `'IBM Plex Sans'` - Professional

## 📝 Content Updates

### Update Hero Section

In `index.html`:
```html
<h1>
    <span class="hero-text">Hi, I'm </span>
    <span class="gradient-text hero-text">Your Name</span>
</h1>
<p class="hero-subtitle">Your professional tagline here</p>
```

### Add Projects

Template for new project card:
```html
<div class="project-card">
    <div class="project-card-header">
        <h3>Project Name</h3>
        <span class="project-icon">→</span>
    </div>
    <p>Project description highlighting key features and impact.</p>
    <div class="tech-tags">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
        <span class="tech-tag">Technology 3</span>
    </div>
</div>
```

### Add Skills

Template for new skill category:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-items">
        <span class="skill-item">Skill 1</span>
        <span class="skill-item">Skill 2</span>
        <span class="skill-item">Skill 3</span>
    </div>
</div>
```

### Update Contact Information

Change email in contact section:
```html
<a href="mailto:your.email@example.com" class="cta-button contact-button">
    Send Me An Email
</a>
```

Update social links:
```html
<a href="https://github.com/YOUR-USERNAME" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">LinkedIn</a>
<a href="https://twitter.com/YOUR-HANDLE" target="_blank">Twitter</a>
```

## ⚡ Animation Customization

### Modify Hero Animation

In `js/animations.js`:
```javascript
heroTimeline
    .from(".hero-text", {
        y: 100,           // Increase for bigger entrance
        opacity: 0,
        duration: 1,      // Faster (0.5) or slower (2)
        stagger: 0.2      // Delay between each word
    })
```

### Adjust Scroll Animations

Change when animations trigger:
```javascript
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",    // "80%" means wait until 80% visible
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    // ... animation properties
});
```

**Trigger Options:**
- `"top 80%"` - Closer to entering viewport
- `"top 50%"` - Middle point
- `"top 20%"` - Further into viewport
- `"center center"` - Centered

### Available Easing Functions

- `"power1.out"` - Subtle deceleration
- `"power2.out"` - Moderate deceleration
- `"power3.out"` - Strong deceleration
- `"power4.out"` - Very strong deceleration
- `"elastic.out(1)"` - Bouncy effect
- `"back.out(1.2)"` - Overshoot effect
- `"circ.inOut"` - Circular motion
- `"expo.inOut"` - Exponential timing

## 🖼️ Adding Images

1. Create `assets` folder for images
2. Reference in HTML:
```html
<img src="assets/project-screenshot.png" alt="Project description">
```

3. Style in CSS:
```css
img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
}
```

## 📱 Responsive Design

Breakpoints already configured:
- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: Under 768px
- Small Mobile: Under 480px

To add custom media queries:
```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

## 🔧 Performance Optimization

### Minimize GSAP Animations

Only animate visible elements:
```javascript
// Check if element is in viewport before animating
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animation
        }
    });
});
```

### Reduce Particle Count

In `js/animations.js`:
```javascript
function createParticles() {
    const particleCount = 15;  // Reduce from 30
    // ... rest of code
}
```

### Disable Parallax on Mobile

```javascript
if (window.innerWidth > 768) {
    // Enable parallax only on desktop
    gsap.to('.background', {
        scrollTrigger: { /* ... */ }
    });
}
```

## 🔍 SEO Optimization

Update meta tags in `index.html`:
```html
<meta name="description" content="Brief description of your portfolio">
<meta name="keywords" content="developer, portfolio, projects">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="URL to preview image">
```

## 🧪 Testing Checklist

- [ ] All links work (internal and external)
- [ ] Navigation smooth on all devices
- [ ] Forms submit correctly (if added)
- [ ] Images load properly
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Responsive at all breakpoints
- [ ] Fast loading time (< 3 seconds)
- [ ] Accessible (keyboard navigation works)

## 🚀 Performance Metrics

Target metrics:
- **Lighthouse Score**: 90+
- **Page Load Time**: < 2 seconds
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

Check with Google PageSpeed Insights: https://pagespeed.web.dev/

## 📚 Additional Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [GSAP Documentation](https://greensock.com/docs/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [CSS-Tricks](https://css-tricks.com/)

## 💡 Pro Tips

1. **Use DevTools**: Press F12 to inspect elements and test changes
2. **Mobile First**: Test on mobile before desktop
3. **Performance**: Use browser DevTools Performance tab
4. **Accessibility**: Ensure proper heading hierarchy (h1 → h2 → h3)
5. **Version Control**: Commit changes regularly to Git

## Getting Help

- Check console for error messages (F12 → Console)
- Review GSAP documentation for animation issues
- Test in multiple browsers
- Compare with working version
