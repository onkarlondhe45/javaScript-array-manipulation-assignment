import { arr } from "./appendData.js";
import { arrayOfObject } from "./createTableView.js";

export function addElementAtIndex(){
    let index = prompt("enter a index to add element at that index : ");
    let name = prompt("enter name : ");
    let email = prompt("enter email : ");
    let mobile = prompt("enter mobile : ");

    var addElement = {
        name : name,
        email : email,
        mobile : mobile
    }

    arr.splice(index,0,addElement);
    arrayOfObject(arr);

}