// Function to FactorialN

function calculateFactorial() {
    let number = (document.getElementById("numberInput").value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("factorialResult").textContent = "Factorial of " + number + " is: " + factorial;
}

// Function to reverse text
function reverseText() {
    let text = document.getElementById("textReverseInput").value;
    let reversedText = text.split("").reverse().join("");
    document.getElementById("textReverseResult").textContent = "Reversed Text: " + reversedText;
}

// You can add more functions for additional tools

  // function to Uppercase
  function convertToUppercase() {
    let text = document.getElementById("textInput").value;
    let uppercaseText = text.toUpperCase();
    document.getElementById("uppercaseResult").textContent = "Uppercase Text: " + uppercaseText;
}
  // function to Loop Demo
function displaySequence() {
    let startNumber = (document.getElementById("startNumber").value);
    let endNumber = (document.getElementById("endNumber").value);
    let sequence = "";

    if (startNumber <= endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            sequence += i + " ";
        }
    } else {
        for (let i = startNumber; i >= endNumber; i--) {
            sequence += i + " ";
        }
    }

    document.getElementById("sequenceResult").textContent = "Sequence: " + sequence;
}