const preloader = document.querySelector(".preloader_wrapper");
const videoBackground = document.querySelector("#hero_animation");
const heroSection = document.querySelector('.hero_section');
const sectionA = document.querySelector('#section-A')
const navbar = document.querySelector('#navbar');
const mapAnimation = document.querySelector('#map-animation')
const sectionABreakpoint = document.querySelector('#section-A-breakpoint')
const scrollIndicator = document.querySelector('.scrollindicator_container')

window.onscroll = function() {showSections()};

// Page loading
// document.onload(pageLoaded());

function pageLoaded() {
  preloader.classList.add("page-loaded");
  videoBackground.play();
  mapAnimation.pause();
  scrollIndicator.classList.add("fade-in")
};

scrollIndicator.addEventListener('click', function(){
  element.scrollIntoView(sectionABreakpoint)
});

// Section transitions

function showSections() {
  if (document.documentElement.scrollTop > 64) {
    sectionA.classList.add("visible-section");
    heroSection.classList.add("hidden");
    navbar.classList.add("show-navbar");
    mapAnimation.play();
  }

  else {
    sectionA.classList.remove("visible-section");
    navbar.classList.remove("show-navbar")
    heroSection.classList.remove("hidden");
    mapAnimation.pause();
  }
}