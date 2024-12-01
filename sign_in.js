function Signin() {
    var Username = document.querySelector('#UserName');
    var Password =document.querySelector('#Password')

    localStorage.setItem('Username',"#UserName")
    localStorage.setItem('Password',"#Password")
    JSON.parse(Username)
    JSON.parse(Password)
}