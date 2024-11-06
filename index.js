const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// New conversion functions
function toBinary() {
    if (display.value) {
        display.value = parseInt(display.value).toString(2);
    }
}

function toOctal() {
    if (display.value) {
        display.value = parseInt(display.value).toString(8);
    }
}

function toHexadecimal() {
    if (display.value) {
        display.value = parseInt(display.value).toString(16).toUpperCase();
    }
}
