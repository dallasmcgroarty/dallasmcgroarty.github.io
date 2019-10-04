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

  // scroll to home
  $('.home-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#home').offset().top },
    'slow');
  });
  // scroll to projects
  $('.projects-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#projects').offset().top },
    'slow');
  });
  // scroll to resume
  $('.resume-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#resume').offset().top },
    'slow');
  });
})();
