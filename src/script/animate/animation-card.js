import gsap from "gsap";
import $ from "jquery";
import {createCard} from "../../template/experience_card.js";

export function animateCards(){
    const cardEls = document.querySelectorAll(".exp-card");
    const cardHeight = cardEls[0].offsetHeight;
    const gap = parseFloat(getComputedStyle(cardEls[0]).marginBottom) || 0;
    const step = cardHeight + gap;



    const tl = gsap.timeline({
        // scrollTrigger: {
        //     trigger: "#experience",
        //     start: "top",   // start at the very top
        //     end: "bottom", // entire page
        // }
    });
    tl.to(cardEls, {
        y: `-=${step}`,
        duration: .2,
        ease: "none",
        repeat: 5,

    })
// snap back to original (Card 1 at top)
    tl.to(cardEls, {
        y: 0,
        duration: 1,
        ease: "power4.out"
    });
}
export function revealCard(){
    const cards = $(".exp-card");
    const height = $(cards[0]).outerHeight();
    const tl = gsap.timeline({defaults: {duration: 1, ease: "power1.out"}});
    for (let i = 1; i <= 3; i++) {
        tl
            .to(cards[i],{
                height: 'auto',
            })
            .to(cards[i],{
                height: `${height}`,
            })
            .to(cards,{
                y: `-=${height}`,
            },"<")
    }


}
export function initCard(){
    const container = document.getElementById('exp-card-container');
    if(container){
        for (let i = 1; i <= 6; i++) {
            const card = createCard(`Card ${i}`, `This is card number ${i}.`);
            container.appendChild(card);
        }
    }
}
