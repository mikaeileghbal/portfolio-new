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

window.addEventListener("load", init);

function init() {
  const heroWrap = document.querySelector(".hero-wrap");
  const heroContainer = document.querySelector(".hero-wrap .container");
  const mainImages = document.querySelectorAll(".main-image");
  const firstImages = document.querySelectorAll(".first-image");
  const secondImages = document.querySelectorAll(".second-image");

  window.addEventListener("scroll", function (e) {
    const scrollPos = window.scrollY;

    animateHero(scrollPos);
    setHero(scrollPos);
    setTheme(scrollPos);
    setProject(scrollPos);
    setArticle(scrollPos);
  });

  function setHero(scrollPos) {
    if (scrollPos > 2900) {
      heroWrap.style.display = "none";
    } else {
      heroWrap.style.display = "block";
    }
  }

  function setTheme(scrollPos) {
    if (scrollPos > 960 && scrollPos < 3200) {
      changeThemeToDark(0);
    } else {
      changeThemeToLight();
    }
  }

  function setProject(scrollPos) {
    if (scrollPos > 960 && scrollPos < 2900) {
      showProjec();
    } else {
      hideProject(0);
    }
  }

  setArticle.enteredZone = 0;
  function setArticle(scrollPos) {
    const article = document.querySelector(".work article");
    const articleHeight = article.clientHeight;

    if (setArticle.enteredZone !== 1) hideArticle(0);
    if (setArticle.enteredZone !== 2) hideArticle(1);
    if (setArticle.enteredZone !== 3) hideArticle(2);

    if (scrollPos <= 960 || scrollPos >= 960 + 3 * articleHeight)
      setArticle.enteredZone = 0;

    if (scrollPos > 960 && scrollPos < 960 + articleHeight) {
      if (setArticle.enteredZone !== 1) {
        console.log("Zone:1 ", setArticle.enteredZone);
        setArticle.enteredZone = 1;
        setTimeout(() => {
          showArticle(0);
        }, 0);
      }
    } else if (
      scrollPos >= 960 + articleHeight &&
      scrollPos < 960 + 2 * articleHeight
    ) {
      if (setArticle.enteredZone !== 2) {
        console.log("zone2: ", setArticle.enteredZone);
        setArticle.enteredZone = 2;
        setTimeout(() => {
          showArticle(1);
        }, 0);
      }
    } else if (
      scrollPos >= 960 + 2 * articleHeight &&
      scrollPos < 960 + 3 * articleHeight
    ) {
      if (setArticle.enteredZone !== 3) {
        console.log("Zone3: ", setArticle.enteredZone);
        setArticle.enteredZone = 3;
        setTimeout(() => {
          showArticle(2);
        }, 0);
      }
    }
  }

  function changeThemeToDark() {
    let root = document.documentElement;
    heroContainer.style.transitionDelay = "0.5s";
    root.style.setProperty("--textColor", theme.dark.color);
    root.style.setProperty("--background", theme.dark.background);
  }

  function changeThemeToLight() {
    let root = document.documentElement;
    heroContainer.style.transitionDelay = "";
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
    document.querySelectorAll("article")[index].style.zIndex = "5000";
    document.querySelectorAll("article")[index].style.visibility = "visible";

    mainImages[index].style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

    firstImages[index].style.transform =
      "translate3d(14%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg)";
    secondImages[index].style.transform =
      "translate3d(-14%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6deg) skew(0deg, 0deg)";

    mainImages[index].style.opacity = "1";
    firstImages[index].style.opacity = "1";
    secondImages[index].style.opacity = "1";

    mainImages[index].style.transitionDelay = "0.0s";
    firstImages[index].style.transitionDelay = "0.5s";
    secondImages[index].style.transitionDelay = "0.5s";

    document.querySelectorAll(".main-image img")[index].style.opacity = "1";
    document.querySelectorAll(".main-image img")[index].style.transition =
      "0.6s ease-out";
    document.querySelectorAll(".main-image img")[index].style.transitionDelay =
      "0.5s";
    console.log(document.querySelectorAll(".main-image img"));

    mainImages[index].style.zIndex = "500";

    console.log(document.querySelectorAll(".main-image img")[index]);
  }

  function hideArticle(index) {
    document.querySelectorAll("article")[index].style.zIndex = "0";
    document.querySelectorAll("article")[index].style.visibility = "hidden";

    mainImages[index].style.transform =
      "translate3d(0px, 20vh, 0px) scale3d(0.8, 0.8, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    firstImages[index].style.transform =
      "translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg)";
    secondImages[index].style.transform =
      "translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(6deg) skew(0deg, 0deg)";

    // document.querySelectorAll(".first-image img")[index].style.transform =
    //   "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

    mainImages[index].style.opacity = "0";
    firstImages[index].style.opacity = "0";
    secondImages[index].style.opacity = "0";

    mainImages[index].style.transitionDelay = "0s";
    firstImages[index].style.transitionDelay = "0s";
    secondImages[index].style.transitionDelay = "0s";

    document.querySelectorAll(".main-image img")[index].style.opacity = "0";
    document.querySelectorAll(".main-image img")[index].style.transition =
      "0.1s ease-out";
    document.querySelectorAll(".main-image img")[index].style.transitionDelay =
      "0s";

    mainImages[index].style.zIndex = "0";
  }

  function animateHero(scrollPos) {
    const SCROLL_AMOUNT = 5;
    const row1 = document.querySelector(".row-1");
    const row2 = document.querySelector(".row-2");
    const row3 = document.querySelector(".row-3");

    const heroImage = document.querySelector(".hero-image");

    row1.style.transform = `translate3d(-${scrollPos * SCROLL_AMOUNT}px, 0, 0)`;
    row1.style.opacity = 1 - scrollPos / 320;

    row2.style.transform = `translate3d(${scrollPos * SCROLL_AMOUNT}px, 0, 0)`;
    row2.style.opacity = 1 - scrollPos / 320;

    row3.style.transform = `translate3d(-${scrollPos * SCROLL_AMOUNT}px, 0, 0)`;
    row3.style.opacity = 1 - scrollPos / 320;

    heroImage.style.transform = `translate3d(0,-${
      scrollPos / SCROLL_AMOUNT
    }px, 0) scale(${1 - scrollPos / 1000})`;

    heroImage.style.opacity = 1 - scrollPos / 350;

    const menuButton = document.querySelector(".nav-button-overlay");
    if (scrollPos > 120) {
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

  const navButton = document.querySelector(".nav-button");

  navButton.addEventListener("click", (e) => {
    const overlayMenu = document.querySelector(".overlay-menu");
    const overlayClasses = overlayMenu.classList;

    overlayClasses.toggle("open");
    navButton.classList.toggle("open");

    const links = document.querySelectorAll(".overlay-link > span");

    links.forEach((link, index) => {
      link.classList.toggle("animate");

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
}

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

const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: "{'id':41088}",
};

fetch("url", options);
