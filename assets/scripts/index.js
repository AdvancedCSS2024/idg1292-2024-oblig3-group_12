gsap.registerPlugin(ScrollTrigger);

function initScrollAnimations() {
  // Floating effect for the boat
  gsap.to("#boat", {
    y: "+=5", // Simulate floating by moving up and down
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut",
  });

  // Text animations and trash falling effect
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section-1",
      start: "top top",
      end: "200% bottom",
      scrub: true,
      pin: true,
      markers: true, // Useful for debugging, remove once finalized
    },
  });

  // Text fading in and updating
  mainTimeline
    .fromTo(".section-1__text", { opacity: 0 }, { opacity: 1, duration: 1 })
    .addLabel("textUpdate1")
    .to(
      ".section-1__text",
      {
        onStart: () => {
          document.querySelector(".section-1__text").textContent =
            "There’s so much junk at sea, the debris has formed giant garbage patches.";
        },
        duration: 0.5,
      },
      "textUpdate1+=1"
    )
    .addLabel("textUpdate2")
    .to(
      ".section-1__text",
      {
        onStart: () => {
          document.querySelector(".section-1__text").textContent =
            "There are five of them around the world, and the largest — the Great Pacific Garbage Patch — includes an estimated 1.8 trillion pieces of trash and covers an area twice the size of Texas.";
        },
        duration: 0.5,
      },
      "textUpdate2+=1"
    );

  // Trash animation triggered after the final text update
  mainTimeline.fromTo(
    "#plasticBag, #plasticCup, #plasticPiece, #plasticRings, #sandal, #tire, #microPlastic, #largeBottle",
    {
      y: -50, // Start above the viewport
      opacity: 0,
    },
    {
      y: "+=350", // End below the viewport
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "power1.in",
    },
    "textUpdate2+=1" // Trigger this animation sequence right after the final text update
  );
}

document.addEventListener("DOMContentLoaded", initScrollAnimations);
