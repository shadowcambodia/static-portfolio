import './style.css'
import {imageSequence} from "./script/animate/animation.js";
import $ from 'jquery'

// animateCards();
// revealCard()
$(document).ready(function() {

    imageSequence({
        canvas: "#image-sequence", // <canvas> object to draw images to
        scrollTrigger: {
            start: 0,   // start at the very top
            end: "max", // entire page
            scrub: true // important!
        }
    });
});