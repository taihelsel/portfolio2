import "./Nav.css";
function Nav() {
    return (
        <nav>
            <ul className="nav-section-links">
                <li>
                    <a className="nav-section-link" href="">About</a>
                </li>
                <li>
                    <a className="nav-section-link" href="">Experience</a>
                </li>
                <li>
                    <a className="nav-section-link" href="">Projects</a>
                </li>
                <li>
                    <a className="nav-section-link" href="">Contact</a>
                </li>
            </ul>
            <div className="nav-resume-btn">
                <a href="">Resume</a>
            </div>
        </nav>
    )
}
export default Nav;