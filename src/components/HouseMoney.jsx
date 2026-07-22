import React from "react";
import "../css/MoneyBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

function HouseMoney({ nextPage, previousPage }) {
  return (
    <div className="HouseMoney">
      <h1 className="title title-HouseMoney">דמי כלכלה</h1>
      <div className="HouseMoney-pillow-container">
        <div className="HouseMoney-pillow-blue">
          <p>
            חייל בודד השוהה מעל 3 <strong>ימי מחלה רצופים</strong> או יוצא{" "}
            <strong>למיוחדת כלכלית</strong>, זכאי לדמי כלכלה החל מהיום הראשון,
            באופן אוטומטי.
          </p>
        </div>
        <div className="HouseMoney-pillow-white">
          <p>סכום דמי הכלכלה במיוחדת כלכלית: <strong>60.75 ש״ח ליום.</strong></p>
        </div>
        <div className="HouseMoney-pillow-blue">
          <p>
            חייל שמתגורר <strong>בבית החייל</strong> או{" "}
            <strong>בדירת אל״ח </strong>אינו זכאי לדמי כלכלה, משום שהוא מקבל
            ארוחות במסגרת המגורים.
          </p>
        </div>
      </div>
      <NextBtn color={"#011760"} onClick={nextPage} />
      <BackBtn color={"#011760"} onClick={previousPage} />
    </div>
  );
}

export default HouseMoney;
