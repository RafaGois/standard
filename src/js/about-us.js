document.addEventListener("DOMContentLoaded", function () {
  const aboutUs = document.querySelector("#about-us");
  const aboutUsTitle = document.querySelector(".about-us-title");
  const aboutUsDescription = document.querySelector(".about-us-description");
  const aboutUsCards = document.querySelectorAll(".about-us-card");

  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: aboutUs,
      start: "top 70%",
    },
  });

  tl.from(aboutUsTitle, {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2",
  });

  tl.from(
    aboutUsDescription,
    {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2",
    },
    "-=0.3"
  );

 
    

    const aboutusCardsTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".about-us-cards",
        start: "top 60%",
      }
    });

    aboutusCardsTl.from(
      document.querySelectorAll(".about-us-card-icon"),
      {
        scale: 0,
        duration: 1,
        ease: "elastic",
      }
    , "<"
    );

    aboutusCardsTl.from(document.querySelectorAll(".about-us-card-title"), {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2",
    }, "<");

    aboutusCardsTl.from(document.querySelectorAll(".about-us-card-description"), {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2",
    }, "<");

});
