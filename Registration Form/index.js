function validate () {
    let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let phnoInput = document.getElementById('phno').value
	let emailInput = document.getElementById('email').value
	let batchno = document.getElementById('batch-no').value
	let currentmod = document.getElementById('curr-module').value
	let tnCInput = document.getElementById('tnC').checked

    let error = false

    if(firstNameInput.length >=3){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput.length >=3){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	if (emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".") <= emailInput.length - 3 && emailInput.indexOf('@') !== 0 ) {
		document.getElementById("email-valid").style.display = "block";
		document.getElementById("email-invalid").style.display = "none";
	  } else {
		document.getElementById("email-invalid").style.display = "block";
		document.getElementById("email-valid").style.display = "none";
			error = true
	  }
	

    if(phnoInput && phnoInput.length === 10 && parseInt(phnoInput)){
		document.getElementById("phno-valid").style.display = "block";
		document.getElementById("phno-invalid").style.display = "none";
	} else {
		document.getElementById("phno-invalid").style.display = "block";
		document.getElementById("phno-valid").style.display = "none";
		error = true
	}

	if(batchno !== 'None'){
		document.getElementById('batchno-valid').style.display = "block";
		document.getElementById('batchno-invalid').style.display = "none";
	} else {
		document.getElementById('batchno-invalid').style.display = "block";
		document.getElementById('batchno-valid').style.display = "none";
		error = true
	}

	if(currentmod !== 'None'){
		document.getElementById('module-valid').style.display = "block";
		document.getElementById('module-invalid').style.display = "none";
	} else {
		document.getElementById('module-invalid').style.display = "block";
		document.getElementById('module-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

    if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('tnC').checked = false
		document.getElementById('phno').value = ''
		document.getElementById('batch-no').value = 'None'
		document.getElementById('curr-module').value = 'None'

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("phno-valid").style.display = "none";
		document.getElementById("email-valid").style.display = "none";
		document.getElementById('batchno-valid').style.display = "none";
		document.getElementById('module-valid').style.display = "none";
		document.getElementById("tnC-invalid").style.display = "none";
	}
    
}
// function numberOnly(input){
// 	var num = /[^0-9]/gi;
// 	input.value = input.value.replace(num,"");
// }