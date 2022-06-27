import "./Terminal.css";
import React, { useState, useEffect } from "react";
function Terminal({ colorFirstName, showRadTitle }) {
    const test = () => {
        console.log("Test");
    }
    const codeToPrint = [
        {
            arg: `document.getElementById("SuperRadTitle").style.display="block";`,
            result: "block",
            exe: function () {
                showRadTitle();
            }
        },
        {
            arg: `document.getElementById("SuperRadFirstName").style.color = "var(--fc-3)";`,
            result: "var(--fc-3)",
            exe: function () {
                colorFirstName("var(--fc-3)");
            }
        },
    ]
    const [doneLoading, setDoneLoading] = useState(false);
    const [previousCode, setPreviousCode] = useState([]);
    const [currentCode, setCurrentCode] = useState("");
    useEffect(() => {
        let codeToPrintIndex = 0;
        let letterIndex = 0;
        let blink = 0;
        let blinkSets = 0;
        const animationInterval = setInterval(() => {
            if (blink !== false) {
                if (blinkSets > 5) {
                    blink = false;
                    blinkSets = 0;
                    setCurrentCode("");
                } else {
                    if (blinkSets % 2 === 0) {
                        setCurrentCode("|");
                    } else {
                        setCurrentCode("");
                    }
                    if (blink < 12) {
                        blink++;
                    } else {
                        blink = 0;
                        blinkSets++;
                    }
                }
            } else {
                printCode(codeToPrintIndex, letterIndex);
                if (letterIndex < codeToPrint[codeToPrintIndex].arg.length - 1) {
                    letterIndex++;
                } else {
                    //check for any more code to print
                    codeToPrint[codeToPrintIndex].exe();
                    setPreviousCode([...previousCode, codeToPrint[codeToPrintIndex]]);
                    setCurrentCode("");
                    if (codeToPrintIndex < codeToPrint.length - 1) {
                        //done with current code, print next code
                        codeToPrintIndex++;
                        letterIndex = 0;
                        blink = 0;
                    } else {
                        //done with loop
                        setDoneLoading(true);
                        clearInterval(animationInterval);
                    }
                }
            }

        }, 15);
    }, []);

    const printCode = (codeIndex, letterIndex) => {
        const text = codeToPrint[codeIndex].arg[letterIndex];
        setCurrentCode((prevState) => prevState + text);
    }
    const loadPreviousCode = (prevCode) => {
        return prevCode.map(({ arg, result }, index) => {
            return [
                <li className="code-row" key={`coode-row-arg-${index}`}>
                    <h3 className="code-arrow-right">{`>`}</h3>
                    <h3 className="code-text">{arg}</h3>
                </li>,
                <li className="code-row" key={`coode-row-result-${index}`}>
                    <h3 className="code-arrow-left">{`<`}</h3>
                    <h3 className="code-text">'{result}'</h3>
                </li>
            ]
        });
    }
    return (
        <div id="terminal">
            <div id="terminal-content">
                <p>
                    /*<br />
                    TODO<br />
                    [{doneLoading ? "x" : " "}] - Cool landing page<br />
                    [ ] - Experience<br />
                    [ ] - Projects<br />
                    */
                </p>
                <ul>
                    {loadPreviousCode(previousCode)}
                    <li className="code-row">
                        <h3 className="code-arrow-right" id="code-arrow-blue">{`>`}</h3>
                        <h3 className="code-text">{currentCode}</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Terminal;