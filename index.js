document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       AOS
    ========================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120
        });
    }

    /* =========================
       TYPED.JS
    ========================= */
    if (typeof Typed !== "undefined") {
        new Typed("#typed-text", {
            strings: [
                "Computer Technician",
                "Web Developer",
                "Robotics" ,
                "Cyber Security"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1800,
            loop: true,
            smartBackspace: true,
            cursorChar: "_"
        });
    }

    /* =========================
       HAMBURGER MENU
    ========================= */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".navlink ul li a");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");

            document.body.style.overflow =
                navMenu.classList.contains("active") ? "hidden" : "auto";

            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                document.body.style.overflow = "auto";

                const icon = hamburger.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                const offset = 90; // navbar yüksekliği
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       AKTİF NAVBAR LİNK
    ========================= */
    const sections = document.querySelectorAll("section, footer");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        } else {
            navbar.style.backdropFilter = "none";
            navbar.style.boxShadow = "none";
        }
    });

});
