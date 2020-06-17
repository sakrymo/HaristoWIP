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
const checkboxMobile = document.querySelector('.hamburgermenu.mobile > input');
const anchorFirstSection = document.querySelector('#anchor-section-A');
const davinciAnimation = document.querySelector('#davinci-animation');
const sectionHeading = document.querySelectorAll('.section-heading');
const sectionOverline = document.querySelectorAll('.overline');
const sectionCopy = document.querySelectorAll('.copy');
const mobileMenu = document.querySelector('.hamburgermenu.mobile');

let activeSection = ""

window.onscroll = function () {
  hideMobileMenu();
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
    navbar.classList.remove('second-menu-open');
    closeMenu();
    scrollToSection(e);
  })
})

function scrollToSection(e) {
  const section = (e.currentTarget.attributes.goto.nodeValue);
  let offset = 100;
  let timeout = 10

  switch (section) {
    case "sectionHero":
      setTimeout(() => {
        window.scrollTo(0, sectionHeroBreakpoint);
      }, timeout);
      break;

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

// Davinci show & hide
// let showDavinci = showDavinci();
// let hideDavinci = hideDavinci();

// function showDavinci() {
//   setInterval(() => {
//     if (davinciAnimation.currentTime > 5) {
//       davinciAnimation.pause();
//       console.log('showDavinci called');
//     }
//   }, 50);
// }

// function hideDavinci() {
//   setInterval(() => {
//     if (davinciAnimation.currentTime > 6) {
//       davinciAnimation.play();
//       console.log('hideDavinci called');
//     }
//   }, 50);
// }

// function davinciIn() {
//   if (davinciAnimation.currentTime > 6) {
//     davinciAnimation.currentTime = 0;
//     davinciAnimation.play();
//   }
//   showDavinci();
// }

// function davinciOut() {
//   if (davinciAnimation.currentTime < 6) {
//     davinciAnimation.currentTime = 6.5;
//     davinciAnimation.play();
//   }
//   hideDavinci();
// }

// Section Positions Y
const sectionHeroBreakpoint = 0;
const sectionABreakpoint = 64;
const sectionBBreakpoint = 128+(window.innerHeight);
const sectionCBreakpoint = 172+(window.innerHeight*2);
const sectionDBreakpoint = 216+(window.innerHeight*3);

// Section heading transition
function sectionHeadingTransition(inOrOut, sectionNumber) {
  switch (inOrOut) {
    case 'in':
      sectionHeading[sectionNumber-1].classList.remove('heading-hidden');
      break;
    case 'out':
      sectionHeading[sectionNumber-1].classList.add('heading-hidden');
      break
    default:
      break;
  }
}
// Section overline transition
function sectionOverlineTransition(inOrOut, sectionNumber) {
  switch (inOrOut) {
    case 'in':
      sectionOverline[sectionNumber-1].classList.remove('overline-hidden');
      break;
    case 'out':
      sectionOverline[sectionNumber-1].classList.add('overline-hidden');
      break;
    default:
      break;
  }
}

// Section copy transition
function sectionCopyTransition(inOrOut, sectionNumber) {
  switch (inOrOut) {
    case 'in':
      sectionCopy[sectionNumber-1].classList.remove('hidden');
      break;
    case 'out':
      sectionCopy[sectionNumber-1].classList.add('hidden');
      break;
    default:
      break;
  }
}
// Section transitions

function showSections() {
  if (document.documentElement.scrollTop < sectionABreakpoint) {
    activeSection = "sectionHero"
  }
  // Section A - We Are Global
  if (document.documentElement.scrollTop > sectionABreakpoint) {
    sectionA.classList.add("visible-section");
    heroSection.classList.add("hidden");
    navbar.classList.add("show-navbar");
    mapAnimation.play();
    activeSection = "sectionA";
    sectionHeadingTransition('in', 1);
    sectionOverlineTransition('in', 1);
    sectionCopyTransition('in', 1);
  } else {
    sectionA.classList.remove("visible-section");
    navbar.classList.remove("show-navbar")
    heroSection.classList.remove("hidden");
    mapAnimation.pause();
    sectionHeadingTransition('out', 1);
    sectionOverlineTransition('out', 1);
    sectionCopyTransition('out', 1);
  }
  // Section B - We Are Marketers
  if (document.documentElement.scrollTop > sectionBBreakpoint) {
    document.getElementById('section-B').classList.add('visible-section');
    sectionA.classList.add('hidden');
    mapAnimation.pause();
    if (davinciAnimation.paused === true) {
      setTimeout(() => {
        davinciAnimation.currentTime = 0;
      }, 450);
    }
    davinciAnimation.play();
    activeSection = "sectionB";
    sectionHeadingTransition('in', 2);
    sectionOverlineTransition('in', 2);
    sectionCopyTransition('in', 2);
  } else {
    document.getElementById('section-B').classList.remove('visible-section');
    sectionA.classList.remove('hidden');
    mapAnimation.play();
    davinciAnimation.pause();
    sectionHeadingTransition('out', 2);
    sectionOverlineTransition('out', 2);
    sectionCopyTransition('out', 2);
  }
  // Section C - We Are a Network
  if (document.documentElement.scrollTop > sectionCBreakpoint) {
    davinciAnimation.pause();
    mapAnimation.pause();
    document.getElementById('section-C').classList.add('visible-section');
    activeSection = "sectionC";
    sectionHeadingTransition('in', 3);
    sectionOverlineTransition('in', 3);
    sectionCopyTransition('in', 3);
  } else {
    document.getElementById('section-C').classList.remove('visible-section');
    sectionHeadingTransition('out', 3);
    sectionOverlineTransition('out', 3);
    sectionCopyTransition('out', 3);
  }
  // Section D - We Are Waiting For You
  if (document.documentElement.scrollTop > sectionDBreakpoint) {
    davinciAnimation.pause();
    mapAnimation.pause();
    document.getElementById('section-D').classList.add('visible-section');
    activeSection = "sectionD";
    sectionHeadingTransition('in', 4);
    sectionOverlineTransition('in', 4);
    sectionCopyTransition('in', 4);
  } else {
    document.getElementById('section-D').classList.remove('visible-section');
    sectionHeadingTransition('out', 4);
    sectionOverlineTransition('out', 4);
    sectionCopyTransition('out', 4);
  }
}
// Toggle menu on/off
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
// Toggle mobile menu on/off
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

// Mobile Scroll Indicator
document.querySelector('.mobile-scrollindicator-wrapper').addEventListener('click', e => {
  mobileScrollToSection();
})

// Mobile scroll anchor
function mobileScrollToSection() {
  let targetSection = e.currentTarget.attributes.goto.nodeValue;
  switch (targetSection) {
    case "m-sectionA":
      document.querySelector('#m-who-we-are').scrollIntoView();
      break;
  
    default:
      break;
  }
}