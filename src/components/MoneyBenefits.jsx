import React, { useState } from "react";
import "../css/MoneyBenefits.css";

import ToHouseBtn from "./ToHouseBtn";

import ktzina from "../assets/images/ktzina.svg";
import Grants from "./Grants";
import HouseMoney from "./HouseMoney";
import GiftCards from "./GiftCards";

function MoneyBenefits({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
  const [page, setPage] = useState(0);
  const LAST_PAGE = 2;
  const backToHouse = () => {
    if (didFinish) {
      onComplete();
    } else {
      onBack();
    }
  };

  const handleNextPage = () => {
    setIsBackNavigation(false); // מאפסים את מצב החזרה
    if (page + 1 === LAST_PAGE) {
      setTimeout(() => {
        setDidfinish(true);
      }, 800);
    }
  
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
    setPage(page - 1);
  };
  return (
    <div className="MoneyBenefits">
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse} />
      {page === 0 && (
        <Grants
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 1 &&
        <HouseMoney
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
        />
      }
      {page === 2 && <GiftCards previousPage={handlePreviousPage}/>}
      {didFinish && (
        <div className="ktzina-bubble ktzina-bubble-endSubject ktzina-bubble-endSubject-MoneyBenefits">
          <div className="bubble bubble-endSubject">
            <p>כל הכבוד סיימת את הנושא! חזרו למפת הנושאים בעזרת הכפתור</p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-endSubject" />
        </div>
      )}
    </div>
  );
}

export default MoneyBenefits;
