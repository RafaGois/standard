document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('#hero');
    const heroTitle = hero.querySelector('.hero-title');
    const heroDescription = hero.querySelector('.hero-description');
    const heroImage = hero.querySelector('.hero-image');
    const heroBtn = hero.querySelector('.hero-btn');

    const tl = gsap.timeline();

    tl.from(heroTitle, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2",
    });
    
    tl.from(heroDescription, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2",
    });
    
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
    });
    
    
});