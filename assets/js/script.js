(function() {
    let navToggleButton = document.querySelector(".nav-toggle");
    let navLinks = document.querySelectorAll(".nav-links");
    let logo = document.querySelector(".home");
    let scrollToTopBtn = document.querySelector(".scroll-to-top");
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
    
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    scrollToTopBtn.addEventListener("click", scrollToTop);
    logo.addEventListener("click", scrollToTop);
    
    function handleNavigationToggle() {
        let header = document.getElementById("header");
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
    window.addEventListener("scroll", scrollFunction);

})();


