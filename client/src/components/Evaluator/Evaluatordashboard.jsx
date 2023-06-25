import { NavLink } from 'react-router-dom'
import {  FaThList, FaUserAlt} from 'react-icons/fa'
import {Avatar,Layout,Typography} from 'antd'
const { Header } = Layout;
const { Title } = Typography;

const Evaluatordashboard = ({Children}) => {

 const menuItem=[
   
    {
      path:"/Listofprojects",
      name:"Listofprojects",
      icon:<FaThList/>
    },
    {
      path:"/",
      name:"Logout",
      icon:""
    },
  ]
  return (
    <>
    <Header style={{ zIndex: 1, width: "100%", backgroundColor: "#ba2675" }}>
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
      </Header>
    <div className='admin'>
      <div  className='sidebar'>
      <div className='top-section'>
      <div className='bars'>
      <h2  className='Logo'>Evaluator</h2>
    
      
      <Avatar size={120} icon={<FaUserAlt />} style={{marginLeft: "20px"}} />
      <br />
      <br />
      <br />
      </div>
      </div>
    
    {
      menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index} className='link' activeclasseName='active'>
          <div className='icon'>{item.icon}</div>
          <div className='link_text'>{item.name}</div>

        </NavLink>
      ))
      }     
    </div>
    <main>{Children}</main>
    </div>
    </>
  )
}

export default Evaluatordashboard
