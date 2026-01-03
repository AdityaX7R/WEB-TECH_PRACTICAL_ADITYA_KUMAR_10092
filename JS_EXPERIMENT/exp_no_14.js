// Select elements
var button = document.getElementById("btn");
var removeBtn = document.getElementById("removeBtn");
var message = document.getElementById("message");

// Mouse event function
function handleMouseClick() {
    button.classList.toggle("active");
    message.innerHTML = "Mouse click event triggered!";
}

// Add mouse event listener
button.addEventListener("click", handleMouseClick);

// Keyboard event listener
document.addEventListener("keydown", function (event) {
    message.innerHTML = "Key pressed: " + event.key;
});

// Remove mouse event listener
removeBtn.addEventListener("click", function () {
    button.removeEventListener("click", handleMouseClick);
    message.innerHTML = "Mouse click event removed!";
});
