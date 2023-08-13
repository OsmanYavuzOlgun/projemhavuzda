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