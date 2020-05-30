//import gsap from "gsap";
import {  TweenMax , gsap } from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut"
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.1,
    y: 4,
    skewX: 2,
    ease: "power1.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut"
  });
};

// adds city image once you hover on
export const handleCity = (city, target) => {

  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 1,
    transformOrigin: " down right"
  });
};

// Removes the city image once you hover off
export const handleCityReturn = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0
  });
};

export const handleLogo =(logo , menu)=>{
  TweenMax.from(menu ,1 , {duration: 0.5, opacity :0 , x:-80 ,  ease : "Power3.InOut"});
  TweenMax.from(logo ,1 , {duration: 0.5, opacity :0 , x:-80 ,  ease : "Power3.InOut"});
}
export const handleUpcomingConf=(para , photo , title , title_2)=>{
  TweenMax.from(para ,2 , {duration: 1, opacity :0 , y: 60 ,  ease : "Power3.InOut"});
  TweenMax.from(photo ,2 , {duration: 1, opacity :0 , y: -60 ,  ease : "Power3.InOut"});
  TweenMax.from(title ,2 , {duration: 2, opacity :0 , x: -60 ,  ease : "Power3.InOut"});
  TweenMax.from(title_2 ,2 , {duration: 2, opacity :0 , y: -60 ,  ease : "Power3.InOut"});
}
