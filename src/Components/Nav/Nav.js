import React, { useState } from "react";
import "./Nav.css";
import resume from "../../resume.pdf";
function Nav() {
    const [showNav, setShowNav] = useState(false);
    const handleHamburgerClick = () => {
        setShowNav(!showNav);
    }
    const handleNavLinkClick = () => {
        if (showNav !== false) setShowNav(false);
    }
    return (
        <nav style={{ backgroundColor: showNav ? "var(--bc-1)" : "" }}>
            <ul className="nav-section-links" style={showNav ? { display: "block" } : {}}>
                <li>
                    <a onClick={handleNavLinkClick} className="nav-section-link" href="#Experience">Experience</a>
                </li>
                <li>
                    <a onClick={handleNavLinkClick} className="nav-section-link" href="#Projects">Projects</a>
                </li>
                <li>
                    <a onClick={handleNavLinkClick} className="nav-section-link" href="#Contact">Contact</a>
                </li>
            </ul>
            <div className="nav-resume-btn">
                <a href={resume} target="_blank">Resume</a>
            </div>
            <div id="nav-hamburger" onClick={handleHamburgerClick}>
                <svg
                    style={{ display: showNav ? "none" : "block" }}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
                </svg>
                <svg
                    style={{ display: showNav ? "block" : "none" }}
                    fill="none"
                    stroke="var(--fc-1)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                >
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </div>
            <div id="nav-blur" style={{ display: showNav ? "none" : "block" }}>
            </div>
        </nav >
    )
}
export default Nav;