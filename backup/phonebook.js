const {readFile, writeFile, write} = require("fs")
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const {email=null, firstname=null, lastname=null, phone=null, operation} = argv;

// phonebook.js --operation="save" --email="abc@def.com" --firstname="abc" --lastname="def" --phone="4586648615"
const FILENAME = "phonebook.json"




switch(operation){
    case "save":
        
        readFile(FILENAME, "utf-8", function(err, data) {
            const content = JSON.parse(data);
            content.push({email, firstname, lastname, phone});
            
            const contentString = JSON.stringify(content);

            writeFile(FILENAME, contentString, function(){
                console.log("user added successfully")
            })
        })
        break;

    case "search":
        readFile(FILENAME, "utf-8", function(err, data) {
            const content = JSON.parse(data);

            const found = content.find(function(item){
                return item.firstname.toLowerCase().includes(firstname.toLowerCase());
            })

            console.log(found);
        })
        break;
      
    default:
        console.log("invalid operation")
        break;    
}