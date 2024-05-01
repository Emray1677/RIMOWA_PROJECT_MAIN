// let MerchantCategoriesBtn = document.getElementById('MerchantCategoriesBtn');

// let createProductDiv = document.getElementById('createProductDiv')
// let CreateCatNav = document.getElementById('CreateCatNav')
// let CreateProNav = document.getElementById('CreateProNav')
// let ProCreatedNav = document.getElementById('ProCreatedNav')
// let CatCreatedNav = document.getElementById('CatCreatedNav')
// let OrdersNav = document.getElementById('OrdersNav')

// let CategoriesAddition = document.getElementById('CategoriesAddition')
// let createProduct = document.getElementById('createProduct')

// function hidedisplay(){
//     CategoriesAddition.style.display = 'none';
//     createProduct.style.display = 'block';
   
    
// }

// CreateProNav.addEventListener('click', hidedisplay)

let creatingcategorydropbtn = document.getElementById('creatingcategorydropbtn');
let Categoriesdiv = document.getElementById('Categoriesdiv');

function firstbtndropdowncat(){
    Categoriesdiv.style.display = 'block';
}

function secondbtndropdowncat(){
    Categoriesdiv.style.display = 'none';
}

let CategoryName = document.getElementById('CategoryName');
let Categoryimage = document.getElementById('Categoryimage');


function CreatingCategory(){

  let CreateCategoryInputDetails = {
    merchant_id: "662ccac2f7192e0c5d7043e4",
    name: CategoryName.value,
    image: Categoryimage.value,
  }

  console.log(CreateCategoryInputDetails);
 
  $(document).ready(function () {
    $.ajax({
        type: "post",
        url: "http://ecommerce.reworkstaging.name.ng/v2/categories",
        header: "application/json",
        data: CreateCategoryInputDetails,
        success: function (res) {
            console.log(res);
        },
        error: function (error) {
            console.log("error", error);
        }
    })
})
}



