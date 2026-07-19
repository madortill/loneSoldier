import React from "react";
import "../css/LoneCenter.css";

import shelfImg from "../assets/images/shelf.svg";
import mirrorImg from "../assets/images/mirror.png";

import BackBtn from "./BackBtn";

const shelfTreeData = [
  {
    id: 1,
    title: 'רת"ח הלנות',
    name: "סגן יובל תמאם",
    phone: "050-2441792",
    className: "shelf-tree-item--lodging-head",
  },
  {
    id: 2,
    title: 'רת"ח רווחת הבודד',
    name: "סגן רוני מיכאלי",
    phone: "054-5657688",
    className: "shelf-tree-item--welfare-head",
  },
  {
    id: 3,
    title: 'רת"ח הבודד המשוחרר',
    name: "סמ”ר עידן קבדה",
    phone: "052-5849013",
    className: "shelf-tree-item--released-head",
  },
  {
    id: 4,
    title: 'רת"ח הכרת הבודד והמלש"ב',
    name: "סגן עפרי לוי",
    phone: "050-4275600",
    className: "shelf-tree-item--recognition-head",
  },
  {
    id: 5,
    title: "קצינת הלנות",
    name: "סג”ם אלה הודס",
    phone: "058-4991428",
    className: "shelf-tree-item--lodging-officer",
  },
  {
    id: 6,
    title: "מפקדת מוקד בודדים",
    name: "סג”ם הדר הראל",
    phone: "050-8543543",
    className: "shelf-tree-item--center-commander",
  },
  {
    id: 7,
    title: 'מפקדת תא מלש"ב',
    name: "סג”ם אורין גריינר",
    phone: "053-2803737",
    className: "shelf-tree-item--candidate-commander-one",
  },
  {
    id: 8,
    title: "קצינת בודדים",
    name: "סגן יובל ספיר",
    phone: "050-5373007",
    className: "shelf-tree-item--lone-officer-one",
  },
  {
    id: 9,
    title: 'מפקדת תא מלש"ב',
    name: "סג”ם מליסה יסמין גולווסר",
    phone: "050-9559494",
    className: "shelf-tree-item--candidate-commander-two",
  },
  {
    id: 10,
    title: "קצינת בודדים",
    name: "סג”ם ליהיא אזולאי",
    phone: "050-9559494",
    className: "shelf-tree-item--lone-officer-two",
  },
  {
    id: 11,
    title: "קצינת בודדים",
    name: "סגן נעה סער",
    phone: "053-8720037",
    className: "shelf-tree-item--lone-officer-three",
  },
];

function ShelfTreeItem({ item }) {
  return (
    <div className={`shelf-tree-item ${item.className}`}>
      <div className="shelf-tree-item__details">
        <h3 className="shelf-tree-item__title">
          {item.title}

          {item.secondTitle && (
            <span className="shelf-tree-item__second-title">
              {item.secondTitle}
            </span>
          )}
        </h3>

        <p className="shelf-tree-item__name">{item.name}</p>
      </div>

      <div className="shelf-tree-item__shelf-wrapper">
        <img
          className="shelf-tree-item__shelf"
          src={shelfImg}
          alt=""
          draggable="false"
        />

        <span className="shelf-tree-item__phone" dir="ltr">
          {item.phone}
        </span>
      </div>
    </div>
  );
}

function ShelfTree({ previousPage }) {
  return (
    <div className="ShelfTree">
      <div className="shelf-tree-mirror">
        <p className="boldText">רמ”ד בודדים</p>
        <p>רס”ן ליאור שלג</p>
      </div>
      <section className="shelf-tree-container">
        {shelfTreeData.map((item) => (
          <ShelfTreeItem key={item.id} item={item} />
        ))}
      </section>
      <BackBtn color={"#FF6585"} onClick={previousPage} />
    </div>
  );
}

export default ShelfTree;
