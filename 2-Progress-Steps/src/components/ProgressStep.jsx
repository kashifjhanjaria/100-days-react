import React, { useState } from "react";

const ProgressStep = () => {
  const [steps, setSteps] = useState(0);
  console.log(steps);
  const handleClickNext = () => {
    console.log(steps);
    if (steps < 2) {
      setSteps(steps + 1);
    }
    console.log(steps);
  };
  const handleClickPreview = () => {
    
    if (steps > 0) {
        setSteps(steps - 1);  
    }
  };
  return (
    <>
      <div className="wrapper">
        <div><h1>Progress Step</h1></div>
        <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
          <div
            className="cricle"
            style={{ border: steps == 0 ? "1px solid blue" : "1px solid blue" }}
          >
            1
          </div>
          <div
            className="line"
            style={{
              width: steps >= 1 ? "80px" : "80px",
              backgroundColor: steps >= 1 ? "blue" : "gray",
              transition : steps >= 1 ? "background-color 1s" : " ",

            }}
          ></div>
          <div
            className="cricle"
            style={{ border: steps >= 1 ? "1px solid blue" : "1px solid gray",
            transition : steps >= 1 ? "border-color 1s" : " ", 
        }}
          >
            2
          </div>
          <div
            className="line"
            style={{
              width: steps >= 2 ? "80px" : "80px",
              backgroundColor: steps == 2 ? "blue" : "gray",
            }}
          ></div>
          <div
            className="cricle"
            style={{ border: steps == 2 ? "1px solid blue" : "1px solid gray" ,
            transition : steps == 2 ? "background-color 1s" : " ",
            transition : steps == 2 ? "border-color 1s" : " ",
        }}
          >
            3
          </div>
        </div>
        <div className="button">
          <button onClick={handleClickPreview}>Preview</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default ProgressStep;
