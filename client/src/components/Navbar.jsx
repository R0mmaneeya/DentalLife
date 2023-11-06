import { Link } from "react-router-dom";
import "./Navbar.css";
function Nav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>FIND US</li>
                <li>Tell</li>
                <li>PROFILE</li>
                <li>
                    <button
                        className="openModalBtn"
                        onClick={() => {
                            return props.modalOpen(true)
                        }}
                    >
                        open
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
