//  iife
(function () {
// images array
  // var images = ['images/image1.png', 'images/image2.png', 'images/image3.png',
  //   'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png'];
  // var index = 0;
  // //  use setInterval function to loop through set of images on a timer
  // setInterval(function () {
  //   if (images.length === index) {
  //     index = 0;
  //   } else {
  //     var img = document.getElementById('face'); //  get img element
  //     img.src = images[index]; //  change the image
  //     index++;
  //   }
  // }, 500);

  let checkProject = 0;
  // grab first project and show it
  $('.ranks.example').css('visibility','visible');

  //$('.members-only.example').css('visibility', 'visible');
  // scroll to home
  $('.home-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#home').offset().top },
    'slow');
    $('.title.wrapper').slideDown();
    $('#about').css('display', 'none');
  });
  // about activate and scroll
  $('.about-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#home').offset().top },
    'slow');
  });

  // slide up about paragraph
  $('.about-btn.nav').click(function () {
    $('.title.wrapper').css('display', 'none');
    $('#about').slideDown();
  });

  // scroll to projects
  $('.projects-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#projects').offset().top },
    'slow');
    if(checkProject === 0) {
      $('.ranks.example').css('animation', 'slideInLeft 1s forwards');
      $('.ranks.example').css('-webkit-animation', 'slideInLeft 1s forwards;');
      checkProject = 1;
    }
  });
  // scroll to resume
  $('.resume-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#resume').offset().top },
    'slow');
  });

  //slide in project buttons
  // slide in from right to left
  $('.next-btn.arrow').click(function () {
    $('.ranks.example').css('animation', 'slideOutRight 1s forwards');
    $('.ranks.example').css('-webkit-animation', 'slideOutRight 1s forwards;');
    $('.members-only.example').css('animation', 'slideInLeft 1s forwards');
    $('.members-only.example').css('-webkit-animation', 'slideInLeft 1s forwards;');
  })

  // slide in from left to right
  $('.back-btn.arrow').click(function () {
    $('.members-only.example').css('animation', 'slideOutRight 1s forwards');
    $('.members-only.example').css('-webkit-animation', 'slideOutRight 1s forwards;');
    $('.ranks.example').css('animation', 'slideInLeft 1s forwards');
    $('.ranks.example').css('-webkit-animation', 'slideInLeft 1s forwards;');
  })
})();
