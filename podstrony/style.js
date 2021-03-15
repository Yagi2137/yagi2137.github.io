$(document).ready(function(){
    var start = $("#start")[0];
    $("#startMenu").click(function(){
        $("#snap").animate({
         height:0,
         opacity:-0.3
         }, 1500);
         start.play();
    });
});