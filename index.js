let toggle = 0;

let btn = document.getElementById("btn");
btn.addEventListener("click",toggleColor);

function toggleColor() {
    let background = document.getElementsByClassName("background");
    let top = document.getElementsByClassName("top");
    let bottom = document.getElementsByClassName("bottom");
    let card1 = document.getElementsByClassName("dashboard");
    let card2 = document.getElementsByClassName("overview");
    let text1 = document.getElementsByClassName("d-text");
    let text2 = document.getElementsByClassName("v-text");
    let num1 = document.getElementsByClassName("d-num");
    let num2 = document.getElementsByClassName("v-num");

    if (toggle == 0){
        background[0].style.backgroundColor = "hsl(0, 0%, 100%)";
        top[0].style.backgroundColor = "hsl(225, 100%, 98%)";
        bottom[0].style.backgroundColor = "hsl(0, 0%, 100%)";
        for (let i = 0; i < card1.length; i++) {
            card1[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for (let i = 0; i < card2.length; i++) {
            card2[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        for (let i = 0; i < text1.length; i++) {
            text1[i].style.color = "hsl(228, 12%, 44%)";
        }
        for (let i = 0; i < text2.length; i++) {
            text2[i].style.color = "hsl(228, 12%, 44%)";
        }
        for (let i = 0; i < num1.length; i++) {
            num1[i].style.color = "hsl(230, 17%, 14%)";
        }
        for (let i = 0; i < num2.length; i++) {
            num2[i].style.color = "hsl(230, 17%, 14%)";
        }
        toggle = 1;
    } else {
        background[0].style.backgroundColor = "hsl(230, 17%, 14%)";
        top[0].style.backgroundColor = "hsl(232, 19%, 15%)";
        bottom[0].style.backgroundColor = "hsl(230, 17%, 14%)";
        for (let i = 0; i < card1.length; i++) {
            card1[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        for (let i = 0; i < card2.length; i++) {
            card2[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        for (let i = 0; i < text1.length; i++) {
            text1[i].style.color = "hsl(228, 34%, 66%)";
        }
        for (let i = 0; i < text2.length; i++) {
            text2[i].style.color = "hsl(228, 34%, 66%)";
        }
        for (let i = 0; i < num1.length; i++) {
            num1[i].style.color = "hsl(0, 0%, 100%)";
        }
        for (let i = 0; i < num2.length; i++) {
            num2[i].style.color = "hsl(0, 0%, 100%)";
        }
        toggle = 0

    }
}
