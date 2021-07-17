function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "adarsh@gmail.com" && password == "adarsh") {
        alert("Login Successful");
        return false;

    } else {
        alert("login failed")
    }

}