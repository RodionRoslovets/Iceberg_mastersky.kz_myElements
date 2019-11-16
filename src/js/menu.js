window.addEventListener('DOMContentLoaded', function () {
    let topMenuItem = document.querySelectorAll('.main-menu__item')[1],
        subMenu = document.querySelector('.sub-menu');

    topMenuItem.addEventListener('mouseover', function () {
        subMenu.classList.add('sub-menu__visible');
    });
    topMenuItem.addEventListener('mouseleave', function () {
        subMenu.classList.remove('sub-menu__visible');
    });
    subMenu.addEventListener('mouseover', function () {
        subMenu.classList.remove('sub-menu__visible');
    });
});

