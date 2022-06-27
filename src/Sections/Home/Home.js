import "./Home.css";
import React, { useEffect, useState } from "react";
import Terminal from "../../Components/Terminal/Terminal";
function Home() {
    const titles = ["React", "HTML", "CSS", "JavaScript", "Node.js"];
    const [showTitle, setShowTitle] = useState(false);
    const [titleText, setTitleText] = useState("");
    const [firstNameColor, setFirstNameColor] = useState(`var(--fc-1)`);
    const updateTitleText = (title, charIndex) => {
        setTitleText((prevState) => prevState + title[charIndex]);
    }
    useEffect(() => {
        if (showTitle === true) {
            let charIndex = 0;
            let titleIndex = 0;
            const animation = setInterval(() => {
                const currentTitle = titles[titleIndex];
                if (charIndex > currentTitle.length - 1) {
                    //done with current title
                    charIndex = 0;
                    if (titleIndex < titles.length - 1) {
                        //next title
                        titleIndex++;
                        setTitleText("");
                    } else {
                        console.log(titleIndex >= titles.length - 1, titles.length)
                        //done with loop
                        clearInterval(animation);
                    }
                } else {
                    //add next char
                    updateTitleText(currentTitle, charIndex);
                    charIndex++;
                    console.log("added char", charIndex)
                }
            }, 170);
        }

    }, [showTitle])

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
                <h2 style={{ display: showTitle ? "block" : "none" }} className="home-title home-subhead">I'm creating with {titleText}</h2>
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