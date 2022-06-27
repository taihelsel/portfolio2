import "./Home.css";
import React, { useEffect, useState } from "react";
import Terminal from "../../Components/Terminal/Terminal";
function Home() {
    const [showTitle, setShowTitle] = useState(false);
    const [firstNameColor, setFirstNameColor] = useState(`var(--fc-1)`);
    const colorFirstName = (color) => {
        setFirstNameColor(color);
    }
    const showRadTitle = () => {
        setShowTitle(true);
    }
    return (
        <section id="Home">
            <div className="home-left">
                <div id="home-head-container">
                    <h1 className="home-title home-head">Hi, I'm </h1><h1 style={{ color: firstNameColor }} className="home-title home-head" id="home-firstname">&nbsp;Tai</h1>
                </div>
                <h2 style={{ display: showTitle ? "block" : "none" }} className="home-title home-subhead">I'm creating with Node.js</h2>
                <p className="home-body">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                </p>
            </div>
            <div className="home-right">
                <Terminal colorFirstName={colorFirstName} showRadTitle={showRadTitle} />
            </div>
        </section >
    );
}
export default Home;