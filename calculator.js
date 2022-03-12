const args = ["", ""]; // keeping track of two arguments
let curr = 0; // sets the current argument being updated
const functions = ["÷", "x", "-", "+", "=", "C", "←"]; // all the non-numeric buttons (functions) 
                                                        // on the calculator

function updateConsole(out=0) {
    document
        .querySelector(".result-screen")
        .innerText = out;
}

document
    .querySelector(".class-rows")
    .addEventListener("click", function (event) {
        const operator = event.target.innerText;
        if (functions.includes(operator)) {
            updateConsole();
            if (operator === "÷") {
            
            } else if (operator === "x") {
    
            } else if (operator === "-") {
                
            } else if (operator === "+") {
                
            } else if (operator === "=") {
                
            } else if (operator === "←") {
                
            } else { // C operator
                
            }
        } else {
            args[curr] += event.target.innerText;
        }
    });