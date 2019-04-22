pragma solidity ^0.4.0;

contract PrediitContract {
    
   string fName; 
   string lastname; 
  string gender;
   uint age;
   
   function addDoctor(string memory _docfname, string memory _doclname, uint _docage, string memory _docgender) public {
      fName = _docfname;
      lastname = _doclname;
      age = _docage;
      gender = _docgender;
  }
   
  function addPatient(string memory _fName, string memory _lastname, uint  _age, string memory _gender) public {
      fName = _fName;
      lastname = _lastname;
      age = _age;
      gender = _gender;
  }
 
 function getHeartData(uint h_age, uint h_trestbps, uint h_restecg, uint h_thalach, 
    uint h_exang, uint h_oldpeak, uint h_slope, uint h_ca, uint h_thal){
     
 }
 
 function getHepatitisData(uint hep_age, uint hep_steroid, uint hep_bilirubin,  uint hep_alk, uint hep_sgot,
 uint hep_albumin, uint hep_protime){
     
 }
  
//   function getInstructor() public constant returns (string, uint) {
//       return (fName, age);
//   }
    
}