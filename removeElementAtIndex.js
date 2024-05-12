import {arr} from "./appendData.js";
import {arrayOfObject} from "./createTableView.js";

export function removeElementAtIndex(){

    let i = prompt("enter index number whose record you want to delete");
    arr.splice(i,1);

    arrayOfObject(arr);
    
}