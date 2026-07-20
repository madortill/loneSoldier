import React from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";

import Shelves from "../assets/images/BenefitsShelves.svg";

function AddedBenefitsStart({ nextPage }) {
  return (
    <div className="AddedBenefitsStart">
      <h1 className="title">הטבות נלוות</h1>
      <div className="AddedBenefitsStart-content">
        <img src={Shelves} alt="BenefitsShelves" className="BenefitsShelves" />
        <div className="AddedBenefitsStart-text">
          <p>במידה וקרוב מדרגה ראשונה נפטר בחו”ל, דרך מוקד בודדים (לכן חשוב כבר בקליטה לוודא צילום דרכון של החייל)</p>
          <p>יציאה מוקדמת מהיחידה בימי שישי (שתאפשר לו להגיע לביתו עד השעה 10:00) ובערבי חג (עד יום לפני ב17:30)</p>
          <p className="AddedBenefitsStart-text-last">חייל בודד זכאי להיתר עבודה ללא הוכחת מצוקה כלכלית</p>
        </div>
      </div>
      <NextBtn color={"#502009"} onClick={nextPage} />
    </div>
  );
}

export default AddedBenefitsStart;
