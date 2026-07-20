import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import ktzina from "../assets/images/ktzina.svg";
import mia from "../assets/images/mia.png";

function SpecialHul({ nextPage, previousPage, isBack }) {
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
    <div className="SpecialHul">
      {page === 0 && <h1 className="title">מיוחדת חו”ל</h1>}
      {page === 1 && <h1 className="title title-SpecialHul"> סל מיוחדת חו”ל - 30 ימים</h1>}
      {page === 0 && <div className="SpecialHul-page1">
        <div className="ktzina-bubble ktzina-bubble-SpecialHul">
          <div className="bubble bubble-House">
            <p>אז מה מגיע למיה בטיסתה לביקור הוריה?</p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-House" />
        </div>
        <div className="mia-story">
          <div className="mia-text">
            מיה היא חיילת בודדה שהוריה גרים באיטליה ולכבוד החגים היא החליטה לטוס
            לבקר אותם. <br /> לפני שסגרה טיסה, מיה פנתה למש״קית הת״ש כדי לוודא
            אילו אישורים נדרשים לה וכיצד עליה להגיש את הבקשה בצורה מסודרת.
          </div>
          <img src={mia} alt="mia" className="mia" />
        </div>
      </div>}
     {page === 1 && <div className="basket-text">
        <p>חופשה בת 30 ימים ע"ח המערכת לטובת ביקור קרוב מדרגה ראשונה בחו"ל בכל שנת שירות (נוסף על חו"מ בארץ).</p>
        <p>החייל יהיה רשאי לפצל את חופשתו באותה שנת שירות בלבד.</p>
        <p>המיוחדת חריגה כאשר הקרוב אינו מדרגה ראשונה.</p>
        <p>חייל בודד מח"ל- יש להציג אישור אשרה (במידה ולא יוצג, לא יוכל לחזור לארץ).</p>
      </div>}
      <NextBtn color={"#502009"} onClick={handleNextPage} />
      <BackBtn color={"#502009"} onClick={handlePreviousPage} />
    </div>
  );
}

export default SpecialHul;
