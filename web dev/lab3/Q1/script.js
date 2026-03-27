let selectedElement = null;

// Function to show or hide the input section
function toggleInput(show) {
    const inputArea = document.getElementById("inputArea");
    const inputField = document.getElementById("itemInput");
    
    if (show) {
        inputArea.classList.remove("hidden");
        inputField.focus(); // Automatically put the cursor in the box
    } else {
        inputArea.classList.add("hidden");
        inputField.value = ""; // Clear the text
    }
}

function saveItem() {
    const input = document.getElementById("itemInput");
    const list = document.getElementById("myList");

    if (input.value.trim() === "") {
        alert("Please enter a name!");
        return;
    }

    const li = document.createElement("li");
    li.innerText = input.value;

    // Logic to select an item
    li.onclick = function() {
        if (selectedElement) selectedElement.classList.remove("selected");
        selectedElement = li;
        li.classList.add("selected");
    };

    list.appendChild(li);
    
    // HIDE the input area again once finished
    toggleInput(false);
}

function removeSelected() {
    if (selectedElement) {
        selectedElement.remove();
        selectedElement = null;
    } else {
        alert("Select an item first by clicking it!");
    }
}