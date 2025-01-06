const display = document.getElementById("display");
let isConverted = false; // Flag to track if a conversion was performed
function appendToDisplay(input) {
  
    if (isConverted){
        display.value ='';
        isConverted=false; // Clear the display if a conversion was performed
    }
    display.value += input;
    if (display.value == 99995){display.value = "I LOvE YOU"}else{}
  if (display.value == 612025){display.value = "I LOVE ICO"}else{}
    if (display.value == 922025){display.value = "GOODLUCK!"}
}

function showButtonsForBase(base) {
    const Numbuttons = document.querySelectorAll('.num-btn');//number button 
    const convertButtons = document.querySelectorAll('.conv-btn');// Conversion buttons
    Numbuttons.forEach(button => {
        const value = button.innerText; // Get button label
        
        // Determine which buttons to show based on the base
        if (
            (base === 2 && !/^[01]$/.test(value)) || // Binary: Allow 0-1
            (base === 8 && !/^[0-7]$/.test(value)) || // Octal: Allow 0-7
            (base === 10 && !/^[0-9]$/.test(value)) || // Decimal: Allow 0-9
            (base === 16 && !/^[0-9A-F]$/.test(value)) // Hexadecimal: Allow 0-9, A-F
        ) {
            button.style.opacity = '0.3'; // Make the button litt invisible
            button.style.pointerEvents = 'none'; // Disable interaction
            
        } else {
            button.style.opacity = '1'; // Make the button visible
            button.style.pointerEvents = 'auto'; // Enable interaction

        }
    });
    convertButtons.forEach(button => {
        if (
            (base === 2 && button.id === 'binary-convert') || // Hide Binary Convert for base 2
            (base === 8 && button.id === 'octal-convert') || // Hide Octal Convert for base 8
            (base === 10 && button.id === 'decimal-convert') || // Hide Decimal Convert for base 10
            (base === 16 && button.id === 'hex-convert') // Hide Hex Convert for base 16
        ) {
            button.style.opacity = '0.3'; // Make conversion button invisible
            button.style.pointerEvents = 'none'; // Disable interaction
        } else {
            button.style.opacity = '1'; // Show conversion button
            button.style.pointerEvents = 'auto'; // Enable interaction
        }
    });
}



function clearDisplay() {
    display.value = ""; //clear display
}
function deleteLastChar() {
    const currentValue = display.value; // Get the current input value
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1); // Remove the last character
    }
}

function resetButtons() {
    const buttons = document.querySelectorAll('.num-btn');
    const convertButtons = document.querySelectorAll('.conv-btn');
    buttons.forEach(button => {
        button.style.opacity = '1'; // Make all buttons visible
        button.style.pointerEvents = 'auto'; // Enable interaction for all
        
    });
    convertButtons.forEach(button => {
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
    });
}

 function calculate() { //not include
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERR0R ";
    }
}

function TocheckBase() {
    const input = display.value.trim(); // Get input and trim whitespace

    if (/^[01]+$/.test(input)) {
        return 2; // Binary
    } else if (/^[0-7]+$/.test(input) && input.startsWith('0')) {
        return 8; // Octal
    } else if (/^[0-9A-Fa-f]+$/.test(input)) {
        return 16; // Hexadecimal
    } else if (/^\d+$/.test(input)) {
        return 10; // Decimal (Default)
    } else {
        return null; // Invalid input
    }
}


function toBinary() {
    
     const input = display.value.trim();
     if (/^[0-9A-Fa-f]+$/.test(input)){NewCo(2);}

}
    

function toDec() {
    NewCo(10);
}
function toOctal() 
{  const input = display.value.trim();
    if (/^[0-9A-Fa-f]+$/.test(input)) {NewCo(8);}

}
   

function toHexadecimal() {
    NewCo(16);
}

    function convertToBase(targetBase) {
        const input = display.value.trim(); // Get and clean the input
        const currentBase = TocheckBase(); // Detect the base of the input using your existing TocheckBase() function
    
        // Convert the input to decimal first
        const decimalValue = parseInt(input, currentBase);
    
        if (!isNaN(decimalValue)) {
            // Convert the decimal value to the target base and update the display
            display.value = decimalValue.toString(targetBase).toUpperCase();
            isConverted=true;
        } else {
            display.value = "Error";
            alert("Invalid input! Please enter a valid number.");
        }
    }
function setMode(base) {
        const modeButtons = document.querySelectorAll('.mode-btn'); // Select all mode buttons
    
        // Disable all other mode buttons except the selected one
        modeButtons.forEach(button => {
            if (parseInt(button.dataset.base) === base) {
                button.disabled = true; // Disable the selected mode button
               
                button.classList.add('active'); // Highlight the active mode
            } else {
                button.disabled = true; // Disable other buttons
                button.classList.remove('active'); // Remove highlight from other modes
                button.style.opacity = '0.3'; 
            }
        });
       
    
        // Call showButtonsForBase to update input buttons visibility
        showButtonsForBase(base);
    }

function resetModes() {
        const modeButtons = document.querySelectorAll('.mode-btn');
    
        // Enable all mode buttons and remove active highlight
        modeButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('active');
            button.style.opacity = '1';
        });
    
        // Reset number button visibility
        resetButtons();
    }

function NewCo(base){
    if (display.value) {
        // Check if the current mode is already in the selected base
        const currentBase = getCurrentBase(); // A helper function to determine the current base
        if (currentBase !== base) {
            // Convert from the current base to decimal, then to the new base
            const decimalValue = parseInt(display.value, currentBase); // Convert current value to decimal
            display.value = decimalValue.toString(base).toUpperCase(); // Convert decimal to the new base
        }
        isConverted = true;
    }
}

function getCurrentBase() {
    const activeButton = document.querySelector('.mode-btn.active'); // Find the active mode button
    return activeButton ? parseInt(activeButton.dataset.base) : 10; // Default to base 10 if none is active
}
