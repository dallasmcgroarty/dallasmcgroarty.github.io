var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');
var video = document.getElementById('scan-container');
var isScanOn = false;

function startScan() {
  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: video
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
      scanRunning = true;
  });
}

btn.addEventListener('click', function (e) {
  if (isScanOn) {
    Quagga.stop()
  } else {
    startScan();
  }
  
  hideShowCamera();
});

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    span.textContent = code;
    console.log(code);
  
    Quagga.stop();
    hideShowCamera();
});

function hideShowCamera() {
  if (video.style.display == 'none') {
    video.style.display = 'block';
  } else {
    video.style.display = 'none';
  }
}
