"use strict";
import { gsap } from "gsap";
const balls = document.querySelectorAll(".ball");

gsap.to(balls, {
  transform: "translateX(400px)",
  duration: 2,
  stagger: 0.2,
  rotation: 360
});

// gsap.to(balls, {
//   duration: 0.5,
//   transform: "translateX(400px)",
//   stagger: {
//     from: "random",
//     ease: "power3.inOut"
//   }
// });
gsap.to(balls, {
  delay: 2,
  duration: 2,
  //   stagger: {
  //     each: 0.2,
  //     from: "random"
  //   },
  ease: Bounce.easeInOut(1, 0.3),
  rotation: 360,
  x: 400,
  y: -50,
  duration: 0.5,
  yoyo: true,
  repeat: -1
});
