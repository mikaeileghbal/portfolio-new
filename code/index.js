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
  setHero();
  setTheme();
  setProject();
  setArticle();
});

function setHero() {
  const scrillPos = window.scrollY;
  if (scrollY > 2900) {
    document.querySelector(".hero-wrap").style.display = "none";
  } else {
    document.querySelector(".hero-wrap").style.display = "block";
  }
}

function setTheme() {
  const scrillPos = window.scrollY;
  if (scrollY > 960 && scrollY < 3200) {
    changeThemeToDark(0);
  } else {
    changeThemeToLight();
  }
}

function setProject() {
  const scrollPos = window.scrollY;
  if (scrollPos > 960 && scrollPos < 2900) {
    showProjec();
    //showArticle(0);
  } else {
    hideProject(0);
    //hideArticle(0);
  }
}

function setArticle() {
  const scrollPos = window.scrollY;
  const article = document.querySelector(".work article");
  const articleHeight = article.clientHeight;

  hideArticle(0);
  hideArticle(1);
  hideArticle(2);

  if (scrollPos > 960 && scrollPos < 960 + articleHeight) {
    showArticle(0);
  } else if (
    scrollPos >= 960 + articleHeight &&
    scrollPos < 960 + 2 * articleHeight
  ) {
    showArticle(1);
  } else if (
    scrollPos >= 960 + 2 * articleHeight &&
    scrollPos < 960 + 3 * articleHeight
  ) {
    showArticle(2);
  }
}

function changeThemeToDark() {
  let root = document.documentElement;
  document.querySelector(".hero-wrap .container").style.transitionDelay =
    "0.5s";
  root.style.setProperty("--textColor", theme.dark.color);
  root.style.setProperty("--background", theme.dark.background);
}

function changeThemeToLight() {
  let root = document.documentElement;
  document.querySelector(".hero-wrap .container").style.transitionDelay = "";
  root.style.setProperty("--textColor", theme.light.color);
  root.style.setProperty("--background", theme.light.background);
}

function showProjec() {
  document.querySelector(".project").style.display = "block";
  document.querySelector(".project").style.opacity = "1";
}

function hideProject() {
  document.querySelector(".project").style.opacity = "0";
  document.querySelector(".project").style.display = "none";
}

function showArticle(index) {
  console.log(index);
  document.querySelectorAll(".main-image")[index].style.transform =
    "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

  document.querySelectorAll(".first-image")[index].style.transform =
    "translate3d(14%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg)";
  document.querySelectorAll(".second-image")[index].style.transform =
    "translate3d(-14%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6deg) skew(0deg, 0deg)";

  document.querySelectorAll(".main-image")[index].style.opacity = "1";
  document.querySelectorAll(".first-image")[index].style.opacity = "1";
  document.querySelectorAll(".second-image")[index].style.opacity = "1";

  document.querySelectorAll(".main-image")[index].style.transitionDelay =
    "0.0s";
  document.querySelectorAll(".first-image")[index].style.transitionDelay =
    "0.4s";
  document.querySelectorAll(".second-image")[index].style.transitionDelay =
    "0.4s";

  document.querySelectorAll("article")[index].style.zIndex = "5000";
  document.querySelectorAll(".main-image")[index].style.zIndex = "500";
  console.log(document.querySelectorAll("article")[index]);

  console.log(document.querySelectorAll(".main-image img")[index]);

  // document.querySelectorAll(".main-image img")[index].style.transform =
  //   "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";
  // document.querySelectorAll(".first-image img")[index].style.transform =
  //   "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";
  // document.querySelectorAll(".second-image img")[index].style.transform =
  //   "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";

  //document.querySelectorAll(".first-image")[index].style.display = "block";
  //document.querySelectorAll(".second-image")[index].style.display = "block";
  //document.querySelectorAll(".main-image")[index].style.display = "block";

  //document.querySelectorAll(".project-container")[index].style.display ="block";
}

function hideArticle(index) {
  document.querySelectorAll(".main-image")[index].style.transform =
    "translate3d(0px, 50vh, 0px) scale3d(0.4, 0.4, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  document.querySelectorAll(".first-image")[index].style.transform =
    "translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg)";
  document.querySelectorAll(".second-image")[index].style.transform =
    "translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6deg) skew(0deg, 0deg)";

  document.querySelectorAll(".main-image")[index].style.opacity = "0";
  document.querySelectorAll(".first-image")[index].style.opacity = "0";
  document.querySelectorAll(".second-image")[index].style.opacity = "0";

  document.querySelectorAll(".main-image")[index].style.transitionDelay = "0s";
  document.querySelectorAll(".first-image")[index].style.transitionDelay = "0s";
  document.querySelectorAll(".second-image")[index].style.transitionDelay =
    "0s";

  document.querySelectorAll("article")[index].style.zIndex = "0";
  document.querySelectorAll(".main-image")[index].style.zIndex = "0";

  // document.querySelectorAll(".main-image img")[index].style.transform =
  //   "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";
  // document.querySelectorAll(".first-image img")[index].style.transform =
  //   "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";
  // document.querySelectorAll(".second-image img")[index].style.transform =
  //   "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);";

  //document.querySelectorAll(".project-container")[index].style.display = "none";
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

// mouse tail
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

const mainImages = document.querySelectorAll(".main-image");

mainImages.forEach((mainImage) => {
  mainImage.addEventListener("mouseenter", () => {
    mainImage.previousElementSibling.firstElementChild.style.opacity = "0.6";
    mainImage.nextElementSibling.firstElementChild.style.opacity = "0.6";
    mainImage.style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1.12, 1.12, 1.12) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    mouseTail.classList.add("image");
  });

  mainImage.addEventListener("mouseleave", () => {
    mainImage.previousElementSibling.firstElementChild.style.opacity = "0";
    mainImage.nextElementSibling.firstElementChild.style.opacity = "0";
    mainImage.style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    mouseTail.classList.remove("image");
  });
});

// footer animations
window.addEventListener("scroll", (e) => {
  //const postion = window.scrollY;
  // const popup = document.querySelector(".popup");
  // const popupTop = document.querySelector(".popup.top");
  // const footerImage = document.querySelector(".footer-image");
  // if (postion > 1700) {
  //   popup.add("show");
  //   popupTop.classList.add("show");
  // } else {
  //   popup.remove("show");
  //   popupTop.classList.remove("show");
  // }
  // if (postion > 2360) {
  //   footerImage.classList.add("show");
  // } else {
  //   footerImage.classList.remove("show");
  // }
});

const navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => {
  const overlayMenu = document.querySelector(".overlay-menu");
  const overlayClasses = overlayMenu.classList;

  overlayClasses.toggle("open");
  navButton.classList.toggle("open");

  const links = document.querySelectorAll(".overlay-link > span");

  links.forEach((link, index) => {
    link.classList.toggle("animate");
    //link.style.animationDelay = `${1 + index / 10}s`;
    if (link.classList.contains("animate")) {
      link.style.transitionDelay = `${1 + index / 10}s`;
    } else {
      link.style.transitionDelay = `0s`;
    }
  });

  scrollHide(overlayClasses.contains("open"));
});

function scrollHide(open) {
  if (open) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "overlay";
  }
}

const marqs = document.querySelectorAll(".marq");

const scrollers = document.querySelectorAll(".scroller");

setInterval(() => {
  marqs.forEach((marq) => {
    marq.style.animation = "none";
    marq.offsetHeight;
    marq.style.animation = "";
  });
  scrollers.forEach((scroller) => {
    scroller.style.animation = "none";
    scroller.offsetHeight;
    scroller.style.animation = "";
  });
}, 20000);
