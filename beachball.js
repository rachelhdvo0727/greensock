"use strict";
import { gsap } from "gsap";
const ball = document.querySelector(".ball");

gsap.to(ball, { transform: "translateX(400px)", duration: 2 });
gsap.to(ball, {
  transform: " translateX(400px) rotate(200deg)",
  duration: 2
});
gsap.to(ball, {
  transform: " translateX(400px)",
  scale: 0,
  rotation: 200,
  duration: 2,
  delay: 1
});
