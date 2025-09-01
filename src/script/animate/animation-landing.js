import gsap from 'gsap'
import {createCard} from "/src/template/experience_card.js";
import $ from 'jquery'
import { ScrollTrigger } from "gsap/ScrollTrigger";




let LANDING_FRAMES =[
]

export function generateFramePaths() {
    const path ='/assets/img/landing';
    const prefix = "frame_";
    const  ext = "png";
    const count = 337;
    for (let i = 1; i <= count; i++) {
        const num = String(i).padStart(4, "0"); // 0001, 0002...
        LANDING_FRAMES.push(`${path}/${prefix}${num}.${ext}`);
    }
}

export function imageSequence(config) {
    console.log($(config.canvas).length)
    if(!$(config.canvas).length)
        return ;
    generateFramePaths()

    let playhead = { frame: 0 }
    let ctx = gsap.utils.toArray(config.canvas)[0].getContext("2d")
    let onUpdate = config.onUpdate
    let images;

    // Function to draw the current frame
    function updateImage() {
        const img = images[Math.round(playhead.frame)];
        if (img && img.complete) {        // <-- ensure image is loaded
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
            onUpdate && onUpdate.call(this);
        }
    }

    // Preload all images
    images = LANDING_FRAMES.map((url, i) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            // Draw first frame when first image is loaded
            if (i === 0) updateImage();
        };
        img.onerror = () => console.error("Failed to load image:", url);
        return img;
    });
    return gsap.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
        scrollTrigger: config.scrollTrigger,
        duration: 11
    });
}

