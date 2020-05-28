const preloader = document.querySelector(".preloader-container");
const videoBackground = document.querySelector("#hero-animation");
const heroSection = document.querySelector('.hero-section');
const sectionA = document.querySelector('#section-A')
const navbar = document.querySelector('#navbar');
const mapAnimation = document.querySelector('#map-animation')
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

// Scrolling Anchors
scrollIndicator.addEventListener('click', e => {
  scrollToSection(e);
});

document.querySelectorAll('.section-anchor').forEach(item => {
  item.addEventListener('click', e => {
    closeMenu();
    navbar.classList.remove('second-menu-open');
    scrollToSection(e);
  })
})

function scrollToSection(e) {
  const section = (e.currentTarget.attributes.goto.nodeValue);
  let offset = 100;
  let timeout = 10

  switch (section) {
    case "sectionA":
      setTimeout(() => {
        window.scrollTo(0, sectionABreakpoint+offset);
      }, timeout);
      break;
    
    case "sectionB":
      setTimeout(() => {
        window.scrollTo(0, sectionBBreakpoint+offset);
      }, timeout);  
      break;

    case "sectionC":
      setTimeout(() => {
        window.scrollTo(0, sectionCBreakpoint+offset);
      }, timeout);  
      break;
    
    case "sectionD":
      setTimeout(() => {
        window.scrollTo(0, sectionDBreakpoint+offset);
      }, timeout);
      break;

    default:
      break;
  }
}

function closeMenu() {
  document.querySelector('body').style = "overflow: visible;";
  checkboxLeft.checked = false;
  checkboxRight.checked = false;
  fsMenu1.classList.remove('active-menu');
  fsMenu2.classList.remove('active-menu');
}

// Section Positions Y
const sectionHeroBreakpoint = 0;
const sectionABreakpoint = 64;
const sectionBBreakpoint = 128+(window.innerHeight);
const sectionCBreakpoint = 172+(window.innerHeight*2);

// Section transitions

function showSections() {
  // Section A - We Are Global
  if (document.documentElement.scrollTop > sectionABreakpoint) {
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
  if (document.documentElement.scrollTop > sectionBBreakpoint) {
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
  if (document.documentElement.scrollTop > sectionCBreakpoint) {
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

document.querySelector('button#testheading').addEventListener('click', function() {
  if (document.querySelector('#test123').classList.contains('heading-hidden')) {
    document.querySelector('#test123').classList.remove('heading-hidden');
  } else {
    document.querySelector('#test123').classList.add('heading-hidden');
  }
})