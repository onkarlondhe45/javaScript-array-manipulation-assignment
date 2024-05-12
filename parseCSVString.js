import {arrayOfObject} from "./createTableView.js";

export function parseCSVString(){
    let userString = "Onkar Londhe,onkarlondhe@gmail.com,93700025900,\nAkshay Surjuse,akshaysurjuse@gmail.com,1122334455,\nKishor Parde,kishorparde@gmail.com,7057000797";

    let newLineArray = userString.split("\n");
    console.log(newLineArray);

    for(let i=0; i<newLineArray.length; i++){
        newLineArray[i] = newLineArray[i].split(",");
    }

    console.log(newLineArray);

    let objArray = [];

    for (let i = 0; i < newLineArray.length; i++) {
       let obj = new Object();

       for (let j = 0; j < newLineArray[i].length; j++) {
            obj.name = newLineArray[i][j];
            obj.email = newLineArray[i][j+1];
            obj.mobile = newLineArray[i][j+2];

            objArray.push(obj);
            break;
        }    
    }

    arrayOfObject(objArray);
}