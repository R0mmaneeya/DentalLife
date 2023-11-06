import React, { useState } from "react";

function BodySD() {
    const [selectedTreatment, setselectedTreatment] = useState(null);
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
    };



    const [SelectedDoctor, setSelectedDoctor] = useState(null);
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
    };
    return (
        <div className="body">


            {/* Treatment */}
            <h5 style={{ lineHeight: "2", textAlign: "left", color: "#A0C49D" }}>
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
            <h5 style={{ lineHeight: "2", textAlign: "left", color: "#A0C49D" }}>
                Dentist Name
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
    );
}

export default BodySD;
