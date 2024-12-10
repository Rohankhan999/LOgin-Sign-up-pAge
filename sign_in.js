function Signin() {
    var Username = document.querySelector('#UserName');
    var Password =document.querySelector('#Password')
    if(Username.value === "" || Password.value === ""){
      Swal.fire({
        icon: "error",
        title: "ERROR...",
        text: "Enter Password or UserName!",
    });
    return
  }
    localStorage.setItem('Username',Username.value)
    localStorage.setItem('Password',Password.value)

    Username.value =""
    Password.value =""
   
    Swal.fire({
        title: "Sign _up SuccessFully!",
        text: "Welcome Here!!",
        icon: "success"
      });
    window.open("login_page.html","_self")
}