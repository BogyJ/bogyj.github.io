(function() {
    let navToggleButton = document.querySelector(".nav-toggle");
    let header = document.getElementById("header");
    let navLinks = document.querySelectorAll(".nav-links");
    let logo = document.querySelector(".home");
    let currentScroll = previousScroll = window.scrollY || document.documentElement.scrollTop;
    let currentDirection = previousDirection = 0;

    function toggleHeader() {
        if (currentDirection === 2) {
            header.classList.add("hide");
        }

        if (currentDirection === 1) {
            header.classList.remove("hide");
        }
    }

    function checkScroll() {
        // 0 - initial, 1 - scroll up, 2 - scroll down
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > previousScroll) {
            currentDirection = 2;
        } else {
            currentDirection = 1;
        }

        if (currentDirection !== previousDirection) {
            toggleHeader();
        }
        
        previousDirection = currentDirection;
        previousScroll = currentScroll;
    }

    logo.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    
    function handleNavigationToggle() {
        let sectionsList = document.querySelector(".header__navigation-sections-list");
        
        if (window.innerWidth >= 1024) {
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
        if (window.innerWidth < 1024) {
            navToggleButton.addEventListener("click", handleNavigationToggle);
            navLinks.forEach(el => {
                el.addEventListener("click", handleNavigationToggle);
            });
        }
    }
    
    window.addEventListener("load", init);
    window.addEventListener("resize", handleNavigationToggle);
    window.addEventListener("scroll", checkScroll);

})();


