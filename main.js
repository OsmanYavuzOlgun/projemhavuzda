function increaseValue() {
  var input = document.getElementById("quantity");
  var value = parseInt(input.value, 10);
  if (value < parseInt(input.max)) {
    input.value = value + 1;
  }
  console.log("selam");
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
var ratingO = document.getElementById("rating-order");
var experience = document.getElementById("experience-part");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("border-bottom-v2");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      avFiles.classList.remove("blockdisplay");
      buyD.classList.remove("flexdisplay");
      ratingO.classList.remove("flexdisplay");
      experience.classList.remove("flexdisplay");
    } else {
      avFiles.classList.add("blockdisplay");
      buyD.classList.add("flexdisplay");
      ratingO.classList.add("flexdisplay");
      experience.classList.add("flexdisplay");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

$(function () {
  var star = ".star",
    selected = ".selected";

  $(star).on("click", function () {
    $(selected).each(function () {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
  });
});

const slider = document.getElementById("myRange");
const sliderFill = document.querySelector(".slider-fill");

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

 $(document).ready(function() {
  $('.dropdown-toggle').dropdown();
});