document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.scale-in', {
        scale: 0,
        duration: 1,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.scale-in',
            start: 'top 80%',
        }
    });

    gsap.from('.bottom-in', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power2",
        scrollTrigger: {
            trigger: '.bottom-in',
            start: 'top 80%',
        }
    });
});