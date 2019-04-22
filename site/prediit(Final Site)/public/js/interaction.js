if(typeof web3 != 'undefined'){
    web3 = new Web3(web3.currentProvider);
}else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}


web3.eth.defaultAccount = web3.eth.accounts[0];
var abi = /* ABI value goes here */ null;

//after deploying the contract in remix.ethereum web complier the code generated is pasted in the 
// quotes below
var contractAdrr = /* compile code pasted here */ null;

var myAbi = web3.eth.contract(abi);
var myFunction = myAbi.at(contractAdrr);

function addUser() {
	gender = 'male';

	myFunction.savePatientInfo.sendTransaction(
		document.getElementById('user_name').value,
		Number(document.getElementById('user_age').value),
		// document.getElementById('gender').value,
		gender,
		Number(document.getElementById('user_NHISno').value),
	
		Number(document.getElementById('telephone').value),
		{
			from: web3.eth.accounts[0],
			gas:4000000
		},
		function(error, result) {
			if (error) {
				console.log(error);
			} else {
				console.log(result);
			}
		}
	)
}

function addSD() {
	gender = 'male';

	myFunction.savePatientInfo.sendTransaction(
		document.getElementById('user_name').value,
		Number(document.getElementById('user_age').value),
		Number(document.getElementById('user_NHISno').value),
		Number(document.getElementById('telephone').value),
		{
			from: web3.eth.accounts[0],
			gas:4000000
		},
		function(error, result) {
			if (error) {
				console.log(error);
			} else {
				console.log(result);
			}
		}
	)
}

function addHospital() {

	myFunction.savePatientInfo.sendTransaction(
		document.getElementById('hospital_name').value,
		Number(document.getElementById('hospital_unique').value),
		document.getElementById('hospital_Password').value,
		Number(document.getElementById('docOneCode').value),
		document.getElementById('doc_name').value,
		{
			from: web3.eth.accounts[0],
			gas:4000000
		},
		function(error, result) {
			if (error) {
				console.log(error);
			} else {
				console.log(result);
			}
		}
	)
}


function getUser() {
	let name, age, gender, nhisId, telephone = myFunction.getPatientInfo.call({from: account[0]});
	//display value on the webpage
	console.log(name, age, gender, nhisId, telephone);
}


function getDoctor() {
	let name = myFunction.getPatientInfo.call({from: account[0]});
	//display value on the webpage
	console.log(name);
}
