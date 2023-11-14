import "./EditDoctor.css";
import Profile from "./component/profile.svg";
import Tabbarclinic from "../Tabbarclinic/Tabbarclinic";
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function EditDoctor() {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    ProfessionalLicenseNumber: '',
    Firstname: '',
    Lastname: '',
    Tel: '',
    ID_line: '',
    DentistCraft: '',
    ID_card: '',
    Religion: '',
    Nationality: '',
    DateOfBirth: '',
  });

  //คลิกconfirm 
  const handleConfirm = async()=>{
    try {
      const response = await axios.post("http://localhost:3001/api/scheduling",formData);
      console.log(response.data);
      navigate("/SearchDoc");
  } catch (error) {
      console.error("Error toggling dropdown:", error);
  }
};

  return (
    <>
      <Tabbarclinic/>
      <div className="wpage">
        <div className="topForm">
          {/* topform */}
          <div className="leftForm">
            {/* fullname */}
            <div className="fullname">
              <div className="fullname-text">
                <label className="fntext">First Name :</label>
                <input type="text"></input>
              </div>
              <div className="fullname-text">
                <label className="fntext">Last Name :</label>
                <input type="text"></input>
              </div>
            </div>
            {/* specialized */}
            <div className="expertise">
              <p className="normalText">Specialized expertise :</p>
              <input type="text"></input>
            </div>
            {/* PLAB */}
            <div className="Plab">
              <p className="normalText">PLAB :</p>
              <input type="text"></input>
            </div>
          </div>
          <div className="img-7">
          <img id="img" src={Profile} alt="profile" />
          </div>
        </div>
        <div className="bottomForm">
          <div className="part1">
            <div className="test">
              <p className="normalText">Centers and Clinics :</p>
              <input type="text" className="centers"></input>
              <p className="normalText">Language:</p>
              <input type="text" className="language"></input>
            </div>
            <div className="test2">
              <p className="normalText">Treatment and service :</p>
              <input type="text" className="treatmentt"></input>
            </div>
          </div>
          <div className="part2">
            <div className="part2-1">
              <p className="normalText">Graduated education :</p>
            </div>
            <div className="theBox">
              <div className="year">
                <p className="normalText">Year :</p>
                <input type="text" className="year-input"></input>
                <input type="text" className="year-input"></input>
                <input type="text" className="year-input"></input>
              </div>
              <div className="S-expertise">
                <p className="normalText">Specialized expertise :</p>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
              </div>
              <div className="S-expertise">
                <p className="normalText">University :</p>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
              </div>
            </div>
            <div className="part3">
              <p className="normalText">Work experience :</p>
              <div className="theBox-1">
                <div className="duration">
                  <p className="normalText">Duration :</p>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                </div>
                <div className="S-expertise">
                  <p className="normalText">Specialized expertise :</p>
                  <input type="text" className="spec-input"></input>
                  <input type="text" className="spec-input"></input>
                  <input type="text" className="spec-input"></input>
                  <input type="text" className="spec-input"></input>
                  <input type="text" className="spec-input"></input>
                </div>
                <div className="wtfcol">
                  <input type="text" className="wtf-input"></input>
                  <input type="text" className="wtf-input"></input>
                </div>
              </div>
            </div>
            <div className="part4">
              <div className="theBox-1">
                <div className="gender">
                  <p className="normalText">Gender :</p>
                  <input type="text" className="du-input"></input>
                </div>
                <div className="tel">
                  <p className="normalText">Tel :</p>
                  <input type="number" className="tel-input"></input>
                </div>
                <div className="tel">
                  <p className="normalText">ID Line :</p>
                  <input type="text" className="tel-input"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="finalpart">
            <button className="btnfinal">CONFIRM</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditDoctor;
