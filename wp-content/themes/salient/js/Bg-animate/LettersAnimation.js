let text;

function runSplit() {   
    let currentElement = $(".split-type");
    text = new SplitType('#target', { types: 'lines, words' });
    $(".line").append("<div class='line-mask'></div>");
}

runSplit();

window.addEventListener("resize", function () {
    text.revert();
    runSplit();
});

$(".line").each(function (index){
    let triggerElement = $ (this);
    let targetElement = $ (this).find('.line-mask');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start:"top center",
            end: "bottom center",
            scrub: 1,
            /*markers:true*/
        }
    });
    tl.to(targetElement, {
        left: "200%",
        duration: 1
    });
});
