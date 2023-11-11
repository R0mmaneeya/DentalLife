import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./ClientPages/profile/Profile.jsx";
import Login_main from "./components/page-login/Login_main.jsx";
import Register from "./components/pageRegis/Register.jsx";
import Tabbar from "./ClientPages/Home/Tabbar.jsx";
import StartPage from "./components/StartPage/StartPage.jsx";
import Login_main_clinic from "./components/page-login/Login_main-clinic.jsx";
import { useState } from "react";
import Tabbarclinic from "./clinicpages/Tabbarclinic/Tabbarclinic";
import PageserchDoc from "./clinicpages/Page-search-docter/Page-search-docter.jsx";
import EditDoctor from "./clinicpages/Createdoc/EditDoctor.jsx";
import Pagesearchpa from "./clinicpages/Page-search-patient/Page-search-patient.jsx";
import { getUser } from "../service/authorize.jsx";
const MyRoute = () => {
    const [clinicState, setClinicState] = useState(false);
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ClientLogin" element={<Login_main />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ClinicLogin" element={<Login_main_clinic setstateclinic={setClinicState} />} />
                <Route path="/SearchDoc" element={<PageserchDoc />} />
                <Route path="/SearchDoc/EditDoc" element={<EditDoctor />} />
                <Route path="/SearchClient" element={<Pagesearchpa />} />
            </Routes>
        </Router>
    )
}

export default MyRoute