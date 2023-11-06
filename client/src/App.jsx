import React, { useState } from "react"
import "./App.css"
// import Nav from "./components/Navbar"
import ApModal from "./ClientPages/modal/ApModal"
import SDmodal from "./clinicpages/modal/SDmodal"
import Tabbar from "./ClientPages/Home/Tabbar";
import StartPage from "./components/StartPage/StartPage";
//Component
function App() {
  const [clinicModal, setclinicModal] = useState(false)
  console.log("print 1")
  return (
    <div>
      
      {clinicModal && <SDmodal setOpenClinicModal= {setclinicModal}/>}
      <Tabbar />
      {/* <Nav modalOpen={setModalstate} /> */} 
      {/* <button
        className="openModalBtn"
        onClick={() => {
          return setclinicModal(!clinicModal)
        }}
      >
        Clinic open
      </button> */}
      <StartPage/>
    </div>
  )
}
export default App