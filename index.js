const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function modeHex(){}
function modeBin(){}
function modeDec(){}
function modeOct(){}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "I LOVE YOU ";
    }
}

function toBinary() {
    if (display.value) {
        const decimalValue = parseInt(display.value,10); // Parse as decimal
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString(2); // Convert to binary
        } else { display.value = "Error ";
            alert("BAD INPUT BRO,ONLY ACCEPT DECIMAL");
        }
    }}
    

function toDec() {
    if (display.value) {
        const decimalValue = parseInt(display.value,16); // Parse as hexadecimal
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString(10); // Convert to decimal string
        } else { display.value = "Error ";
            alert("BAD INPUT BRO ONLY ACCEPT DECIMAL");
        }
    }}
function toOctal() 
{
    if (display.value) {
        const decimalValue = parseInt(display.value,10); // Parse as decimal only
        if (!isNaN(decimalValue)) {
            display.value = decimalValue.toString(8); // Convert to octal string
        } else {
            display.value = "Error ";
            alert("BAD INPUT BRO ONLY ACCEPT DECIMAL");
        }
}}

function toHexadecimal() 
{
if (display.value) {     
        const decimalValue = parseInt(display.value,10); // Parse as decimal only
        if (!isNaN(decimalValue)) {
             display.value = decimalValue.toString(16).toUpperCase(); // Convert to hex string
} else {
    display.value = "Error ";
    alert("BAD INPUT BRO ONLY ACCEPT DECIMAL");
}}}
