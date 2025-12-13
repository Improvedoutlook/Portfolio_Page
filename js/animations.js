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

// ==================== HERO SECTION ANIMATIONS ==================== 
// This creates a staggered reveal effect for the hero text and elements
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
    // Animate each word in the hero from below with opacity fade
    .from(".hero-text", {
        y: 100,           // Start 100px below
        opacity: 0,       // Start invisible
        duration: 1,      // Take 1 second
        stagger: 0.2      // Delay each element by 0.2s
    })
    // Then animate the subtitle
    .from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")          // Start 0.5s before previous animation ends (overlap)
    // Finally animate the hero button (scope to hero only so other CTAs don't get affected)
    .from(".hero .cta-button", {
        scale: 0.8,       // Start slightly smaller
        opacity: 0,
        duration: 0.6
        ,immediateRender: false
    }, "-=0.3");

// ==================== PROJECT CARDS SCROLL ANIMATION ==================== 
// Only run scroll-triggered animations if ScrollTrigger is available.
if (hasScrollTrigger) {
    // Use set() to ensure initial state, then animate from there
    gsap.set(".project-card", { y: 100, opacity: 0 });

    gsap.to(".project-card", {
        scrollTrigger: {
            trigger: ".projects",    // Start when .projects enters viewport
            start: "top 80%",       // When top of .projects is 80% down the viewport
            end: "bottom 20%",      // End animation when bottom is 20% down
            toggleActions: "play none none none"  // Play on enter, do nothing on leave to keep cards visible
        },
        y: 0,                       // Animate to normal position
        opacity: 1,                 // Animate to fully visible
        duration: 0.8,
        stagger: 0.2,               // Animate each card with 0.2s delay
        ease: "power2.out"
    });
}

// ==================== SKILLS SECTION SCROLL ANIMATION ==================== 
if (hasScrollTrigger) {
    // Use set() to ensure initial state, then animate from there
    gsap.set(".skill-category", { y: 80, opacity: 0 });

    gsap.to(".skill-category", {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 75%",
            toggleActions: "play none none none"  // Keep cards visible after animation completes
        },
        y: 0,                       // Animate to normal position
        opacity: 1,                 // Animate to fully visible
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.2)"
    });
}

// ==================== ABOUT SECTION SCROLL ANIMATION ==================== 
if (hasScrollTrigger) {
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        x: -100,                    // Start 100px to the left
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false
    });
}

// ==================== CONTACT SECTION SCROLL ANIMATION ==================== 
// Do not force-hide content unless ScrollTrigger is available.
if (hasScrollTrigger) {
    gsap.from(".contact-content", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.3)",
        immediateRender: false
    });
}

// ==================== SECTION TITLE ANIMATIONS ==================== 
if (hasScrollTrigger) {
    gsap.utils.toArray(".section-title").forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"  // Keep titles visible after animation completes
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            immediateRender: false
        });
    });
}

// ==================== FLOATING PARTICLES EFFECT ==================== 
// Create 30 random particles that float across the screen
function createParticles() {
    const particleCount = 30;
    const background = document.querySelector('.background');
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        background.appendChild(particle);
        
        // Animate each particle to float around randomly
        gsap.to(particle, {
            x: gsap.utils.random(-200, 200),    // Move randomly between -200px and 200px
            y: gsap.utils.random(-200, 200),
            duration: gsap.utils.random(10, 20), // Random speed between 10-20 seconds
            repeat: -1,                 // Repeat forever
            yoyo: true,                 // Go back and forth
            ease: 'none'
        });
        
        // Also animate the opacity for a twinkling effect
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
// When clicking nav links, smoothly scroll to the section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Prefer GSAP ScrollToPlugin when available, else use native smooth scrolling.
            if (hasScrollToPlugin) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        autoKill: false
                    },
                    ease: "power2.inOut"
                });
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ==================== CTA BUTTON INTERACTION ==================== 
const heroButton = document.querySelector('.hero .cta-button');
if (heroButton) {
    heroButton.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            if (hasScrollToPlugin) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: projectsSection,
                        autoKill: false
                    },
                    ease: "power2.inOut"
                });
            } else {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// ==================== ADVANCED HOVER EFFECTS ==================== 
// Add interactive effect to project cards on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ==================== PARALLAX EFFECT ON SCROLL ==================== 
// Create a subtle parallax effect for the background
if (hasScrollTrigger) {
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

// ==================== GSAP TEXT ANIMATION ON LOAD ==================== 
// Animate the page load with a loading effect
window.addEventListener('load', () => {
    // Trigger any additional animations after page is fully loaded
    if (hasScrollTrigger) {
        ScrollTrigger.refresh();
    }
});

// Also refresh ScrollTrigger when DOM is fully ready to ensure all elements are measured correctly
document.addEventListener('DOMContentLoaded', () => {
    if (hasScrollTrigger) {
        ScrollTrigger.refresh();
    }
});

// ==================== MOUSE FOLLOW EFFECT (Optional Enhancement) ==================== 
// Create a subtle mouse follow effect on the background
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Optional: Create a glow effect following the mouse
    // This is subtle and uses CSS filters for better performance
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
// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Reduce animation intensity for accessibility
    gsap.globalTimeline.timeScale(0.5);
}

// ==================== PAGE VISIBILITY API ==================== 
// Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.play();
    }
});

console.log('Portfolio animations initialized successfully!');
