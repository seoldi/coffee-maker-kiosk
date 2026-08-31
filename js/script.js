// Kiosk demo scaling — fits 1080×1920 canvas into any viewport
(function () {
  var W = 1080, H = 1920;

  function fit() {
    var scale = Math.min(window.innerWidth / W, window.innerHeight / H);
    // Admin pages: scale .wrap/.sub; Kiosk pages: scale body
    var el = document.querySelector('.wrap') || document.querySelector('.sub') || document.body;
    var isBody = (el === document.body);

    el.style.transform = 'scale(' + scale + ')';
    el.style.transformOrigin = 'top center';

    if (isBody) {
      // html acts as the centering flex container
      document.documentElement.style.height = (H * scale) + 'px';
    } else {
      // Collapse body height so no scrollbar appears
      document.body.style.height = (H * scale) + 'px';
      document.body.style.overflow = 'hidden';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fit);
  } else {
    fit();
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