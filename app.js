let first_count = 20,
  first_offset = 200;

gsap.to(".first-img-blk", {
  backgroundPosition: -first_offset * first_count * 2 + "px 100%",
  ease: "steps(" + first_count + ")",
  scrollTrigger: {
    trigger: ".first",
    start: "center center",
    end: "+=" + first_count * first_offset,
    pin: true,
    scrub: true,
    markers: false
  }
});

let second_count = 24,
  second_offset = 200;

gsap.to(".second-img-blk", {
  backgroundPosition: -second_offset * second_count * 2 + "px 100%",
  ease: "steps(" + second_count + ")",
  scrollTrigger: {
    trigger: ".second",
    start: "center center",
    end: "+=" + second_count * second_offset,
    pin: true,
    scrub: true,
    markers: false
  }
});
