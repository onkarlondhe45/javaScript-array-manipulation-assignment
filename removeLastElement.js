
import {arr} from "./appendData.js";
import {arrayOfObject} from "./createTableView.js";

export function removeLastElement(){
	 
    arr.pop();
    document.getElementById("table").innerHTML=null;
    arrayOfObject(arr);

}