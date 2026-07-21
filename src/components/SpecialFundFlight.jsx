import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import ktzina from "../assets/images/ktzina.svg";

function SpecialFundFlight({ nextPage, previousPage, isBack }) {
  const [page, setPage] = useState(isBack ? 1 : 0);
  const handleNextPage = () => {
    if (page === 1) {
      nextPage();
    } else {
      setPage(page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page === 0) {
      previousPage();
    } else {
      setPage(page - 1);
    }
  };
  return (
    <div>
      <h1 className="title">מימון טיסה חריג</h1>
      {page == 0 && (
        <div className="SpecialFundFlight-text">
          <p className="boldText">ניתן להגיש מימון טיסה חריג במקרים הבאים:</p>
          <p>מימון טיסה לבודד חסר עורף משפחתי</p>
          <p>הקדמת זכאות</p>
          <p>טיסה מעל / מתחת ל-30 ימים</p>
          <p>טיסה שלא לארץ מולדתו של החייל</p>
        </div>
      )}
     {page == 1 && <div className="ktzina-bubble ktzina-bubble-SpecialFundFlight">
        <div className="bubble bubble-SpecialFundFlight">
          <p>
            יש להגיש בקשה למימון טיסה לפחות 30 יום לפני (בתקופת החגים 45 יום
            לפני)
          </p>
        </div>
        <img src={ktzina} alt="קצינה" className="ktzina-House" />
      </div>}
      <p
        className={`SpecialFundFlight-note ${
          page === 1 ? "SpecialFundFlight-note--page1" : ""
        }`}
      >
        {page === 0
          ? "כל הגשת בקשה למימון טיסה חריג תחויב בצירוף המלצת סא״ל + מכתב הסבר"
          : "גם במקרה זה חייב מכתב סא”ל המסביר את סיבת ההגשה המאוחרת + מכתב אישי מפורט המסביר את סיבת החריגה"}
      </p>
      <NextBtn color={"#502009"} onClick={handleNextPage} />
      <BackBtn color={"#502009"} onClick={handlePreviousPage} />
    </div>
  );
}

export default SpecialFundFlight;
