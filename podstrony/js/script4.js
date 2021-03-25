document.addEventListener('DOMContentLoaded', () => {
function hackTime(e) {
    if(e.keyCode === 3) {
      showHack();
    }
};
document.addEventListener('keyup', hackTime)

function showHack(){
    const makrela = document.getElementById('timeHack');
    makrela.style.display = "grid";
    console.log('hackTime');
}
})
$(document).ready(function(){
    $(".answerYes").click(function() {
        $(".movie").fadeIn();
        $(".timeHack").hide();
        audio.pause();
        });
});
