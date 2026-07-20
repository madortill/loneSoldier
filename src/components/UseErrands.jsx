import React, { useState } from "react";
import "../css/AddedBenefits.css";

import FlipCard from "./FlipCard";
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

function UseErrands({
  nextPage,
  previousPage,
  isBack,
}) {
  const cards = [
    {
      id: "waiverValidity",
      title: "תוקף חתימת הוויתור",
      color: "#F3F3C8",
      textColor: "#55230E",
      positionClass: "UseErrands-card--top-left",
      content: (
        <>
          חתימת ויתור תקפה רק לזכאות הנוכחית ליום
          סידורים, ולא למספר זכאויות ברצף.
        </>
      ),
      popupText: (
        <>
          חייל שוויתר על יום סידורים בינואר-פברואר, יצטרך לחתום שוב אם ירצה לוותר גם במרץ-אפריל.
        </>
      ),
    },
    {
        id: "waiverDate",
        title: "מתי חותמים ויתור?",
        color: "#5C2106",
        textColor: "#FFF7D8",
        positionClass: "UseErrands-card--top-right",
        content: (
            <>
        חתימת ויתור תתבצע במהלך שבעת הימים
        האחרונים של תקופת הזכאות הדו־חודשית.
      </>
    ),
    popupText: (
        <>
        חייל שזכאי ליום סידורים בינואר–פברואר,
        ורוצה לוותר על הזכאות, יחתום ויתור בין
        22.02–28.02.
      </>
    ),
  },
    {
      id: "mashakitResponsibility",
      title: "אחריות מש״קית הת״ש",
      color: "#5C2106",
      textColor: "#FFF7D8",
      positionClass: "UseErrands-card--bottom-left",
      content: (
        <>
          אם החייל אינו מעוניין לממש את הזכאות,
          עליו לחתום על טופס ויתור.
          <br />
          מש"קית הת"ש תידרש: לארכב את כתב הוויתור בארכיון הכללי של החייל תחת "הצהרות", ולוודא שמתבצע מעקב תקין אחר מימוש הזכאות.
        </>
      ),
    },
    {
      id: "specificNeed",
      title: "צורך ספציפי",
      color: "#F3F3C8",
      textColor: "#55230E",
      positionClass: "UseErrands-card--bottom-center",
      content: (
        <>
          במקרה שבו החייל ממתין לחודש העוקב, אך קיים צורך ספציפי ודחוף לממש יום סידורים לפני תחילת הזכאות — ניתן לאפשר זאת בהתחשבות מפקד, והדבר יוזן בדו"ח 1.
        </>
      ),
    },
    {
      id: "eligibilityStart",
      title: "מתי מתחילה הזכאות?",
      color: "#5C2106",
      textColor: "#FFF7D8",
      positionClass: "UseErrands-card--bottom-right",
      content: (
        <>
          אם הזכאות אושרה בין 1–15 בחודש — יום הסידורים ימומש כבר באותו חודש.
          <br />
          אם הזכאות אושרה בין 16–30/31 בחודש — החייל ימתין לחודש העוקב.
        </>
      ),
      popupText: (
        <>
          זכאות שאושרה ב־13.02 תתחיל בחודש פברואר.
          <br /><br />
          זכאות שאושרה ב־18.02 תתחיל בחודש מרץ.
        </>
      ),
    },
  ];

  const [openedCards, setOpenedCards] = useState([]);

  const allOpened =
    openedCards.length === cards.length || isBack;

  return (
    <div className="UseErrands">
      <h1 className="title">
        מימוש יום סידורים וחתימת ויתור
      </h1>

      <p className="UseErrands-instruction">
        - לחצו על הכרטיסיות -
      </p>

      <div className="UseErrands-cards">
        {cards.map((card) => (
          <FlipCard
            key={card.id}
            title={card.title}
            content={card.content}
            color={card.color}
            textColor={card.textColor}
            popupText={card.popupText}
            className={card.positionClass}
            onFirstOpen={() =>
              setOpenedCards((previousCards) =>
                previousCards.includes(card.id)
                  ? previousCards
                  : [...previousCards, card.id]
              )
            }
          />
        ))}
      </div>

      <NextBtn
        color="#502009"
        onClick={nextPage}
        disabled={!allOpened}
      />

      <BackBtn
        color="#502009"
        onClick={previousPage}
      />
    </div>
  );
}

export default UseErrands;