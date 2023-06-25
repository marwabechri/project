import React, { useState,useEffect } from 'react'
import {Form, message,Button,Table, Card} from 'antd'
import 'antd/dist/reset.css'

import useEth from "../../contexts/EthContext/useEth";
import Administrator from './Administrator';
 

function Donor() {
  const { state: { contract, accounts } } = useEth();
  const [donors, setDonors]=useState([]);
  const [inputDonor_id, setDonorId] = useState("");
  const [inputName, setName] =  useState("");
  const [inputLogin, setLogin] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputRole, setRole] = useState("");

  useEffect(() => {
    const ListDonors = async () => {
      try {
        const donors  = await contract.methods.getDonor().call({ from: accounts[0] });
        setDonors(donors);
      } catch (error) {
        message.error("Failed to get associations, please try again later");
        console.log(error);
      }
    };
  
    ListDonors();
  }, [contract, accounts]);
  
  const Add = async () => {
   const ListDonors = async () => {
      try {
        const donors = await contract.methods.getDonor().call({ from: accounts[0] });
        setDonors(donors);
      } catch (error) {
        message.error("Failed to get associaion, please try again later");
        console.log(error);
      }
    };

    if (inputDonor_id&& inputName&& inputLogin&& inputPassword&& inputRole) {
      try {
        await contract.methods.addDonor(inputDonor_id, inputName, inputLogin, inputPassword, inputRole).send({ from: accounts[0] });
        message.success("Donor added successfully");
        ListDonors();
      } catch (error) {
        message.error("Failed to add donor, please try again later");
        console.log(error);
      }
    } else {
      message.error("Please fill in all fields");
    }
  
  };
  return (
    
    <div className="add">
      <Administrator></Administrator>
    <Card
    style={{
      position: "relative",
      width: "80%",
      left: "280px",
      top: "35px",
      borderRadius: "5px",
      
    }}
  >
<Form className="comp-form">
 
<h2>Add donor :</h2>
  <Form.Item>
         <label className="label">
           Donor id : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) =>  {setDonorId(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
         <label className="label">
         Donor name : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setName(t.target.value);}}
          />
             </label>
             </Form.Item>
             
             <Form.Item>
       <label htmlFor="login" className="label">
           Login : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setLogin(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
       <label htmlFor="password" className="label">
           Password : 
         <input
             className="input"
             type="password"
             name="uint"
             onChange={(t) => 
              {
               setPassword(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
       <label htmlFor="Role" className="label">
           Role : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setRole(t.target.value);}}
          />
             </label>
             </Form.Item>
  <span> 
   <Button onClick={Add}>add Donor </Button>
    </span>  
    <span>     <Button>
cancel   </Button></span>  
</Form> 
</Card>
<br/>
<br/>

<Card  style={{
      position: "relative",
      width: "80%",
      left: "280px",
      top: "35px",
      borderRadius: "5px",
      
    }}>
<Form className="comp-form">
 
 <h2> Donors list :</h2>
 <Table dataSource={donors}>
  <Table.Column title="Ethereum Address" dataIndex="Donor_id" key="Donor_id" />
  <Table.Column title="Name" dataIndex="name" key="name" />

</Table>
     </Form>
</Card>
  

  </div> 
  );
}


export default Donor 
