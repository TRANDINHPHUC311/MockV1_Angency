let arrays = [{
        content: 'Design Thinking x Creative Coding. Our experience and technical expertise help you achieve your business goals. Passion, collaboration and accuracy in analyzing are our guiding principles. We aim to unleash the power of software craftsmanship to reach the successful market-product fit for your product and brand',
        id: 0,
    },
    {
        content: 'Coding. Our experience and technical expertise help you achieve your business goals. Passion, collaboration and accuracy in analyzing are our guiding principles. We aim to unleash the power of software craftsmanship to reach the successful market-product fit for your product and brand',
        id: 1,
    },
    {
        content: 'Design Thinking x Creative Coding. Our experience and technical expertise help you achieve your business goals. Passion, collaboration and accuracy in analyzing are our guiding principles. We aim to unleash the power of software craftsmanship to reach the successful mad brand',
        id: 2,
    },
    {
        content: 'X Creative Coding. Our experience and technical expertise help you achieve your business goals. Passion, collaboration and accuracy in analyzing are our guiding principles. We aim to unleash the power of software craftsmanship to reach the successful market-product fit for your product and brand',
        id: 3,
    }
]

$(".variable").slick({
    // dots: true,
    infinite: true,
    variableWidth: true,
    draggable: false,
    autoplay: false,
    autoplaySpeed: false,
    responsive: [{
            breakpoint: 1200,
            settings: {}
        },
        {
            breakpoint: 993,
            settings: {
                draggable: true,
                autoplay: true,
                autoplaySpeed: 5000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                variableWidth: false,
                draggable: true,
                autoplay: true,
                autoplaySpeed: 5000
            }
        },
    ],
});
var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//     var i = (currentSlide ? currentSlide : 0) + 1;
//     $status.text(i + '/' + slick.slideCount);
// });

let portfolioContent = document.getElementById('portfolioContent');

portfolioContent.innerHTML = arrays[0].content;

$('.prort__slide .slick-prev, .prort__slide .slick-next').click(function () {
    let activeIndexSlide = $('.slick-active').attr('data-slick-index');


    for (let i = 0; i <= arrays.length; i++) {
        if (i === Number(activeIndexSlide)) {
            portfolioContent.innerHTML = arrays[i].content;
            break;
        }
    }

});