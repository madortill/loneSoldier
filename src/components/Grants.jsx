import React, { useState } from "react";

import NextBtn from "./NextBtn";
import RemoteSvg from "./remoteSvg";

import tvImg from "../assets/images/tv-money.png";

function Grants({ nextPage, isBack }) {
  const [page, setPage] = useState(isBack ? 2 : 0);
  const handleNextPage = () => {
    if (page !== 2) {
      setPage(page + 1);
    }
  };
  const handlePreviousPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const tvTexts = [
    {
      content: (
        <>
          <strong className="boldText">מענק רמ״פ</strong>
          מענק חודשי קבוע לחיילים בודדים ברמת פעילות א׳ ומעלה:
          <br />
          <u>לוחם:</u> 495.50 ₪
          <br />
          <u>רמ״פ א׳:</u> 247.68 ₪
          <br />
          <u>בט״ש מיוחד:</u> 369.50 ₪
        </>
      ),
    },
    {
      content: (
        <>
          <strong className="boldText">מענק בודדים</strong>
          מענק חודשי קבוע ע”ס 637.11₪
        </>
      ),
    },
    {
      className: "television-text--small",
      content: (
        <>
          <strong className="boldText">מענקים ממשרדי הממשלה</strong>
          1. מענקים לחייל בודד עולה -
          <br />
          יגיעו לבודד שעלה בגפו ועולה חדש על בסיס קריטריונים שנבחנים במשרד
          הקליטה / השיכון, יש לפנות למשרדים אלו לטובת קבלת המענקים (אינם משולמים
          באופן אוטומטי)
          <br />
          משרד הקליטה והעלייה - מענק חודשי בגובה 540₪
          <br />
          משרד הבינוי והשיכון - מענק חודשי בגובה 750₪
          <br />
          2. הנחה בחברת החשמל
          <br />
          3. פטור מתשלום ארנונה מטעם העירייה
          <br />
          4. פטור מתשלום אגרו בהוצאת וחידוש דרכונים ממשרד האוכלוסין וההגירה
        </>
      ),
    },
  ];
  const currentTvText = tvTexts[page];
  return (
    <div className="Grants">
      <h1 className="title">מענקים</h1>
      <div className="Grants-conetnt">
        <div className="remote">
            <p>עברו בין הערוצים בעזרת כפתורי השלט</p>
          <RemoteSvg
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            page={page}
          />
        </div>
        <div className="television-container">
          <img src={tvImg} alt="טלוויזיה" className="television-img" />

          <div className={`television-text ${currentTvText?.className || ""}`}>
            {currentTvText?.content}
          </div>
        </div>
      </div>
      <NextBtn color={"#011760"} onClick={nextPage} disabled={page !== 2} />
    </div>
  );
}

export default Grants;
