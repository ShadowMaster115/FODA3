document.addEventListener("DOMContentLoaded", function() {
    // Animación de entrada para las secciones del currículum
    const sections = document.querySelectorAll(".row > div");

    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 200);  // Retraso para cada tarjeta
    });

    // Efecto de hover para resaltar las tarjetas
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.boxShadow = "0 4px 15px #00ffcc";
            section.style.transform = "scale(1.05)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
            section.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-70px'; // Ajusta este valor según la altura de tu barra de navegación
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
