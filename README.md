# Mark's Portfolio

A futuristic, animated portfolio website showcasing projects and skills using modern web technologies and GSAP animations.

## 🌟 Features

- **Futuristic Design**: Dark theme with gradient accents and glass morphism effects
- **GSAP Animations**: Smooth scroll-triggered animations and parallax effects
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Performance Optimized**: Minimal dependencies, fast loading times
- **Particle Effects**: Animated background particles for visual interest
- **Smooth Navigation**: Seamless scroll navigation between sections

## 🎨 Design Highlights

- **Hero Section**: Eye-catching introduction with gradient text
- **Projects Showcase**: Animated project cards with hover effects
- **Skills Display**: Organized skill categories with interactive elements
- **About Section**: Personal narrative with smooth animations
- **Contact Section**: Easy way to get in touch with social links

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with gradients, animations, and glass morphism
- **JavaScript**: Interactive features and smooth scrolling
- **GSAP 3**: Professional animation library
  - Core animations
  - ScrollTrigger plugin for scroll-based animations
  - ScrollToPlugin for smooth scrolling

## 📋 Project Structure

```
Portfolio_Page/
├── index.html           # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── animations.js   # GSAP animation logic
└── assets/             # Placeholder for images and media
```

## 🛠️ Customization Guide

### Update Personal Information

1. **Logo/Name**: Edit the `.logo` text in `index.html`
2. **Hero Text**: Modify the hero section heading and subtitle
3. **About Section**: Update the about content with your information
4. **Contact Email**: Change the email link in the contact section
5. **Social Links**: Update GitHub, LinkedIn, and Twitter URLs

### Modify Colors

Edit the CSS variables and gradient colors in `css/styles.css`:
- Primary gradient: `#667eea 0%, #764ba2 100%`
- Secondary accent: `#f093fb`
- Background: `#0a0a0f`

### Add Your Projects

In the projects grid section, duplicate a `.project-card` and update:
- Title
- Description
- Technology tags

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment to GitHub Pages

1. Create a GitHub repository named `your-username.github.io`
2. Clone the repository locally
3. Copy all project files into the repository
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```
5. Your site will be live at `https://your-username.github.io`

### Using a Different Repository Name

If deploying to `your-username/portfolio`:
1. Create repository `portfolio`
2. In repository settings, enable GitHub Pages
3. Set source to `main` branch
4. Site will be available at `https://your-username.github.io/portfolio`

## 📊 Performance Tips

- Minify CSS and JavaScript for production
- Optimize images in the assets folder
- Consider using a CDN for GSAP library
- Use Chrome DevTools to monitor animation performance

## 🎯 Advanced Customization

### Add Page Sections

1. Create new HTML section with unique ID
2. Style in `css/styles.css`
3. Add GSAP animation in `js/animations.js`:

```javascript
gsap.from(".your-section", {
    scrollTrigger: {
        trigger: ".your-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});
```

### Customize Animations

GSAP animations are highly configurable:
- Adjust `duration` for speed
- Change `ease` functions for different motion curves
- Modify `stagger` values for cascading effects

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)

## License

License: MIT — see the LICENSE file for details.

## 💡 Tips for Success

1. **Keep Content Fresh**: Regularly update projects and skills
2. **Quality Over Quantity**: Better to have fewer quality projects than many mediocre ones
3. **Professional Links**: Ensure all external links work and are up-to-date
4. **Performance**: Test on various devices and browsers
5. **SEO**: Update meta tags in HTML for better search visibility

---

**Built with ❤️ using modern web technologies**
