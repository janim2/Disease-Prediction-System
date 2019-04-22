// // import $ from 'jquery';

// if(typeof web3 != 'undefined'){
//     web3 = new Web3(web3.currentProvider);
// }else{
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }


// web3.eth.defaultAccount = web3.eth.accounts[0];
// var prediitvariable = web3.eth.contract(
// //ABI value goes here
// [
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_fName",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_lastname",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_age",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_gender",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addPatient",
// 		"outputs": [],
// 		"payable": false,
// 		"type": "function",
// 		"stateMutability": "nonpayable"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "h_age",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_trestbps",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_restecg",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_thalach",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_exang",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_oldpeak",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_slope",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_ca",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "h_thal",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getHeartData",
// 		"outputs": [],
// 		"payable": false,
// 		"type": "function",
// 		"stateMutability": "nonpayable"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "hep_age",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_steroid",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_bilirubin",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_alk",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_sgot",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_albumin",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "hep_protime",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getHepatitisData",
// 		"outputs": [],
// 		"payable": false,
// 		"type": "function",
// 		"stateMutability": "nonpayable"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_docfname",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_doclname",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_docage",
// 				"type": "uint256"
// 			},
// 			{
// 				"name": "_docgender",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addDoctor",
// 		"outputs": [],
// 		"payable": false,
// 		"type": "function",
// 		"stateMutability": "nonpayable"
// 	}
// ]
// );

// //after deploying the contract in remix.ethereum web complier the code generated is pasted in the 
// // quotes below
// var prediit = prediitvariable.at(
//     //compile code pasted here
//     // '0x2f85b0bf9f42200e1bf13cc8af742a7bc9c11f36'
//     '0x76b24545e95860289aac91b1fdf06ebeb98a4391'
    
//     );
// console.log(prediit);

// // prediit.getInstructor(function(error,result){
// //     if(!error){
// //         $("#instructor").html(result[0]+' ('+result[1]+' years old)');		
// //     }else
// //         console.log(error);		
// // });
// // var gender;

// // if(document.getElementById('f-option').checked){
// // 	gender = document.getElementById('f-option').value;
// // }else{
// // 	gender = document.getElementById('s-option').value;
// // }


// // add user button click what happens
// // document.getElementById("#adduser").addEventListener(click,function(){
// // 	// if(document.getElementById('user_f-option').checked){
// // 	// 	gender = document.getElementById('user_f-option').value;
// // 	// }else{
// // 	// 	gender = document.getElementById('user_s-option').value;
// // 	// }
	
// // 	if(prediit.savePatientInfo(document.getElementById("user_name").value, document.getElementById("user_age").value, "Male", document.getElementById("option").value, 

// // 	document.getElementById("user_NHISno").value, document.getElementById("user_email").value,document.getElementById("user_password").value)){
// // 		console.log('Registration Success');
// // 	}
// // 	else{
// // 		console.log('Too bad.....!');

// // 	};	
// // });

// // what happens when add doctor button is clicked
// // document.getElementById("add_hospital").addEventListener("click",function(){
// // 	if(prediit.saveHospitalInfo(document.getElementById("hospital_name").value, document.getElementById("hospital_unique").value, 
// // 	document.getElementById("hospital_Password").value, 
// // 	document.getElementById("doc_name").value, document.getElementById("docOneCode").value)){
// // 		console.log('Hospital Registration Success');
// // 	}else{
// // 		console.log('Too bad.....!');
// // };	
// // });

// //what happens when the add doctor button is clicked
// // document.getElementById("add_doctor_button").addEventListener("click",function(){
// // 	if(prediit.addDoctor(document.getElementById("doc_firstname").value, document.getElementById("doc_lastname").value, 
// // 	document.getElementById("doc_age").value, "Male")){
// // 		console.log('Successfully added Doctor');
// // 	}
// // 	else{
// // 		console.log('Too bad.....!');

// // 	};	
// // });

// // what happens when add Patient button is clicked
// // document.getElementById("add_patient_button").addEventListener("click",function(){
// //     // passing value from input to smart contract
// // 	if(prediit.addPatient(document.getElementById("firstname").value, document.getElementById("lastname").value,
// // 	document.getElementById("age").value, "Male")){
// // 		console.log('Successfully added Patient');
// // 	}else{
// // 		console.log('Too bad.....!');

// // 	};

// // });

// // what happens when predict heart disease is clicked
// document.getElementById("predict_heart_button").addEventListener("click",function(){
// 		// if(prediit.getHeartData(document.getElementById("h_age").value, document.getElementById("h_trestbps").val(),
// 		// 	document.getElementById("h_restecg").value, document.getElementById("h_thalach").value, 
// 		// 	document.getElementById("h_exang").value, document.getElementById("h_oldpeak").val(), document.getElementById("h_slope").value, 
// 		// 	document.getElementById("h_ca").value, document.getElementById("h_thal").value)){
// 		// 	console.log("Prediction in progress(HeartDisease)");
// 			if(predictHeartDisease()){
// 				console.log("Worked");
// 			}else{
// 				console.log("Not");
// 			}
// });
// // what happens when predict hepatitis is clicked
// // document.getElementById("predict_hepatits_button").addEventListener("click",function(){
// // 	if(prediit.getHepatitisData(document.getElementById("hep_age").value, document.getElementById("hep_steroid").value, 
// // 	document.getElementById("hep_bilirubin").value, 
// // 	document.getElementById("hep_alk").value, document.getElementById("hep_sgot").value, document.getElementById("hep_albumin").value,
// // 	document.getElementById("hep_protime").value)){
// // 		console.log("Prediction in progress(Hepatitis)");
// // 	}else{
// // 		console.log('Too bad.....!');
// // }
// // });
// function addToCSVFile() {
// 	var csvData = 
// }

// $(document).ready(function() {
// 	$("#btn").
// })

function createJSONFile() {
	var obj = {};
	var elements = document.getElementById('predictionForm').querySelectorAll("input");

	for (var i = 0; i < elements.length; ++i) {
		var element = elements[i];
		var name = element.name;
		var value = element.value;

		if (name) {
			obj[name] = value;
		}
	}

	fs = require

	console.log(JSON.stringify(obj));
	clearData();
	alert("Data Added Successfully");
}

function clearData() {
	document.getElementById("h_age").value = "";
	document.getElementById("h_trestbps").value = "";
	document.getElementById("h_restecg").value = ""; 
	document.getElementById("h_thalach").value = ""; 
	document.getElementById("h_exang").value = "";
	document.getElementById("h_oldpeak").value = ""; 
	document.getElementById("h_slope").value = ""; 
	document.getElementById("h_ca").value = "";
	document.getElementById("h_thal").value = "";
}