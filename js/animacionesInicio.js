document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill-card");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.1)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
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
