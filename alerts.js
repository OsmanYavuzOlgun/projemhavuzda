const openModalDiv = document.getElementById("openModalDiv");
const openModalDiv2 = document.getElementById("openModalDiv-2");
const openModalDiv3 = document.getElementById("openModalDiv-3");
const openModalDiv4 = document.getElementById("openModalDiv-4");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal-2");
const modal3 = document.getElementById("modal-3");
const modal4 = document.getElementById("modal-4");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalBtn2 = document.getElementById("closeModalBtn-2");
const closeModalBtn3 = document.getElementById("closeModalBtn-3");
const closeModalBtn4 = document.getElementById("closeModalBtn-4");

openModalDiv.addEventListener("click", () => {
  modal.style.display = "flex";
});

openModalDiv2.addEventListener("click", () => {
  modal2.style.display = "flex";
});
openModalDiv3.addEventListener("click", () => {
  modal3.style.display = "flex";
});
openModalDiv4.addEventListener("click", () => {
  modal4.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
closeModalBtn2.addEventListener("click", () => {
  modal2.style.display = "none";
});
closeModalBtn3.addEventListener("click", () => {
  modal3.style.display = "none";
});
closeModalBtn4.addEventListener("click", () => {
  modal4.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});
