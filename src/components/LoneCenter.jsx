import React, { useState } from 'react'
import "../css/LoneCenter.css";

import houseIcon from "../assets/images/mainHouse-icon.svg"
import LoneCenterStart from './LoneCenterStart';
import ShelfTree from './ShelfTree';

function LoneCenter({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
    const [page, setPage] = useState(0);
    const LAST_PAGE = 1;
    const backToHouse = () => {
        if (page === LAST_PAGE) {
            onComplete();
        } else {
            onBack();
        }
    }

    const handleNextPage = () => {
      setIsBackNavigation(false); // מאפסים את מצב החזרה
      setPage(1);
  }

    const handlePreviousPage = () => {
      setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
      setPage(0);
  }

  return (
    <div className='LoneCenter'>
      <div className={`backToHouse-btn ${(page === LAST_PAGE) ? "backToHouse-animation" : ""}`} onClick={backToHouse}>
        <img src={houseIcon} alt="houseIcon" className='houseIcon' />
        <p>חזרה לנושאים</p>
      </div>
      {page === 0 && <LoneCenterStart nextPage={handleNextPage} isBack={isBackNavigation}/>}
      {page === 1 &&  <ShelfTree previousPage={handlePreviousPage}/>}
    </div>
  )
}

export default LoneCenter
