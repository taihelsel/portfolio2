import "./Home.css";
import React, { useEffect, useState } from "react";
import Terminal from "../../Components/Terminal/Terminal";
import { about, contact, skills } from "../../portfolioInfo";
const { firstname } = contact;
function Home() {
    const titles = [...skills];
    const [showTitle, setShowTitle] = useState(false);
    const [titleText, setTitleText] = useState(titles[0]);
    const [animateTitle, setAnimateTitle] = useState(false);
    const [firstNameColor, setFirstNameColor] = useState(`var(--fc-1)`);
    const addCharToTitle = (title, charIndex) => {
        setTitleText((prevState) => prevState + title[charIndex]);
    }
    const removeCharFromTitle = () => {
        setTitleText((prevState) => prevState.slice(0, -1));
    }
    useEffect(() => {
        if (showTitle === true) {
            let charIndex = 0;
            let doneWordInReverse = false;
            let doingWordInReverse = false;
            let donePausing = false;
            let titleIndex = 1;
            let pausesBeforeDeletingWord = 0;
            let firstRun = true;
            let doingFirstRun = false;
            const animation = setInterval(() => {
                const currentTitle = titles[titleIndex];
                if (titleIndex >= titles.length - 1 && charIndex > currentTitle.length - 1) {
                    //done with loop. stop on last word so it's not deleted.
                    clearInterval(animation);
                } else {
                    if (firstRun === true) {
                        if (doingFirstRun === false) {
                            doingFirstRun = true;
                            charIndex = titleText.length - 1;
                        }
                        if (charIndex >= 0) {
                            //remove prev char
                            removeCharFromTitle();
                            charIndex--;
                        } else {
                            //done removing all of current word. go next word.
                            firstRun = false;
                            charIndex = 0;
                        }
                    } else {
                        if (charIndex > currentTitle.length - 1 || doingWordInReverse === true) {
                            if (donePausing === false) {
                                pausesBeforeDeletingWord++;
                                if (pausesBeforeDeletingWord > 10) {
                                    pausesBeforeDeletingWord = 0
                                    donePausing = true;
                                }
                            } else {
                                //check if the prev word has been removed before going to next word.
                                if (doneWordInReverse) {
                                    //done with current title
                                    charIndex = 0;
                                    if (titleIndex < titles.length - 1) {
                                        //next title
                                        titleIndex++;
                                        setTitleText("");
                                        doneWordInReverse = false;
                                        doingWordInReverse = false;
                                        donePausing = false;
                                    }
                                } else {
                                    doingWordInReverse = true;
                                    if (charIndex >= 0) {
                                        //remove prev char
                                        removeCharFromTitle();
                                        charIndex--;
                                    } else {
                                        //done removing all of current word. go next word.
                                        doneWordInReverse = true;
                                    }
                                }
                            }

                        } else {
                            //add next char
                            addCharToTitle(currentTitle, charIndex);
                            charIndex++;
                        }
                    }

                }
            }, 100);
        }

    }, [animateTitle])

    const colorFirstName = (color) => {
        setFirstNameColor(color);
    }
    const showRadTitle = () => {
        setShowTitle(true);
    }
    const animateRadTitle = () => {
        setAnimateTitle(true);
    }
    return (
        <section id="Home">
            <div className="home-left">
                <div id="home-head-container">
                    <h1 className="home-title home-head">Hi, I'm </h1><h1 style={{ color: firstNameColor }} className="home-title home-head" id="SuperRadFirstName">&nbsp;{firstname}</h1>
                </div>
                <h2 style={{ display: showTitle ? "block" : "none" }} className="home-title home-subhead" id="SuperRadTitle">I'm creating with {titleText}</h2>
                <p className="home-body">
                    {about}
                </p>
            </div>
            <div className="home-right">
                <Terminal colorFirstName={colorFirstName} showRadTitle={showRadTitle} animateRadTitle={animateRadTitle} />
            </div>
            <div id="home-divider"></div>
        </section >
    );
}
export default Home;