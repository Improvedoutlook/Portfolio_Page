// ==================== GSAP INITIALIZATION ====================
// Register plugins only if they are available.
// This prevents elements from getting stuck in a hidden state if a plugin fails to load.
const hasScrollTrigger = typeof ScrollTrigger !== 'undefined';
const hasScrollToPlugin = typeof ScrollToPlugin !== 'undefined';

if (hasScrollTrigger && hasScrollToPlugin) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
} else if (hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
} else if (hasScrollToPlugin) {
    gsap.registerPlugin(ScrollToPlugin);
}

// Small helper: avoid GSAP's "target not found" warnings by skipping any block
// whose selectors don't match at least one element on the current page.
function pageHas(selectors) {
    return document.querySelectorAll(selectors).length > 0;
}

// ==================== HERO SECTION ANIMATIONS ====================
// Only runs when the hero block actually exists on the page (home page only).
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
if (pageHas(".hero-text, .hero-subtitle, .hero .cta-button")) {
    heroTimeline
        // Fade in each word in the hero (no positional movement)
        .from(".hero-text", {
            opacity: 0,       // Start invisible
            duration: 1,      // Take 1 second
            stagger: 0.2      // Delay each element by 0.2s
        })
        // Then fade in the subtitle
        .from(".hero-subtitle", {
            opacity: 0,
            duration: 0.8
        }, "-=0.5")          // Start 0.5s before previous animation ends (overlap)
        // Finally fade in the hero button
        .from(".hero .cta-button", {
            opacity: 0,
            duration: 0.6,
            immediateRender: false
        }, "-=0.3");
}

// ==================== PROJECT CARDS SCROLL ANIMATION ====================
if (hasScrollTrigger && pageHas(".project-card")) {
    gsap.set(".project-card", { opacity: 0 });

    gsap.to(".project-card", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
}

// ==================== SKILLS SECTION SCROLL ANIMATION ====================
if (hasScrollTrigger && pageHas(".skill-category")) {
    gsap.set(".skill-category", { opacity: 0 });

    gsap.to(".skill-category", {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
    });
}

// ==================== ABOUT SECTION SCROLL ANIMATION ====================
if (hasScrollTrigger && pageHas(".about-content")) {
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false
    });
}

// ==================== CONTACT SECTION SCROLL ANIMATION ====================
if (hasScrollTrigger && pageHas(".contact-content")) {
    gsap.from(".contact-content", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false
    });
}

// ==================== SECTION TITLE ANIMATIONS ====================
if (hasScrollTrigger && pageHas(".section-title")) {
    gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            immediateRender: false
        });
    });
}

// ==================== FLOATING PARTICLES EFFECT ====================
function createParticles() {
    const particleCount = 30;
    const background = document.querySelector('.background');
    if (!background) return; // skip on pages without a particle backdrop

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        background.appendChild(particle);

        // Animate each particle to float around randomly
        gsap.to(particle, {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            duration: gsap.utils.random(10, 20),
            repeat: -1,
            yoyo: true,
            ease: 'none'
        });

        // Twinkle effect
        gsap.to(particle, {
            opacity: gsap.utils.random(0.2, 0.8),
            duration: gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true
        });
    }
}

createParticles();

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
if (pageHas('a[href^="#"]')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                if (hasScrollToPlugin) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, autoKill: false },
                        ease: "power2.inOut"
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ==================== CTA BUTTON INTERACTION ====================
const heroButton = document.querySelector('.hero .cta-button');
if (heroButton) {
    heroButton.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            if (hasScrollToPlugin) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: projectsSection, autoKill: false },
                    ease: "power2.inOut"
                });
            } else {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// ==================== ADVANCED HOVER EFFECTS ====================
// forEach on an empty NodeList is a no-op, so no guard needed — but we still
// avoid calling gsap.to on nothing.
if (pageHas('.project-card')) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.02, duration: 0.3, overwrite: 'auto' });
        });
        card.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.3, overwrite: 'auto' });
        });
    });
}

// ==================== PARALLAX EFFECT ON SCROLL ====================
if (hasScrollTrigger && document.querySelector('.background')) {
    gsap.to('.background', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
        y: 200,
        ease: 'none'
    });
}

// ==================== ACTIVE NAV LINK INDICATOR ====================
// Update nav link styling based on current section
if (pageHas('section')) {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = '#667eea';
            } else {
                link.style.color = '#ffffff';
            }
        });
    });
}

// ==================== GSAP TEXT ANIMATION ON LOAD ====================
window.addEventListener('load', () => {
    if (hasScrollTrigger) ScrollTrigger.refresh();
});

document.addEventListener('DOMContentLoaded', () => {
    if (hasScrollTrigger) ScrollTrigger.refresh();
});

// ==================== MOUSE FOLLOW EFFECT (Optional Enhancement) ====================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const glow = document.querySelector('.background');
    if (glow && window.scrollY < window.innerHeight * 2) {
        const xPercent = (mouseX / window.innerWidth) * 10;
        const yPercent = (mouseY / window.innerHeight) * 10;
        gsap.to(glow, {
            duration: 0.5,
            backgroundPosition: `${xPercent}% ${yPercent}%`,
            overwrite: 'auto'
        });
    }
});

// ==================== DISABLE ANIMATIONS FOR REDUCED MOTION ====================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.5);
}

// ==================== PAGE VISIBILITY API ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.play();
    }
});

console.log('Portfolio animations initialized successfully!');
