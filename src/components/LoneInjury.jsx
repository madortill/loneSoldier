import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import miaImg from "../assets/images/mia-injury.png";

function LoneInjury({ nextPage, previousPage }) {
  const [flippedInjuryCards, setFlippedInjuryCards] = useState([]);

  
  const injuryCards = [
      {
          id: 1,
          frontText: "הוגדר במצב קשה",
          backText: <>אחד מהוריו יוטס ארצה ע”י אגף השיקום בסמכות מערך הנפגעים</>,
        },
        {
            id: 2,
            frontText: "הוגדר בדרגה נמוכה יותר",
            backText: (
                <>
          יש לבצע שיח עם מפקדת מוקד בודדים.
          <br />
          הטסת הורה תבוצע ע”י מדור בודדים במופת במימון “האגודה למען החייל”
        </>
      ),
    },
];

const canContinue = flippedInjuryCards.length === injuryCards.length;

  const handleCardClick = (cardId) => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (!isTouchDevice) return;

    setFlippedInjuryCards((previousCards) =>
      previousCards.includes(cardId)
        ? previousCards.filter((id) => id !== cardId)
        : [...previousCards, cardId]
    );
  };

  const markCardAsOpened = (cardId) => {
    setFlippedInjuryCards((previousCards) =>
      previousCards.includes(cardId)
        ? previousCards
        : [...previousCards, cardId]
    );
  };
  return (
    <div className="LoneInjury">
      <h1 className="title">ראיון מפקד לאחר מיוחדת חו”ל</h1>
      <div className="LoneInjury-content">
        <div className="LoneInjury-text">
          <p className="boldText">
            חייל בודד אשר נפצע, אחד מהוריו יקבל מימון טיסה ארצה בסמכות המדרגית
            הבאים:
          </p>
          <div className="LoneInjury-cards">
            {injuryCards.map((card) => (
              <button
              type="button"
              key={card.id}
              className={`LoneInjury-card ${
                flippedInjuryCards.includes(card.id)
                  ? "LoneInjury-card--flipped"
                  : ""
              }`}
              onMouseEnter={() => markCardAsOpened(card.id)}
              onClick={() => handleCardClick(card.id)}
            >
              <span className="LoneInjury-card-inner">
                <span className="LoneInjury-card-face LoneInjury-card-front">
                  {card.frontText}
                </span>
            
                <span className="LoneInjury-card-face LoneInjury-card-back">
                  {card.backText}
                </span>
              </span>
            </button>
            ))}
          </div>
        </div>
        <img src={miaImg} alt="miaInjury" className="miaInjury" />
      </div>
      <p className="LoneInjury-note">
        מימון הטיסה להורה אינו חליף לזכאות החייל למימון טיסה לביקור משפחתו בחו”ל
      </p>
      <NextBtn color={"#502009"} onClick={nextPage} disabled={!canContinue} />
      <BackBtn color={"#502009"} onClick={previousPage} />
    </div>
  );
}

export default LoneInjury;
