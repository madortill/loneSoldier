import React, { useState } from "react";
import "../css/AddedBenefits.css";

import ToHouseBtn from "./ToHouseBtn";
import AddedBenefitsStart from "./AddedBenefitsStart";
import MoveHouse from "./MoveHouse";
import ParentVisit from "./ParentVisit";
import ErrandsDay from "./ErrandsDay";
import UseErrands from "./UseErrands";
import SpecialHul from "./SpecialHul";
import FundFlight from "./FundFlight";
import SpecialFundFlight from "./SpecialFundFlight";
import AfterHul from "./AfterHul";
import LoneInjury from "./LoneInjury";
import BedQuiz from "./BedQuiz";

import ktzina from "../assets/images/ktzina.svg";

function AddedBenefits({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
  const [page, setPage] = useState(0);
  const LAST_PAGE = 10;
  const backToHouse = () => {
    if (page === LAST_PAGE) {
      onComplete();
    } else {
      onBack();
    }
  };

  const handleNextPage = () => {
    setIsBackNavigation(false); // מאפסים את מצב החזרה
    if (page === LAST_PAGE) {
      setDidfinish(true);
    } else {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
    setPage(page - 1);
  };
  return (
    <div className="AddedBenefits">
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse} />
      {page === 0 && <AddedBenefitsStart nextPage={handleNextPage} />}
      {page === 1 && (
        <MoveHouse
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 2 && (
        <ParentVisit
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 3 && (
        <ErrandsDay
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 4 && (
        <UseErrands
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 5 && (
        <SpecialHul
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 6 && (
        <FundFlight
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 7 && (
        <SpecialFundFlight
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          isBack={isBackNavigation}
        />
      )}
      {page === 8 && (
        <AfterHul nextPage={handleNextPage} previousPage={handlePreviousPage} />
      )}
      {page === 9 && (
        <LoneInjury
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 10 && (
        <BedQuiz nextPage={handleNextPage} previousPage={handlePreviousPage} />
      )}
      {didFinish && <div className="ktzina-bubble ktzina-bubble-endSubject">
          <div className="bubble bubble-endSubject">
            <p>
              כל הכבוד סיימת את הנושא! חזרו למפת הנושאים בעזרת הכפתור
            </p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-endSubject" />
        </div>}
    </div>
  );
}

export default AddedBenefits;
