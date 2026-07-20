import React, { useState } from 'react'
import "../css/AddedBenefits.css";

import ToHouseBtn from './ToHouseBtn';
import AddedBenefitsStart from './AddedBenefitsStart';

function AddedBenefits({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
    const [page, setPage] = useState(0);
    const LAST_PAGE = 6;
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
    <div className='AddedBenefits'>
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse}/>
      {page === 0 && <AddedBenefitsStart nextPage={handleNextPage}/>}
    </div>
  )
}

export default AddedBenefits
