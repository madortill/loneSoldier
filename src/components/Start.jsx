import React from "react";
import "../css/Start.css";
import { useState } from "react";
import StartHouse from "./StartHouse";


function Start({setSection}) {

  return (
    <div className="Start">
      <h1 className="titleStart">ערוצי הסיוע לחייל הבודד</h1>
      <StartHouse nextPage={()=> setSection(1)}/>
    </div>
  );
}

export default Start;
