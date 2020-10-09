let navToggleButton = document.querySelector(".nav-toggle");

navToggleButton.addEventListener("click", () => {
    let header = document.getElementById("header");
    let sectionList = document.querySelector(".header__navigation-sections-list");
    if (header.className.includes("nav-open")) {
        sectionList.style.animation = "slideOut .4s linear";
        sectionList.style.top = 0;
    } else {
        sectionList.style.right = 0;
        sectionList.style.top = 0;
        sectionList.style.animation = "slideInRight .4s linear";
    }

    header.classList.toggle("nav-open");
    header.classList.toggle("nav-closed");

    if (header.className.includes("nav-closed")) {
        sectionList.style.right = "-100vw";
    }

});


