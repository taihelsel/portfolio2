import "./Projects.css";
function Projects() {
    return (
        <section id="Projects">
            <div className="section-content">
                <div className="section-title">
                    <h1 className="section-title">Projects</h1>
                    <hr />
                </div>
                <div id="projects-content">
                    <div id="projects-left">
                        <div id="project-preview">
                        </div>
                    </div>
                    <div id="projects-right">
                        <div id="project-details">
                            <h2 className="project-title">Node Ardiuno Controller (NAC)</h2>
                            <p className="project-text">
                                Designed and developed tools that made the daily workload
                                more efficient. Developed jobs to automate daily tasks. Performed daily system health checks
                            </p>
                            <h2 className="project-title">Tech</h2>
                            <p className="project-text" >
                                Git, HTML, CSS, JavaScript, Powershell, and Ruby
                            </p>
                            <hr />
                            <div id="project-links">
                                <a href="">GitHub</a>
                                <a href="">Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;