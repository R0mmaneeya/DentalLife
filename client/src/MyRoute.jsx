import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx"
import Profile from "./ClientPages/profile/Profile.jsx";
import Login_main from "./components/page-login/Login_main.jsx";
import Register from "./components/pageRegis/Register.jsx";
const MyRoute = ()=>{
    return (
        <Router>
            <Routes>
                <Route path ="/" element = {<App />}/> 
                <Route path ="/Profile" element={<Profile />}/>
                <Route path = "/Login" element={<Login_main/>}/>
                <Route path = "/Register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoute