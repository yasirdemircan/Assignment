import { useState } from "react";
import Navbar from "./components/Navbar";
import Orders from "./components/TabNavigation/Orders";
import LanguageProvider from "./context/LanguageContext";
import { ApplicationTabType } from "./types/ApplicationTabType";
import Account from "./components/TabNavigation/Account";




function App() {


  const [selectedPageTab, setSelectedPageTab] = useState<string>("Orders")
  const [currentTheme, setCurrentTheme] = useState<string>("standard")

  const applicationTabs: ApplicationTabType = {
    "Orders": <Orders ></Orders>,
    "Account": <Account></Account>,
    "Menu": <h1>Menu</h1>
  }


  return (
    <LanguageProvider>
      <div data-theme={currentTheme} className="flex w-screen h-full justify-center items-center content-center bg-[#172b3a]">

        <div className=" flex w-[900px] h-full rounded-lg content-center justify-center items-center p-5  ">
          <div className="flex flex-col gap-5 w-full min-h-screen h-full rounded-xl p-5 bg-[#0b2030]">
            <div>
              <Navbar themeSelector={setCurrentTheme} tabSelector={setSelectedPageTab}></Navbar>
            </div>

            <div className="w-full h-full text-primary">
              {applicationTabs[selectedPageTab]}
            </div>

          </div>


        </div>

      </div>
    </LanguageProvider>
  );
}

export default App;
