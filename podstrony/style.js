$(document).ready(function(){
    var start = $("#start")[0];
    $("#contentMenu").hide();
    $("#startMenu").click(function(){
        $("#snap").animate({
         opacity:-0.3,
         height: 400
        }, 1500);
         start.play();
         $("#contentMenu").fadeIn(1500);
    });
});