// for slider
$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay:true,
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
  });
});

// for animation
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const image = document.getElementById('image');
const image2 = document.getElementById('image2');
window.addEventListener('scroll', function() {
const viewportHeight = window.innerHeight;
// const scrollPosition = window.scrollY || window.pageYOffset;
const imageTop = image.getBoundingClientRect().top;
const imageBottom = imageTop + image.clientHeight;
const imageVisible = imageTop < viewportHeight && imageBottom> 0;
    if (imageVisible) {
    image.style.height = '95%';
    image2.style.top = '-5%';
    } else {

    image.style.height = '60%';
    image2.style.top = '10%';
    }
    });
