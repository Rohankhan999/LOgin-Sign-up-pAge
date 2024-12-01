
function login() {
    var Username = document.querySelector('#UserName');
    var Password = document.querySelector('#Password');

    var storedUsername = localStorage.getItem('Username');
    var storedPassword = localStorage.getItem('Password');

    if (Username.value === storedUsername && Password.value === storedPassword) {
        Swal.fire({
            title: "Login successfully!!",
            text: "Welcome Back!",
            icon: "success"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Correct Password or UserName!",
        });
    }
    Username.value = "";
    Password.value = "";
}
