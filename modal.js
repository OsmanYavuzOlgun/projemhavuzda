// Get the modal and buttons
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementById("closeModal");
var addInputBtn = document.getElementById("addInput");
var modalBody = document.querySelector(".modal-body");
var modalTitle = document.getElementById("modalTitle"); // Get the modal title element

// When the "Kişi Ata" button is clicked, open the modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the close button or anywhere outside the modal is clicked, close the modal
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Add input fields when the "+" button is clicked and hide the "Add person" title
var inputCounter = 0;
addInputBtn.onclick = function () {
  var inputRow = document.createElement("div");
  inputRow.classList.add("input-row");

  var inputContainer1 = document.createElement("div");
  inputContainer1.classList.add("input-container");
  var label1 = document.createElement("label");
  label1.textContent = "Kişi";
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Enter Text";
  input1.classList.add("custom-input");
  inputContainer1.appendChild(label1);
  inputContainer1.appendChild(input1);
  inputRow.appendChild(inputContainer1);

  var inputContainer2 = document.createElement("div");
  inputContainer2.classList.add("input-with-checkbox");
  var label2 = document.createElement("label");
  label2.textContent = "Ücret";
  var input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Enter Text";
  input2.classList.add("custom-input");
  var checkboxContainer = document.createElement("label");
  checkboxContainer.classList.add("main", "main-checked");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("not-ch");
  var checkboxSpan = document.createElement("span");
  checkboxSpan.classList.add("geekmark");
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxSpan);
  inputContainer2.appendChild(label2);
  inputContainer2.appendChild(input2);
  inputContainer2.appendChild(checkboxContainer);
  inputRow.appendChild(inputContainer2);

  var inputContainer3 = document.createElement("div");
  inputContainer3.classList.add("input-container");
  var label3 = document.createElement("label");
  label3.textContent = "Tarih";
  var input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "Enter Text";
  input3.classList.add("custom-input", "v2custom");
  inputContainer3.appendChild(label3);
  inputContainer3.appendChild(input3);
  inputRow.appendChild(inputContainer3);

  var inputContainer4 = document.createElement("div");
  inputContainer4.classList.add("input-container");
  var label4 = document.createElement("label");
  label4.textContent = "İş Tanımı";
  var select = document.createElement("select");
  select.classList.add("custom-input");
  var option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "Option 1";
  var option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "Option 2";
  var option3 = document.createElement("option");
  option3.value = "3";
  option3.textContent = "Option 3";
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  inputContainer4.appendChild(label4);
  inputContainer4.appendChild(select);
  inputRow.appendChild(inputContainer4);

  modalBody.appendChild(inputRow);
  inputCounter++;

  // Hide the "Add person" title after the first click
  if (inputCounter === 1) {
    modalTitle.style.display = "none";
  }
};
