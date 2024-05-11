
import {arrayOfObject} from "./createTableView.js";

export let arr = [];

export function appendData(){
	console.log("inside append function");
	let n = document.getElementById("name").value;
	let e = document.getElementById("email").value;
	let m = document.getElementById("mobile").value;
	
	var details = {
		name : n,
		email : e,
		mobile : m
	}
	
	
	arr.push(details);

	console.log(arr);
	
	arrayOfObject(arr);
}


 