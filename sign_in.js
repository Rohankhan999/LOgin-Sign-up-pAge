function Signin() {
    var Username = document.querySelector('#UserName');
    var Password =document.querySelector('#Password')

    localStorage.setItem('Username',Username.value)
    localStorage.setItem('Password',Password.value)
}