export function arrayOfObject(arr){
	let studentTable = document.getElementById("table");
    document.getElementById("table").innerHTML=null;


	for(let i=0; i<arr.length; i++){
				
		let dataRow = document.createElement("tr");
				
	 
		let name1 = document.createElement("td");
		name1.innerHTML = arr[i].name;
				
		let email = document.createElement("td");
		email.innerHTML = arr[i].email;
				
		let mobile = document.createElement("td");
		mobile.innerHTML = arr[i].mobile;
				
		dataRow.appendChild(name1);
		dataRow.appendChild(email);
		dataRow.appendChild(mobile);
		studentTable.appendChild(dataRow);

	}


			
}