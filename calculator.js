const args = ["", ""]; // keeping track of two arguments
let curr_arg = 0; // sets the current argument to be updated
let curr_op = ""; // sets the current operation taking place
let output = "0"; // current console output

const functions = ["÷", "x", "-", "+", "=", "C", "←"]; // all the non-numeric buttons (functions) 

function updateConsole() {
    document
        .querySelector(".result-screen")
        .innerText = output;
}

function arithmetic(x0, x1, op) {
    let result;
    if (op === "÷") {
        result = (parseInt(x0) / parseInt(x1)).toString();
    } else if (op === "x") {
        result = (parseInt(x0) * parseInt(x1)).toString();
    } else if (op === "-") {
        result = (parseInt(x0) - parseInt(x1)).toString();
    } else if (op === "+") {
        result = (parseInt(x0) + parseInt(x1)).toString();
    }
    return result;
}

function reset() {
    output = "0";
    updateConsole();
    args[0] = "";
    args[1] = "";
    curr_op = "";
    curr_arg = 0;
}

document
    .querySelector(".class-rows")
    .addEventListener("click", function (event) {
        const input_op = event.target.innerText;
        if (functions.includes(input_op)) {
            if (input_op === "=") {
                if (!args[0] && !args[1]) {
                    reset();
                } else {
                    if (args[0] && !args[1]) {
                        args[1] = "0";
                    }
                    args[0] = arithmetic(args[0], args[1], input_op);
                    args[1] = "";
                    curr_op = "";
                    curr_arg = 0;
                    output = args[0];
                    updateConsole();
                }
            } else if (input_op === "←") { // curr_arg and curr_op no change
                if (args[curr] > 0) {
                    args[curr] = Math.floor(args[curr] / 10);
                }
                output = args[curr];
                updateConsole();
            } else if (input_op === "C") { // reset everything
                reset();
            } else { // perform arithmetic
                if (!curr_op) { // if curr_op empty. no change to args[0], set args[1]
                    curr_arg = 1;
                    curr_op = input_op;
                    output = "0";
                    updateConsole();
                } else { // arithmetic based on curr_op, set args[0] = result, curr_arg stays as 1
                    args[0] = arithmetic(args[0], args[1], input_op);
                    args[1] = "";
                    curr_op = input_op;
                    output = "0";
                    updateConsole();
                }
            }
        } else {
            args[curr] += event.target.innerText;
            updateConsole(args[curr]);
        }
    });