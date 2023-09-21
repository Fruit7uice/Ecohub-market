
var activeColor = "#3f6668";
var passiveColor = "#adadad";
var counter = 1;
function forwardProgress() {

    if (!(counter >= 3)) {
        counter++;
    }
    if (counter == 2) {
        const state2 = document.getElementById('state2');
        const line1 = document.getElementById('line1');

        state2.style.border = "5px solid " + activeColor;
        state2.style.color = activeColor;
        line1.style.backgroundColor = activeColor;

        const pre_btn = document.getElementById('previous-btn');
        pre_btn.style.visibility = "visible";

    }
    if (counter == 3) {
        const state3 = document.getElementById('state3');
        const line2 = document.getElementById('line2');

        state3.style.border = "5px solid " + activeColor;
        state3.style.color = activeColor;
        line2.style.backgroundColor = activeColor;

        const next_btn = document.getElementById('next-btn');
        next_btn.style.visibility = "hidden";

        const reg_btn = document.getElementById('register-btn');
        reg_btn.style.visibility = "visible";
    }

    console.log(counter);
}

function backwardProgress() {

    if (!(counter <= 1)) {
        counter--;
    }
    if (counter == 1) {
        const state2 = document.getElementById('state2');
        const line1 = document.getElementById('line1');

        state2.style.border = "5px solid " + passiveColor;
        state2.style.color = passiveColor;
        line1.style.backgroundColor = passiveColor;

        const pre_btn = document.getElementById('previous-btn');
        pre_btn.style.visibility = "hidden";
    }

    if (counter == 2) {
        const state3 = document.getElementById('state3');
        const line2 = document.getElementById('line2');

        state3.style.border = "5px solid " + passiveColor;
        state3.style.color = passiveColor;
        line2.style.backgroundColor = passiveColor;

        const next_btn = document.getElementById('next-btn');
        next_btn.style.visibility = "visible";

        const reg_btn = document.getElementById('register-btn');
        reg_btn.style.visibility = "hidden";
    }


    // console.log(counter);
}
