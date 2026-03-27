document.getElementById("regForm").addEventListener("submit", function(event) {
    let isValid = true;

    // 1. Grab all inputs
    const role = document.getElementById("role").value;
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirmPass");

    // 2. Grab error containers
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");

    // 3. Reset previous states
    [email, confirmPass].forEach(el => el.classList.remove("invalid"));
    emailError.innerText = "";
    passError.innerText = "";

    // 4. RULE: Email must match Role
    // Students: @student.edu.np | Teachers: @tutor.edu.np
    if (role === "Student" && !email.value.toLowerCase().endsWith("@student.edu.np")) {
        email.classList.add("invalid");
        emailError.innerText = "Student email must end with @student.edu.np";
        isValid = false;
    } 
    else if (role === "Teacher" && !email.value.toLowerCase().endsWith("@tutor.edu.np")) {
        email.classList.add("invalid");
        emailError.innerText = "Teacher email must end with @tutor.edu.np";
        isValid = false;
    }

    // 5. RULE: Password and Confirm Password must match
    if (password.value !== confirmPass.value) {
        confirmPass.classList.add("invalid");
        passError.innerText = "Passwords do not match!";
        isValid = false;
    }

    // 6. Prevent submission if any check failed
    if (!isValid) {
        event.preventDefault(); // Stops the form from sending
    } else {
        alert("Registration form submitted successfully!");
    }
});