// Function to FactorialN

function calculateFactorial() {
    var number = parseInt(document.getElementById("numberInput").value);
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("factorialResult").textContent = "Factorial of " + number + " is: " + factorial;
}

// Function to reverse text
function reverseText() {
    var text = document.getElementById("textReverseInput").value;
    var reversedText = text.split("").reverse().join("");
    document.getElementById("textReverseResult").textContent = "Reversed Text: " + reversedText;
}

// You can add more functions for additional tools

  // function to Uppercase
  function convertToUppercase() {
    var text = document.getElementById("textInput").value;
    var uppercaseText = text.toUpperCase();
    document.getElementById("uppercaseResult").textContent = "Uppercase Text: " + uppercaseText;
}
  // function to Loop Demo
function displaySequence() {
    var startNumber = parseInt(document.getElementById("startNumber").value);
    var endNumber = parseInt(document.getElementById("endNumber").value);
    var sequence = "";

    if (startNumber <= endNumber) {
        for (var i = startNumber; i <= endNumber; i++) {
            sequence += i + " ";
        }
    } else {
        for (var i = startNumber; i >= endNumber; i--) {
            sequence += i + " ";
        }
    }

    document.getElementById("sequenceResult").textContent = "Sequence: " + sequence;
}