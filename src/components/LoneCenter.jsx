import React, { useState } from 'react'
import "../css/LoneCenter.css";

import houseIcon from "../assets/images/mainHouse-icon.svg"
import LoneCenterStart from './LoneCenterStart';

function LoneCenter({ onComplete, onBack }) {
    const [page, setPage] = useState(0);
    const LAST_PAGE = 1;
    const backToHouse = () => {
        if (page === LAST_PAGE) {
            onComplete();
        } else {
            onBack();
        }
    }

  return (
    <div className='LoneCenter'>
      <div className='backToHouse-btn' onClick={backToHouse}>
        <img src={houseIcon} alt="houseIcon" className='houseIcon' />
        <p>חזרה לנושאים</p>
      </div>
      {page === 0 && <LoneCenterStart nextPage={()=> setPage(1)}/>}
    </div>
  )
}

export default LoneCenter
