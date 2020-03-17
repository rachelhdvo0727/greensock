"use strict";
import { gsap } from "gsap";
const balls = document.querySelectorAll(".ball");
const timeline = gsap.timeline({ defaults: { duration: 2 } });

timeline
  .to(balls, {
    transform: "translateX(400px)",
    stagger: 0.2,
    rotation: 360
  })
  .to(
    balls,
    {
      ease: Bounce.easeInOut(1, 0.3),
      x: 400,
      y: -50,
      duration: 0.5,
      yoyo: true,
      repeat: -1
    },
    "+=1" //delay
  );

// gsap.to(balls, {
//   duration: 0.5,
//   transform: "translateX(400px)",
//   stagger: {
//     from: "random",
//     ease: "power3.inOut"
//   }
// });
