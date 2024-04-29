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

function SigninPagebtn(){
    signInEmailDetail()
    signInPasswordDetail()
    

}