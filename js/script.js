// Kiosk demo scaling — fits 1080×1920 canvas into viewport without clipping
// zoom reduces layout footprint; margin:0 auto (set in CSS) re-centers automatically
(function () {
  var W = 1080, H = 1920;
  var canvas = null;

  function setup() {
    // .wrap or .sub on a div child — use it directly
    canvas = document.querySelector('.wrap:not(body), .sub:not(body)');
    if (canvas) return;

    // body itself has class wrap/sub — move children into a frame div so we
    // can zoom the frame without the body-background-propagates-to-canvas quirk
    var frame = document.getElementById('kiosk-frame');
    if (!frame) {
      frame = document.createElement('div');
      frame.id = 'kiosk-frame';
      while (document.body.firstChild) frame.appendChild(document.body.firstChild);
      document.body.appendChild(frame);
    }
    document.body.classList.add('kiosk-demo-body');
    canvas = frame;
  }

  function fit() {
    if (!canvas) return;
    var scale = Math.min(window.innerWidth / W, window.innerHeight / H);
    canvas.style.zoom = scale;
  }

  function init() {
    setup();
    fit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('resize', fit);
})();

//html Load script
window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

// 마우스 우클릭 및 드래그방지
// $(document).on("contextmenu dragstart selectstart",function(e){
//     return false;
// });

$(document).ready(function(){
    // input 터치시 키패드 보이기
    $("input.key").click(function(){
        $(".keypadWrap").addClass("active");
    });
});