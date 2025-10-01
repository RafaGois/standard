document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('#hero');
    const heroTitle = hero.querySelector('.hero-title');
    const heroDescription = hero.querySelector('.hero-description');
    const heroImage = hero.querySelector('.hero-image');
    const heroBtn = hero.querySelector('.hero-btn');

    const headerTl = gsap.timeline();
    const tl = gsap.timeline();

    headerTl.from(document.querySelector('.header-logo'), {
        scale: 0,
        duration: 1,
        ease: "power2",
    });

    headerTl.from(document.querySelectorAll('.header-link'), {
        scale: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2",
    });

    tl.from(heroTitle, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2",
    }, "<");
    
    tl.from(heroDescription, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2",
    }, "-=0.3");
    
    tl.from(heroImage, {
        opacity: 0,
        x: 20,
        duration: 1,
        ease: "power2",
    });
    
    tl.from(heroBtn, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2",
    }, "<");
});