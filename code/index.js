window.addEventListener("load", init);

function init() {
  // theme global
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
      }
      if (entry.intersectionRatio > 0.5) {
        setTimeout(() => {
          element.querySelector(".project-container").style.display = "flex";
        }, 00);
        setTimeout(() => {
          showArticle(element);
          element
            .querySelector(".main-image")
            .addEventListener("mouseenter", mouseOver);

          element
            .querySelector(".main-image")
            .addEventListener("mouseleave", mouseOut);
        }, 300);
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

  function manageTheme(entries, observer) {
    entries.forEach((entry) => {
      let element = entry.target;

      if (entry.intersectionRatio >= 0.165) {
        setTimeout(() => {
          changeThemeToDark();
        }, 400);
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
    const firstImg = firstImage.querySelector("img");
    const secondImg = secondImage.querySelector("img");

    article.style.zIndex = "5000";
    mainImage.style.zIndex = "500";

    mainImage.style.transition = "0.4s ease-out";
    mainImage.style.opacity = "1";
    mainImage.style.transform =
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateZ(0deg) ";

    firstImage.style.transition = "opacity 0.8s 0.4s, transform 1s 0.4s";
    firstImage.style.opacity = "1";
    firstImage.style.transform =
      "translate3d(14%, 0px, 0px) scale3d(1, 1, 1) rotateZ(-6deg)";

    secondImage.style.transition = "opacity 0.8s 0.4s, transform 1s 0.4s";
    secondImage.style.opacity = "1";
    secondImage.style.transform =
      "translate3d(-14%, 0px, 0px) scale3d(1, 1, 1) rotateZ(6deg)";

    mainImg.style.opacity = "1";
    mainImg.style.transition = "1.5s ease-out 0.5s";
    mainImg.style.transform =
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";

    firstImg.style.opacity = 1;
    firstImg.style.transition = "0.4s ease-out 0.4s";
    firstImg.style.transform =
      "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";

    secondImg.style.opacity = 1;
    secondImg.style.transition = "0.4s ease-out 0.4s";
    secondImg.style.transform =
      "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";
  }

  function hideArticle(article) {
    const mainImage = article.querySelector(".main-image");
    const firstImage = article.querySelector(".first-image");
    const secondImage = article.querySelector(".second-image");
    const mainImg = mainImage.querySelector("img");
    const firstImg = firstImage.querySelector("img");
    const secondImg = secondImage.querySelector("img");

    mainImage.style.zIndex = "500";

    mainImage.style.transition = "opacity 1.2s , transform 1s 1.2s";
    mainImage.style.opacity = "0";
    mainImage.style.transform =
      "translate3d(0px, 50vh, 0px) scale3d(0.4, 0.4, 1) rotateZ(0deg)";

    firstImage.style.transition = "opacity 0.4s, transform 0.3s 0.1s";
    firstImage.style.opacity = "0";
    firstImage.style.transform =
      "translate3d(50%, 0px, 0px) scale3d(1, 1, 1) rotateZ(-6deg)";

    secondImage.style.transition = "opacity 0.4s, transform 0.3s 0.1s";
    secondImage.style.opacity = "0";
    secondImage.style.transform =
      "translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateZ(6deg) ";

    mainImg.style.opacity = "0";
    mainImg.style.transition = "opacity 0.6s ease-out, transform 0.4s";
    mainImg.style.transform =
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";

    firstImg.style.transition = "opacity 0.4s , transform 0.5s 0.5s";
    firstImg.style.opacity = 0;
    firstImg.style.transform =
      "translate3d(0, 100%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";

    secondImg.style.transition = "opacity 0.4s , transform 0.5s 0.5s";
    secondImg.style.opacity = 0;
    secondImg.style.transform =
      "translate3d(0%, 100%, 0px) scale3d(1, 1, 1) rotateZ(0deg)";

    article.style.zIndex = "0";
  }

  // set theme light or dark
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

  // intersection observer ends

  const heroWrap = document.querySelector(".hero-wrap");

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
    const sliderProgress = document.querySelector(".slider-progress");
    const articleHeight = document.querySelector("article").clientHeight;

    if (
      scrollPos >= workOffsetTop - 300 &&
      scrollPos <= workOffsetTop + workHeight - 300
    ) {
      showProjec();
      progressBar.style.width =
        ((scrollPos + 300 - workOffsetTop) / workHeight) * 100 + "%";

      console.log(
        "scrfoplPos:" +
          scrollPos +
          " work:" +
          workOffsetTop +
          " article" +
          articleHeight
      );
      let articleDiffer = (scrollPos - workOffsetTop + 300) % articleHeight;
      if (articleDiffer <= 10) {
        sliderProgress.style.transform = `translate3d(0,${115}%,0)`;
      } else {
        let position = (articleDiffer * 230) / articleHeight;
        sliderProgress.style.transform = `translate3d(0,${115 - position}%,0)`;
      }
    } else {
      hideProject();
    }
  }

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
