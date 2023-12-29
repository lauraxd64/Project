const items = document.querySelectorAll(".item img");
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".pin");

items.forEach((val, index) => {
    val.src = "../wp-content/themes/salient/img/BgAnimado/" + (index + 1) + ".png";
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "150%+=1200px",
        /*markers: true,*/
    }
});

tl.to(".items img", {scale: 1}, 0);
tl.to(".items", {scale: 2, rotate: 0}, 0);


tl.to(".overlay", {height: "100%"}, .2);
tl.to(".overlay h1", {scale: 5}, .6);
tl.to(".items", {scale: .8, opacity: .2}, .6);

/*Scroll Horizontal*/

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scrollx",
    pin: true,
    scrub: 1,
    end: "+=3000",
  }
});

