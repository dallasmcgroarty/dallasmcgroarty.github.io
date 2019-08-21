//  function to loop through set of images
(function () {
// images array
  var images = ['images/image1.png', 'images/image2.png', 'images/image3.png',
    'images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png'];
  var index = 0;
  //  use setInterval function to loop through set of images on a timer
  setInterval(function () {
    if (images.length === index) {
      index = 0;
    } else {
      var img = document.getElementById('face'); //  get img element
      img.src = images[index]; //  change the image
      index++;
    }
  }, 500);
})();
