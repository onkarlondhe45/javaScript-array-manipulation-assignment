import { arr } from "./appendData.js";
import { arrayOfObject } from "./createTableView.js";

export function addElementToTop(){
    let name = prompt("enter name : ");
    let email = prompt("enter email : ");
    let mobile = prompt("enter mobile : ");

    var addData = {
        name : name,
        email : email,
        mobile : mobile
    }

    arr.unshift(addData);
    arrayOfObject(arr);

}