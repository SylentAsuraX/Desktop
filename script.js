document.getElementById("start-button").addEventListener("click", function () {
    let menu = document.getElementById("start-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Open and close folder functions
function openFolder(folderId) {
    document.getElementById(folderId).style.display = "block";
}

function closeFolder(folderId) {
    document.getElementById(folderId).style.display = "none";
}

// Make desktop icons draggable
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
makeDraggable("folder2");
makeDraggable("internet-icon");
makeDraggable("Gemini-icon");
makeDraggable("folder3");
makeDraggable("subfolder1");
makeDraggable("subfolder2");

// Update time and date dynamically
function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();
