import "./Experience.css";
function Experience() {
    return (
        <section id="Experience">
            <div className="section-content">
                <div className="section-title">
                    <h1 className="section-title">Experience</h1>
                    <hr />
                </div>
                <div id="experience-content">
                    <ul id="experience-controls">
                        <li id="experience-controls-selected"><a href="">Sentry Data Systems</a></li>
                        <li><a href="">RTRT.me</a></li>
                        <li><a href="">Freelance Web Development</a></li>
                    </ul>
                    <div id="experience-details">
                        <div id="experience-details-title">
                            <h2>Production Support Analyst</h2>
                            <p className="experience-details-text">June 2019 - November 2021 </p >
                        </div>
                        <ul id="experience-details-list">
                            <li className="experience-details-text">Designed and developed tools that made the daily workload
                                more efficient
                            </li>
                            <li className="experience-details-text">Developed jobs to automate daily tasks
                            </li>
                        </ul>
                        <div id="experience-details-skills">
                            <h2>Skills</h2>
                            <p className="experience-details-text">Git, HTML, CSS, JavaScript, Powershell, and Ruby</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;