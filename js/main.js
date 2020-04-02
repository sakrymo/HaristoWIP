const preloader = document.querySelector(".preloader_wrapper");
const videoBackground = document.querySelector("#hero_animation");
const heroSection = document.querySelector('.hero_section');
const sectionA = document.querySelector('#section-A')
const navbar = document.querySelector('#navbar');
const mapAnimation = document.querySelector('#map-animation')

window.onscroll = function() {showSections()};

// Page loading
// document.onload(pageLoaded());

function pageLoaded() {
  preloader.classList.add("page-loaded");
  videoBackground.play();
  mapAnimation.pause();
};

// Smooth scrolling
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;


  function animationScroll(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  };

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(animation);
}

let section1 = document.querySelector('.section1')
section1.addEventListener('click', function(){
  smoothScroll('.section2', 1000);
});

// Section transitions

function showSections() {
  if (document.documentElement.scrollTop > 64) {
    sectionA.classList.add("visible-section");
    navbar.classList.add("show-navbar");
    mapAnimation.play();
  }

  else {
    sectionA.classList.remove("visible-section");
    navbar.classList.remove("show-navbar")
    mapAnimation.pause();
  }
}