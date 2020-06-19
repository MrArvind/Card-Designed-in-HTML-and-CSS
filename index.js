// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const jyots = e.currentTarget.classList;
        if (jyots.contains("decrease")) {
            count--;
        } else if (jyots.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }

        if (count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
        
    });
});