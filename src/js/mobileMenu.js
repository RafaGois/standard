document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    gsap.set(mobileMenu, {
        visibility: "hidden",
    });

    const tl = gsap.timeline();
          tl.to(mobileMenu, {
            xPercent: -100,
            duration: 1,
            ease: "power2.inOut",
          });
          tl.to(mobileMenu, 
            {
            visibility: "hidden",
            duration: 1,
            ease: "power2.inOut",
            y: -40,
          }); 

    mobileMenuBtn.addEventListener('click', function() {
        tl.reverse();
    });

    const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
    mobileMenuCloseBtn.addEventListener('click', function() {
        //mobileMenu.classList.add('hidden');
        /* gsap.set("#mobile-menu", {
            clearProps: "visibility",
          }); */

          tl.play();
    });
});