let input2 = document.getElementById("input2");
let count = document.getElementById("count");

input2.addEventListener("input", function() {
    count.textContent = "Characters: " + input2.value.length;
});