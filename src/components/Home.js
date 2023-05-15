import React from "react";
import img from "../girl-image.png";
import { useNavigate, useSTate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleOnClick = () => {

    navigate("/quiz");
    // useEffect(() => {
      window.location.reload();
    // }, []);
  };
  return (
    <>
      <div className=" container border border-primary">
        <div className="header container d-flex bd-highlight mb-3">
          <div className="me-auto p-2 bd-highlight leftHeader">
            <i className="fa-sharp fa-solid fa-left-long fa-lg"></i>
          </div>
          <div className="p-2 bd-highlight rightHeader">
            <i className="fa-sharp fa-solid fa-magnifying-glass-location fa-beat-fade fa-lg"></i>
          </div>
          <div className="p-2 bd-highlight rightHeader">
            <i className="fa-solid fa-user fa-2xl"></i>
          </div>
        </div>

        <div className="division1 d-flex justify-content-around">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <span
                style={{
                  color: "blue",
                  fontSize: "30px",
                  fontWeight: "900",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {" "}
                <b>The </b>
              </span>
              <span style={{ color: "green", fontSize: "30px" }}>
                <b>Daily </b>{" "}
              </span>
              <span style={{ color: "blue", fontSize: "30px" }}>
                <b>Ms </b>{" "}
              </span>
              <br />
              <span style={{ color: "green", fontSize: "30px" }}>
                <b>Excel </b>{" "}
              </span>
              <span style={{ color: "blue", fontSize: "30px" }}>
                <b>Quiz </b>{" "}
              </span>
            </div>
          </div>

          <div>
            <img
              src={img}
              alt="dummy image"
              style={{ height: "300px", width: "150px" }}
            />
          </div>
        </div>

        <div className=" container division2  ">
          <div className="d-flex justify-content-center align-items-center">
            <span
              style={{
                color: "blue",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Arial, Helvetica, sans-serif",
                alignSelf: "center",
              }}
            >
              {" "}
              <b>The Daily Ms Excel Quiz </b>
            </span>
          </div>

          <div className=" container d-flex justify-content-around my-5">
            <div>
              <i className="fa-regular fa-comment-dots fa-lg  mx-2 my-2"></i>
              <span className=" mx-2 my-2">Leave a Comment</span>
              <br />
              <i className="fa-regular fa-bookmark fa-lg  mx-2 my-2"></i>
              <span className=" mx-2 my-2">Save Quiz</span>
              <br />
              {/* <i className="fa-regular fa-swords fa-lg  mx-2 my-2"></i>
            <span className=" mx-2 my-2">Challenge a friend</span> */}
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-user"></i>
                <span>People enrolled ....</span>
              </div>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>4 Ratings (out of 5)</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" container division3">
          <span>
           This Microsoft Excel proficiency Test is designed to evaluate an individuals knowledge and skills in using Microsoft Excel. It covers a wide range of topics, including data....
            <br />
            <br />
            <div>
              <b>This Quiz includes</b>
              <p>50% passing percentage</p>
              <p>5 Questions</p>
              <p>10 Min</p>
              <p>1 attemp daily</p>
            </div>
          </span>
        </div>

        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel">
                  Quiz Rule 
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                              <p>
                                  <b>10 Mins</b> <br />
                                  <span>Keep in mind that it's a time-bound quiz</span>
                </p>
                              <p>
                                  <b>5 Questions</b> <br />
                                  <span>We believe that you will ace it!</span>
                </p>
                              <p>
                                  <b>50% Passing Criteria</b> <br />
                                  <span>All the best! See you on the other side</span>
                              </p>
                              
                              <div className="text-center">
                                  <button className="btn btn-primary" onClick={handleOnClick}>Start Quiz</button>
                              </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            className="btn btn-primary"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            Take Quiz
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
