import "./ResumeBuilder.css"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect } from "react";
import { experience, contact } from "../../portfolioInfo";
const captureElement = () => {
    const x = document.getElementById("resume");
    html2canvas(x).then(canvas => {
        const img = canvas.toDataURL("image/jpeg");
        const doc = new jsPDF({
            unit: "in",
            format: [14, 8.5]
        });
        doc.addImage(img, "JPEG", 0, 0, 8.5, 14);
        // doc.save('test.pdf');
    })
}
function ResumeBuilder() {
    useEffect(() => {
        captureElement();
    }, [])
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
                        <h3>Experience</h3>
                    </div>
                    <ul className="resume-section-content">
                        <hr className="resume-section-splitter" />
                        {loadResumeExperience()}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default ResumeBuilder;