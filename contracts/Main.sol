// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;


contract main {

    address public Admin = 0xc3AbBAF0bFbBB7Cc1Ebaeb959903b9a0365A0bd3;
    mapping(address => _Account) public listAccount;

_Account[] public Accounts;
_Association[] public Associations;
_Donor[] public Donors;
_Project[] public Projects;
_Evaluator[] public Evaluators;

struct _Account {
        string login;
        string password ;
        string role;
    
    }
struct _Association {
        address Association_id;
        string Association_name;
        string mail_Adress;
        uint32 phone_number;
        string gouvernourate;
        string description ;
       
    }   
 struct _Donor {
        address Donor_id;
        string name;
        }    
struct _Project {
        address Project_id;
        string Project_name;
        string description ;
        uint32 budget;
        string starting_date;
        string closing_date;
        }
 struct _Evaluator {
        address Evaluator_id;
        string Evaluator_name;
        string mail_Adress;
        uint32 phone_number;
        string gouvernourate;
    }    

constructor() {
                Accounts.push(_Account("ahmed", "admin", "Admin"));
                Accounts.push(_Account("rami", "rami", "Evaluator"));
                Accounts.push(_Account("khaled", "khaled", "Donor"));
                Accounts.push(_Account("mariem", "mariem", "Association"));
                
    }

    function getRole(string memory _login, string memory _password) external view returns (string memory) {
        string memory role ;
        for (uint i=0; i<Accounts.length; i++)
        {
            if ((keccak256(abi.encodePacked(_login))) == (keccak256(abi.encodePacked(Accounts[i].login))))
            {
                if ((keccak256(abi.encodePacked(_password))) == (keccak256(abi.encodePacked(Accounts[i].password)))){
                    role= Accounts[i].role;
                } 
            }
        }
        
     return role;
    }


/*****************************************************************************************
************************************************************************************/    
    
    
    function addProject(
        address Project_id,
        string memory Project_name,
        string memory description ,
        uint32 budget,
        string memory starting_date,
        string memory closing_date 

        
 ) 
   public {
                
                Projects.push(_Project(Project_id,Project_name,description,budget,starting_date,closing_date));
        }
    
    function getProject()public view returns (_Project[] memory ) {

        _Project[] memory Pro = new _Project[](Projects.length);
        for (uint i=0; i<Projects.length; i++){
            Pro[i] = Projects[i];
        }
        return Pro;
    }

/*****************************************************************************************
************************************************************************************/   
    
    function addAssociation(
        address Association_id,
        string memory Association_name,
        string memory mail_Adress,
        uint32 phone_number,
        string memory gouvernourate,
        string memory description ,
        string memory _login, 
        string memory _password,
        string memory _role
 ) 
   public {

                Associations.push(_Association(Association_id,Association_name, mail_Adress,phone_number,gouvernourate, description));
                Accounts.push(_Account(_login, _password, _role));
                listAccount[Association_id]=_Account(_login, _password, _role);

                
        }
    
    function getAssociation()public view returns (_Association[] memory ) {
        _Association[] memory Asso = new _Association[](Associations.length);
        for (uint i=0; i<Associations.length; i++){
            Asso[i] = Associations[i];
        }
        return Asso;
    }

    /*****************************************************************************************
************************************************************************************/   
      
       function addDonor(
        address Donor_id,
        string memory _name, 
        string memory _role, 
        string memory _login, 
        string memory _password
 ) 
   public {
                
                Donors.push(_Donor(Donor_id, _name));
                Accounts.push(_Account(_login, _password, _role));
        }
    
    function getDonor()public view returns (_Donor[] memory ) {
        _Donor[] memory Don = new _Donor[](Donors.length);
        for (uint i=0; i<Donors.length; i++){
            Don[i] = Donors[i];
        }
        return Don;
    }
    /*****************************************************************************************
************************************************************************************/   
 function addEvaluator(
        address Evaluator_id,
        string memory Evaluator_name,
        string memory mail_Adress,
        uint32 phone_number,
        string memory gouvernourate,
        string memory _login, 
        string memory _password,
        string memory _role
 ) 
   public {
                
        Evaluators.push(_Evaluator(Evaluator_id,Evaluator_name,mail_Adress, phone_number,gouvernourate));
        Accounts.push(_Account(_login, _password, _role));
        }
       function getEvaluator()public view returns (_Evaluator[] memory ) {
        _Evaluator[] memory Eva = new _Evaluator[](Evaluators.length);
        for (uint i=0; i<Evaluators.length; i++){
            Eva[i] = Evaluators[i];
        }
        return Eva;
    }

    }