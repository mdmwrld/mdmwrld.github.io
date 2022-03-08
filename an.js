let tl = new TimelineMax({onUpdate:updatePercentage});
let tl2 = new TimelineMax({onUpdate:updatePercentage})
const controller = new ScrollMagic.Controller();

tl.from("h2", 4, {x:-800})

tl2.from("h3",3, {x:800})

const scene = new ScrollMagic.Scene({
    triggerElement: ".nat",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setTween(tl)
        .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".joe",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setTween(tl2)
        .addTo(controller);

function updatePercentage() {
    tl.progess();
}