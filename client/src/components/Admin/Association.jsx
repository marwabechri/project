import React, { useState,useEffect } from 'react'
import {Form, message,Button,Table, Card} from 'antd'
import 'antd/dist/reset.css'
import useEth from "../../contexts/EthContext/useEth";
import Administrator from './Administrator';
 

function Association() {
  const { state: { contract, accounts } } = useEth();
  const [associations, setAssociations]=useState([]);
  const [inputAssociationId, setAssociationId] = useState("");
  const [inputAssociationName, setAssociationName] =  useState("");
  const [inputMailAddress, setMailAddress] = useState("");
  const [inputPhoneNumber, setPhoneNumber] = useState("");
  const [inputGovernorate, setGovernorate] = useState("");
  const [inputDescription, setDescription] = useState("");
  const [inputLogin, setLogin] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [inputRole, setRole] = useState("");

  useEffect(() => {
    const ListAssociations = async () => {
      try {
        const associations  = await contract.methods.getAssociation().call({ from: accounts[0] });
        setAssociations(associations);
      } catch (error) {
        message.error("Failed to get associations, please try again later");
        console.log(error);
      }
    };
  
    ListAssociations();
  }, [contract, accounts]);
  
  const Add = async () => {
   const ListAssociations = async () => {
      try {
        const associations = await contract.methods.getAssociation().call({ from: accounts[0] });
        setAssociations(associations);
      } catch (error) {
        message.error("Failed to get associaion, please try again later");
        console.log(error);
      }
    };

    if (inputAssociationId&& inputAssociationName&& inputMailAddress&& inputPhoneNumber&& inputGovernorate&& inputDescription&& inputLogin&& inputPassword&& inputRole) {
      try {
        await contract.methods.addAssociation(inputAssociationId, inputAssociationName, inputMailAddress, inputPhoneNumber, inputGovernorate, inputDescription, inputLogin, inputPassword, inputRole).send({ from: accounts[0] });
        message.success("Association added successfully");
        ListAssociations();
      } catch (error) {
        message.error("Failed to add association, please try again later");
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
 
<h2>Add association :</h2>
  <Form.Item>
         <label className="label">
           Association id : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) =>  {setAssociationId(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
         <label className="label">
         Association name : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setAssociationName(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
       <label htmlFor="mail_Address" className="label">
       mail Address : 
         <input
             className="input"
             type="email"
             name="uint"
             onChange={(t) => 
              {
               setMailAddress(t.target.value);}}

          />
             </label>
             </Form.Item>
          
             <Form.Item>
       <label htmlFor="phone_number" className="label">
           Phone number : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setPhoneNumber(t.target.value);}}
          />
             </label>
             </Form.Item>
      

             <Form.Item>
       <label htmlFor="gouvernourate" className="label">
        Gouvernourate : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setGovernorate(t.target.value);}}
          />
             </label>
             </Form.Item>


             <Form.Item>
       <label htmlFor="Description" className="label">
       Description : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setDescription(t.target.value);}}
         
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
   <Button onClick={Add}>add Association </Button>
    </span>  
    <span>     <Button    >
cancel   </Button></span>  
</Form> 
<br/>
<br/>

<Form className="comp-form">
 
 <h2> Associations list :</h2>
 <Table dataSource={associations}>
  <Table.Column title="Ethereum Address" dataIndex="Association_id" key="Association_id" />
  <Table.Column title="Name" dataIndex="Association_name" key="Association_name" />
  <Table.Column title="mail" dataIndex="mail_Adress" key="mail_Adress" />
  <Table.Column title="Phone Number" dataIndex="phone_number" key="phone_number" />
  <Table.Column title="Governorate" dataIndex="governorate" key="governorate" />
  <Table.Column title="Description" dataIndex="description" key="description" />
</Table>
     </Form>
</Card>
  
  </div> 
  );
}


export default Association 
