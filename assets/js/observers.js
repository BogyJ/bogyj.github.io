(function() {
    
    function setOpacity(elements) {
        elements.forEach(el => {
            el.style.opacity = 0;
        });

    }
    
    setOpacity(document.querySelectorAll('[data-animate="fade-in-up"]'));
    setOpacity(document.querySelectorAll('[data-animate="fade-in-right"]'));
    setOpacity(document.querySelectorAll('[data-animate="fade-in-down"]'));
    setOpacity(document.querySelectorAll('[data-animate="fade-in-left"]'));
    setOpacity(document.querySelectorAll('[data-animate="fade-in"]'));
    
    
    // Add IntersectionObserver and animations to the website (lazy loading images)
    function addIntersectionObserver(className) {
        const element = document.querySelector("." + className);
        let elementOptions = { rootMargin: "-200px 0px 0px 0px" };
        
        if (window.innerWidth < 1025) {
            elementOptions = { rootMargin: "100px 0px -100px 0px" };
        }

        const elementObserver = new IntersectionObserver( (entries, elementObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                element.classList.add(element.dataset.animate);
                element.style.opacity = 1;
            });
        }, elementOptions);

        elementObserver.observe(element);
    }

    const sectionWelcome = document.querySelector(".section-welcome");
    const sectionWelcomeOptions = {};

    const sectionWelcomeObserver = new IntersectionObserver( (entries, sectionWelcomeObserver) => {
        sectionWelcome.style.animationDelay = ".7s";
        sectionWelcome.classList.add(sectionWelcome.dataset.animate);
        setTimeout(() => {
            sectionWelcome.style.opacity = 1;
        }, 700);
    }, sectionWelcomeOptions );

    sectionWelcomeObserver.observe(sectionWelcome);


    const header = document.querySelector(".header");
    const headerOptions = {};

    const headerObserver = new IntersectionObserver( (entries, headerObserver) => {
        header.classList.add(header.dataset.animate);
        header.style.opacity = 1;
    }, headerOptions );

    headerObserver.observe(header);


    addIntersectionObserver("left-social-icons");
    addIntersectionObserver("right-email");
    addIntersectionObserver("header");
    addIntersectionObserver("projects-heading");
    addIntersectionObserver("raab");
    addIntersectionObserver("mobilnifarmer");
    addIntersectionObserver("cirichomeinvest");
    addIntersectionObserver("about-heading");
    addIntersectionObserver("profile-img");
    addIntersectionObserver("section-about-content-text");
    addIntersectionObserver("contact-heading");
    addIntersectionObserver("contact-heading-secondary");
    addIntersectionObserver("contact-paragraph");
    addIntersectionObserver("contact-btn");
    addIntersectionObserver("footer");
    
    

})();