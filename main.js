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

  const projects = ['.ranks.example', '.members-only.example', '.tuffy-pub.example', 
    '.open-inventory.example', '.grid-game.example'];
  let currentExample = 0;
  let checkProject = 0;

  // scroll to home
  $('.home-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#home').offset().top },
    'slow');
    $('.title.wrapper').show('slow');
    $('#about').hide('slow');
  });
  // about activate and scroll
  $('.about-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#home').offset().top },
    'slow');
  });

  // slide up about paragraph
  $('.about-btn.nav').click(function () {
    $('.title.wrapper').hide('slow');
    $('#about').show('slow');
  });

  // scroll to projects
  $('.projects-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#projects').offset().top },
    'slow');
    if (checkProject === 0) {
      $('.ranks.example').animate({ left: '50%' }, 1000);
      checkProject = 1;
    }
  });
  // scroll to resume
  $('.resume-btn.nav').click(function () {
    $('html,body').animate({
      scrollTop: $('#resume').offset().top },
    'slow');
  });

  // slide in project buttons

  // slide in from right to left, looping through project examples
  // simple counter and array to hold div class names
  $('.next-btn.arrow').click(function () {
    if (checkProject === 0) {
      $('.ranks.example').animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      checkProject = 1;
    } else if (currentExample !== projects.length - 1) {
      $(projects[currentExample]).animate({ left: '150%', width: '100%', height: 'auto' }, 1000);
      $(projects[currentExample + 1]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      currentExample += 1;
    } else if (currentExample === projects.length - 1) {
      $(projects[currentExample]).animate({ left: '150%', width: '100%', height: 'auto' }, 1000);
      currentExample = 0;
      $(projects[currentExample]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
    }
  })

  // go to previous exmaple on back button press
  $('.back-btn.arrow').click(function () {
    if (checkProject === 0) {
      $('.ranks.example').animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      checkProject = 1;
    } else if (currentExample !== 0) {
      $(projects[currentExample]).animate({ left: '150%', width: '100%', height: 'auto' }, 1000);
      $(projects[currentExample - 1]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      currentExample -= 1;
    } else if (currentExample === 0) {
      $(projects[currentExample]).animate({ left: '150%', width: '100%', height: 'auto' }, 1000);
      currentExample = projects.length - 1;
      $(projects[currentExample]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
    }
  });
})();
