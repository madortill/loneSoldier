import React from "react";
import { useState } from "react";
import "./css/App.css";

import til from "./assets/images/til.svg";
import bahad11 from "./assets/images/bahad11.png";

import Start from "./components/Start";
import About from "./components/About";
import House from "./components/House";
import MobileWarningOverlay from "./components/MobileWarningOverlay";

function App() {
  const [section, setSection] = useState(0);

  // צבע הרקע
  const roomBackgrounds = {
    main: "#AE8FCF",
    loneCenter: "#FF9EB3",
    addedBenefits: "#FFB874",
    houseBenefits: "#FFE991",
    moneyBenefits: "#8EC7CF",
    exceptions: "#CFE0FF",
    applications: "#9FCCA8",
  };
  const [activeRoomTheme, setActiveRoomTheme] = useState("main");
  const backgroundColor =
  roomBackgrounds[activeRoomTheme] || roomBackgrounds.main;
  return (
    <>
    <MobileWarningOverlay />
      <div className="app" style={{ backgroundColor }}>
        <div className="symbols">
          <img src={bahad11} alt="bahad11" className="bahad11" />
          <img src={til} alt="til" className="til" />
          {(section === 0 || section === 2) && <About/>}
        </div>
        {section === 0 && <Start setSection={setSection}/>}
        {section === 1 && <House setSection={setSection} setActiveRoomTheme={setActiveRoomTheme}/>}
      </div>
    </>
  );
}

export default App;
