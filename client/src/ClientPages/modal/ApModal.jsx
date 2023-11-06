import "./ApModal.css";
import React, { useState } from "react";
import Sclinic from "./SClinic.jsx";
import SclinicP2 from "./SClinicP2.jsx";
import SclinicP3 from "./SClinicP3.jsx";
function ApModal({ setOpenModal }) {
  const [currentStep, setCurrentStep] = useState(1);
  const handleContinueClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="modalBackground ">
      <div
        className="oc-bg"
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title client">
          <h1 style={{ color: "#FFA45B" }}>Book Appointment</h1>
        </div>
        {currentStep === 1 && <Sclinic />}
        {currentStep === 2 && <SclinicP2 />}
        {currentStep === 3 && <SclinicP3 />}
        <div className="footer">
          {currentStep > 1 && (
            <button style={{backgroundColor : "#FFD89C" }} id="backBtn" onClick={handleBackClick}>
              Back
            </button>
          )}
          
          {currentStep < 3 && (
            <button style={{backgroundColor : "#FFD89C"}} id="continueBtn" onClick={handleContinueClick}>
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button style={{backgroundColor : "#FFD89C"}} id="doneBtn" >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApModal;
