var animationDuration = .75;
var hasRun = false;

gsap.registerPlugin(ScrollTrigger);

var scrollObject = function () {
if(!hasRun){
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: function () {

      // if(hasRun = true) alert("true")
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
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
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
    
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 1, overwrite: "auto" });
    }
  });
});
hasRun = true;
}
$(window).off("scroll");
};

$(window).on("scroll", function () {
    scrollObject();
    $(window).off("scroll");
});