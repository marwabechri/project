import React, { useState, useEffect } from 'react'
import {Form, message,Table, Card} from 'antd'
import 'antd/dist/reset.css'
import useEth from "../../contexts/EthContext/useEth";
import Evaluatordashboard from './Evaluatordashboard';

function Listofprojects() {
  const { state: { contract, accounts } } = useEth();
  const [projects, setProjects]=useState([]);
  // const [inputProject_id, setProjectId] = useState("");
  // const [inputProjectName, setProjectName] =  useState("");
  // const [inputDescription, setDescription] = useState("");
  // const [inputBudget, setBudget] = useState("");
  // const [inputStarting_date, setStarting_date] = useState("");
  // const [inputClosing_date, setClosing_date] = useState("");
 

  useEffect(() => {
    const ListProjects = async () => {
      try {
        const projects  = await contract.methods.getProject().call({ from: accounts[0] });
        setProjects(projects);
      } catch (error) {
        message.error("Failed to get projects, please try again later");
        console.log(error);
      }
    };
  
    ListProjects();
  }, [contract, accounts]);
  
 

  return (
    <div className="add">
<Evaluatordashboard></Evaluatordashboard>    <Card
    style={{
      position: "relative",
    width: "80%",
      left: "265px",
      top: "px",
      borderRadius: "5px",
      
    }}
  >
  
<Form className="comp-form">
<h2> Project list :</h2>
 <Table dataSource={projects}>
  <Table.Column title="Ethereum Address" dataIndex="Project_id" key="Project_id" />
  <Table.Column title="Project_name" dataIndex="Project_name" key="Project_name" />
  <Table.Column title="description" dataIndex="description" key="description" />
  <Table.Column title="budget" dataIndex="budget" key="budget" />
  <Table.Column title="starting_date" dataIndex="starting_date" key="starting_date" />
  <Table.Column title="closing_date" dataIndex="closing_date" key="closing_date" />

</Table>

</Form>
</Card>
</div>
 );
  }
export default Listofprojects  