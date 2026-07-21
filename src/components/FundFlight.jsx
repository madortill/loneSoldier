import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

function FundFlight({ nextPage, previousPage, isBack }) {
  const [canContinue, setCanContinue] = useState(isBack);
  const [isPopOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="FundFlight">
      <h1 className="title">מימון כרטיס טיסה</h1>

      <div className="flight-ticket-container">
        <div className="flight-ticket">
          <p>
            חיילים בודדים בני יורדים ומובהקים, למעט שליחים, יהיו זכאים למימון
            טיסה אחת בשירות, על מנת לבקר קרוב משפחה מדרגה ראשונה.
          </p>
        </div>

        <div className="flight-ticket">
          <p>הבקשה תוגש למוקד בודדים דרך קצינת הת״ש.</p>

          <p>
            עבור בודדים חע״מ ניתן להגיש בקשה באופן חריג בצירוף מכתב אישי
            והתייחסות סא״ל.
          </p>
        </div>

        <div className="flight-ticket">
          <p>
            הטבה זו כוללת מימון כרטיסי טיסה הלוך וחזור אל ארץ היעד וביטוח רפואי.
          </p>

          <p>גובה ההטבה – 100% מימון, פעם אחת בשירות, על פי שני קריטריונים.</p>
          <button className="info-btn info-btn-FundFlight" onClick={() => {
             setIsPopupOpen(true);
          }}>i</button>
        </div>
      </div>

      {isPopOpen && <div className="blur-background"></div>}
      {isPopOpen && <div className="phone-flight-ticket">
      <button
            type="button"
            className="phone-flight-ticket-close"
            onClick={() => {
                setCanContinue(true);
              setIsPopupOpen(false);
            }}
            aria-label="סגירת הדוגמה"
          >
            ×
          </button>
          <p className="phone-flight-ticket-big-space">
            1. לאחר חצי שנה בה מוכר החייל כבודד באופן קבוע
          </p>
          <p>2. <span className="underline">לוחמים-</span> זכאים לטיסה פעמיים בשירות</p>
          <p><span className="underline">תומכי לחימה / עורפי- </span>לאחר 8 חודשים בשירות</p>
      </div>}
      <NextBtn color="#502009" onClick={nextPage} disabled={!canContinue} />

      <BackBtn color="#502009" onClick={previousPage} />
    </div>
  );
}

export default FundFlight;
