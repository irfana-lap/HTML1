let input5 = document.getElementById("input5");
let result = document.getElementById("result");

input5.addEventListener("input", function() {
    let num = input5.value;

    if (num === "") {
        result.textContent = "";
    } else if (num % 2 === 0) {
        result.textContent = "Even number";
    } else {
        result.textContent = "Odd number";
    }
});