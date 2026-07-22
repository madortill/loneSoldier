import React from "react";
import "../css/MoneyBenefits.css";

import auto from "../assets/images/giftCard-auto.svg";
import holiday from "../assets/images/gifyCard-holiday.svg";

import BackBtn from "./BackBtn";

function GiftCards({ previousPage }) {
  return (
    <div className="GiftCards">
      <h1 className="title">תווים</h1>
      <div className="GiftCards-content">
        <div className="GiftCard giftCard-auto">
            <img src={auto} alt="giftCard-auto" className="giftCard-img" />
            <p>הטבה בגובה 150₪ מדי חודש לה זכאי החייל אוטומטית.</p>
            <p>מימוש ההטבה אפשרי למשך 60 ימים עבור כל חודש זכאות מיום ההזנה (מוזן באופן אוטומטי)</p>
        </div>
        <div className="GiftCard giftCard-holiday">
            <img src={holiday} alt="giftCard-holiday" className="giftCard-img" />
            <p>תווי החג מחולקים בראש השנה ובפסח, בהתאם לסכום משתנה. </p>
            <p>לפני החג תישלח לקצינת הת״ש טבלת זכאים.
            מש״קית הת״ש תיידע את החיילים על זכאותם, תסביר להם את נוהל קבלת התווים ותעקוב באמצעות טבלת שליטה אחר מי שטרם מימש את הזכאות.</p>
        </div>
      </div>
      <BackBtn color={"#011760"} onClick={previousPage} />
    </div>
  );
}

export default GiftCards;
