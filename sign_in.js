function Signin() {
    var Username = document.querySelector('#UserName');
    var Password =document.querySelector('#Password')

    localStorage.setItem('Username',Username.value)
    localStorage.setItem('Password',Password.value)

    Username.value =""
    Password.value =""
    Swal.fire({
        title: "Sign _up SuccessFully!",
        text: "Welcome Here!!",
        icon: "success"
      });

}