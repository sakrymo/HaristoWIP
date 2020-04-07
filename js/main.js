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
const fsMenu1 = document.querySelector('.fs-menu.firstmenu');
const fsMenu2 = document.querySelector('.fs-menu.secondmenu');

window.onscroll = function () {
  showSections()
};

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

  if (document.documentElement.scrollTop > 64+(window.innerHeight)) {
    document.getElementById('section-B').classList.add('visible-section');
    sectionA.classList.add('hidden');
    mapAnimation.pause();
  } else {
    document.getElementById('section-B').classList.remove('visible-section');
    sectionA.classList.remove('hidden');
    mapAnimation.play();
  }
}

function toggleMenu(checkbox) {

  if (checkbox === checkboxLeft) {
    if (checkbox.checked === true && sectionA.classList.contains('visible-section') !== true) {
      console.log(`Left menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: hidden;";
      fsMenu1.classList.add('active-menu');
      checkboxLeft.parentElement.classList.add('ontop');
    } else if (checkbox.checked === false) {
      console.log(`Left menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: visible;";
      fsMenu1.classList.remove('active-menu');
    }
  }

  if (checkbox === checkboxRight) {
    if (checkbox.checked === true && sectionA.classList.contains('visible-section') === true) {
      console.log(`Right menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: hidden;";
      fsMenu2.classList.add('active-menu');
      navbar.classList.add('second-menu-open');
      mapAnimation.pause();
    } else if (checkbox.checked === false) {
      console.log(`Right menu is now active: ${checkbox.checked}`);
      document.querySelector('body').style = "overflow: visible;";
      fsMenu2.classList.remove('active-menu');
      navbar.classList.remove('second-menu-open');
      mapAnimation.play();
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
