import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import TabControl from "./components/TabControl";
import LanguageProvider from "./context/LanguageContext";
import React from "react";


function App() {

  const [selectedTab, switchTab] = useState("Pending")

  useEffect(()=>{
    console.log(selectedTab)
  },[selectedTab])

  return (
    <LanguageProvider>
    <div data-theme="mytheme" className="flex w-screen h-full justify-center items-center content-center bg-[#172b3a]">



<div className=" flex w-[900px] h-full rounded-lg content-center justify-center items-center p-5  ">
  <div className="flex flex-col gap-5 w-full min-h-screen h-full rounded-xl p-5 bg-[#0b2030]">
    <div>
    <Navbar></Navbar>
    </div>
  <div>
  <TabControl controller={switchTab}></TabControl>
  </div>
<div className="flex-grow-0">
<Orders selectedTab = {selectedTab}></Orders>
</div>
  
  </div>


</div>

    </div>
    </LanguageProvider>
  );
}

export default App;
