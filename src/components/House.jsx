import React, { useState } from "react";
import "../css/House.css";

import MainHouseSvg from "./MainHouseSvg";

import LoneCenter from "./LoneCenter";
import AddedBenefits from "./AddedBenefits";
import HouseBenefits from "./HouseBenefits";
import MoneyBenefits from "./MoneyBenefits";
// import Exceptions from "./Exceptions";
// import Applications from "./Applications";

import ktzina from "../assets/images/ktzina.svg";

const rooms = [
  {
    id: "loneCenter",
    component: LoneCenter,
  },

  // תפתחי את אלה אחרי שתייבאי את הקומפוננטות
  {
    id: "addedBenefits",
    component: AddedBenefits,
  },
  {
    id: "houseBenefits",
    component: HouseBenefits,
  },
  {
    id: "moneyBenefits",
    component: MoneyBenefits,
  },
  // {
  //   id: "exceptions",
  //   component: Exceptions,
  // },
  // {
  //   id: "applications",
  //   component: Applications,
  // },
];

function House({ setSection, setActiveRoomTheme  }) {
  // null = מוצגת מפת הבית
  const [selectedRoom, setSelectedRoom] = useState(null);

  // האינדקס הגבוה ביותר שנפתח
  const [highestUnlockedRoom, setHighestUnlockedRoom] = useState(3);

  // מערך של שמות החדרים שהושלמו
  const [completedRooms, setCompletedRooms] = useState([]);

  const getRoomIndex = (roomId) => {
    return rooms.findIndex((room) => room.id === roomId);
  };

  const onChooseRoom = (roomId) => {
    const roomIndex = getRoomIndex(roomId);

    // שם חדר לא קיים
    if (roomIndex === -1) return;

    // החדר עדיין לא נפתח
    if (roomIndex > highestUnlockedRoom) return;

    setSelectedRoom(roomId);
    setActiveRoomTheme?.(roomId);
  };

  const completeRoom = (roomId) => {
    const roomIndex = getRoomIndex(roomId);
    if (roomIndex === -1) return;

    setCompletedRooms((previousRooms) => {
      if (previousRooms.includes(roomId)) {
        return previousRooms;
      }

      return [...previousRooms, roomId];
    });

    // פותחים את החדר הבא רק אם סיימנו
    // את החדר הכי מתקדם שפתוח כרגע
    if (
      roomIndex === highestUnlockedRoom &&
      roomIndex < rooms.length - 1
    ) {
      setHighestUnlockedRoom((previousHighest) => previousHighest + 1);
    }

    // חוזרים למפת הבית
    setSelectedRoom(null);
    setActiveRoomTheme?.("main");
  };

  const goBackToHouse = () => {
    setSelectedRoom(null);
    setActiveRoomTheme?.("main");
  };

  const allRoomsCompleted =
    rooms.length > 0 && completedRooms.length === rooms.length;

  const goToNextSection = () => {
    if (!allRoomsCompleted) return;

    setSection?.((previousSection) => previousSection + 1);
  };

  const renderSelectedRoom = () => {
    const selectedRoomData = rooms.find(
      (room) => room.id === selectedRoom
    );

    if (!selectedRoomData) return null;

    const RoomComponent = selectedRoomData.component;

    return (
      <RoomComponent
        onComplete={() => completeRoom(selectedRoomData.id)}
        onBack={goBackToHouse}
      />
    );
  };

  if (selectedRoom !== null) {
    return renderSelectedRoom();
  }

  return (
    <div className="House">
      <h1 className="title">נושאי הלומדה</h1>

      <MainHouseSvg
        highestUnlockedRoom={highestUnlockedRoom}
        completedRooms={completedRooms}
        onChooseRoom={onChooseRoom}
      />

      <div className="ktzina-bubble ktzina-bubble-House">
        <div className="bubble bubble-House">
          <p>
            לחצו על הנושא המודגש כדי ללמוד עליו!
          </p>
        </div>

        <img
          src={ktzina}
          alt="קצינה"
          className="ktzina-House"
        />
      </div>

      {allRoomsCompleted && (
        <button
          type="button"
          className="next-section-button"
          onClick={goToNextSection}
        >
          המשך
        </button>
      )}
    </div>
  );
}

export default House;