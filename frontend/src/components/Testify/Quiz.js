import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css"; // Import styles as an object

const questions = [
    {
      question: "How many hours did you spend today with your children?",
      answers: [
        { text: "Less than 2 hours", correct: false },
        { text: "2 hours", correct: false },
        { text: "Less than 5 hours", correct: false },
        { text: "More than 5 hours", correct: true },
      ],
    },
    {
      question: "How many times you scold your child today?",
      answers: [
        { text: "Not at all", correct: true },
        { text: "When it gets worse, only then I scold", correct: true },
        { text: "A few times in a day", correct: false },
        { text: "Without scolding, it is unmanageable", correct: false },
      ],
    },
    {
      question: "How much time did your child take rest today?",
      answers: [
        { text: "6 hours", correct: false },
        { text: "7 hours", correct: false },
        { text: "8 hours", correct: true },
        { text: "More than 8 hours", correct: true },
      ],
    },
    {
      question: "Have you played with your child today?",
      answers: [
        { text: "Not at all", correct: false },
        { text: "For a few moments", correct: false },
        { text: "We spent time together but didn't play", correct: false },
        { text: "We played a lot", correct: true },
      ],
    },
    {
      question: "Have you given proper food to your child?",
      answers: [
        { text: "I don't know", correct: false },
        { text: "He ate homemade food only", correct: false },
        { text: "He overate", correct: false },
        { text: "We tried to maintain a proper food chart", correct: true },
      ],
    },
  ];
const Quiz = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreMessage, setShowScoreMessage] = useState(false);

  const questionElement = questions[currentQuestionIndex];

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScoreMessage(false);
  };

  const selectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      showScore();
    }
  };

  const showScore = () => {
    if (score < questions.length - 3) {
      alert("You should be more attentive to your child");
      navigate("/");
    } else if (score < questions.length - 2) {
      alert(
        "You are trying to be a good parent, please try to hold this phase"
      );
      navigate("/");
    } else {
      alert(
        "You and your child have a really great bonding. Kudos to both of you"
      );
      navigate("/");
    }
  };

  return (
    <div className={styles.app}>
      <h1>Parenting Evaluation</h1>
      <div className={styles.quiz}>
        <h2>{questionElement.question}</h2>
        <div id="answer-buttons">
          {questionElement.answers.map((answer, index) => (
            <button
              key={index}
              className={styles.btn}
              onClick={() => selectAnswer(answer.correct)}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {showScoreMessage ? (
          <div>
            <p>{showScore()}</p>
            <button className={styles.btn} id="next-btn" onClick={startQuiz}>
              Play Again
            </button>
          </div>
        ) : (
          <button className={styles.btn} id="next-btn" onClick={selectAnswer}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
