function submit() {
    var firstName = document.querySelector("#username1")
    var lastName = document.querySelector("#password1")


    localStorage.setItem("username1", firstName.value);
    localStorage.setItem("password1", lastName.value);

    Swal.fire({
        icon: "success",
        title: "Sign up Successfully!!",
        showConfirmButton: false,
        timer: 3500
    });

    firstName.value = ""
    lastName.value = ""
}