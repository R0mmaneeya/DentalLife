import { Link } from 'react-router-dom';
import Tabbar from '../../ClientPages/Home/Tabbar';
import './Login_main.css'

function Login_main(props){
    var {email,passwold} = props;
    return(
      <>
      <Tabbar/>
    <div className="box">
      {/* relative กำหนดกรอบคงที่ */}
      <img className="bg" src="images-login\bg.svg" />
      <div id="boxin"></div> {/* กล่องใส */}
      <div className="h"> {/* สร้างกล่องแยกเพื่อให้ตัวอักษรชัด */}
        <center>
          <h1>Log in</h1>
        </center>
        <a href="">
          <div id="boxfrom"></div>
        </a>
        <a href="https://i.pinimg.com/564x/d8/9e/78/d89e788e16abc94596a4e9a17768badb.jpg">
          <div id="boxPersonal">Personal</div>
        </a>
        <a href="page-log-in-clinic.html">
          <div id="boxClinic">Clinic</div>
        </a>
        {/* กรอกข้อมูล */}
        <form action="http://httpbin.org/post">
          {/* ใส่formแยกทีหลัง */}
          <br />
          <h2>Enter Email</h2>
          <input id="input" type="email" name="email" />{email}
          <br />
          <h2>Enter Password</h2>
          <input id="input" type="password" name="password" />{passwold}
          <br />
          <br />
          <input id="check" type="checkbox" />
          <h3>REMEMBER ME</h3>
          <br />
          <br />
          <center>
            <button id="submit" type="submit">
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
            <a href="" className="link">
              <img id="imghome" src="images-login\home.svg" />
            </a>
          </div>
        </form>
      </div>
    </div>
      </>
  )
}


export default Login_main;