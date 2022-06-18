const {env, argv} = process;

const number1 = parseFloat(argv[2]) 
const operation = argv[3]
const number2 = parseFloat(argv[4])

function calculator(){
    switch (operation) {
        case "+":
            console.log(number1 + number2)
        break;
        
        case "-":
            console.log(number1 - number2)
        break;

        case "x":
            console.log(number1 * number2)
        break;

        case "/":
            console.log(number1 / number2)
            break;
            
        default:
            console.log("Invalid Operation")
        break;
    }
}
calculator()