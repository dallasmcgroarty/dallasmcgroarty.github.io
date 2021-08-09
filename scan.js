var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');
var video = document.getElementById('scan-container');
var isScanOn = false;

function startScan() {
  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: video,
      constraints: {
        width: {min: 640},
        height: {min: 480},
        aspectRatio: {min: 1, max: 100},
        facingMode: "environment"
      }
    },
    decoder : {
      readers : [
        "code_128_reader",
        "upc_reader",
        "upc_e_reader",
      ]
    },
    locator: {
      patchSize: "medium",
      halfSample: true
    },
    locate: true
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }

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
  
  video.style.display = 'block';
});

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    span.textContent = code;
    console.log(code);
  
    Quagga.stop();
    video.style.display = 'none';
});
