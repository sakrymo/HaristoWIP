const preloader = document.querySelector(".preloader-container");
const videoBackground = document.querySelector("#hero-animation");
const heroSection = document.querySelector('.hero-section');
const sectionA = document.querySelector('#section-A')
const navbar = document.querySelector('#navbar');
const mapAnimation = document.querySelector('#map-animation')
const sectionABreakpoint = document.querySelector('#section-A-breakpoint')
const scrollIndicator = document.querySelector('.scrollindicator-container')
const checkboxLeft = document.querySelector('#menu-left');
const checkboxRight = document.querySelector('#menu-right');
const fsMenu = document.querySelector('#fs-menu');

window.onscroll = function () {
  showSections()
};

// Page loading
// document.onload(pageLoaded());

function pageLoaded() {
  preloader.classList.add("page-loaded");
  videoBackground.play();
  mapAnimation.pause();
  scrollIndicator.classList.add("fade-in")
};

scrollIndicator.addEventListener('click', function () {
  sectionABreakpoint.scrollIntoView();
});

// Section transitions

function showSections() {
  if (document.documentElement.scrollTop > 64) {
    sectionA.classList.add("visible-section");
    heroSection.classList.add("hidden");
    navbar.classList.add("show-navbar");
    mapAnimation.play();
  } else {
    sectionA.classList.remove("visible-section");
    navbar.classList.remove("show-navbar")
    heroSection.classList.remove("hidden");
    mapAnimation.pause();
  }
}

function toggleMenu(checkbox) {

  if (checkbox === checkboxLeft) {
    if (checkbox.checked === true && sectionA.classList.contains('visible-section') !== true) {
      console.log(`Left menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: hidden;";
      fsMenu.classList.add('active-menu');
      checkboxLeft.parentElement.classList.add('ontop');
    } else if (checkbox.checked === false) {
      console.log(`Left menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: visible;";
      fsMenu.classList.remove('active-menu');
    }
  }

  if (checkbox === checkboxRight) {
    if (checkbox.checked === true && sectionA.classList.contains('visible-section') === true) {
      console.log(`Right menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: hidden;";
    } else if (checkbox.checked === false) {
      console.log(`Right menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: visible;";
    }
  }
}

// Menu triggers
checkboxLeft.addEventListener('click', function () {
  toggleMenu(checkboxLeft)
});
checkboxRight.addEventListener('click', function () {
  toggleMenu(checkboxRight)
});