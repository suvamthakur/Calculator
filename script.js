const inputScreen = document.querySelector(".input");
const previousScreen = document.querySelector(".prev-input");
const keys = document.querySelectorAll(".key");
let input = "";
let prevInput = "";

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
                input = eval(input.slice(0, -1));
                break;
            default :
                break;
        } 
        inputScreen.innerHTML = input;
        previousScreen.innerHTML = prevInput;

    })
})