import "./Sclinic.css";
import { useState } from "react";
import {useSelector} from 'react-redux'
function Sclinic() {
    const clinic = useSelector((state) => state.Clinic.name);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const options = clinic
    console.log(options)

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsActive(false);
    };
    return (
        <div>
            
            <div className="body">
                <p style={{ lineHeight: "1", fontSize: "13px" }}>
                Please select the clinic you want at the branch you are convenient to
                travel to
                </p>
                <h5 style={{ lineHeight: "2", textAlign: "left", color: "#FFA45B" }}>
                    Clinic
                </h5>
                <div
                    className={`dropdown ${isActive ? "active" : ""}`}
                    onClick={toggleDropdown}
                >
                    <div className="select">
                        {selectedOption || "Select Clinic"}
                        <i className="icon">▼</i>
                    </div>
                    <ul className={`dropdown-menu `}>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={selectedOption === option ? "selected" : ""}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Sclinic;
