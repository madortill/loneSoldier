import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import picture from "../assets/images/picture-errands.png";
import lamp from "../assets/images/lamp.png";
import rightPlant from "../assets/images/rightPlant.png";
import leftPlant from "../assets/images/leftPlant.png";
import book from "../assets/images/book-errands.png";

import emptyCart from "../assets/images/emptyCart.png";
import fullCart from "../assets/images/fullCart.png";

function ErrandsDay({ nextPage, previousPage, isBack }) {
    const items = [
        {
          id: "picture",
          image: picture,
          className: "ErrandsDay-item--picture",
          text: (
            <>
              הזכאות לא תוזן במערכת, אלא תתבסס על
              <strong> דיווח בדו״ח 1 בלבד.</strong>
              <br />
              על מש״ק הת״ש לוודא מימוש זכאות אל מול החייל ומפקדיו.
            </>
          ),
        },
        {
          id: "lamp",
          image: lamp,
          className: "ErrandsDay-item--lamp",
          text: (
            <>
              <strong className="boldText">בהכשרות ראשוניות–</strong>
              <br />
              אחת לחודש בשנה הקלנדרית.
            </>
          ),
        },
        {
          id: "rightPlant",
          image: rightPlant,
          className: "ErrandsDay-item--right-plant",
          text: (
            <>
              <strong className="boldText">שירות סדיר–</strong>
              <br />
              זכאות ליום סידורים אחת לחודשיים בשנה הקלנדרית.
            </>
          ),
        },
        {
          id: "book",
          image: book,
          className: "ErrandsDay-item--book",
          text: (
            <>
              <strong className="boldText">מומלץ–</strong>
              <br />
              להוסיף טבלת מעקב בדו״ח או ידני בנוגע לימי הסידורים.
            </>
          ),
        },
        {
          id: "leftPlant",
          image: leftPlant,
          className: "ErrandsDay-item--left-plant",
          text: (
            <>
              חייל בודד אשר משרת באופן של
              <br />
              שבוע־שבוע לא יהיה זכאי לימי סידורים.
            </>
          ),
        },
      ];
      const [openedItems, setOpenedItems] = useState([]);

      const allOpened = (openedItems.length === items.length) || isBack;
  return (
    <div className="ErrandsDay">
      <h1 className="title">מיוחדת ביקור ההורים בארץ</h1>
      <div className="ErrandsDay-items">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`ErrandsDay-item ${item.className} ${
              openedItems.includes(item.id)
                ? "ErrandsDay-item--opened"
                : ""
            }`}
            onClick={() =>
              setOpenedItems((previousItems) =>
                previousItems.includes(item.id)
                  ? previousItems
                  : [...previousItems, item.id]
              )
            }
          >
            <img
              src={item.image}
              alt=""
              className="ErrandsDay-item-image"
            />

            <span className="ErrandsDay-item-text">
              {item.text}
            </span>
          </button>
        ))}

        <img
          src={allOpened ? fullCart : emptyCart}
          alt="עגלת קניות"
          className="ErrandsDay-cart"
        />
      </div>
      <NextBtn color={"#502009"} onClick={nextPage} disabled={!allOpened} />
      <BackBtn color={"#502009"} onClick={previousPage} />
    </div>
  )
}

export default ErrandsDay
