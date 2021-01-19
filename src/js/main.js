$(document).ready(function()
{
    $(".backup_picture").on("error", function(){
        $(this).attr('src', 'images/news3.png');
    });
});
$(document).ready(function()
{
    $(".backup_picture__slider").on("error", function(){
        $(this).attr('src', 'images/slider_img1.jpg');
    });
});
$(document).ready(function()
{
    $(".backup_picture__items").on("error", function(){
        $(this).attr('src', 'images/newItems-page3.png');
    });
});
$(document).ready(function()
{
    $(".backup_picture__promotions").on("error", function(){
        $(this).attr('src', 'images/sale-page1.png');
    });
});

$(function () {

    $('.banner-box__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="banner-box__slider-btn banner-box__slider-btnprev"><img src="images/arrow_prev.png" alt=""></button>',
        nextArrow: '<button class="banner-box__slider-btn banner-box__slider-btnnext"><img src="images/arrow_next.png" alt=""></button>',
    });

});

let menuLength = conf.menu.length
$(function () {
    $('.assortmentMenu-list').slick({
        infinite: false,
        dots: false,

        slidesToShow: menuLength - 1,
        slidesToScroll: 1,
        prevArrow: '<div class="rm-arr first"></div>',
        nextArrow: '<div class="rm-arr second"></div>'
    });
});

$(function () {
    $('.new-items__body').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',
                }
            }
        ],

    });
})

$(function () {
    $('.rec__body').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',
                }
            }
        ],

    });
})

$(function () {
    $('.sale__body').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',
                }
            }
        ],

    });
})


$(function () {
    $('.shares__body').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<button class="n-img"><img src="images/arrow_prev.png" alt=""></button>',
                    nextArrow: '<button class="n-img2""><img src="images/arrow_next.png" alt=""></button>',
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<div class="new-button"><button class="news-arrow prev">❮</button></div>',
                    nextArrow: '<button class="news-arrow next">❯</button>',
                }
            }
        ],

    });
})
