function Page2Animation() {
  var rightElements = document.querySelectorAll(".rightelements");

  rightElements.forEach(function (element) {
    const img = element.querySelector("img");

    element.addEventListener("mouseenter", function () {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
    });

    element.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        scale: 0,
        duration: 0.3
      });
    });

    element.addEventListener("mousemove", function (e) {
      const rect = element.getBoundingClientRect();
      gsap.to(img, {
        x: e.clientX - rect.left - 50,
        y: e.clientY - rect.top - 50,
        duration: 0.2
      });
    });
  });
}
Page2Animation();


function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  if (!page3Center || !video) return;

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      borderRadius: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  video.addEventListener("click", function (e) {
    e.stopPropagation();
    video.pause();
    gsap.to(video, {
      scaleX: 0.7,
      scaleY: 0.2,
      opacity: 0,
      borderRadius: "30px",
      duration: 0.5,
      ease: "power2.out"
    });
  });
}

page3VideoAnimation();


var sections = document.querySelectorAll(".sec-page5-right");

sections.forEach(function(elem) {
  var video = elem.querySelector("video");

  elem.addEventListener("mouseenter", function() {
    video.style.opacity = 1;
    video.play();
  });

  elem.addEventListener("mouseleave", function() {
    video.style.opacity = 0;
    video.pause();
    video.currentTime = 0;
  });
});

