var btn = document.getElementById('start-scan');
var span = document.getElementById('decoded-value');

// Quagga.init({
//     inputStream : {
//       name : "Live",
//       type : "LiveStream",
//       target: document.querySelector('body')
//     },
//     decoder : {
//       readers : ["code_128_reader"]
//     }
//   }, function(err) {
//       if (err) {
//           console.log(err);
//           return
//       }
//       console.log("Initialization finished. Ready to start");
//       Quagga.start();
// });

btn.addEventListener('click', function (e) {
    e.preventDefault();
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('body')
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
  });
});

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    span.textContent = code;
    console.log(code);
    Quagga.stop();
});
