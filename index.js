// js  for login forms data
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
            window.location.href = "landing-page.html";
            return;
       } else if(username == objUsers[i].email && password == objUsers[i].password){
            window.location.href = "landing-page.html";
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
   //alert("details logged");

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
        );
        localStorage.setItem("fname", fname);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);

        window.location.href = "landing-page.html"; 
    } 
        else {
        alert("password does not match");
        return;
    }
}

const picture = document.getElementById("image");
picture.addEventListener("change", () => {
    var reader= new FileReader();
    reader.onload = () => {
        localStorage.setItem("image", reader.result);
    }

    reader.readAsDataURL(picture.files[0]);
});

function LoadName () {
    document.getElementById("profile-text").innerHTML = localStorage.getItem("fname");
    document.getElementById("profile-pic").src = localStorage.getItem("image");
}

//js for scroller 
function ScrollBooks(side){
    const elem = document.getElementById("horizontal-scroll");
    let scroller = elem.scrollLeft;
    let elemWidth = elem.clientWidth;
    let scrollableWidth = elem.scrollWidth;
    let total = scrollableWidth - scroller - elemWidth;

    if( side == "left")
    {
        if(total != elem.offsetWidth)
        {
            elem.scrollLeft += 200;
        }
    }
    else{
        if( elem.scrollLeft != 0)
        {
            elem.scrollLeft -= 200;
        }
    }
    
}