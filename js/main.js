// ======================================================
// Siege of SVO v2.0
// main.js
// ======================================================

// ----------------------
// Navbar при прокрутке
// ----------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ----------------------
// Плавное появление
// ----------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

// Какие элементы анимируем

document.querySelectorAll(`
.fade-up,
.fade-left,
.fade-right,
.zoom,
.team-card,
.update-card,
.vehicle-card,
.section-header,
.section-title
`).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

// ----------------------
// Плавный скролл меню
// ----------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ----------------------
// Подсветка активного пункта меню
// ----------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ----------------------
// Лёгкий параллакс Hero
// ----------------------

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x = (window.innerWidth/2 - e.clientX) / 45;

    const y = (window.innerHeight/2 - e.clientY) / 45;

    hero.style.backgroundPosition = `${x}px ${y}px`;

});
