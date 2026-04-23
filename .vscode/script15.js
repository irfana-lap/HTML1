let input4 = document.getElementById("input4");
let msg = document.getElementById("msg");

input4.addEventListener("input", function() {
    if (input4.value.length > 0) {
        msg.textContent = "Typing...";
    } else {
        msg.textContent = "";
    }
});