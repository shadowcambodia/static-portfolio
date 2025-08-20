import './style.css'
import gsap from 'gsap'
import {createCard} from "./template/experience_card.js";
import $ from 'jquery'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(Physics2DPlugin,ScrollTrigger);


function animateCards(){
    const cardEls = document.querySelectorAll(".exp-card");
    const cardHeight = cardEls[0].offsetHeight;
    const gap = parseFloat(getComputedStyle(cardEls[0]).marginBottom) || 0;
    const step = cardHeight + gap;



    const tl = gsap.timeline();
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

function revealCard(){
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

const container = document.getElementById('exp-card-container');
for (let i = 1; i <= 6; i++) {
    const card = createCard(`Card ${i}`, `This is card number ${i}.`);
    container.appendChild(card);
}
// animateCards(4);
revealCard()
