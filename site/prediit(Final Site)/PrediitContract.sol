pragma solidity >=0.4.24;

contract PrediitContract {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    struct UserPatient {
        uint age;
        string gender;
        uint nhisId;
        uint telephone;
        string name;
    }

    mapping (address => UserPatient[]) mulUsers;
    address[] public users;     // keeps track of users available

    function savePatientInfo(string memory _name, uint _age, string memory _gender, uint _nhisId, uint _telephone) public {
        UserPatient memory user = UserPatient(_age, _gender,  _nhisId, _telephone, _name);
        mulUsers[owner].push(user);

        users.push(owner) - 1;
    }

    function getAllPatientsInfo() public view returns(address[] memory) {
        return users;
    }

    function getPatientInfo() public view returns(string memory _name, uint _age, string memory _gender, uint __nhisId, uint _telephone) {
        uint index = mulUsers[owner].length;
        
        for (uint i = 0; i < index; i++) {
            _name = mulUsers[owner][i].name;
            _age = mulUsers[owner][i].age;
            _gender = mulUsers[owner][i].gender;
            __nhisId = mulUsers[owner][i].nhisId;
            _telephone = mulUsers[owner][i].telephone;
        }
    }

    struct Hospital {
        string name;
        uint code;
        string password;
        uint doctorNum;
        string doctorName;
        string docCode;
    }

    mapping (address => Hospital[]) hospitals;
    address[] public hospitalsT;     // keeps track of users available

    function saveHospitalInfo(string memory _name, uint _code, string memory _password, uint _doctorNum, string memory _doctorName, string memory _docCode) public {
        Hospital memory hospital = Hospital(_name, _code,  _password, _doctorNum, _doctorName, _docCode);
        hospitals[owner].push(hospital);

        hospitalsT.push(owner);
    }

    function getAllHospitalInfo() public view returns(address[] memory) {
        return hospitalsT;
    }

    function getHospitalInfo() public view returns(string memory _name, uint _doctorNum, string memory _doctorName) {
        uint index = hospitals[owner].length;
        
        for (uint i = 0; i < index; i++) {
            _name = hospitals[owner][i].name;
            _doctorNum = hospitals[owner][i].doctorNum;
            _doctorName = hospitals[owner][i].doctorName;
        }
    }

    function getCurrentDoctor() public view returns(string memory _doctorName) {
        uint index = hospitals[owner].length;
        
        for (uint i = 0; i < index; i++) {
            _doctorName = hospitals[owner][i].doctorName;
        }
    }

    struct SymptomDiagnose {
        uint nhisId;
        string symptoms;
        string diagnoseOf;
    }

    mapping (address => SymptomDiagnose[]) symptomsDiagnoses;

    function saveSymptomDiagnoseInfo(uint _nhisId, string memory _symptoms, string memory _diagnoseOf) public {
        SymptomDiagnose memory symptomDisease = SymptomDiagnose(_nhisId, _symptoms, _diagnoseOf);
        symptomsDiagnoses[owner].push(symptomDisease);
    }

    function getPatientSD(uint _nhisId) public view returns(string memory _symptoms, string memory _diagnoseOf) {
        uint index = symptomsDiagnoses[msg.sender].length;
        uint index_ = mulUsers[owner].length;

        for (uint i = 0; i < index_; i++) {
            if (mulUsers[owner][i].nhisId == _nhisId) {
                for (uint j = 0; j < index; j++) {
                    _symptoms = symptomsDiagnoses[owner][i].symptoms;
                    _diagnoseOf = symptomsDiagnoses[owner][i].diagnoseOf;
                }
            }
        }
    }

}