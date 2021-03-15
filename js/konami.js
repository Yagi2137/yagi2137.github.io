var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
var konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiPosition = 0;
document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konami[konamiPosition];
    if (key == requiredKey) {
        konamiPosition++;
        if (konamiPosition == konami.length) {
            konamiSecret();
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
    }
});
function konamiSecret() {
    document.body.style.backgroundImage = "url('img/gradius.png')";
    var audio = new Audio('audio/konami.mp3');
    audio.play();
    alert(":O");
}