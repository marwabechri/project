import React, { useState,useEffect } from 'react'
import {Form, message,Button,Table, Card} from 'antd'
import 'antd/dist/reset.css'
import useEth from "../../contexts/EthContext/useEth";
import Administrator from './Administrator';
 


    function Evaluator() { 
        const { state: { contract, accounts } } = useEth(); 
        const [evaluators, setEvaluators]=useState([]);
     const [inputEvaluatorId, setEvaluatorId] = useState("");
      const [inputEvaluatorName, setEvaluatorName] =  useState("");
       const [inputMailAddress, setMailAddress] = useState("");
        const [inputPhoneNumber, setPhoneNumber] = useState("");
         const [inputGovernorate, setGovernorate] = useState("");
          const [inputLogin, setLogin] = useState(""); 
          const [inputPassword, setPassword] = useState("");
           const [inputRole, setRole] = useState("");

  useEffect(() => {
    const ListEvaluators = async () => {
      try {
        const evaluators  = await contract.methods.getEvaluator().call({ from: accounts[0] });
        setEvaluators(evaluators);
      } catch (error) {
        message.error("Failed to get evaluators, please try again later");
        console.log(error);
      }
    };
  
    ListEvaluators();
  }, [contract, accounts]);
  
  const Add = async () => {
   const ListEvaluators = async () => {
      try {
        const evaluators = await contract.methods.getEvaluator().call({ from: accounts[0] });
        setEvaluators(evaluators);
      } catch (error) {
        message.error("Failed to get evaluator, please try again later");
        console.log(error);
      }
    };

    if (inputEvaluatorId&& inputEvaluatorName&& inputMailAddress&& inputPhoneNumber&& inputGovernorate&&  inputLogin&& inputPassword&& inputRole) {
      try {
        await contract.methods.addEvaluator(inputEvaluatorId, inputEvaluatorId, inputMailAddress, inputPhoneNumber, inputGovernorate, inputLogin, inputPassword, inputRole).send({ from: accounts[0] });
        message.success("Evaluator added successfully");
        ListEvaluators();
      } catch (error) {
        message.error("Failed to add Evaluator , please try again later");
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
 
<h2>Add evaluator :</h2>
  <Form.Item>
         <label className="label">
           Evaluator id : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) =>  {setEvaluatorId(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
         <label className="label">
         evaluator name : 
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setEvaluatorName(t.target.value);}}
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
   <Button onClick={Add}>add Evaluator </Button>
    </span>  
    <span>     <Button    >
cancel   </Button></span>  
</Form> 
<br/>
<br/>

<Form className="comp-form">
 
 <h2> Evaluators list :</h2>
 <Table dataSource={evaluators}>
  <Table.Column title="Ethereum Address" dataIndex="Evaluator_id" key="Evaluator_id" />
  <Table.Column title="Name" dataIndex="Evaluator_name" key="Evaluator_name" />
  <Table.Column title="mail" dataIndex="mail_Adress" key="mail_Adress" />
  <Table.Column title="Phone Number" dataIndex="phone_number" key="phone_number" />
  <Table.Column title="Governorate" dataIndex="governorate" key="governorate" />
</Table>
     </Form>
</Card>
  
  </div> 
  );
}


export default Evaluator 
