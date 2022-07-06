import "./ResumeBuilder.css"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect } from "react";
import { experience, contact, skills, projects } from "../../portfolioInfo";

/*PDF CONVERTER*/

const captureElement = (handleDownloadDone, resumeDownloadType) => {
    const x = document.getElementById("resume");
    html2canvas(x).then(canvas => {
        const img = canvas.toDataURL("image/jpeg");
        const doc = new jsPDF({
            unit: "in",
            format: [14, 8.5]
        });
        doc.addImage(img, "JPEG", 0, 0, 8.5, 14);
        if (resumeDownloadType === "pdf") {
            doc.save(`${firstname} ${lastname}'s Resume.pdf`);
        }
        else {
            window.open(URL.createObjectURL(doc.output("blob")));
        }
        handleDownloadDone();
    })
}
/*SKILLS*/

const loadResumeSkills = () => {
    const output = [];
    for (let i = 0; i < skills.length; i++) {
        const skill1 = skills[i]
        const skill2 = skills[i + 1];
        output.push(
            <li className="resume-skill-wrapper">
                <div className="resume-skill-item">•&nbsp;{skill1}</div>
                {skill2 !== undefined ? (<div className="resume-skill-item">•&nbsp;{skill2}</div>) : null}
            </li>
        )
        i++;
    }
    return output;
}
/*EXPERIENCE*/
const loadResumeJobDesc = (desc) => {
    return desc.map(x => {
        return <li>{x}</li>
    })
}
const loadResumeExperience = () => {
    return experience.map(({ company, title, date, desc }, index) => {
        return (
            <li className="resume-section-content-item">
                <h2 className="resume-job-company">{company}</h2>
                <div className="resume-job-title">
                    <h3>{title}</h3>
                    <h3>{date}</h3>
                </div>
                <ul className="resume-job-desc">
                    {loadResumeJobDesc(desc)}
                </ul>
            </li>
        )
    })
}
/*PROJECTS*/

const loadResumeProjects = () => {
    return projects.map(({ name, desc, github }) => {
        return (
            <li className="resume-project-item">
                <h3 className="resume-project-name">{name}</h3>
                <h3 className="resume-project-github">{github}</h3>
                <p className="resume-project-desc">{desc}</p>
            </li>
        )
    })
}
function ResumeBuilder({ handleDownloadDone, resumeDownloadType }) {
    useEffect(() => {
        captureElement(handleDownloadDone, resumeDownloadType);
    }, []);
    return (
        <section id="ResumeBuilder">
            <div id="container"></div>
            <div id="resume">
                <div className="resume-head resume-side-offset">
                    <h1>{contact.firstname}&nbsp;{contact.lastname}</h1>
                    <div className="resume-contact">
                        <hr />
                        <h3>{contact.email}</h3>
                        <h3>{contact.github}</h3>
                        <h3>{contact.location}</h3>
                    </div>
                </div>
                <div className="resume-section resume-side-offset">
                    <div className="resume-section-title">
                        <h3>Skills</h3>
                    </div>
                    <ul className="resume-section-content resume-section-skills">
                        {loadResumeSkills()}
                    </ul>
                </div>
                <div className="resume-section resume-side-offset">
                    <div className="resume-section-title">
                        <h3>Experience</h3>
                    </div>
                    <ul className="resume-section-content">
                        <hr className="resume-section-splitter" />
                        {loadResumeExperience()}
                    </ul>
                </div>
                <div className="resume-section resume-side-offset">
                    <div className="resume-section-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="resume-section-content">
                        <hr className="resume-section-splitter" />
                        <ul className="resume-projects-container">
                            {loadResumeProjects()}
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default ResumeBuilder;