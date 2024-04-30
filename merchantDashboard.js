let MerchantCategoriesBtn = document.getElementById('MerchantCategoriesBtn');

let createProductDiv = document.getElementById('createProductDiv')
let CreateCatNav = document.getElementById('CreateCatNav')
let CreateProNav = document.getElementById('CreateProNav')
let ProCreatedNav = document.getElementById('ProCreatedNav')
let CatCreatedNav = document.getElementById('CatCreatedNav')
let OrdersNav = document.getElementById('OrdersNav')

let CategoriesAddition = document.getElementById('CategoriesAddition')
let createProduct = document.getElementById('createProduct')

function hidedisplay(){
    CategoriesAddition.style.display = 'none';
    createProduct.style.display = 'block';
   
    
}

CreateProNav.addEventListener('click', hidedisplay)


// function createProNavHideDisplay(){
//     createProduct.style.display = 'none';
//     CategoriesAddition.style.display = 'block';
   
// }

// CreateProNav.addEventListener('click', createProNavHideDisplay)

