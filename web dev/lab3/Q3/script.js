function addRow() {
    const name = document.getElementById("nameInput");
    const age = document.getElementById("ageInput");
    const tableBody = document.getElementById("tableBody");

    // Check if inputs are empty
    if (name.value === "" || age.value === "") {
        alert("Please fill in both fields");
        return;
    }

    // 1. Create a new table row (tr)
    const row = document.createElement("tr");

    // 2. Insert columns (td) with content and a delete button
    row.innerHTML = `
        <td>${name.value}</td>
        <td>${age.value}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    // 3. Add the row to the table body
    tableBody.appendChild(row);

    // 4. Clear the inputs for the next entry
    name.value = "";
    age.value = "";
}

// Function to delete the specific row
function deleteRow(button) {
    // 'button' is the clicked element
    // parentElement is <td>, and its parentElement is <tr>
    const rowToDelete = button.parentElement.parentElement;
    rowToDelete.remove();
}