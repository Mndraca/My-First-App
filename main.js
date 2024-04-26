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
  
    function capitalizeFirstLetter() {
    
    let text = document.getElementById("textInput").value;
    let firstLetterUpperCase = text.charAt(0).toUpperCase() + text.slice(1);
    document.getElementById("uppercaseResult").textContent = "Uppercase First letter Text: " + firstLetterUpperCase;
}
  // function to Loop Demo
function displaySequence() {
    let startNumber = Number(document.getElementById("startNumber").value);
    let endNumber = Number(document.getElementById("endNumber").value);
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
 // function to Capitalize After Dot

 function capitalizeAfterDot() {
    // Split the string by dot
    let text = document.getElementById("capitalizeAfterDot").value.split('.');
    
    // Capitalize the first letter after each dot
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    let capitalizeAfterDotText = text.join('.');
    document.getElementById("CapitalizeAfterDotResult").textContent = "Capitalize After Dot Text: " + capitalizeAfterDotText ;
}



