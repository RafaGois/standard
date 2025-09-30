document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    gsap.set(mobileMenu, {
        visibility: "hidden",
    });

    const tl = gsap.timeline({
        paused: true,
    });
          tl.fromTo(mobileMenu, {
            xPercent: -100,
            duration: 1,
            ease: "power2.inOut",
          }, {
            visibility: "visible",
            xPercent: 0,
          });

          tl.to(document.querySelector('#mobile-menu-btn'), {
            opacity: 0,
            rotate: 360,
            ease: "power2.inOut",
          }, "<");

          tl.to(mobileMenu.querySelector('.mobile-menu-close-btn'), {
            opacity: 1,
            rotate: 360,
            ease: "power2.inOut",
          }, "<");

          tl.from(mobileMenu.querySelector('.mobile-menu-title'), {
            opacity: 0,
            xPercent: -100,
            ease: "power2.inOut",
          }, "+=0.1");

          tl.from(mobileMenu.querySelectorAll('.mobile-menu-link'), {
            opacity: 0,
            xPercent: -100,
            stagger: 0.1,
            ease: "power2.inOut",
          }, "<");

    mobileMenuBtn.addEventListener('click', function() {
        tl.play();
    });

    const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
    mobileMenuCloseBtn.addEventListener('click', function() {
          tl.reverse();
    });

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            tl.reverse();
        });
    });
});