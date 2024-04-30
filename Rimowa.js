

let MerchantCreateAccBtn = document.getElementById('MerchantCreateAccBtn');

let MerchantFirstName = document.getElementById('MerchantFirstName');
let MerchantLastName = document.getElementById('MerchantLastName');
let MerchantEmail = document.getElementById('MerchantEmail');
let MerchantPhone = document.getElementById('MerchantPhone');
let MerchantStoreName = document.getElementById('MerchantStoreName');
let MerchantDescp = document.getElementById('MerchantDescp');
let MerchantIcon = document.getElementById('fileInput');
let MerchantBanner = document.getElementById('fileInputTwo');
let MerchantOtherPhones = document.getElementById('MerchantOtherPhones');
let MerchantPassord = document.getElementById('MerchantPassord');


function CreatingMerchantAccount(){

  let MerchantInputDetails = {
    first_name : MerchantFirstName.value,
    last_name : MerchantLastName.value,
    email : MerchantEmail.value,
    phone : MerchantPhone.value,
    store_name : MerchantStoreName.value,
    descp : MerchantDescp.value,
    icon : MerchantIcon.value,
    banner :MerchantBanner.value,
    phones : MerchantOtherPhones.value,
    password : MerchantPassord.value,
  }

  console.log(MerchantInputDetails);
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "http://ecommerce.reworkstaging.name.ng/v2/merchants",
        header: "application/json",
        data: MerchantInputDetails,
        success: function (res) {
            console.log(res);
            window.location.href = "MerchantSignIn.html"
        },
        error: function (error) {
            console.log("error", error);
        }
    })
})
}

// MerchantCreateAccBtn.addEventListener('click', CreatingMerchantAccount)


let MerchantSignInEmail = document.getElementById('MerchantSignInEmail');
let MerchantSignInPassword = document.getElementById('MerchantSignInPassword');
let MerchantSignInBtn = document.getElementById('MerchantSignInBtn');
let MerchantModifinginfo = document.getElementById('MerchantModifinginfo');


function LogInMerchantAccount(){

  let MerchantSignInInputDetails = {
    email: MerchantSignInEmail.value,
    password: MerchantSignInPassword.value,
  }

  console.log(MerchantSignInInputDetails);
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
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

// MerchantSignInBtn.addEventListener('click', LogInMerchantAccount)


function togglePasswordVisibility() {
  var passwordField = document.getElementById("MerchantSignInPassword");
  var eyeonpassword = document.getElementById("eyeonpassword");
  var eyeOffpassword = document.getElementById("eyeOffpassword");
  // var toggleButton = document.querySelector(".toggle-password i");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      // toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
      eyeOffpassword.style.display = 'block';
      eyeonpassword.style.display = 'none';
  } else {
      passwordField.type = "password";
      // toggleButton.src = "eye-icon.svg"; // Change to an eye icon
      eyeOffpassword.style.display = 'none';
      eyeonpassword.style.display = 'block';
  }
}

function togglePasswordVisibilityTwo() {
  var MerchantPassord = document.getElementById("MerchantPassord");
  var eyeonpasswordTwo = document.getElementById("eyeonpasswordTwo");
  var eyeOffpasswordTwo = document.getElementById("eyeOffpasswordTwo");
  // var toggleButton = document.querySelector(".toggle-password i");

  if (MerchantPassord.type === "password") {
    MerchantPassord.type = "text";
      // toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
      eyeOffpasswordTwo.style.display = 'block';
      eyeonpasswordTwo.style.display = 'none';
  } else {
    MerchantPassord.type = "password";
      // toggleButton.src = "eye-icon.svg"; // Change to an eye icon
      eyeOffpasswordTwo.style.display = 'none';
      eyeonpasswordTwo.style.display = 'block';
  }
}

function togglePasswordVisibilityThree() {
  var RenterPassword = document.getElementById("RenterPassword");
  var eyeonpasswordThree = document.getElementById("eyeonpasswordThree");
  var eyeOffpasswordThree = document.getElementById("eyeOffpasswordThree");
  // var toggleButton = document.querySelector(".toggle-password i");

  if (RenterPassword.type === "password") {
    RenterPassword.type = "text";
      // toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
      eyeOffpasswordThree.style.display = 'block';
      eyeonpasswordThree.style.display = 'none';
  } else {
    RenterPassword.type = "password";
      // toggleButton.src = "eye-icon.svg"; // Change to an eye icon
      eyeOffpasswordThree.style.display = 'none';
      eyeonpasswordThree.style.display = 'block';
  }
}

function togglePasswordVisibilityFour() {
  var passwordNeeded = document.getElementById("passwordNeeded");
  var eyeonpasswordFour = document.getElementById("eyeonpasswordFour");
  var eyeOffpasswordFour = document.getElementById("eyeOffpasswordFour");
  // var toggleButton = document.querySelector(".toggle-password i");

  if (passwordNeeded.type === "password") {
    passwordNeeded.type = "text";
      // toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
      eyeOffpasswordFour.style.display = 'block';
      eyeonpasswordFour.style.display = 'none';
  } else {
    passwordNeeded.type = "password";
      // toggleButton.src = "eye-icon.svg"; // Change to an eye icon
      eyeOffpasswordFour.style.display = 'none';
      eyeonpasswordFour.style.display = 'block';
  }
}

function togglePasswordVisibilityFive() {
  var passwordSign = document.getElementById("passwordSign");
  var eyeonpasswordFive = document.getElementById("eyeonpasswordFive");
  var eyeOffpasswordFive = document.getElementById("eyeOffpasswordFive");
  // var toggleButton = document.querySelector(".toggle-password i");

  if (passwordSign.type === "password") {
    passwordSign.type = "text";
      // toggleButton.src = "eye-off-icon.svg"; // Change to an eye-off icon
      eyeOffpasswordFive.style.display = 'block';
      eyeonpasswordFive.style.display = 'none';
  } else {
    passwordSign.type = "password";
      // toggleButton.src = "eye-icon.svg"; // Change to an eye icon
      eyeOffpasswordFive.style.display = 'none';
      eyeonpasswordFive.style.display = 'block';
  }
}
