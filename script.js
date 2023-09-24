
const nav = document.querySelector('#nav');
const projectSlider = document.querySelector('.projects-slider');
const projectImages = document.querySelectorAll('.project-image');

window.addEventListener("load", (event) => {
    nav.addEventListener('click', function(e) {
        if (e.target.classList.contains('navbar-item')) {
            const scrollTo = e.target.dataset.scrollTo;
            document.querySelector(scrollTo).scrollIntoView({behavior: 'smooth'});
        }
    })
    
    $('.projects-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    $('.clients-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    speed: 7000,
                }
            }
        ]
    })

    setTimeout(() => {
        $('.projects-slider').slick('refresh');
    }, 1000)
});