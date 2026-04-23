let input1 = document.getElementById("input1");
let output1 = document.getElementById("output1");

input1.addEventListener("input", function() {
    output1.textContent = input1.value;
});