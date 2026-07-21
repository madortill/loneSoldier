import React, { useState } from 'react'
import "../css/LoneCenter.css";

import LoneCenterStart from './LoneCenterStart';
import ShelfTree from './ShelfTree';
import ToHouseBtn from './ToHouseBtn';

import ktzina from "../assets/images/ktzina.svg";

function LoneCenter({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
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
      if (page + 1 === LAST_PAGE) {
        setDidfinish(true);
      }
    
      setPage(page + 1);
  }

    const handlePreviousPage = () => {
      setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
      setPage(page - 1);
  }

  return (
    <div className='LoneCenter'>
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse}/>
      {page === 0 && <LoneCenterStart nextPage={handleNextPage} isBack={isBackNavigation}/>}
      {page === 1 &&  <ShelfTree previousPage={handlePreviousPage}/>}
      {didFinish && <div className="ktzina-bubble ktzina-bubble-endSubject">
          <div className="bubble bubble-endSubject">
            <p>
              כל הכבוד סיימת את הנושא! חזרו למפת הנושאים בעזרת הכפתור
            </p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-endSubject" />
        </div>}
    </div>
  )
}

export default LoneCenter
