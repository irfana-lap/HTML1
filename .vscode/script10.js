let number = 1;

function doubleNum() {
    number = number * 2;

    if (number > 100) {
        alert("Limit exceeded!");
        return;
    }

    document.getElementById("num").innerText = number;
}