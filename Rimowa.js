function togglePlayPause() {
    var video = document.getElementById('bg-video');
    var playIcon = document.getElementById('playIcon');
    var pauseIcon = document.getElementById('pauseIcon');

    if (video.paused || video.ended) {
      video.play();
      pauseIcon.style.display = "block";
      playIcon.style.display = "none";
    } else {
      video.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    }
  }

//   document.getElementById('controllArrowbtn').addEventListener('click', function() {
//     var customiseCard = document.getElementById('customiseCard');
//     customiseCard.scrollBy({
//       left: 245,
//         behavior: 'smooth',
//     });
// });

//   document.getElementById('controllArrowLeftbtn').addEventListener('click', function() {
//     var customiseCard = document.getElementById('customiseCard');
//     customiseCard.scrollBy({
//       left: -245,
//         behavior: 'smooth',
//     });
// });

//   document.getElementById('controllArrowbtnEditor').addEventListener('click', function() {
//     var customiseCardEditor = document.getElementById('customiseCardEditor');
//     customiseCardEditor.scrollBy({
//       left: 245,
//         behavior: 'smooth',
//     });
// });

//   document.getElementById('controllArrowLeftbtnEditor').addEventListener('click', function() {
//     var customiseCardEditor = document.getElementById('customiseCardEditor');
//     customiseCardEditor.scrollBy({
//       left: -245,
//         behavior: 'smooth',
//     });
// });


// function previewFile() {
//   const preview = document.getElementById('preview');
//   const fileInput = document.getElementById('fileInput');
//   const file = fileInput.files[0];
//   const reader = new FileReader();

//   reader.onloadend = function () {
//     preview.src = reader.result;
//     preview.style.display = 'block';
//   }

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = '';
//     preview.style.display = 'none';
//   }
// }

// function previewFileTwo() {
//   const previewTwo = document.getElementById('previewTwo');
//   const fileInputTwo = document.getElementById('fileInputTwo');
//   const file = fileInputTwo.files[0];
//   const reader = new FileReader();

//   reader.onloadend = function () {
//     previewTwo.src = reader.result;
//     previewTwo.style.display = 'block';
//   }

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     previewTwo.src = '';
//     previewTwo.style.display = 'none';
//   }
// }

let MerchantCreateAccBtn = document.getElementById('MerchantCreateAccBtn');

let MerchantFirstName = document.getElementById('MerchantFirstName');
let MerchantLastName = document.getElementById('MerchantLastName');
let MerchantEmail = document.getElementById('MerchantEmail');
let MerchantPhone = document.getElementById('MerchantPhone');
let MerchantStoreName = document.getElementById('MerchantStoreName');
let MerchantDescp = document.getElementById('MerchantDescp');
let MerchantIcon = document.getElementById('MerchantIcon');
let MerchantBanner = document.getElementById('MerchantBanner');
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
    icon : "MerchantIcon.value",
    banner : "MerchantBanner.value",
    phones : MerchantOtherPhones.value,
    password : MerchantPassord.value,
  }
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "BASE_URL http://ecommerce.reworkstaging.name.ng/v2/merchants",
        // header: "application/json",
        data: MerchantInputDetails,
        success: function (res) {
            console.log(res);
        },
        error: function (error) {
            console.log("error", error);
        }
    })
})
}

MerchantCreateAccBtn.addEventListener('click', CreatingMerchantAccount)