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
  // intersection observer begins
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.5],
  };

  let optionsWork = {
    root: null,
    rootMargin: "0px",
    threshold: [0.165],
  };

  let observer = new IntersectionObserver(manageArticles, options);
  let observerWork = new IntersectionObserver(manageTheme, optionsWork);

  const articles = document.querySelectorAll("article");
  const workWrap = document.querySelector(".work-wrap");

  articles.forEach((article) => {
    observer.observe(article);
  });
  observerWork.observe(workWrap);

  function manageArticles(entries, observer) {
    entries.forEach((entry) => {
      let element = entry.target;

      if (entry.intersectionRatio <= 0.5) {
        hideArticle(element);
        setTimeout(() => {
          element.querySelector(".project-container").style.display = "none";
        }, 600);
        element
          .querySelector(".main-image")
          .removeEventListener("mouseenter", mouseOver);
        element
          .querySelector(".main-image")
          .removeEventListener("mouseleave", mouseOut);
        mouseTail.classList.remove("image");
        setTimeout(() => {
          //element.querySelector(".images").style.display = "none";
        }, 600);
      }
      if (entry.intersectionRatio > 0.5) {
        //element.querySelector(".images").style.display = "flex";
        setTimeout(() => {
          element.querySelector(".project-container").style.display = "flex";
        }, 00);
        setTimeout(() => {
          showArticle(element);
          element
            .querySelector(".main-image")
            .addEventListener("mouseover", mouseOver);

          element
            .querySelector(".main-image")
            .addEventListener("mouseout", mouseOut);
        }, 100);
      }
    });
  }

  // mouse tail
  let mouseTail = document.querySelector(".mouse-tail");

  function mouseOver() {
    this.previousElementSibling.firstElementChild.style.opacity = "0.6";
    this.nextElementSibling.firstElementChild.style.opacity = "0.6";
    this.style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1.12, 1.12, 1.12) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    mouseTail.classList.add("image");
  }

  function mouseOut() {
    this.previousElementSibling.firstElementChild.style.opacity = "0";
    this.nextElementSibling.firstElementChild.style.opacity = "0";
    this.style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    mouseTail.classList.remove("image");
  }
  // mainImages.forEach((mainImage) => {
  //   mainImage.addEventListener("mouseover", () => {
  //     mainImage.previousElementSibling.firstElementChild.style.opacity = "0.6";
  //     mainImage.nextElementSibling.firstElementChild.style.opacity = "0.6";
  //     mainImage.style.transform =
  //       "translate3d(0px, 0vh, 0px) scale3d(1.12, 1.12, 1.12) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  //     mouseTail.classList.add("image");
  //   });

  //   mainImage.addEventListener("mouseout", () => {
  //     mainImage.previousElementSibling.firstElementChild.style.opacity = "0";
  //     mainImage.nextElementSibling.firstElementChild.style.opacity = "0";
  //     mainImage.style.transform =
  //       "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
  //     mouseTail.classList.remove("image");
  //   });
  // });

  function manageTheme(entries, observer) {
    entries.forEach((entry) => {
      let element = entry.target;

      if (entry.intersectionRatio >= 0.165) {
        changeThemeToDark();
      }
      if (entry.intersectionRatio < 0.165) {
        changeThemeToLight();
      }
    });
  }

  function showArticle(article) {
    const mainImage = article.querySelector(".main-image");
    const firstImage = article.querySelector(".first-image");
    const secondImage = article.querySelector(".second-image");
    const mainImg = mainImage.querySelector("img");

    article.style.zIndex = "5000";

    mainImage.style.transform =
      "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1)   rotateZ(0deg) ";
    firstImage.style.transform =
      "translate3d(14%, 0px, 0px) scale3d(1, 1, 1)   rotateZ(-6deg)";
    secondImage.style.transform =
      "translate3d(-14%, 0px, 0px) scale3d(1, 1, 1)   rotateZ(6deg)";

    mainImage.style.opacity = "1";
    firstImage.style.opacity = "1";
    secondImage.style.opacity = "1";

    mainImage.style.transitionDelay = "0.0s";
    firstImage.style.transitionDelay = "0.5s";
    secondImage.style.transitionDelay = "0.5s";

    mainImg.style.opacity = "1";
    mainImg.style.transition = "0.6s ease-out";
    mainImg.style.transitionDelay = "0.5s";

    mainImage.style.zIndex = "500";
  }

  function hideArticle(article) {
    const mainImage = article.querySelector(".main-image");
    const firstImage = article.querySelector(".first-image");
    const secondImage = article.querySelector(".second-image");
    const mainImg = mainImage.querySelector("img");
    // const firstImg = firstImage.querySelector("img");
    // const secondImg = secondImage.querySelector("img");

    mainImage.style.transform =
      "translate3d(0px, 10vh, 0px) scale3d(0.8, 0.8, 1) rotateZ(0deg)";
    firstImage.style.transform =
      "translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateZ(-6deg)";
    secondImage.style.transform =
      "translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateZ(6deg) ";

    // document.querySelectorAll(".first-image img")[index].style.transform =
    //   "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateZ(0deg) ";

    mainImage.style.opacity = "0";
    firstImage.style.opacity = "0";
    secondImage.style.opacity = "0";

    mainImage.style.transitionDelay = "0s";
    firstImage.style.transitionDelay = "0s";
    secondImage.style.transitionDelay = "0s";

    mainImg.style.opacity = "0";
    mainImg.style.transition = "0.1s ease-out";
    mainImg.style.transitionDelay = "0s";

    mainImage.style.zIndex = "0";

    article.style.zIndex = "0";
    //article.style.visibility = "hidden";
  }

  // set theme light or dark
  function changeThemeToDark() {
    let root = document.documentElement;
    //heroContainer.style.transitionDelay = "0.5s";
    root.style.setProperty("--textColor", theme.dark.color);
    root.style.setProperty("--background", theme.dark.background);
  }

  function changeThemeToLight() {
    let root = document.documentElement;
    //heroContainer.style.transitionDelay = "";
    root.style.setProperty("--textColor", theme.light.color);
    root.style.setProperty("--background", theme.light.background);
  }

  // intersection observer ends

  const heroWrap = document.querySelector(".hero-wrap");
  const heroContainer = document.querySelector(".hero-wrap .container");
  const mainImages = document.querySelectorAll(".main-image");
  const firstImages = document.querySelectorAll(".first-image");
  const secondImages = document.querySelectorAll(".second-image");

  window.addEventListener("scroll", function (e) {
    const scrollPos = window.scrollY;

    animateHero(scrollPos);
    setHero(scrollPos);

    setProject(scrollPos);
  });

  function setHero(scrollPos) {
    if (scrollPos > 3200) {
      heroWrap.style.display = "none";
    } else {
      heroWrap.style.display = "block";
    }
  }

  function setProject(scrollPos) {
    const progressBar = document.querySelector(".progress-bar");
    const workHeight = document.querySelector(".work").clientHeight;
    const workOffsetTop = document.querySelector(".work").offsetTop;

    if (
      scrollPos >= workOffsetTop - 300 &&
      scrollPos <= workOffsetTop + workHeight - 300
    ) {
      showProjec();
      progressBar.style.width =
        ((scrollPos + 300 - workOffsetTop) / workHeight) * 100 + "%";
    } else {
      console.log("hide");
      //progressBar.style.width = "0%";
      hideProject(0);
    }
  }

  // setArticle.enteredZone = 0;
  // function setArticle(scrollPos) {
  //   const article = document.querySelector(".work article");
  //   const articleHeight = article.clientHeight;

  //   if (setArticle.enteredZone !== 1) hideArticle(0);
  //   if (setArticle.enteredZone !== 2) hideArticle(1);
  //   if (setArticle.enteredZone !== 3) hideArticle(2);

  //   if (scrollPos <= 960 || scrollPos >= 960 + 3 * articleHeight)
  //     setArticle.enteredZone = 0;

  //   if (articleFirstInView()) {
  //     if (setArticle.enteredZone !== 1) {
  //       setupArticle(0);
  //     }
  //   } else if (articleSecondInView()) {
  //     if (setArticle.enteredZone !== 2) {
  //       setupArticle(1);
  //     }
  //   } else if (articleThirdInView()) {
  //     if (setArticle.enteredZone !== 3) {
  //       setupArticle(2);
  //     }
  //   }

  //   function articleFirstInView() {
  //     return scrollPos > 960 && scrollPos < 960 + articleHeight;
  //   }

  //   function articleSecondInView() {
  //     return (
  //       scrollPos >= 960 + articleHeight && scrollPos < 960 + 2 * articleHeight
  //     );
  //   }

  //   function articleThirdInView() {
  //     return (
  //       scrollPos >= 960 + 2 * articleHeight &&
  //       scrollPos < 960 + 3 * articleHeight
  //     );
  //   }

  //   function setupArticle(index) {
  //     setArticle.enteredZone = index + 1;
  //     setTimeout(() => {
  //       showArticle(index);
  //     }, 0);
  //   }
  // }

  function showProjec() {
    document.querySelector(".project").style.display = "block";
    document.querySelector(".project").style.opacity = "1";
  }

  function hideProject() {
    document.querySelector(".project").style.opacity = "0";
    document.querySelector(".project").style.display = "none";
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
