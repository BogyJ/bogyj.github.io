let navToggleButton = document.querySelector(".nav-toggle");

navToggleButton.addEventListener("click", () => {
    let header = document.getElementById("header");
    let sectionsList = document.querySelector(".header__navigation-sections-list");
    if (header.className.includes("nav-open")) {
        sectionsList.style.animation = "slideOut .4s linear";
        sectionsList.style.top = 0;
    } else {
        sectionsList.style.right = 0;
        sectionsList.style.top = 0;
        sectionsList.style.animation = "slideInRight .4s linear";
    }

    header.classList.toggle("nav-open");
    header.classList.toggle("nav-closed");

    if (header.className.includes("nav-closed")) {
        sectionsList.style.right = "-100vw";
    }

});


