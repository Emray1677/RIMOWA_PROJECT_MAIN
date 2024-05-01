
function previewFile() {
    const preview = document.getElementById('preview');
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      preview.style.display = 'block';
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
      preview.style.display = 'none';
    }
  }
  
  function previewFileTwo() {
    const previewTwo = document.getElementById('previewTwo');
    const fileInputTwo = document.getElementById('fileInputTwo');
    const file = fileInputTwo.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      previewTwo.src = reader.result;
      previewTwo.style.display = 'block';
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      previewTwo.src = '';
      previewTwo.style.display = 'none';
    }
  }
  
  
  function previewFileThree() {
    const previewThree = document.getElementById('previewThree');
    const Categoryimage = document.getElementById('Categoryimage');
    const file = Categoryimage.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      previewThree.src = reader.result;
      previewThree.style.display = 'block';
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      previewThree.src = '';
      previewThree.style.display = 'none';
    }
  }
  