// Start Menu Toggle
document.getElementById("start-button").addEventListener("click", function (event) {
    let menu = document.getElementById("start-menu");

    // Ensure menu appears at the correct position
    let buttonRect = this.getBoundingClientRect();
    menu.style.left = buttonRect.left + "px";
    menu.style.bottom = "50px"; // Above taskbar

    // Toggle visibility
    menu.style.display = (menu.style.display === "block") ? "none" : "block";

    // Prevent instant close
    event.stopPropagation();
});

// Keep menu open when clicking inside it
document.getElementById("start-menu").addEventListener("click", function (event) {
    event.stopPropagation();
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("start-menu");
    if (!menu.contains(event.target) && event.target.id !== "start-button") {
        menu.style.display = "none";
    }
});

// Make folder draggable
function makeDraggable(elementId) {
    let element = document.getElementById(elementId);
    let offsetX, offsetY, isDragging = false;

    element.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            element.style.position = "absolute";
            element.style.left = (e.clientX - offsetX) + "px";
            element.style.top = (e.clientY - offsetY) + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
}

// Apply drag functionality
makeDraggable("folder1");

function updateTime() {
    let timeElement = document.getElementById("time");
    let dateElement = document.getElementById("date");

    if (timeElement && dateElement) {
        timeElement.textContent = new Date().toLocaleTimeString();
        dateElement.textContent = new Date().toLocaleDateString();
    }
}

// Run updateTime every second
setInterval(updateTime, 1000);

// Call updateTime immediately on load
updateTime();
