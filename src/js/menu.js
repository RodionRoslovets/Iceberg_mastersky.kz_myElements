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

//настройки slik
$('.mySlide, .feedback-letters').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    arrows:false,
    autoplay:true,
    responsive:[
        {
          breakpoint:768,
          settings:{
              slidesToShow: 1
          }
      }
    ]
  });