var lie = {
    76: 'l',
    73: 'i',
    69: 'e'
};
var cake = ['l', 'i', 'e'];
var cakePosition = 0;
document.addEventListener('keydown', function(e) {
    var key = lie[e.keyCode];
    var requiredKey = cake[cakePosition];
    if (key == requiredKey) {
        cakePosition++;
        if (cakePosition == cake.length) {
            cakeSecret();
            cakePosition = 0;
        }
    } else {
        cakePosition = 0;
    }
});
function cakeSecret() {
    var audio = new Audio('audio/cake.mp3');
    audio.play();
    alert("⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅,:/+/-\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅/M/⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.,-=;//;-\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.:/=⑅;MH/,⑅⑅⑅⑅,=/+%$XH@MM#@:\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅-$##@+$###@H@MMM#######H:.⑅⑅⑅⑅-/H#\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.,H@H@⑅X######@⑅-H#####@+-⑅⑅⑅⑅⑅-+H###@X\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.,@##H;⑅⑅⑅⑅⑅⑅+XM##M/,⑅⑅⑅⑅⑅=%@###@X;-\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅X%-⑅⑅:M##########$.⑅⑅⑅⑅.:%M###@%:\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅M##H,⑅⑅⑅+H@@@$/-.⑅⑅,;$M###@%,⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅-\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅M####M=,,---,.-%%H####M$:⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅,+@##\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅@##################@/.⑅⑅⑅⑅⑅⑅⑅⑅⑅:%H##@$-\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅M###############H,⑅⑅⑅⑅⑅⑅⑅⑅⑅;HM##M$=\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅#################.⑅⑅⑅⑅.=$M##M$=\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅################H..;XM##M$=⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.:+\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅M###################@%=⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅=+@MH%\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅@#################M/.⑅⑅⑅⑅⑅⑅⑅⑅⑅=+H#X%=\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅=+M###############M,⑅⑅⑅⑅⑅⑅,/X#H+:,\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.;XM###########H=⑅⑅⑅,/X#H+:;\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅.=+HM#######M+/+HM@+=.\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅,:/%XM####H/.\n⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅⑅,.:=-.");
    $(".img3").show();
}