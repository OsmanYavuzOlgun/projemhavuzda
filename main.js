function increaseValue() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);
  if (value < parseInt(input.max)) {
    input.value = value + 1;
  }
  console.log("selam")
}

function decreaseValue() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);
  if (value > parseInt(input.min)) {
    input.value = value - 1;
  }
}


var coll = document.getElementsByClassName("collapsible");
var i;

var avFiles = document.getElementById("available-files");
var buyD = document.getElementById("buy-domain");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("border-bottom-v2")
   
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      avFiles.classList.remove("blockdisplay");
      buyD.classList.remove("flexdisplay");
    } else {
      avFiles.classList.add("blockdisplay");
      buyD.classList.add("flexdisplay");
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const slider = document.getElementById("myRange");
const sliderFill = document.querySelector(".slider-fill");

slider.addEventListener("input", function() {
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  sliderFill.style.width = percent + "%";
});
