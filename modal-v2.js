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


// Function to create an input row with labels and input fields
function createInputRow(labels) {
    var inputRow = document.createElement("div");
    inputRow.classList.add("input-row");
  
    for (var i = 0; i < labels.length; i++) {
      var inputContainer = document.createElement("div");
      inputContainer.classList.add("input-container");
  
      var label = document.createElement("label");
      label.textContent = labels[i];
  
      var input;
      if (labels[i] === "İş Tanımı") {
        // Create a dropdown for "İş Tanımı"
        input = document.createElement("select");
        input.classList.add("custom-input");
        var option1 = document.createElement("option");
        option1.value = "Option 1";
        option1.textContent = "Option 1";
        var option2 = document.createElement("option");
        option2.value = "Option 2";
        option2.textContent = "Option 2";
        var option3 = document.createElement("option");
        option3.value = "Option 3";
        option3.textContent = "Option 3";
        input.appendChild(option1);
        input.appendChild(option2);
        input.appendChild(option3);
      } else {
        // Create a text input for other labels
        input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter Text";
        input.classList.add("custom-input");
  
        if (labels[i] === "Ada" || labels[i] === "Parsel") {
          // Add the "small-inp" class to ADA and PARSEL inputs
          inputContainer.classList.add("small-inp");
        }
      }
  
      inputContainer.appendChild(label);
      inputContainer.appendChild(input);
      inputRow.appendChild(inputContainer);
    }
  
    return inputRow;
  }
  
  // Function to add input rows when the "+" button is clicked
  addInputBtn.onclick = function () {
    var labels1 = ["Proje İsmi", "Ada", "Parsel", "Adres"];
    var labels2 = ["Kişi", "Ücret", "İş Tanımı"];
  
    var inputRow1 = createInputRow(labels1);
    var inputRow2 = createInputRow(labels2);
  
    modalBody.appendChild(inputRow1);
    modalBody.appendChild(inputRow2);
  
    inputCounter++;
  
    // Hide the "Add person" title after the first click
    if (inputCounter === 1) {
      modalTitle.style.display = "none";
    }
  };
  