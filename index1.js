/*for (var k = 0;k<=document.querySelectorAll(".drum").length;k++)
document.querySelectorAll(".drum")[k].addEventListener("click", add);


function add() {
    alert(" I am click ");
}*/

//               or
//We  have use .drum instance of button beacuse it counts number of button html but when button come in footer
// it will also count it so we donot wan tthis so we used .drum

// when click it will ask that I am click;
                                               /*  You can gave it function any name*/
document.addEventListener("keypress", function (event) {
    /*  By clicking method by Keyboard */
    make_sound(event.key);
    Animation_add(event.key);
});

for (var k = 0; k <= document.querySelectorAll(".drum").length; k++)  
    document.querySelectorAll(".drum")[k].addEventListener("click", function () {
        /*  var c = new Audio('sounds/tom-1.mp3');
         c.play();*/
        /*  this.style.color ="white";*/
        var c = this.innerHTML;
        make_sound(c);
        Animation_add(c);

    });

       function make_sound(key) {

           switch (key) {
                case 'w':
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
                case 'a':
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
               default:
                   console.log(key);
                    break;


            }
        }

function Animation_add(evt) {

    var btn = document.querySelector("." + evt);
    btn.classList.add("pressed");

    setTimeout(function () {
        btn.classList.remove("pressed");
    },100);


}





