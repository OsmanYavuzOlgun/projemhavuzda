  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (currentPage.endsWith(linkPath)) {
      link.closest(".nav-item").classList.add("active");
    }
  });
  const themeButton = document.getElementById("theme-button");
  const whiteTheme = "white-theme";
  const iconTheme = "bx-toggle-right";
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  const getCurrentTheme = () =>
    document.body.classList.contains(whiteTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme)
      ? "bx-toggle-left"
      : "bx-toggle-right";

  if (selectedTheme) {
    document.body.classList.add("white-theme");
    themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
      iconTheme
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(whiteTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });

  var theme = document.getElementsByTagName('link')[0];
   
  theme.setAttribute('href', 'assets/css/lightmode.css');



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

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

$(document).ready(function () {
  $("#aylik-btn").click(function () {
    $("#aylik").show();
    $("#yillik").hide();

    $("#aylik-btn").addClass("selected-label");
    $("#yillik-btn").removeClass("selected-label");
  });

  $("#yillik-btn").click(function () {
    $("#aylik").hide();
    $("#yillik").show();

    $("#yillik-btn").addClass("selected-label");
    $("#aylik-btn").removeClass("selected-label");
  });
});

$(document).ready(function () {
  const storageRange = $("#storage-range");
  const storageValue = $("#storage-value");

  storageRange.on("input", function () {
    var value = $(this).val();
    var fillWidth = (value - 1) * 10 + "%"; // Calculate fill width based on value
    $(".slider-fill").css("width", fillWidth);
    storageValue.text(value + "GB"); // Update the displayed value
  });

  // Initialize the storage value on page load
  var initialValue = storageRange.val();
  storageValue.text(initialValue + "GB");
});

var modal = document.getElementById("myModal");
var navbarWrapper = document.getElementById("navbar-menu-wrapper");
trashImage.onclick = function () {
  modal.style.display = "block";
};
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
