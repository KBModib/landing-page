// js  for login forms 
var objUsers = [
    {
        username: "amahle",
        email: "amahlemthembu@reader.com",
        password: "bookworm-7"
    },
    {
        username: "basetsana",
        email: "bassie997@launcher.com",
        password: "bassiereads"
    },
    {
        username: "colin",
        email: "colinjones@tester.com",
        password: "loveebooks"
    }
];
function getInfo(){
    var username = document.getElementsByClassName("username")[0].value;
    var password = document.getElementsByClassName("password")[0].value;

    for(i = 0; i < objUsers.length; i++) {
        if(username == objUsers[i].username && password == objUsers[i].password) {
            window.location.href = "index.html";
            return;
       } else if(username == objUsers[i].email && password == objUsers[i].password){
            window.location.href = "index.html";
            return;
       }
    }
    
    alert("incorrect username or password");
}


// js  for registration form

function validateForm() {
    var fname = document.getElementById("username").value;
    var lname = document.getElementById("lastname").value;
    var email = document.getElementById("email-reg").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("reg-password").value;
    var passconfirm = document.getElementById("password-confirm").value;
   
   // alert("details logged");

    for(i = 0; i < objUsers.length; i++) {
        if (fname == objUsers[i].username || email == objUsers[i].email) {
            alert("Username not available");
            return;
        }
    }
        if(pass == passconfirm) {
        objUsers.push(
            {
                username: fname,
                email: email,
                password: pass
            },
        )
        window.location.href = "index.html"; 
    } 
        else {
        alert("password does not match");
        return;
    }
}
  