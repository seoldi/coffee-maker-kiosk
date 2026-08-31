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