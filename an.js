let tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("h2", 4, {x:-800})
//tl.from("h3",3, )

const scene = new ScrollMagic.Scene({
    triggerElement: ".nat",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setTween(tl)
        .addTo(controller);

function updatePercentage() {
    tl.progess();
    //console.log(tl.progress());
}