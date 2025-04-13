let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result
function calculateResult() {
  try {
    // Evaluate the expression entered by the user
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
