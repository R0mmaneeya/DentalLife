import React, { useState } from "react";
import "./Sclinic.css";
import { useSelector, useDispatch } from 'react-redux'
import { AddTreat, AddDoc } from "../../store/slices/BookingSlice";
function SclinicP2({ handleContinueClick, handleBackClick }) {
    const dispatch = useDispatch();
    const [selectedTreatment, setselectedTreatment] = useState(useSelector((state) => state.Booking.selecTreat));
    const [treatmentActive, settreatmentActive] = useState(false);
    const Treatment = [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
    ];
    const toggleDropdownS1 = () => {
        settreatmentActive(!treatmentActive);
    };
    const handleOptionClickS1 = (Treatment) => {
        setselectedTreatment(Treatment);
        settreatmentActive(false);
        dispatch(AddTreat(Treatment))
    };



    const [SelectedDoctor, setSelectedDoctor] = useState(useSelector((state) => state.Booking.selecDoc));
    const [doctorActive, setdoctorActive] = useState(false);

    const doctor = [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
    ];


    const DoctortoggleDropdown = () => {
        setdoctorActive(!doctorActive);
    };

    const DoctorHandleOption = (doctor) => {
        setSelectedDoctor(doctor);
        setdoctorActive(false);
        dispatch(AddDoc(doctor))
    };
    const nextactivate = (state, state2) => {
        if ((state2 && state) === null) { return true }
        else {
            return false
        }
    }
    return (
        <div>
            <div className="body">
                <p style={{ lineHeight: "1", fontSize: "13px" }}>
                    Please choose a treatment (If your desired treatment isn't listed,
                    please select 'Other Treatments' below)..
                </p>


                {/* Treatment */}
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Treatment
                </h5>
                <div
                    className={`dropdown ${treatmentActive ? "active" : ""}`}
                    onClick={toggleDropdownS1}
                >
                    <div className="select">
                        {selectedTreatment || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {Treatment.map((Treatment, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClickS1(Treatment)}
                                className={selectedTreatment === Treatment ? "selected" : ""}
                            >
                                {Treatment}
                            </li>
                        ))}
                    </ul>
                </div>




                {/* doctor */}
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Your doctor
                </h5>
                <div
                    className={`dropdown ${doctorActive ? "active" : ""}`}
                    onClick={DoctortoggleDropdown}
                >
                    <div className="select">
                        {SelectedDoctor || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {doctor.map((doctor, index) => (
                            <li
                                key={index}
                                onClick={() => DoctorHandleOption(doctor)}
                                className={SelectedDoctor === doctor ? "selected" : ""}
                            >
                                {doctor}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <button style={{ backgroundColor: "#FFD89C" }} id="backBtn" onClick={handleBackClick} >
                    Back
                </button>
                <button style={{ backgroundColor: "#FFD89C" }} id="continueBtn" onClick={handleContinueClick} disabled={nextactivate(SelectedDoctor, selectedTreatment)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default SclinicP2;
