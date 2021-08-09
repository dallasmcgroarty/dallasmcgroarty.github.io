var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');
var video = document.getElementById('scan-container');
var text = document.querySelector('.info');
var isScanOn = false;

function startScan() {
  Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: video
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
    text.textContent = result.codeResult;
  
    console.log(code);
  
    Quagga.stop();
    video.style.display = 'none';
});
