gsap.to("#page2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end: "top 150%",
        duration:3,
        scrub:10,
        pin:true
    }
})
