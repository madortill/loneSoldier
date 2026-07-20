import React from 'react'
import "../css/House.css";

import houseIcon from "../assets/images/mainHouse-icon.svg"

function ToHouseBtn({backToHouse, didFinish}) {
  return (
    <div className={`backToHouse-btn ${didFinish ? "backToHouse-animation" : ""}`} onClick={backToHouse}>
    <img src={houseIcon} alt="houseIcon" className='houseIcon' />
    <p>חזרה לנושאים</p>
  </div>
  )
}

export default ToHouseBtn
