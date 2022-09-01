const theme = {
  light: {
    color: "#171216",
    background: "#879F87",
  },
  dark: {
    color: "#FFF",
    background: "#171216",
    menuButton: "#3A2E39",
  },
};

window.addEventListener("scroll", function (e) {
  // if (this.window.scrollY > 360)
  //   this.document.querySelector(".hero-wrap").style.display = "none";
  // else this.document.querySelector(".hero-wrap").style.display = "block";
  animateHero();
  setTheme();
});

function setTheme() {
  if (window.scrollY > 880) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
}

function changeThemeToDark() {
  let root = document.documentElement;
  root.style.setProperty("--textColor", theme.dark.color);
  root.style.setProperty("--background", theme.dark.background);
}

function changeThemeToLight() {
  let root = document.documentElement;
  root.style.setProperty("--textColor", theme.light.color);
  root.style.setProperty("--background", theme.light.background);
}

function animateHero() {
  const SCROLL_AMOUNT = 5;
  const row1 = document.querySelector(".row-1");
  const row2 = document.querySelector(".row-2");
  const row3 = document.querySelector(".row-3");

  const heroImage = document.querySelector(".hero-image");

  row1.style.transform = `translate3d(-${
    window.scrollY * SCROLL_AMOUNT
  }px, 0, 0)`;
  row1.style.opacity = 1 - window.scrollY / 320;

  row2.style.transform = `translate3d(${
    window.scrollY * SCROLL_AMOUNT
  }px, 0, 0)`;
  row2.style.opacity = 1 - window.scrollY / 320;

  row3.style.transform = `translate3d(-${
    window.scrollY * SCROLL_AMOUNT
  }px, 0, 0)`;
  row3.style.opacity = 1 - window.scrollY / 320;

  heroImage.style.transform = `translate3d(0,-${
    window.scrollY / SCROLL_AMOUNT
  }px, 0) scale(${1 - window.scrollY / 1000})`;

  heroImage.style.opacity = 1 - window.scrollY / 350;

  const menuButton = document.querySelector(".nav-button-overlay");
  if (window.scrollY > 120) {
    menuButton.classList.add("show");
  } else {
    menuButton.classList.remove("show");
  }
}

let mouseTail = document.querySelector(".mouse-tail");

document.addEventListener("mousemove", moveMouseTail);

function moveMouseTail(e) {
  mouseTail.style.left = `${e.clientX}px`;
  mouseTail.style.top = `${e.clientY}px`;
}

const topLinks = document.querySelectorAll(".top-link");
topLinks.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    mouseTail.classList.add("line");
  });

  link.addEventListener("mouseleave", (e) => {
    mouseTail.classList.remove("line");
  });
});

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  mouseTail.classList.add("rectangle");
});

logo.addEventListener("mouseleave", () => {
  mouseTail.classList.remove("rectangle");
});

// footer animations
window.addEventListener("scroll", (e) => {
  const postion = window.scrollY;

  if (postion > 1000) {
    document.querySelector(".popup").classList.add("show");
    document.querySelector(".popup.top").classList.add("show");
  } else {
    document.querySelector(".popup").classList.remove("show");
    document.querySelector(".popup.top").classList.remove("show");
  }
  if (postion > 2360) {
    document.querySelector(".footer-image").classList.add("show");
  } else {
    document.querySelector(".footer-image").classList.remove("show");
  }
});

const navButton = document.querySelector(".nav-button");
console.log(navButton);
navButton.addEventListener("click", (e) => {
  const overlayMenu = document.querySelector(".overlay-menu");
  const overlayClasses = overlayMenu.classList;

  overlayClasses.toggle("open");
  navButton.classList.toggle("open");

  const links = document.querySelectorAll(".overlay-link > span");

  links.forEach((link, index) => {
    link.classList.toggle("animate");
    link.style.animationDelay = `${1 + index / 10}s`;
  });

  scrollHide(overlayClasses.contains("open"));
});

function scrollHide(open) {
  if (open) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "unset";
  }
}

const marqs = document.querySelectorAll(".marq");
console.log(marqs);
//const marq2 = document.querySelector(".marq-2");
//const marq3 = document.querySelector(".marq-3");
const scrollers = document.querySelectorAll(".scroller");

setInterval(() => {
  marqs.forEach((marq) => {
    marq.style.animation = "none";
    marq.offsetHeight;
    marq.style.animation = "";
  });
  // marq2.style.animation = "none";
  // marq2.offsetHeight;
  // marq2.style.animation = "";
  // marq3.style.animation = "none";
  // marq3.offsetHeight;
  // marq3.style.animation = "";
  scrollers.forEach((scroller) => {
    scroller.style.animation = "none";
    scroller.offsetHeight;
    scroller.style.animation = "";
  });
  //marq.style.transform = "translate3d(0%,0%,0%)";
  //marq.style.animation = "scrollIn 2s cubic-bezier(0.19, 1, 0.22, 1);";
}, 20000);
