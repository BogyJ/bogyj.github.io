let navToggleButton = document.querySelector(".nav-toggle");
let navLinks = document.querySelectorAll(".nav-links");

function handleNavigationToggle() {
    let header = document.getElementById("header");
    let sectionsList = document.querySelector(".header__navigation-sections-list");
    
    if (window.innerWidth >= 768) {
        if (header.className.includes("nav-closed")) {
            sectionsList.style.right = "0";
            header.classList.remove("nav-closed");
        }
        return;
    }
    
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
}

function init() {
    if (window.innerWidth < 768) {
        navToggleButton.addEventListener("click", handleNavigationToggle);
        navLinks.forEach(el => {
            el.addEventListener("click", handleNavigationToggle);
        });
    }
}

window.addEventListener("load", init);
window.addEventListener("resize", handleNavigationToggle);

