const inputScreen = document.querySelector(".input");
const previousScreen = document.querySelector(".prev-input");
const keys = document.querySelectorAll(".key");
let input = "";
let prevInput = "";

// For keyboard input
document.addEventListener("keydown", (e)=> {
    let button = e.key;
    if(button == "÷") {
        button = "/"
    }
    else if(button == "x") {
        button = "*"
    }

    input = input + button;
    const ch = button;
    switch(ch) {
        case "C" :
            input = "";
            prevInput = "";
            break;
        case "Backspace" :
            input = input.slice(0, -10); //to slice Backspace word and last input character 
            break;
        case "Enter" :
            prevInput = input.slice(0, -5);
            try {
                input = eval(input.slice(0, -5));
            } catch (error) {
                input = input.slice(0, -1);
                input = "Error";
            }
            break;
        default :
            break;
    } 
    inputScreen.innerHTML = input;
    previousScreen.innerHTML = prevInput;
})

// Click input
Array.from(keys).forEach((button)=> {
    button.addEventListener("click", (e)=> {
        let btn = e.target.innerHTML;
        if(btn == "÷") {
            btn = "/"
        }
        else if(btn == "x") {
            btn = "*"
        }

        input = input + btn;
        const ch = btn;
        switch(ch) {
            case "C" :
                input = "";
                prevInput = "";
                break;
            case "CE" :
                input = input.slice(0, -3); //to slice CE and last input character 
                break;
            case "=" :
                prevInput = input.slice(0, -1);
                try {
                    input = eval(input.slice(0, -5));
                } catch (error) {
                    input = input.slice(0, -1);
                    input = "Error";
                }
                break;
            default :
                break;
        } 
        inputScreen.innerHTML = input;
        previousScreen.innerHTML = prevInput;
    })    
})