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
const checkboxRightMobile = document.querySelector('#menu-right-mobile');
const fsMenu1 = document.querySelector('.fs-menu.firstmenu');
const fsMenu2 = document.querySelector('.fs-menu.secondmenu');
const fsMenuM = document.querySelector('.fs-menu.mobile');
const mobileView = document.querySelector('#mobile');
const checkboxMobile = document.querySelector('.hamburgermenu.mobile > input')
const anchorFirstSection = document.querySelector('#anchor-section-A')
const davinciAnimation = document.querySelector('#davinci-animation')

window.onscroll = function () {
  showSections()
};

window.addEventListener('load', function() {
  videoBackground.play();
  preloader.classList.add("page-loaded");
  mapAnimation.pause();
  scrollIndicator.classList.add("fade-in")
})

scrollIndicator.addEventListener('click', function () {
  sectionABreakpoint.scrollIntoView();
});

function removeHash () { 
  history.pushState("", document.title, " "); 
}

// Section transitions

function showSections() {
  // Section A - We Are Global
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
  // Section B - We Are Marketers
  if (document.documentElement.scrollTop > 128+(window.innerHeight)) {
    document.getElementById('section-B').classList.add('visible-section');
    sectionA.classList.add('hidden');
    mapAnimation.pause();
    davinciAnimation.play();
  } else {
    document.getElementById('section-B').classList.remove('visible-section');
    sectionA.classList.remove('hidden');
    mapAnimation.play();
    davinciAnimation.pause();
  }
  // Section C - We Are a Network
  if (document.documentElement.scrollTop > 172+(window.innerHeight*2)) {
    davinciAnimation.pause();
    mapAnimation.pause();
    document.getElementById('section-C').classList.add('visible-section');
  } else {
    document.getElementById('section-C').classList.remove('visible-section');
  }
}

// DaVinci Animation In & Out

// davinciAnimation.addEventListener('play', function() {
//   if (davinciAnimation)
//   while (davinciAnimation.currentTime) {

//   }
// })

// Menu states

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

function toggleMenuMobile(checkbox) {
  if (checkbox.checked === true) {
    console.log('menu is now active the sign is X');
    fsMenuM.classList.add('active-menu');
    document.querySelector('body').style = "overflow: hidden;";
  } else if (checkbox.checked === false) {
    console.log('menu is now inactive the sign is hamburger');
    fsMenuM.classList.remove('active-menu');
    document.querySelector('body').style = "overflow: visible;";
  }
}

// Menu triggers
checkboxLeft.addEventListener('click', function () {
  toggleMenu(checkboxLeft);
});
checkboxRight.addEventListener('click', function () {
  toggleMenu(checkboxRight);
});
checkboxRightMobile.addEventListener('click', function () {
  toggleMenuMobile(checkboxRightMobile);
});

// Particles.js on mobile
if (window.innerWidth < 768) {
  particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

// Anchor remove hash
anchorFirstSection.addEventListener('click', function() {
  setTimeout(function(){removeHash()}, 500);
});