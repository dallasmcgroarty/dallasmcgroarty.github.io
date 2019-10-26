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

  // project example class names
  const projects = ['.ranks.example', '.members-only.example', '.robo-friends.example', '.tuffy-pub.example',
    '.open-inventory.example', '.grid-game.example'];
  let currentExample = 0;
  let checkProject = 0;

  // globals for slide show indexes
  let membersIndex = 1;
  let tuffyIndex = 1;
  let openIndex = 1;

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

  // slide in first project example if user scrolls
  // to the project element
  $(window).on('scroll', function() {
    var elPos = $('#projects').offset().top;
    var yPos = window.pageYOffset;

    if(yPos > elPos) {
      if (checkProject === 0) {
        $('.ranks.example').animate({ left: '50%' }, 1000);
        checkProject = 1;
      }
    }
});
  for (let i = 0; i < projects.length; i++) {
    $(projects[i]).css('width', '100%');
  }

  // slide in from right to left, looping through project examples
  // simple counter and array to hold div class names
  // Go to next example function
  $('.next-btn.arrow').click(function () {
    if (checkProject === 0) {
      $('.ranks.example').animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      checkProject = 1;
    } else if (currentExample !== projects.length - 1) {
      $(projects[currentExample]).animate({ left: '200%', width: '100%', height: 'auto' }, 1000);
      $(projects[currentExample + 1]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      currentExample += 1;
    } else if (currentExample === projects.length - 1) {
      $(projects[currentExample]).animate({ left: '200%', width: '100%', height: 'auto' }, 1000);
      currentExample = 0;
      $(projects[currentExample]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
    }
  });

  // go to previous exmaple on back button press
  $('.back-btn.arrow').click(function () {
    if (checkProject === 0) {
      $('.ranks.example').animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      checkProject = 1;
    } else if (currentExample !== 0) {
      $(projects[currentExample]).animate({ left: '200%', width: '100%', height: 'auto' }, 1000);
      $(projects[currentExample - 1]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
      currentExample -= 1;
    } else if (currentExample === 0) {
      $(projects[currentExample]).animate({ left: '200%', width: '100%', height: 'auto' }, 1000);
      currentExample = projects.length - 1;
      $(projects[currentExample]).animate({ left: '50%', width: '100%', height: 'auto' }, 1000);
    }
  });

  /**********
   * project image slide shows
   *
   * ********** */

  // can use dry here to shrink code
  // members only slide show
  $('#member-next').click(function (e) {
    if (membersIndex === 6) {
      membersIndex = 0;
    }
    membersIndex += 1;
    document.getElementById('members-only-image').src = 'images/member' + String(membersIndex) + '.PNG';
  });

  $('#member-prev').click(function (e) {
    if (membersIndex === 1) {
      membersIndex = 7;
    }
    membersIndex -= 1;
    document.getElementById('members-only-image').src = 'images/member' + String(membersIndex) + '.PNG';
  });

  // tuffypub slide show
  $('#tuffy-next').click(function (e) {
    if (tuffyIndex === 4) {
      tuffyIndex = 0;
    }
    tuffyIndex += 1;
    document.getElementById('tuffypub-image').src = 'images/tuffy' + String(tuffyIndex) + '.PNG';
  });

  $('#tuffy-prev').click(function (e) {
    if (tuffyIndex === 1) {
      tuffyIndex = 5;
    }
    tuffyIndex -= 1;
    document.getElementById('tuffypub-image').src = 'images/tuffy' + String(tuffyIndex) + '.PNG';
  });

  // open inventory slide show
  $('#open-next').click(function (e) {
    if (openIndex === 5) {
      openIndex = 0;
    }
    openIndex += 1;
    document.getElementById('open-inventory-image').src = 'images/open' + String(openIndex) + '.PNG';
  });

  $('#open-prev').click(function (e) {
    if (openIndex === 1) {
      openIndex = 6;
    }
    openIndex -= 1;
    document.getElementById('open-inventory-image').src = 'images/open' + String(openIndex) + '.PNG';
  });
})();
