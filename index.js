const display = document.getElementById("display");
let isConverted = false; // Flag to track if a conversion was performed

function appendToDisplay(input) {
    if (isConverted) {
        display.value = '';
        isConverted = false; // Clear the display if a conversion was performed
    }
    display.value += input;
    if (display.value == 99995) {
        display.value = "I LOVE YOU";
    }
}

function showButtonsForBase(base) {
    const Numbuttons = document.querySelectorAll('.num-btn'); // Number buttons
    const convertButtons = document.querySelectorAll('.conv-btn'); // Conversion buttons
    Numbuttons.forEach(button => {
        const value = button.innerText; // Get button label

        if (
            (base === 2 && !/^[01]$/.test(value)) || // Binary: Allow 0-1
            (base === 8 && !/^[0-7]$/.test(value)) || // Octal: Allow 0-7
            (base === 10 && !/^[0-9]$/.test(value)) || // Decimal: Allow 0-9
            (base === 16 && !/^[0-9A-F]$/.test(value)) // Hexadecimal: Allow 0-9, A-F
        ) {
            button.style.opacity = '0.3'; // Make button less visible
            button.style.pointerEvents = 'none'; // Disable interaction
        } else {
            button.style.opacity = '1'; // Make button visible
            button.style.pointerEvents = 'auto'; // Enable interaction
        }
    });

    convertButtons.forEach(button => {
        if (
            (base === 2 && button.id === 'binary-convert') ||
            (base === 8 && button.id === 'octal-convert') ||
            (base === 10 && button.id === 'decimal-convert') ||
            (base === 16 && button.id === 'hex-convert')
        ) {
            button.style.opacity = '0.3'; // Hide conversion button
            button.style.pointerEvents = 'none'; // Disable interaction
        } else {
            button.style.opacity = '1'; // Show conversion button
            button.style.pointerEvents = 'auto'; // Enable interaction
        }
    });
}

function clearDisplay() {
    display.value = ""; // Clear display
}

function deleteLastChar() {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1); // Remove last character
    }
}

function resetButtons() {
    const buttons = document.querySelectorAll('.num-btn');
    const convertButtons = document.querySelectorAll('.conv-btn');
    buttons.forEach(button => {
        button.style.opacity = '1'; // Make buttons visible
        button.style.pointerEvents = 'auto'; // Enable interaction
    });
    convertButtons.forEach(button => {
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
    });
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}

function TocheckBase() {
    const input = display.value.trim();
    if (/^[01]+$/.test(input)) {
        return 2; // Binary
    } else if (/^[0-7]+$/.test(input)) {
        return 8; // Octal
    } else if (/^[0-9A-Fa-f]+$/.test(input)) {
        return 16; // Hexadecimal
    } else if (/^\d+$/.test(input)) {
        return 10; // Decimal
    } else {
        return null; // Invalid input
    }
}

function toBinary() {
    convertToBase(2);
}

function toDec() {
    convertToBase(10);
}

function toOctal() {
    convertToBase(8);
}

function toHexadecimal() {
    convertToBase(16);
}

function convertToBase(targetBase) {
    const input = display.value.trim();
    const currentBase = TocheckBase();
    const decimalValue = parseInt(input, currentBase);

    if (!isNaN(decimalValue)) {
        display.value = decimalValue.toString(targetBase).toUpperCase();
        isConverted = true;
    } else {
        display.value = "Error";
        alert("Invalid input! Please enter a valid number.");
    }
}

function setMode(base) {
    const modeButtons = document.querySelectorAll('.mode-btn');
    modeButtons.forEach(button => {
        if (parseInt(button.dataset.base) === base) {
            button.disabled = true;
            button.classList.add('active');
        } else {
            button.disabled = true;
            button.classList.remove('active');
            button.style.opacity = '0.3';
        }
    });

    showButtonsForBase(base);
}

function resetModes() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    modeButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('active');
        button.style.opacity = '1';
    });
    resetButtons();
}

function NewCo(base) {
    if (display.value) {
        display.value = parseInt(display.value).toString(base).toUpperCase();
        isConverted = true;
    }
}
