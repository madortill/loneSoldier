import React from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import book1 from "../assets/images/AfterHul-book1.svg";
import book2 from "../assets/images/AfterHul-book2.svg";
import book3 from "../assets/images/AfterHul-book3.svg";
import book4 from "../assets/images/AfterHul-book4.svg";
import ktzina from "../assets/images/ktzina.svg";

function AfterHul({ nextPage, previousPage }) {
  const books = [book1, book2, book3, book4];
  return (
    <div className="AfterHul">
      <h1 className="title">ראיון מפקד לאחר מיוחדת חו”ל</h1>
      <div className="AfterHul-content">
        <div className="ktzina-bubble ktzina-bubble-SpecialFundFlight">
          <div className="bubble bubble-SpecialFundFlight">
            <p>
              יש לבצע ראיון מפקד לאחר חזרת החייל הבודד ממיוחדת ביקור הוריו בחו”ל
            </p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-House" />
        </div>
        <div className="AfterHul-books-grid">
          {books.map((book, index) => (
            <img
              key={index}
              src={book}
              alt={`ספר ${index + 1}`}
              className="AfterHul-book"
            />
          ))}
        </div>
      </div>

      <NextBtn color={"#502009"} onClick={nextPage} />
      <BackBtn color={"#502009"} onClick={previousPage} />
    </div>
  );
}

export default AfterHul;
