import React, { useState } from 'react'
import {Form, message,Button, Card,DatePicker} from 'antd'
import 'antd/dist/reset.css'
import useEth from "../../contexts/EthContext/useEth";
import Associationdashboard from './Associationdashboard';

function Projects() {
  const { state: { contract, accounts } } = useEth();
  const [projects, setProjects]=useState([]);
  const [inputProject_id, setProjectId] = useState("");
  const [inputProjectName, setProjectName] =  useState("");
  const [inputDescription, setDescription] = useState("");
  const [inputBudget, setBudget] = useState("");
  const [inputStarting_date, setStarting_date] = useState("");
  const [inputClosing_date, setClosing_date] = useState("");
 

  // useEffect(() => {
  //   const ListProjects = async () => {
  //     try {
  //       const projects  = await contract.methods.getProject().call({ from: accounts[0] });
  //       setProjects(projects);
  //     } catch (error) {
  //       message.error("Failed to get projects, please try again later");
  //       console.log(error);
  //     }
  //   };
  
  //   ListProjects();
  // }, [contract, accounts]);
  
  const Add = async () => {
   const ListProjects = async () => {
      try {
        const projects = await contract.methods.getProject().call({ from: accounts[0] });
        setProjects(projects);
      } catch (error) {
        message.error("Failed to get project, please try again later");
        console.log(error);
      }
    };

    if (inputProject_id&& inputProjectName&& inputDescription&& inputBudget&& inputStarting_date&& inputClosing_date) {
      try {
        await contract.methods.addProject(inputProject_id, inputProjectName, inputDescription, inputBudget ,inputStarting_date, inputClosing_date).send({ from: accounts[0] });
        message.success("Poject added successfully");
        ListProjects();
      } catch (error) {
        message.error("Failed to add Project, please try again later");
        console.log(error);
      }
    } else {
      message.error("Please fill in all fields");
    }
  };
  return (
    <div className="add">
      <Associationdashboard></Associationdashboard>
    <Card
    style={{
      position: "relative",
      width: "80%",
      left: "265px",
      top: "px",
      borderRadius: "5px",
      
    }}
  >
    
<Form className="comp-form">
 
<h2>Add Project :</h2>
  <Form.Item>
         <label className="label">
           Project id : 
             <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) =>  {setProjectId(t.target.value);}}
          />
             </label>
             </Form.Item>
             <Form.Item>
             <label className="label">
         Project name : 
             <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setProjectName(t.target.value);}}
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
             <label htmlFor="Budget" className="label">
         Budget :
         <input
             className="input"
             type="text"
             name="uint"
             onChange={(t) => 
              {
               setBudget(t.target.value);}}

          />
            </label>
             <Form.Item label="Starting date">
  <DatePicker
    onChange={(t) => { setStarting_date(t.format("DD/MM/YYYY")); }} 
    style={{ width: "100%" }}
    format={"DD/MM/YYYY"}
  />
</Form.Item>
<Form.Item label="Closing date">
  <DatePicker
    onChange={(t) => { setClosing_date(t.format("DD/MM/YYYY")); }} 
    style={{ width: "100%" }}
    format={"DD/MM/YYYY"}
  />
</Form.Item>
             </Form.Item>
           
  <span> 
   <Button onClick={Add}>add Project </Button>
    </span>  
    <span>     <Button>
cancel   </Button></span>  
</Form>
</Card>
</div>
 );
  }
export default Projects  