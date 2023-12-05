// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('.nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)


const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
});

// Модальное окно
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

// let hiddenElement = document.getElementById("section1");
// console.log(hiddenElement);
// let btn = document.querySelector(".aaa");

// function handleButtonClick() {
//   hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
// }

let hiddenElement = document.getElementById("section11");
console.log(hiddenElement);

hiddenElement.addEventListener('click', () => {
    window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth"
    });
})

let hiddenElement2 = document.querySelector(".bbb");
console.log(hiddenElement);

hiddenElement2.addEventListener('click', () => {
    window.scrollTo({
        top: 2000,
        left: 0,
        behavior: "smooth"
    });
})

let hiddenElement3 = document.querySelector(".ccc");
console.log(hiddenElement);

hiddenElement3.addEventListener('click', () => {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    });
})
