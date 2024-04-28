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
