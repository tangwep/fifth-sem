function togglePassword() {
    const passField = document.getElementById("passField");
    const toggleBtn = document.getElementById("toggleBtn");

    // Check the current type of the input
    if (passField.type === "password") {
        // Change to text to make it visible
        passField.type = "text";
        toggleBtn.innerText = "Hide";
    } else {
        // Change back to password to hide it
        passField.type = "password";
        toggleBtn.innerText = "Show";
    }
}