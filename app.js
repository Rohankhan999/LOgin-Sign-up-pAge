// function submit() {
//    window.location.href= "signup.html"
//    var username = document.getElementById('username');
//    var password = document.getElementById('password');
 
// username.value = ""
// password.value = ""
// console.log(username ,username.value);

// }
function submit() {
    var firstName = document.querySelector("#username1")
    var lastName = document.querySelector("#password1")


    localStorage.setItem("username1", firstName.value);
    localStorage.setItem("password1", lastName.value);

    Swal.fire({
        icon: "success",
        title: "login  Successfully!!",
        showConfirmButton: false,
        timer: 3500
    });

    firstName.value = ""
    lastName.value = ""
}