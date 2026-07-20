import React, { useState } from "react";
import "../css/LoneCenter.css";

import bathroom from "../assets/images/bathroom-img.svg";
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

function LoneCenterStart({ nextPage, isBack }) {
  const [page, setPage] = useState(isBack ? 1 : 0);
  const changePage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      nextPage(1);
    }
  };
  return (
    <div className="LoneCenterStart">
      <h1 className="title">מרכז בודדים</h1>
      {page === 0 && (
        <ul className="LoneCenterStart-text">
          <li>נמצא תחת מדור בודדים</li>
          <li>בוחנים בקשות (הכרה, שינוי או ביטול)</li>
          <li>מכירים את החייל הבודד</li>
          <li>המרכז מכיל 3 תאים (תא מלש”ב, סדיר ומשוחרר)</li>
        </ul>
      )}
      {page === 0 && (
        <div className="bathtub-grid">
          <div className="bathtub-item bathtub-item--top">
            <span>מוקד בודדים</span>
          </div>

          <div className="bathtub-item bathtub-item--left">
            <span>תא בודדים</span>
          </div>

          <div className="bathtub-item bathtub-item--right">
            <span>תחום הלנות</span>
          </div>
        </div>
      )}
      {page === 0 && (
        <img
          src={bathroom}
          alt="bathroom"
          className="LoneCenterStart-bathroom-img"
        />
      )}
      {page === 1 && <div className="LoneCenterStart-card-container">
        <div className="LoneCenterStart-card">
          <div className="bathtub-item bathtub-item-card">
            <span>תחום הלנות</span>
          </div>
          <p className="underline">מתעסק בבקשות הלנה:</p>
          <p>אימוץ בקיבוץ, דירות יחד למען החייל והלנה מטעמי מרחק</p>
        </div>
        <div className="LoneCenterStart-card">
          <div className="bathtub-item bathtub-item-card">
            <span>תא סדיר</span>
          </div>
          <p>מוקד המתעסק בטיסות חירום, מימוני טיסה, הלנה זמנית מיידית (פועל 24 שעות ביממה)</p>
        </div>
        <div className="LoneCenterStart-card">
          <div className="bathtub-item bathtub-item-card">
            <span>תא משוחררים</span>
          </div>
          <p>מבצע בקרה על מתן זכויות לחיילים לקראת שחרור, חיבור לעמותות, סדנאות משתחררים, הכוונה לקראת שחרור בכל תחומי החיים ובקרה על התחום אל מול סגלי הת”ש</p>
        </div>
      </div>}
      <NextBtn color={"#FF6585"} onClick={changePage} />
      {page === 1 && <BackBtn color={"#FF6585"} onClick={()=> setPage(0)} />}
    </div>
  );
}

export default LoneCenterStart;
