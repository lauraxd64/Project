/**
 * Box Animation
 */
/*
gsap.to(".box", {
    rotation: 360, 
    duration: 3,
    scrollTrigger: {
      trigger: ".container-wrap",
      start: "top left",
      scrub: 1,
      end: "bottom 75%",
      //markers: true
    }
  });
  */

  // Select the text you want to make it circular
const textAll = document.querySelector(".circular-text .text")

// Make the selected text circler with CircleType
// you can find the full docs here: https://circletype.labwire.ca/
const rotate = new CircleType(textAll).radius(35)

// Add a scroll listener to the window object and rotate the selected text according to the scroll
// we used * 0.15 to make the rotation looks smoother
window.addEventListener("scroll", function(){
  textAll.style.transform=`rotate(${window.scrollY * 0.15}deg)`

})