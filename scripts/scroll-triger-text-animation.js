var animationDuration = .75;

gsap.registerPlugin(ScrollTrigger);

var scrollObject = function () {
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {

        gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: animationDuration * animationDuration,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        } 
      );
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: 0, autoAlpha: 1 },
        {
          duration: animationDuration ,
          y: 0,
          autoAlpha: 1,
          ease: "forward",
          overwrite: "auto"
        }
      );
    },
  });
});

$(window).off("scroll");
};

$(window).on("scroll", function () {
    scrollObject();
    $(window).off("scroll");
});