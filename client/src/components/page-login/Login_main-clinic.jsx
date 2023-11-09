import "./Login_main_clinic.css";
import { Link, useNavigate } from "react-router-dom";

function Login_main_clinic({setstateclinic}) {

  const navigate = useNavigate();
  var { email, passwold } = [];
  return (
    <div className="Login_main_clinic">
      <div className="box">
        {/* relative กำหนดกรอบคงที่ */}
        <img className="bg" src="images-login\bg.svg" />
        <div id="boxin"></div> {/* กล่องใส */}
        <div className="h">
          {" "}
          {/* สร้างกล่องแยกเพื่อให้ตัวอักษรชัด */}
          <center>
            <h1>Log in</h1>
          </center>
          <a href="">
            <div id="boxfrom"></div>
          </a>
          <Link to="/ClientLogin">
            <a>
              <div id="boxPersonal">Personal</div>
            </a>
          </Link>
          <a href="page-log-in-clinic.html">
            <div id="boxClinic">Clinic</div>
          </a>
          {/* กรอกข้อมูล */}
          <form action="http://httpbin.org/post">
            {/* ใส่formแยกทีหลัง */}
            <br />
            <h2>Enter Email</h2>
            <input id="input" type="email" name="email" />
            {email}
            <br />
            <h2>Enter Password</h2>
            <input id="input" type="password" name="password" />
            {passwold}
            <br />
            <br />
            <input id="check" type="checkbox" />
            <h3>REMEMBER ME</h3>
            <br />
            <br />
            <center>
              <button id="submit" type="submit" onClick={() => {
                navigate('/');
                setstateclinic(true);
              }}>
                Log in
              </button>
            </center>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_main_clinic;
