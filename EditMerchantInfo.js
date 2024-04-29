// function togglePasswordVisibility() {
//     var passwordField = document.getElementById("password");
//     var toggleButton = document.querySelector(".toggle-password img");

//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
//     } else {
//         passwordField.type = "password";
//         toggleButton.src = "eye-icon.svg"; // Change to an eye icon
//     }
// }


// $(document).ready(function() {
//     $('.toggle-password').click(function(){
//         var passwordField = $('#MerchantSignInPassword');
//         var toggleButton = $(this).find('i');

//         if (passwordField.attr('type') === 'MerchantSignInPassword') {
//             passwordField.attr('type', 'text');
//             toggleButton.attr('src', 'eye-off-icon.svg'); // Change to an eye-off icon
//         } else {
//             passwordField.attr('type', 'MerchantSignInPassword');
//             toggleButton.attr('src', 'eye-icon.svg'); // Change to an eye icon
//         }
//     });
// });


let MerchantChangePasswordDDbtn = document.getElementById('MerchantChangePasswordDDbtn');
let MerchantChangePasswordDDbtnTwo = document.getElementById('MerchantChangePasswordDDbtnTwo');
let MerchantEditPassword = document.getElementById('MerchantEditPassword');
let SIGNupHeroTwo = document.getElementById('SIGNupHeroTwo');


function merchantchangepasswordDropDown(){
    MerchantEditPassword.style.display = 'block';
    MerchantChangePasswordDDbtnTwo.style.display = 'block';
    MerchantChangePasswordDDbtn.style.display = 'none';
    SIGNupHeroTwo.scrollBy({
        top: 330,
          behavior: 'smooth',
      });
}

function merchantchangepasswordDropUp(){
    MerchantEditPassword.style.display = 'none';
    MerchantChangePasswordDDbtnTwo.style.display = 'none';
    MerchantChangePasswordDDbtn.style.display = 'block';
    // SIGNupHeroTwo.scrollBy({
    //     top: -30,
    //       behavior: 'smooth',
    //   });
}

let EditMerchantFirstName = document.getElementById('EditMerchantFirstName');
let EditMerchantLastName = document.getElementById('EditMerchantLastName');
let EditMerchantEmail = document.getElementById('EditMerchantEmail');
let EditMerchantPhone = document.getElementById('EditMerchantPhone');
let EditMerchantStoreName = document.getElementById('EditMerchantStoreName');
let EditMerchantDescp = document.getElementById('EditMerchantDescp');
let EditfileInput = document.getElementById('EditfileInput');
let EditfileInputTwo = document.getElementById('EditfileInputTwo');
let EditMerchantState = document.getElementById('EditMerchantState');
let EditMerchantDistrict = document.getElementById('EditMerchantDistrict');
let EditXacc = document.getElementById('EditXacc');
let EditFacebookAcc = document.getElementById('EditFacebookAcc');
let EditinstaAcc = document.getElementById('EditinstaAcc');
let EditMerchantOtherPhones = document.getElementById('EditMerchantOtherPhones');


function EditMerchantAccountsDetailsInpt(){

    let MerchantEditinfoFromInput = {
        first_name: EditMerchantFirstName,
        last_name:"Doe",
        email:"ap@gmail.com",
        phone:"0901234567",
        store_name:"Nicolas Aluminium",
        descp:"All is well that ends well",
        icon:"",
        banner:"",
         state: "",
            district: "",
            social_media: {
                    x: "",
                    face_book: "",
                    instagram: ""
            },
        phones:["098767887",98657654]
    }

    $(document).ready(function () {
        $.ajax({
            type: "put",
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/:662ccac2f7192e0c5d7043e4",
            header: "application/json",
            data: MerchantSignInInputDetails,
            success: function (res) {
                console.log(res);
                MerchantModifinginfo.style.display= "block";
                // window.location.href = "MerchantSignIn.html"
            },
            error: function (error) {
                console.log("error", error);
            }
        })
    })
  }

