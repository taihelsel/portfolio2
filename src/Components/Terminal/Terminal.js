import "./Terminal.css";
function Terminal() {
    return (
        <div id="terminal">
            <div id="terminal-content">
                <p>
                    /*<br />
                    TODO<br />
                    [x] - Cool landing page<br />
                    [ ] - Experience<br />
                    [ ] - Projects<br />
                    */
                </p>
                <ul>
                    <li className="code-row">
                        <h3 className="code-arrow-right">{`>`}</h3>
                        <h3 className="code-text">document.getElementById("SuperRadFirstName").style.color = "#E6C300";</h3>
                    </li>
                    <li className="code-row">
                        <h3 className="code-arrow-left">{`<`}</h3>
                        <h3 className="code-text">"#E6C300"</h3>
                    </li>
                    <li className="code-row">
                        <h3 className="code-arrow-right" id="code-arrow-blue">{`>`}</h3>
                        <h3 className="code-text">document.getElementById("SuperRadFirstName").sty</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Terminal;