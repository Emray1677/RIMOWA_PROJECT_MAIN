let createAccbtn = document.getElementById("createAccbtn")
let error = document.getElementById("error");

function titleCreateAccDetail(){
    
    let titleName  = document.getElementById('titleCreateACC').value;
        if (titleName === "") {
            document.getElementById('err').innerHTML = "Please select a civility.";
            err.style.color = "red"
            // err.style.size = "4px"
            return false;
        } else {
            document.getElementById('err').innerHTML = "";
            return true;
        }
    
}

function firstNAmeDetail(){

    let firstName = document.getElementById('firstNameNeeded').value;
    if (firstName ==="") {
        document.getElementById('errII').innerHTML = "please enter first name";
        errII.style.color = "red"
        return false;
    }else{
        document.getElementById('errII').innerHTML = "";
        return true;
    }
}

function lastNAmeDetail(){

    let lastName = document.getElementById('lastNameNeeded').value;
    if (lastName ==="") {
        document.getElementById('errIII').innerHTML = "please enter last name";
        errIII.style.color = "red"
        return false;
    }else{
        document.getElementById('errIII').innerHTML = "";
        return true;
    }
}

function countryDetail(){

    let countryName = document.getElementById('countryNeeded').value;
    if (countryName ==="") {
        document.getElementById('errIV').innerHTML = "please select country";
        errIV.style.color = "red"
        return false;
    }else{
        document.getElementById('errIV').innerHTML = "";
        return true;
    }
}


function emailDetail(){

    let emailAddress = document.getElementById('emailNeeded').value;
    if (emailAddress ==="") {
        document.getElementById('errV').innerHTML = "please enter email";
        errV.style.color = "red"
        return false;
    }else{
        document.getElementById('errV').innerHTML = "";
        return true;
    }
}

function passwordlDetail(){

    let passwordInput = document.getElementById('passwordNeeded').value;
    if (passwordInput ==="") {
        document.getElementById('errVI').innerHTML = "please enter password";
        errVI.style.color = "red"
        // errVI.style.font = "10px"
        return false;
    }else{
        document.getElementById('errVI').innerHTML = "";
        return true;
    }
}

function RePasswordlDetail(){

    let RePasswordInput = document.getElementById('RenterPassword').value;
    if (RePasswordInput ==="") {
        document.getElementById('errVII').innerHTML = "please confirm password";
        errVII.style.color = "red"
        return false;
    }else{
        document.getElementById('errVII').innerHTML = "";
        return true;
    }
}



let firstNameNeeded = document.getElementById('firstNameNeeded');
let lastNameNeeded = document.getElementById('lastNameNeeded');
let emailNeeded = document.getElementById('emailNeeded');
let UserPhone = document.getElementById('UserPhone');
let passwordNeeded = document.getElementById('passwordNeeded');


function CreatingUserAccount(){

  let UserInputDetails = {
    first_name: firstNameNeeded.value,
    last_name: lastNameNeeded.value,
    email: emailNeeded.value,
    phone: UserPhone.value,
    password: passwordNeeded.value,
  }

  console.log(UserInputDetails);
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "http://ecommerce.reworkstaging.name.ng/v2//users",
        header: "application/json",
        data: UserInputDetails,
        success: function (res) {
            console.log(res);
            window.location.href = "RimowaSignIn.html";
        },
        error: function (error) {
            console.log("error", error);
        }
    })
})
}




function CreateAccoutMain(){
    titleCreateAccDetail()
    firstNAmeDetail()
    lastNAmeDetail()
    countryDetail()
    // emailDetail()
    passwordlDetail()
    RePasswordlDetail()
    CreatingUserAccount()
}