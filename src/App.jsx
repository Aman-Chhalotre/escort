import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header&footer/Navbar";
import Footer from "./components/header&footer/Footer";
import { EscortContextProvider } from "./context/useEscortContext";
import { useEffect, useState } from "react";
import {AxiosFetch} from "./apiCall/ApiCall";
import Cookies from "js-cookie";

function App() {
  const [escorts, setEscorts] = useState([])

  useEffect(  ()=>{
    fetchData();
    async function fetchData() {
      const data = await AxiosFetch('/api/escorts/approved');
      setEscorts(data.escorts)
      
  }
  },[]);
  
  return (
    <>
      <div className="text-black  bg-[#300354]">
        <div className="xl:w-[90%] w-[100%] justify-self-center">
          <EscortContextProvider value={{escorts, setEscorts}}>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
        </EscortContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
