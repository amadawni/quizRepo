import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import FinalScore from "./FinalScore";

function Quiz() {
  // let navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(1);
  const quizQuestionDetails = [
    {
      // questionNo: 1,
      question: "What is national flag name? ",
      options: ["tiranga", "tagore", "kamal", "jalaj"],
      correctOption: 1,
    },
    {
      // questionNo: 2,
      question: "What is capital of bihar? ",
      options: ["dehli", "kolkata", "lucknow", "patna"],
      correctOption: 4,
    },
    {
      // questionNo: 3,
      question: "What is capital of manipur? ",
      options: ["kochi", "imphal", "kamal", "jalaj"],
      correctOption: 2,
    },
    {
      // questionNo: 4,
      question: "What is national bird name? ",
      options: ["peacock", "parrot", "kangaroo", "sparrow"],
      correctOption: 1,
    },
    {
      // questionNo: 5,
      question:
        "What is time period in which general election happen in years? ",
      options: ["3", "4", "5", "6"],
      correctOption: 3,
    },
  ];
  const [obtainedMark, setobtainedMark] = useState(0);

  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  // if (min !=== 10)
  // min = min.replace(/^(\d)$/, "0$1")
  // if (sec < 10)
  //   sec = sec.replace(/^(\d)$/, "0$1")

  const [isAnswerFilled, setIsAnswerFilled] = useState(false);

  const nextBtnClicked = () => {
    // if (quizQuestionDetails[questionNo - 1].options[1])
    // console.log("Mark Calculation");
    calculateMark();
    setQuestionNo(questionNo + 1);
    clearAnswer();
    setIsAnswerFilled(false);
  };
  function clearAnswer() {
    // Get all the radio buttons in the quiz question
    const quizOptions = document.querySelectorAll(
      '.quizQuestion input[type="radio"]'
    );

    // Loop through the radio buttons and set their checked property to false
    for (let i = 0; i < quizOptions.length; i++) {
      quizOptions[i].checked = false;
    }
  }

  function calculateMark() {
    // Get all the radio buttons in the quiz question
    const quizOptions = document.querySelectorAll(
      '.quizQuestion input[type="radio"]'
    );
    // Loop through the radio buttons and set their checked property to false
    for (let i = 0; i < quizOptions.length; i++) {
      if (
        quizOptions[i].checked === true &&
        i === quizQuestionDetails[questionNo - 1].correctOption - 1
      ) {
        // console.log("Reached here");
        setobtainedMark(obtainedMark + 1);
        // console.log("correct answer", obtainedMark);
      }
      // if (quizOptions.checked === true) console.log(quizOptions);
    }
  }
  const [renderResult, setRenderResult] = useState(false);

  const submitBtnClicked = () => {
    console.log("finalScore");
    setRenderResult(true);
    //  <FinalScore obtainedMark={obtainedMark} />;
  };

  useEffect(() => {
    if (min === 0 && sec === 0) {
      setRenderResult(true);
      // Navigate()
    }
  }, [timeLeft]);

  return !renderResult === true ? (
    <>
      <div className="container my-2 d-flex justify-content-between">
        <button
          className="btn btn-success"
          style={{ width: "90px", height: "40px", borderRadius: "30px" }}
        >
          {`0${questionNo}/05`}
        </button>
        <button
          className="btn "
          style={{
            backgroundColor: "#8F00FF",
            color: "white",
            width: "90px",
            height: "40px",
            borderRadius: "30px",
          }}
        >
          {`${min}:${sec}`}
          
        </button>
      </div>

      <div className="container my-4">
        <b>{quizQuestionDetails[questionNo - 1].question}</b>
      </div>

      <div className="container quizQuestion">
        <div className="d-flex justify-content-between">
          <label className="form-check-label">
            {quizQuestionDetails[questionNo - 1].options[0]}
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="optradio"
              onClick={() => setIsAnswerFilled(true)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <label className="form-check-label">
            {quizQuestionDetails[questionNo - 1].options[1]}
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="optradio"
              onClick={() => setIsAnswerFilled(true)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <label className="form-check-label">
            {quizQuestionDetails[questionNo - 1].options[2]}
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="optradio"
              onClick={() => setIsAnswerFilled(true)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <label className="form-check-label">
            {quizQuestionDetails[questionNo - 1].options[3]}
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="optradio"
              onClick={() => setIsAnswerFilled(true)}
            />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center my-5">
        <button
          className="btn btn-primary"
          disabled={!isAnswerFilled}
          onClick={() => {
            if (questionNo === 5) {
              submitBtnClicked();
            } else {
              nextBtnClicked();
            }
          }}
        >
          {questionNo === 5 ? "SUBMIT" : "NEXT"}
        </button>
      </div>
    </>
  ) : (
    <FinalScore obtainedMark={obtainedMark} />
  );
}

export default Quiz;
