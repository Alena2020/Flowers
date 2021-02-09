$(document).ready(function() {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Параметры слайдера
        slidesPerView: 6,
        loop: true,

        // Подключаем стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Настройки адаптивной версии
        breakpoints: {
            // если  браузер >= 320px
            320: {
                slidesPerView: 2,
            },
            // если  браузер >= 480px
            480: {
                slidesPerView: 3,
            },
            // если  браузер >= 576px
            576: {
                slidesPerView: 4,
            },
            // если  браузер >= 992px
            992: {
                slidesPerView: 6,
            }
        }

    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Параметры слайдера
        slidesPerView: 1,
        loop: true,

        // Подключаем стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });





    $("#review-1").on('click', function() {

        $.fancybox.open([{
                src: '/img/flowers1.jpg',
                opts: {
                    caption: '1',
                    thumb: '/img/flowers1.jpg'
                }
            },
            {
                src: '/img/flowers2.jpg',
                opts: {
                    caption: '2',
                    thumb: '/img/flowers2.jpg'
                }
            },

            {
                src: '/img/flowers3.jpg',
                opts: {
                    caption: '3',
                    thumb: '/img/flowers3.jpg'
                }
            },
            {
                src: '/img/flowers4.jpg',
                opts: {
                    caption: '4',
                    thumb: '/img/flowers4.jpg'
                }
            },
            {
                src: '/img/flowers5.png',
                opts: {
                    caption: '5',
                    thumb: '/img/flowers5.png'
                }
            }

        ], {
            loop: true,
            thumbs: {
                autoStart: true
            }
        });

    });



});