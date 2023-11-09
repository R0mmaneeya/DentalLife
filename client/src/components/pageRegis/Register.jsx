import "./Register.css";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import home from "/images-login/home.svg";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const showIcon = <VisibilityIcon />;
  const hideIcon = <VisibilityOffIcon />;

  const togglePasswordVisibility = () => {
    setPasswordShown((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
  };
  return (
    <div className="app">
      <div className="createApp">
        <h1>CREATE NEW ACCOUNT</h1>
        <div className="form1">
          <form className="formleft">
            {/* name */}
            <div className="column">
              <div className="column-name-text">
                <label>Firstname:</label>
                <input type="text" />
              </div>
              <div className="column-name-text">
                <label>Lastname:</label>
                <input type="text" />
              </div>
            </div>

            {/* tel idLine */}
            <div className="column">
              <div className="column-name-text">
                <label>Tel:</label>
                <input type="text" />
              </div>
              <div className="column-name-text">
                <label>ID line:</label>
                <input type="text" />
              </div>
            </div>

            {/* email */}
            <div className="name-text">
              <label>Email:</label>
              <input type="email" />
            </div>

            {/* password */}
            <div className="password-input">
              <label>Password:</label>
              <input
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <i className="show-hide-icon" onClick={togglePasswordVisibility}>
                {passwordShown ? hideIcon : showIcon}
              </i>
            </div>

            {/* confirm password */}
            <div className="password-input">
              <label>Confirm password:</label>
              <input
                type={passwordShown ? "text" : "password"}
                value={password1}
                onChange={handlePasswordChange1}
              />
              <i className="show-hide-icon" onClick={togglePasswordVisibility}>
                {passwordShown ? hideIcon : showIcon}
              </i>
            </div>

            {/* ID card */}
            <div className="name-text">
              <label>ID Card:</label>
              <input type="text" />
            </div>
          </form>
          <form className="formright">
            {/* religion Nation */}
            <div className="column">
              <div className="column-name-text">
                <label>Religion:</label>
                <input type="text" />
              </div>
              <div className="column-name-text">
                <label>Nationality:</label>
                <input type="text" />
              </div>
            </div>

            {/* dob race */}
            <div className="column">
              <div className="column-name-text">
                <label>Race:</label>
                <input type="text" />
              </div>
              <div className="column-name-text">
                <label>Date of Birth:</label>
                <input type="text" />
              </div>
            </div>

            {/* ouccupation */}
            <div className="name-text">
              <label>Ouccupation:</label>
              <input type="text" />
            </div>

            {/* weight height */}
            <div className="column">
              <div className="column-name-text">
                <label>Weight:</label>
                <input type="number" />
              </div>
              <div className="column-name-text">
                <label>Height:</label>
                <input type="number" />
              </div>
            </div>

            {/* address */}
            <div className="name-text">
              <label>Address:</label>
              <input type="text" />
            </div>

            {/* history */}
            <div className="name-text">
              <label>Allergy History:</label>
              <input type="text" />
            </div>
          </form>
        </div>

        <button
          className="signUpbtn"
          onClick={() => {
            navigate("/ClientLogin");
          }}
        >
          Sign up
        </button>

        <ul>
          <span className="bottomClick">
            <li>LOG IN</li>
            <li>FORGOT PASSWORD?</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
                className="tab-link"
              >
                <img id="img" src={home} alt="home" />
              </a>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}
