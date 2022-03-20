var buttons = document.querySelectorAll(".btn");
var tryIt = document.getElementById("try-it-btn");
var tooltip = document.querySelector(".tooltip");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        navigator.clipboard.writeText(`<button class="${button.classList}">${button.innerText}</button>`);
        tooltip.classList.add("active");
        setTimeout(function() {
            tooltip.classList.remove("active");
        }, 2000);
    });    
});

tryIt.addEventListener("click", function() {
    navigator.clipboard.writeText(`<link rel="stylesheet" href="https://priyankandas.github.io/CSS-Buttons2/buttons.css">`);
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});