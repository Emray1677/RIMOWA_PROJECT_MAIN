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
    //c       behavior: 'smooth',
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
        first_name: EditMerchantFirstName.value,
        last_name:EditMerchantLastName.value,
        email:EditMerchantEmail.value,
        phone:EditMerchantPhone.value,
        store_name:EditMerchantStoreName.value,
        descp:EditMerchantDescp.value,
        icon: EditfileInput.value,
        banner: EditfileInputTwo.value,
         state:EditMerchantState.value,
            district: EditMerchantDistrict.value,
            social_media: {
                    x: EditXacc.value,
                    face_book: EditFacebookAcc.value,
                    instagram:  EditinstaAcc.value,
            },
        phones:["098767887","0983989494"]
    }

    console.log(MerchantEditinfoFromInput);

    $(document).ready(function () {
        $.ajax({
            type: "put",
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/663403e8f7192e0c5d7a5e0d",
            header: "application/json",
            data: MerchantEditinfoFromInput,
            dataType: "json",
            success: function (res) {
                console.log(res);
                // MerchantModifinginfo.style.display= "block";
                // window.location.href = "MerchantSignIn.html"
            },
            error: function (error) {
                console.log("error", error);
            }
        })
    })
  }

  let EditMerchantPassordCurrent = document.getElementById('EditMerchantPassordCurrent');
  let EditMerchantPassordNewpassword = document.getElementById('EditMerchantPassordNewpassword');

  function EditMerchantPasswordDetials(){

    let Merchantpasswordeditinputdet = {
        old_password: EditMerchantPassordCurrent.value,
        new_password: EditMerchantPassordNewpassword.value,
    }

    
    console.log(Merchantpasswordeditinputdet);

    $(document).ready(function () {
        $.ajax({
            type: "put",
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/663403e8f7192e0c5d7a5e0d/change-passwd",
            header: "application/json",
            data: Merchantpasswordeditinputdet,
            dataType: "json",
            success: function (res) {
                console.log(res);
                EditMerchantPassordCurrent.value = ""
                EditMerchantPassordNewpassword.value = ""
                // MerchantModifinginfo.style.display= "block";
                // window.location.href = "MerchantSignIn.html"
            },
            error: function (error) {
                console.log("error", error);
            }
        })
    })
    
  }






  
let EditUserFirstName = document.getElementById('EditUserFirstName');
let EditUserLastName = document.getElementById('EditUserLastName');
let EditUserEmail = document.getElementById('EditUserEmail');
let EditUserPhone = document.getElementById('EditUserPhone');
  

function EditUserAccountsDetailsInpt(){

    let MerchantEditinfoFromInput = {
        first_name: EditUserFirstName.value,
        last_name: EditUserLastName.value,
        email: EditUserEmail.value,
        phone: EditUserPhone.value,
    }

    console.log(MerchantEditinfoFromInput);

    $(document).ready(function () {
        $.ajax({
            type: "put",
            url: "http://ecommerce.reworkstaging.name.ng/v2/users/662f960bf7192e0c5d709829",
            header: "application/json",
            data: MerchantEditinfoFromInput,
            dataType: "json",
            success: function (res) {
                console.log(res);
                // MerchantModifinginfo.style.display= "block";
                // window.location.href = "MerchantSignIn.html"
            },
            error: function (error) {
                console.log("error", error);
            }
        })
    })
  }



  let EditUserPassordCurrent = document.getElementById('EditUserPassordCurrent');
  let EditUserPassordNewpassword = document.getElementById('EditUserPassordNewpassword');

  function EditUserPasswordDetials(){

    let userpasswordeditinputdet = {
        old_password: EditUserPassordCurrent.value,
        new_password: EditUserPassordNewpassword.value,

        
    }

    
    console.log(userpasswordeditinputdet);

    $(document).ready(function () {
        $.ajax({
            type: "put",
            url: "http://ecommerce.reworkstaging.name.ng/v2/users/662f960bf7192e0c5d709829/change-passwd",
            header: "application/json",
            data: userpasswordeditinputdet,
            dataType: "json",
            success: function (res) {
                console.log(res);
                EditUserPassordCurrent.value = ""
                EditUserPassordNewpassword.value = ""
                // MerchantModifinginfo.style.display= "block";
                // window.location.href = "MerchantSignIn.html"
            },
            error: function (error) {
                console.log("error", error);
            }
        })
    })
    
  }

