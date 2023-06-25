import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";
import 'antd/dist/reset.css'
import {Form, message,Button,Layout,Typography} from 'antd'
import { useNavigate } from "react-router-dom"; 

const { Header } = Layout;
const { Title } = Typography;

function Interface() {
  const { state: { contract, accounts } } = useEth();
  const [inputLogin, setInputLogin] = useState(0);
  const [inputPassword, setInputPassword] = useState(0);
  const  navigate = useNavigate();

  const login = async () => {
    console.log('les paramètres sont', inputLogin)
    console.log('les paramètres sont ', inputPassword)
    let result = await contract.methods.getRole(inputLogin, inputPassword).call({ from: accounts[0] });
console.log('le resultat est',result)
if (!inputLogin || !inputPassword) {
  message.error("Please fill in all fields");
  return;
}
try {
  let result = await contract.methods.getRole(inputLogin, inputPassword).call({ from: accounts[0] });

if (result === "Admin") {
  setTimeout(() => {
    message.success("welcome our Administrator !");
  }, 500);
  setTimeout(() => {
    navigate("Administrator");
  }, 1000);
} 
else if (result ==="Donor") {
  setTimeout(() => {
    message.success("welcome our Donor !");
  }, 500);
  setTimeout(() => {
    navigate("Donordashboard");
  }, 1000);
}
else if (result ==="Evaluator") {
  setTimeout(() => {
    message.success("welcome our Evaluator !");
  }, 500);
  setTimeout(() => {
    navigate("Evaluatordashboard");
  }, 1000);
}

else if (result ==="Association") {
  setTimeout(() => {
    message.success("welcome our association !");
  }, 500);
  setTimeout(() => {
    navigate("Associationdashboard");
  }, 1000);
}


} catch (error) {
  message.error("Failed to authenticate, please try again later");
  console.log(error);
}  
}; 
  return (
<div>
{/* <Header style={{ zIndex: 1, width: "100%", backgroundColor: "#ba2675" }}>
        <img
          style={{ float: "left", width: "60px", height: "60px" }}
          alt=""
         src="/favicon.png"

          width="35"
          height="35"
          className="d-inline-block align-top"
        />
        <Title
          level={3}
          style={{
            position: "relative",
            color: "white",
            float: "left",
            top: "15px",
            marginLeft: "7px",
          }}
        >
Donations Tracking Platform        </Title>
      </Header> */}
<div className="interface">
         

	<Form className="form">
    <br/>
    <br/>
    <br/>
    <br/>

    <Typography.Title className="typography">Login</Typography.Title>
    <br/>

    <Form.Item>
           <label className="label">
             User name : 
           <input
               className="input"
               type="text"
               name="uint"
               onChange={(t) => 
				   {
						setInputLogin(t.target.value);
					}} placeholder="user name"  
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
						setInputPassword(t.target.value);
					}} passtype="password" placeholder="********" 
            />
               </label>
               </Form.Item>
			<Button onClick={login}>
connect
			</Button>
      </Form>
    </div>
    </div>
  );
}

export default Interface;
