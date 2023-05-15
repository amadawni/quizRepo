import React from "react";
import Loader from "./Loader";

function FinalScore(props) {
  const { obtainedMark } = props;

  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#9400d3", height: "100vh" }}
      >
        <div className="text-center " style={{ fontSize: "30px" }}>
                  NICE JOB <br />
                  Either you submitted your quiz or got automatically submitted due to time limits
        </div>
        <div className="my-3">{<Loader />}</div>
        <div className="my-3" style={{ fontSize: "50px" }}>
          <h1>You Scored {obtainedMark + 1}/5</h1>
        </div>
      </div>
    </>
  );
}

export default FinalScore;
