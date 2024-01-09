import "./App.css";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";


function App() {
  return (

  <div className="flex  overflow-auto ">
  <div className="h-[100vh] "><SideBar/></div>
    
    <div className="mx-auto w-[100vw] ">
    <DashBoard/>
    </div>
  
  </div>
  );
}

export default App;
