gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const lightModeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        star: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

lightModeTimeline.from(".line-one span", {
    y: "100vh", stagger: .2, duration: 2
})
.to(".line-one", {
    backgroundColor: "yellow", duration: 2
})
.from(".sun", {
    x: "100vw", duration: 2
})
.to(".line-one span", {
    x: "100vw", duration: 3
}, "+=5")
.to(".sun", {
    x: "-100vw", duration: 3
}, "<")
.to(".line-one", {
    backgroundColor: "white", duration: 2
})


const orText = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        star: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

orText.from(".line-two span:first-child", {
    x: "-200vw", scale: 10, duration: 1
})
.from(".line-two span:last-child", {
    x: "200vw", scale: 10, duration: 1
}, "<")
.to(".line-two span:first-child", {
    y:"-50%", duration: 1
})
.to(".line-two span:first-child", {
    y:0, duration: 1
})

.to(".line-two span:last-child",{
    y:"-50%", duration: 1
})
.to(".line-two span:last-child",{
    y:"0", duration: 1
})

const darkModeTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-three",
        star: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

darkModeTimeline.from(".line-three span", {
    y: "100vh", stagger: .6, duration: 2
})
.to(".line-three", {
    backgroundColor: "black", color: "white", backgroundPositionX: 0
})
.from(".moon", {
    x: "100vw",
    duration: 2
}, "-=1.3")