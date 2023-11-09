import { Link,useNavigate } from "react-router-dom";
import "./Login_main.css";


function Login_main(props) {
  const navigate = useNavigate();
  var { email, passwold } = props;
  return (
    <div className="LoginLogin_main">
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
            <div id="boxPersonal">Personal</div>
          </Link>
          <Link to="/ClinicLogin">
            <div id="boxClinic">Clinic</div>
          </Link>
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
              <button id="submit" type="submit" onClick={()=>navigate('/')}>
                Log in
              </button>
            </center>
            <div className="row">
              <Link to="/Register">
                <a className="link">
                  <h5>CREATE NEW ACCOUNT</h5>
                </a>
              </Link>
              <a href="" className="link">
                <h5>FORGOT PASSWORD?</h5>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_main;
