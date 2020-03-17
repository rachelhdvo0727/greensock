"use strict";
import { gsap } from "gsap";
const ball = document.querySelector(".ball");
gsap.to(ball, { transform: "translateX(400px)", duration: 2 });
