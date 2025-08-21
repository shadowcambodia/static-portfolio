import './style.css'
import { imageSequence} from "./script/animate/animation-landing.js";
import $ from 'jquery'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {animateAbout} from "./script/animate/animate-about.js";

// animateCards();
// revealCard()
$(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    imageSequence({
        canvas: "#image-sequence", // <canvas> object to draw images to
        scrollTrigger: {
            trigger: "#clearAnimate",
            start: "top",   // start at the very top
            end: "bottom", // entire page
            scrub: true // important!
        }
    });

    animateAbout()


});