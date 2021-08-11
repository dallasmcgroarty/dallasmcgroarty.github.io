var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');
var video = document.getElementById('scan-container');
var text = document.querySelector('.info');
var focusBox = document.getElementById('focus-box');
var isScanOn = false;

function startScan() {
  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: video,
      constraints: {
        facingMode: "environment"
      },
      area: {
        top: "40%",
        right: "15%",
        left: "15%",
        bottom: "40%"
      }
    },
    decoder : {
      readers : [
        "code_128_reader",
        "upc_reader",
        "upc_e_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "i2of5_reader"
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
    text.style.display = 'none';
    video.style.display = 'block';
    focusBox.style.display = 'block';
  }
});

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
  
    span.textContent = code;
  
    text.style.display = 'block';
    text.textContent = 'Format: ' + result.codeResult.format;
  
    console.log(code);
  
    Quagga.stop();
    video.style.display = 'none';
  focusBox.style.display = 'none';
});
