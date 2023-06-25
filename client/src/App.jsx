import { EthProvider } from "./contexts/EthContext";
import Interface from "./components/Interface";
import Administrator from "./components/Admin/Administrator";
import Evaluator from "./components/Admin/Evaluator";
import Evaluatordashbord from "./components/Evaluator/Evaluatordashboard";
import Donordashbord from "./components/Donor/Donordashboard";
import Associationdashboard  from "./components/Association/Associationdashboard";
import Projects  from "./components/Association/Projects";
import Association from "./components/Admin/Association";
import Donor from "./components/Admin/Donor";
import { Routes,Route } from "react-router-dom";
import Listofprojects from "./components/Evaluator/Listofprojects";
import ListofAcceptedProjects from "./components/Donor/ListofAcceptedProjects";

function App() {
  return (
    
    <div className="bg">
    <EthProvider>
    
      <Routes>
        <Route path='/' element={<Interface />} />

         <Route path='/Administrator' element={<Administrator />}  />
         <Route path='/Evaluator' element={<Evaluator />} />  
           <Route path='/Association' element={<Association />} /> 
           <Route path='/Donor' element={<Donor />} /> 
           <Route path='/Evaluatordashboard' element={<Evaluatordashbord />} /> 
           <Route path='/Listofprojects' element={<Listofprojects />} /> 
           <Route path='/Associationdashboard' element={<Associationdashboard />} /> 
           <Route path='/Projects' element={<Projects />} /> 
           <Route path='/Donordashboard' element={<Donordashbord />} /> 
           <Route path='/ListofAcceptedProjects' element={<ListofAcceptedProjects />} /> 


     </Routes>
     </EthProvider>
     </div>
   
    
  );
}

export default App;
