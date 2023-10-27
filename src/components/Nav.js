import {Link} from "react-router-dom";
import "../App.css";
function Nav() {
    return (
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"'Bebas Neue', sans-serif;"}} to="/" class="titleFont navbar-brand mx-5">CRUD Operations</Link>
            <div class="nav mx-5">
                <Link to="/create-student" class="nav-link">Create student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;