import "./EditDoctor.css";
import Profile from "./component/profile.svg";
import { useState } from "react";
function EditDoctor() {
  function handleImageClick() {
  console.log("Image clicked");
}
  return (
    <>
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
              <text className="normalText">Specialized expertise :</text>
              <input type="text"></input>
            </div>
            {/* PLAB */}
            <div className="Plab">
              <text className="normalText">PLAB :</text>
              <input type="text"></input>
            </div>
          </div>
          <div className="img-7">
          <img id="img" src={Profile} alt="profile" onClick={handleImageClick}/>
          </div>
        </div>
        <div className="bottomForm">
          <div className="part1">
            <div className="test">
              <text className="normalText">Centers and Clinics :</text>
              <input type="text" className="centers"></input>
              <text className="normalText">Language:</text>
              <input type="text" className="language"></input>
            </div>
            <div className="test2">
              <text className="normalText">Treatment and service :</text>
              <input type="text" className="treatment"></input>
            </div>
          </div>
          <div className="part2">
            <div className="part2-1">
              <text className="normalText">Graduated education :</text>
            </div>
            <div className="theBox">
              <div className="year">
                <text className="normalText">Year :</text>
                <input type="text" className="year-input"></input>
                <input type="text" className="year-input"></input>
                <input type="text" className="year-input"></input>
              </div>
              <div className="S-expertise">
                <text className="normalText">Specialized expertise :</text>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
              </div>
              <div className="S-expertise">
                <text className="normalText">University :</text>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
                <input type="text" className="spec-input"></input>
              </div>
            </div>
            <div className="part3">
              <text className="normalText">Work experience :</text>
              <div className="theBox-1">
                <div className="duration">
                  <text className="normalText">Duration :</text>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                  <input type="text" className="du-input"></input>
                </div>
                <div className="S-expertise">
                  <text className="normalText">Specialized expertise :</text>
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
                  <text className="normalText">Gender :</text>
                  <input type="text" className="du-input"></input>
                </div>
                <div className="tel">
                  <text className="normalText">Tel :</text>
                  <input type="number" className="tel-input"></input>
                </div>
                <div className="tel">
                  <text className="normalText">ID Line :</text>
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
