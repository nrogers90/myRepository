function validateForm() {
    let firstName = document.getElementById("fname").value;
    if (firstName == "") {
        alert("Please enter your first name.");
        return false;
    }
    return true;
}