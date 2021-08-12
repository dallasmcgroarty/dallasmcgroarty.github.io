var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');
var video = document.getElementById('scan-container');
var text = document.getElementById('info');
var focusBox = document.getElementById('focus-box');
var closeScan = document.getElementById('close-scan');
var scanRunning = false;

var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

// for qr scan
let codes = [];
const seen = new Set();
// Create new barcode detector
const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });

var App = {
    init: function() {
        Quagga.init(this.state, function(err) {
            if (err) {
                console.log(err);
                return;
            }

            Quagga.start();
            scanRunning = true;
        });
    },
    state: {
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: video,
            constraints: {
                facingMode: "environment"
            },
            area: {
                top: "0%",
                right: "0%",
                left: "0%",
                bottom: "0%"
            }
        },
        decoder: {
            readers: [
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
    }
}

btn.addEventListener('click', function(e) {
    App.init();

    text.style.display = 'none';
    video.style.display = 'block';

    checkFullscreen(video, 1);
   //video.requestFullscreen();

    setTimeout(() => {
        // focusBox.style.display = 'block';
        closeScan.style.display = 'block';
    }, 1000);
});

document.getElementById('start-qr-scan').addEventListener('click', function(e) {
    startStream();
});

closeScan.addEventListener('click', function(e) {
    video.style.display = 'none';
    checkFullscreen(document, 0);
    //document.exitFullscreen();
    Quagga.stop();
    closeScan.style.display = 'none';
})

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;

    span.textContent = code;

    text.style.display = 'block';
    text.textContent = 'Format: ' + result.codeResult.format;

    console.log(code);

    Quagga.stop();
    video.style.display = 'none';
    // focusBox.style.display = 'none';

    checkFullscreen(document, 0);
    //document.exitFullscreen();
});

function checkFullscreen(el, action) {
    if (!isMobile) {
        return;
    }

    if (action == 0) {
        el.exitFullscreen();
    } else {
        el.requestFullscreen();
    }
}

function startStream() {
    video.style.display = 'block';
    video.append(document.createElement('video'));
    checkFullscreen(video, 1);

    setTimeout(() => {
        // focusBox.style.display = 'block';
        closeScan.style.display = 'block';
    }, 1000);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Use video without audio
        const constraints = { 
            audio: false,
            video: {
                facingMode: "environment"
          }
        }
        // Start video stream
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                liveStream = document.querySelector('video');
                liveStream.srcObject = stream
                liveStream.onloadedmetadata = function(e) {
                    liveStream.play();
                    // start scan
                    setInterval(detectCode, 100);
                };
            })
            .catch((err) => {console.log(err.name + ": " + err.message); });
    }
}

// Detect code function 
const detectCode = () => {
    barcodeDetector.detect(document.querySelector('video')).then(barcodes => {
        barcodes.forEach(barcode => {
            if (seen.has(barcode.rawValue)) {
                document.querySelector('video').srcObject.getTracks().forEach(track => track.stop());
                video.style.display = 'none';
                checkFullscreen(document, 0);
                text.style.display = 'block';
                text.textContent = 'Format: ' + barcode.format;
                span.textContent = barcode.rawValue;
                return;
            }

            console.log(barcode.rawValue);
            seen.add(barcode.rawValue);
        });
    }).catch(err => {
      console.error(err);
    });
}
