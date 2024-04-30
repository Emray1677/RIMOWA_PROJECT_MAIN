let SignInbtn = document.getElementById("SignInbtn")
let error = document.getElementById("error");



function signInEmailDetail(){

    let signInEmailAddress = document.getElementById('emailSignIn').value;
    if ( signInEmailAddress ==="") {
        document.getElementById('mistake').innerHTML = "please enter email";
        mistake.style.color = "red"
        return false;
    }else{
        document.getElementById('mistake').innerHTML = "";
        return true;
    }
}

function signInPasswordDetail(){

    let signInPasswordAddress = document.getElementById('passwordSign').value;
    if ( signInPasswordAddress ==="") {
        document.getElementById('mistakeII').innerHTML = "please enter password";
        mistakeII.style.color = "red"
        return false;
    }else{
        document.getElementById('mistakeII').innerHTML = "";
        return true;
    }
}



let emailSignIn = document.getElementById('emailSignIn');
let passwordSign = document.getElementById('passwordSign');


function CreatingUserAccount(){

  let UserLogInInputDetails = {
    email: emailSignIn.value,
    password: passwordSign.value,
  }

  console.log(UserLogInInputDetails);
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "http://ecommerce.reworkstaging.name.ng/v2/users",
        header: "application/json",
        data: UserLogInInputDetails,
        success: function (res) {
            console.log(res);
            window.location.href = "luggage.html";
        },
        error: function (error) {
            console.log("error", error);
        }
    })
})
}




function SigninPagebtn(){
    signInEmailDetail()
    signInPasswordDetail()
    CreatingUserAccount()
}