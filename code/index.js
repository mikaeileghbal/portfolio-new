window.addEventListener("load", createLightbox);

function createLightbox() {
  // Lightbox container
  const lightBox = document.getElementById("lightbox");

  // Parts of the lightbox
  const title = document.createElement("h1");
  const counter = document.createElement("div");
  const next = document.createElement("button");
  const prev = document.createElement("button");
  const play = document.createElement("button");
  const images = document.createElement("div");

  lightBox.appendChild(title);
  title.id = "title";
  title.textContent = lightboxTitle;

  lightBox.appendChild(counter);
  counter.id = "counter";
  let currentImage = 1;
  counter.textContent = currentImage + " / " + imageCount;

  lightBox.appendChild(prev);
  prev.id = "prev";
  prev.innerHTML = "&#9664";
  prev.addEventListener("click", showPrevious);

  lightBox.appendChild(next);
  next.id = "next";
  next.innerHTML = "&#9654";
  next.addEventListener("click", showNext);

  lightBox.append(play);
  play.id = "play";
  play.innerHTML = "&#9199";
  let timerId;
  play.addEventListener("click", function () {
    if (timerId) {
      clearInterval(timerId);
      timerId = undefined;
    } else {
      showNext();
      timerId = setInterval(showNext, 1500);
    }
  });

  lightBox.appendChild(images);
  images.id = "images";

  // Add images to the container
  for (let i = 0; i < imageCount; i++) {
    let img = document.createElement("img");
    img.src = `images/${imageFiles[i]}`;
    img.alt = imageCaptions[i];
    img.addEventListener("click", createOverlay);
    images.appendChild(img);
  }

  function showNext() {
    images.appendChild(images.firstElementChild);
    currentImage < imageCount ? currentImage++ : (currentImage = 1);
    counter.textContent = currentImage + " / " + imageCount;
  }

  function showPrevious() {
    images.insertBefore(images.lastElementChild, images.firstElementChild);
    currentImage > 1 ? currentImage-- : (currentImage = imageCount);
    counter.textContent = currentImage + " / " + imageCount;
  }
}

function createOverlay() {
  let overlay = document.createElement("div");
  overlay.id = "overlay";
  let figure = document.createElement("figure");

  let overlayImage = this.cloneNode("true");
  figure.appendChild(overlayImage);

  let overlayCaptio = document.createElement("figcaption");
  overlayCaptio.textContent = this.alt;
  figure.appendChild(overlayCaptio);

  overlay.appendChild(figure);

  let close = document.createElement("div");
  close.id = "overlay-close";
  close.innerHTML = "&times";
  close.addEventListener("click", (e) => {
    document.body.removeChild(overlay);
  });

  overlay.appendChild(close);
  document.body.appendChild(overlay);
}

window.addEventListener("scroll", function (e) {
  // if (this.window.scrollY > 300)
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
    document.querySelector(".sticky-container").classList.add("stick-bottom");
  } else {
    document.querySelector(".popup").classList.remove("show");
    document.querySelector(".popup.top").classList.remove("show");
    document
      .querySelector(".sticky-container")
      .classList.remove("stick-bottom");
  }
  if (postion > 2360) {
    document.querySelector(".footer-image").classList.add("show");
  } else {
    document.querySelector(".footer-image").classList.remove("show");
  }
});
