import './Tabbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ApModal from '../modal/ApModal';
function Tabbar() {
  const [Modalstate, setModalstate] = useState(false);
  const [islogin,setislogin] = useState(true);
  return (
    <>
    {Modalstate && <ApModal setOpenModal={setModalstate} />}
      <div className="tabbar">
        <img className="logo" src="images-tabbar\logo.jpg" />
        <ul className="manu">
          <li className="nav-item">
          <Link to="/">
          <a style={{ cursor: 'pointer' }} className="tab-link">
              <img id="img" src="images-tabbar\001-home 2.png" alt="" />
              Home
            </a></Link>
            
          </li>
          <li className="nav-item tab-link">
            <Link to="/Profile" >
            <a
              style={{ cursor: 'pointer' }}
              className="tab-link"
              >
              <img id="img" src="images-tabbar\profile.svg" alt="" />
              PROFILE
            </a>
              </Link>
          </li>
          {islogin? <li className="nav-item" >
            <Link to="/Login">Login</Link>
          </li>:
          <li className="nav-item" onClick={() => {
            return setModalstate(true)
          }}>
            <p style={{ cursor: 'pointer' }} id="round">
              <img id="img" src="images-tabbar\calendar.png" />
              <span className="h1" > BOOK APPOINMANT</span>
            </p>
          </li>}
          
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  )
}
export default Tabbar;