import gsap from "gsap";

export function animateAbout (){
gsap.from(".landing-text",{
    opacity: 0,
    duration:1,
    ease: "power1.in",
    stagger: "-=.2"
    }

)
}
