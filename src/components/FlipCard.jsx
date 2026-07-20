import React, { useState } from "react";
import "../css/FlipCard.css";

function FlipCard({
  title,
  content,
  color,
  textColor,
  popupText,
  onFirstOpen,
  className = "",
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFlip = () => {
    if (isPopupOpen) return;

    setIsFlipped(!isFlipped);

    if (!wasOpened) {
      setWasOpened(true);
      onFirstOpen();
    }
  };

  return (
    <div
      className={`FlipCard ${className}`}
      style={{
        "--flip-card-color": color,
        "--flip-card-text-color": textColor,
      }}
    >
      <div
        className={`FlipCard-inner ${
          isFlipped ? "FlipCard-inner--flipped" : ""
        }`}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleFlip();
          }
        }}
      >
        <div className="FlipCard-face FlipCard-front">
          <h2>{title}</h2>
        </div>

        <div className="FlipCard-face FlipCard-back">
          <div className="FlipCard-content">{content}</div>

          {popupText && (
            <button
              type="button"
              className="FlipCard-popup-button"
              onClick={(event) => {
                event.stopPropagation();
                setIsPopupOpen(true);
              }}
            >
              דוגמה
            </button>
          )}
        </div>
      </div>

      {isPopupOpen && (
        <div className="FlipCard-popup">
          <button
            type="button"
            className="FlipCard-popup-close"
            onClick={(event) => {
              event.stopPropagation();
              setIsPopupOpen(false);
            }}
            aria-label="סגירת הדוגמה"
          >
            ×
          </button>

          <div className="FlipCard-popup-text">{popupText}</div>
        </div>
      )}
    </div>
  );
}

export default FlipCard;
