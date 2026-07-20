import React, { useState } from "react";
import "../css/AddedBenefits.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import bed from "../assets/images/bed.png";
import lamp from "../assets/images/lamp.png";

function ParentVisit({ nextPage, previousPage, isBack }) {
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

  const tabs = [
    {
      id: 1,
      number: "1",
      color: "#F5F3C9",
      textColor: "#54240E",
      content: (
        <>זכאות החייל לימי חופשה במקרים אלו אינה ניתנת לצבירה משנה לשנה</>
      ),
    },
    {
      id: 2,
      number: "2",
      color: "#713000",
      textColor: "#FFF8DD",
      content: (
        <>
          במידה ומפקד החייל רואה לנכון לאשר לחייל מספר ימים גדול יותר,
          <br />
          יוכל לעשות זאת על חשבון
          <strong> מיוחדת אישית</strong>
        </>
      ),
    },
    {
      id: 3,
      number: "3",
      color: "#F7DE64",
      textColor: "#54240E",
      content: (
        <>חייל בודד חע”מ אינו זכאי למיוחדת זו אך יכול להגיש בקשה זו באופן חריג עבור רוב מדרגה ראשונה</>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [visitedTabs, setVisitedTabs] = useState([1]);
  const [finishTabs, setFinishTabs] = useState(false);

  const currentTab = tabs.find((tab) => tab.id === activeTab);
  const canContinue = (finishTabs || page ==! 1 || isBack)

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    setVisitedTabs((previousTabs) => {
      if (previousTabs.includes(tabId)) {
        return previousTabs;
      }

      const updatedTabs = [...previousTabs, tabId];

      if (updatedTabs.length === tabs.length) {
        setFinishTabs(true);
      }

      return updatedTabs;
    });
  };
  return (
    <div className="ParentVisit">
      <h1 className="title">מיוחדת ביקור ההורים בארץ</h1>
      {page === 0 && (
        <div className="ParentVisit-page1">
          <div className="ParentVisit-bubble-text">
            חופשה בת 8 ימים לפחות בשנת שירות לטובת ביקור הוריו בארץ (בהכשרה
            ראשונית / בקורס - 4 ימים) ללא ניכוי ימי שנתית
          </div>
          <img src={bed} alt="ParentVisit-bed" className="ParentVisit-bed" />
          <div className="ParentVisit-bubble-text">
            לא נתון לשיקול דעת מפקד האם לשחרר את החייל, אולם הימים בהם יצא החייל
            כן נתונים לשיקול דעת המפקד.
          </div>
        </div>
      )}

      {page === 1 && (
        <div className="ParentVisitTabs">
          <div className="ParentVisitTabs-tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.id}
                className={`ParentVisitTabs-tab ${
                  activeTab === tab.id ? "ParentVisitTabs-tab--active" : ""
                }`}
                style={{
                  backgroundColor: tab.color,
                  color: tab.textColor,
                }}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="ParentVisitTabs-tab-number">{tab.number}</span>

                <img src={lamp} alt="" className="ParentVisitTabs-tab-lamp" />
              </button>
            ))}
          </div>

          <div
            className="ParentVisitTabs-content"
            style={{
              backgroundColor: currentTab.color,
              color: currentTab.textColor,
            }}
          >
            <p>{currentTab.content}</p>
          </div>
        </div>
      )}
      <NextBtn color={"#502009"} onClick={handleNextPage} disabled={!canContinue} />
      <BackBtn color={"#502009"} onClick={handlePreviousPage} />
    </div>
  );
}

export default ParentVisit;
