document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission


    var name = document.getElementById("name").value;
    var college = document.getElementById("college").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;


    // Display a success message
    alert("Registration successful!");
});