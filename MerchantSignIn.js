// let MerchantSignInEmail = document.getElementById('MerchantSignInEmail');
// let MerchantSignInPassword = document.getElementById('MerchantSignInPassword');
// let MerchantSignInBtn = document.getElementById('MerchantSignInBtn');
// let MerchantModifinginfo = document.getElementById('MerchantModifinginfo');


// function LogInMerchantAccount(){

//   let MerchantSignInInputDetails = {
//     email: MerchantSignInEmail.value,
//     password: MerchantSignInPassword.value,
//   }

//   console.log(MerchantSignInInputDetails);
 
//   $(document).ready(function () {
//     $.ajax({
//         type: "post",
//         url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
//         header: "application/json",
//         data: MerchantSignInInputDetails,
//         success: function (res) {
//             console.log(res);
//             MerchantModifinginfo.style.display= "block";
//             // window.location.href = "MerchantSignIn.html"
//         },
//         error: function (error) {
//             console.log("error", error);
//         }
//     })
// })
// }

// MerchantSignInBtn.addEventListener('click', LogInMerchantAccount)

let MerchantSignInBtn = document.getElementById("MerchantSignInBtn")
let error = document.getElementById("error");



function merchantsignInEmailDetail(){

    let merchantsignInEmailAddress = document.getElementById(' ').value;
    if ( merchantsignInEmailAddress ==="") {
        document.getElementById('wrong').innerHTML = "please enter email";
        wrong.style.color = "red"
        return false;
       
    }else{
        document.getElementById('wrong').innerHTML = "";
        return true;
    } 
}

function merchantsignInPasswordDetail(){

    let merchantsignInPasswordAddress = document.getElementById('MerchantSignInPassword').value;
    if ( merchantsignInPasswordAddress ==="") {
        document.getElementById('wrongII').innerHTML = "please enter password";
        wrongII.style.color = "red"
        return false;
    }else{
        document.getElementById('wrongII').innerHTML = "";
        return true;
    }
}


function LogInMerchantAccount(){
    merchantsignInEmailDetail()
    merchantsignInPasswordDetail()
    

}