var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var docu = document.getElementById("xyz");
    var button = document.getElementById("button");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        docu.style.cursor = "wait";
        button.style.cursor = "wait";
      }
    }
  }
}
$(document).ready(function(){
    var alert = $("#alert")[0];
    $(".button")
        .click(function() {
        $(".alert").fadeIn(100);
        alert.play();
        });
});
