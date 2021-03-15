$(document).ready(function(){
    $("#bt1").click(function(){
        $("#bop").fadeIn(300);
        $("#bop").fadeOut(300);
        $("#game").fadeToggle(90);
    var list = $("#list");
    list.animate(
        {width: 'toggle'},100);  
    });
});

var fb = $("#fb")[0];
$(".fb")
    .mouseenter(function() {
    fb.play();
});
var dc = $("#dc")[0];
$(".dc")
    .mouseenter(function() {
    dc.play();
});
var theme = $("#theme")[0];
$(".start")
    .click(function() {
    theme.play();
});