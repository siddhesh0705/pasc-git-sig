document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // sticky navbar on scroll script
        if (window.scrollY > 20) {
            document.querySelector(".navbar").classList.add("sticky");
        } else {
            document.querySelector(".navbar").classList.remove("sticky");
        }

        // scroll-up button show/hide script
        if (window.scrollY > 500) {
            document.querySelector(".scroll-up-btn").classList.add("show");
        } else {
            document.querySelector(".scroll-up-btn").classList.remove("show");
        }
    });

    // slide-up script
    document.querySelector(".scroll-up-btn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // removing smooth scroll on slide-up button click
        document.querySelector("html").style.scrollBehavior = "auto";
    });

    document.querySelectorAll(".navbar .menu li a").forEach(function (element) {
        // applying again smooth scroll on menu items click
        element.addEventListener("click", function () {
            document.querySelector("html").style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    document.querySelector(".menu-btn").addEventListener("click", function () {
        document.querySelector(".navbar .menu").classList.toggle("active");
        document.querySelector(".menu-btn i").classList.toggle("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [
            "Front end developer",
            "Fresher",
            "Technician",
            "Blogger",
            "Designer",
            "Freelancer",
            "Manager"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed3 = new Typed(".typing-2", {
        strings: [
            "Front end developer",
            "Fresher",
            "Technician",
            "Blogger",
            "Designer",
            "Freelancer",
            "Manager"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    var owlCarousel = new OwlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Replace ".carousel" with the appropriate selector for your carousel
    owlCarousel.init();
});
