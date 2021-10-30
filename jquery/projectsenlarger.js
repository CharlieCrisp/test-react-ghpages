// Get the modal
// TODO: replace
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("panel-image");
var modalImg = document.getElementById("modal-image");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    console.log("clicked");
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");

const closeWindow = function() {
  modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = closeWindow
modal.onclick = closeWindow

//For images that take you to another page
// Get the modal
var modalClickable = document.getElementById('myModalClickable');

var imagesClickable = document.getElementsByClassName("panel-image-clickable");
var modalImgClickable = document.getElementById("modal-image-clickable");
var modalImgClickableDescription = document.getElementById("modal-image-clickable-description");

for (var i = 0; i < imagesClickable.length; i++) {
  imagesClickable[i].onclick = function(){
    console.log("clicked");
    modalClickable.style.display = "block";
    modalImgClickable.src = this.src;

    var imageId = this.getAttribute("id");
    var clickablehref = document.getElementById("clickablehref");
    clickablehref.setAttribute("href", "/projects/" + imageId);
  }
}

// Get the <span> element that closes the modal
var spanClickable = document.getElementById("closeClickable");

if (spanClickable != null) {
  // When the user clicks on <span> (x), close the modal
  const closeWindowClickable = function() {
    modalClickable.style.display = "none";
  }
  // When the user clicks on <span> (x), close the modal
  spanClickable.onclick = closeWindowClickable
  modalClickable.onclick = closeWindowClickable
}
  