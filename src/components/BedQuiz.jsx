import React, { useState } from "react";
import "../css/AddedBenefits.css";

import BedQuestion from "./BedQuestion";
import BackBtn from "./BackBtn";

function BedQuiz({ nextPage, previousPage }) {
  const questions = [
    {
      id: "flightEligibility",
      question: "מי לא יהיה זכאי למימון כרטיס טיסה?",
      answers: [
        {
          id: "notFighter",
          text: "בודד שאינו לוחם",
          isCorrect: false,
        },
        {
          id: "emissariesChild",
          text: "בודד בן שליחים",
          isCorrect: true,
        },
        {
          id: "closeRelative",
          text: <>בודד חסר עורף משפחתי לקרוב מדרגה ראשונה</>,
          isCorrect: false,
        },
        {
          id: "immigrantChild",
          text: "בודד בן יורדים",
          isCorrect: false,
        },
      ],
    },
    
    {
        id: "addedBenefits",
        question: "בחרו את שתי התשובות הנכונות",
        answers: [
            {
                id: "answer1",
                text: "תווי קנייה 100₪ בחוגר",
                isCorrect: false,
            },
            {
                id: "answer2",
                text: "חו”מ חו”ל 30 ימים",
                isCorrect: true,
            },
            {
                id: "answer3",
                text: "מיוחדת ביקור הורה בארץ",
                isCorrect: true,
            },
            {
                id: "answer4",
                text: "יציאה מוקדמת",
                isCorrect: true,
            },
            {
                id: "answer5",
                text: "יציאה ביום החג הביתה",
                isCorrect: false,
            },
            {
                id: "answer6",
                text: "מענק שחרור לבודד",
                isCorrect: false,
            },
        ],
    },
    {
      id: "liorQuestion",
      question: "מי לא יהיה זכאי למימון כרטיס טיסה?",
      answers: [
        {
          id: "72hours",
          text: "לוודא שמתבצע ביקור בית תוך 72 שעות",
          isCorrect: false,
        },
        {
          id: "vacationMoney",
          text: "לוודא שקיבל דמי כלכלה על ימי החופשה",
          isCorrect: false,
        },
        {
          id: "interviewReminder",
          text: "להוציא תזכור לביצוע ראיון או”מ תוך 72 שעות וארכובו למערכת",
          isCorrect: true,
        },
        {
          id: "contactParents",
          text: "ליצור קשר עם הורי החייל",
          isCorrect: false,
        },
      ],
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = questions[questionIndex];

  const handleQuestionComplete = () => {
    const isLastQuestion = questionIndex === questions.length - 1;

    if (isLastQuestion) {
      nextPage?.();
      return;
    }

    setQuestionIndex((previousQuestion) => previousQuestion + 1);
  };

  const handlePrevious = () => {
    if (questionIndex === 0) {
      previousPage?.();
      return;
    }

    setQuestionIndex((previousQuestion) => previousQuestion - 1);
  };

  return (
    <div className="BedQuiz">
      <BedQuestion
        key={currentQuestion.id}
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        onComplete={handleQuestionComplete}
      />

      <BackBtn color="#502009" onClick={handlePrevious} />
    </div>
  );
}

export default BedQuiz;
