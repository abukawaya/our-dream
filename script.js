document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /* Menu show */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    /* Menu hidden */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        // When we click on each nav__link, we remove the show-menu class
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    };

    if (navLink.length > 0) {
        navLink.forEach(n => n.addEventListener('click', linkAction));
    }
    const blurHeader = () => {
        const header = document.getElementById('header');
        // Add a class if the bottom offset is greater than 50 of the viewport
        if (this.scrollY >= 50) {
            header.classList.add('blur-header');
        } else {
            header.classList.remove('blur-header');
        }
    };

    window.addEventListener('scroll', blurHeader);

    // Initialize Swiper for travel section
    const swiperTravel = new Swiper('.travel__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            600:{
                slidesPerView: 2,
            },
            900:{
                slidesPerView: 3,
            },
            1110:{
                slidesPerView: 3,
            },
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /* Menu show */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    /* Menu hidden */
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        // When we click on each nav__link, we remove the show-menu class
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    };

    if (navLink.length > 0) {
        navLink.forEach(n => n.addEventListener('click', linkAction));
    }

    const blurHeader = () => {
        const header = document.getElementById('header');
        // Add a class if the bottom offset is greater than 50 of the viewport
        if (window.scrollY >= 50) {
            header.classList.add('blur-header');
        } else {
            header.classList.remove('blur-header');
        }
    };

    window.addEventListener('scroll', blurHeader);

    // Initialize Swiper for travel section
    const swiperTravel = new Swiper('.travel__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
        }
    });
});

const scrollUp = () => {
    const scrollUp = document.getElementById('scrollup');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 3000,
        delay: 300,
        // reset: true,
    });
    sr.reveal('.home__data , .travel__swiper,.contact__container, .section__title');
    sr.reveal('.home__img' ,{origin: 'bottom'});
    sr.reveal('.home__ovni',{delay:800});
    sr.reveal('.explore__img',  {origin:'left'});
    sr.reveal('.explore__data',  {origin:'right'});
    sr.reveal('.explore__planet',  {origin:'right',delay:800 });
    sr.reveal('.history__card',  {interval:100});
    sr.reveal('.history__planet-1',  {origin:'left',delay:1000});
    sr.reveal('.history__planet-2',  {origin:'right',delay:1200});
    sr.reveal('.footer__planet-1',  {origin:'bottom',delay:600});
    sr.reveal('.footer__planet-2',  {delay:900});
});