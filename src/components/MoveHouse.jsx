import React, { useState } from 'react'
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import img from "../assets/images/moveHouse-img.png";
import clock from "../assets/images/clock-icon.svg";
import check from "../assets/images/v-icon.svg";
import paper from "../assets/images/paper-icon.svg";

function MoveHouse({ nextPage, previousPage }) {
  const cards = [
      {
          img: clock,
          text: (
              <>
          ניצול החופשה יתאפשר בטווח של
          <strong> 60 ימים טרם סיום החוזה</strong>
          <br />
          ועד
          <strong> 30 ימים לאחר הכניסה לפתרון הדיור החדש.</strong>
        </>
      ),
    },
    {
      img: check,
      text: <>הבקשה תיבחן על ידי הגורם הרלוונטי בהתאם לנהלים.</>,
    },
    {
      img: paper,
      text: (
        <>
          נדרש להציג אישור על כניסה חריגה לפתרון הדיור.
          <br />
          <strong>האישור חייב לכלול את תאריך הכניסה ואת פרטי החייל.</strong>
        </>
      ),
    },
  ];
  const [openCards, setOpenCards] = useState([]);
  const allOpened = openCards.length === cards.length;
  return (
    <div className="MoveHouse">
      <h1 className="title">חו”מ מעבר דירה</h1>
      <p className='MoveHouse-text'>
        חייל בודד שעובר דירה יהיה זכאי בכל מעבר דירה <span className='boldText'>למיוחדת בת יומיים</span> (ללא
        ניכוי ימי שנתית וללא התחשבות בניצול בשנת שירות)
      </p>
      <p className='MoveHouse-text'>ימים אלו יכולים לשמש גם לחיפוש דירה או ארגונה והמעבר בפועל</p>
      <img src={img} alt="moveHouse-img" className="moveHouse-img" />
      <div className="MoveHouse-cards-container">
        <p className="MoveHouse-note">- לחצו על הכרטיסיות -</p>

        <div className="MoveHouse-cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`MoveHouse-card ${
                openCards.includes(index) ? "MoveHouse-card-active" : ""
              }`}
              onClick={() =>
                setOpenCards((previousCards) =>
                  previousCards.includes(index)
                    ? previousCards
                    : [...previousCards, index]
                )
              }
            >
              <img src={card.img} alt="" className="MoveHouse-card-img" />

              <div className="MoveHouse-card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
      <NextBtn color={"#502009"} onClick={nextPage} disabled={!allOpened} />
      <BackBtn color={"#502009"} onClick={previousPage} />
    </div>
  );
}

export default MoveHouse;
