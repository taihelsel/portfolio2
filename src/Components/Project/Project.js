import "./Project.css";
function Project({ name, desc, tech, github, link, img }) {
    return (
        <div className="project">
            <div className="project-left">
                {img ? (
                    <div className="project-preview">
                        <img src={img} />
                    </div>
                ) : <div className="project-preview project-preview-blank"> </div>}

            </div>
            <div className="project-right">
                <div className="project-details">
                    <h2 className="project-title">{name}</h2>
                    <p className="project-text">
                        {desc}
                    </p>
                    <h2 className="project-title">Tech</h2>
                    <p className="project-text" >
                        {tech}
                    </p>
                    <hr />
                    <div className="project-links">
                        {github.length ? (
                            <a href={github} target="_blank">GitHub</a>
                        ) : null}
                        {link.length ? (
                            <a href={link} target="_blank">Live Site</a>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="project-divider"></div>
        </div>
    )
}
export default Project;