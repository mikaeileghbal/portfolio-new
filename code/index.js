window.addEventListener("scroll", function (e) {
  // if (this.window.scrollY > 360)
  //   this.document.querySelector(".hero-wrap").style.display = "none";
  // else this.document.querySelector(".hero-wrap").style.display = "block";
  animateHero();
});

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

  overlayMenu.classList.toggle("open");
  navButton.classList.toggle("open");

  const links = document.querySelectorAll(".overlay-link>span");
  console.log(links);
  links.forEach((link, index) => {
    link.classList.toggle("animate");
    link.style.animationDelay = `${1.2 + index / 10}s`;
  });
});
