// import "./Login_main_clinic.css";
import { Link, useNavigate } from "react-router-dom";
import "./Login_main.css";
function Login_main_clinic({ setstateclinic }) {

  const navigate = useNavigate();
  var { email, passwold } = [];
  return (
    <div className="LoginLogin_main">
      <div className="box">
        {/* relative กำหนดกรอบคงที่ */}
        <img className="bg" src="images-login\bg.svg" />
        <div id="boxin"></div> {/* กล่องใส */}
        <div className="h">
          {/* สร้างกล่องแยกเพื่อให้ตัวอักษรชัด */}
          <center>
            <h1>Log in</h1>
          </center>
          <div id="boxfrom"></div>
          <Link to="/ClientLogin">
            <div id="boxPersonal" style={{ backgroundColor: "#D9D9D9" }}>Personal</div>
          </Link>
          <div id="boxClinic" style={{ backgroundColor: "#769FCD" }}>Clinic</div>
          {/* กรอกข้อมูล */}
          {/* ใส่formแยกทีหลัง */}
          <br />
          <h2>Enter Email</h2>
          <input id="email" type="email" name="email" autoComplete="email" />
          {email}
          <br />
          <h2>Enter Password</h2>
          <input id="password" type="password" name="password" />
          {passwold}
          <br />
          <br />
          <div className="check-remember">
            <input type="checkbox" name="my_checkbox" value="yes" />
            REMEMBER ME
          </div>
          <br />
          <center>
            <button id="submit" type="submit" onClick={() => {
                navigate('/');
                setstateclinic(true);
              }}>
              Log in
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login_main_clinic;
