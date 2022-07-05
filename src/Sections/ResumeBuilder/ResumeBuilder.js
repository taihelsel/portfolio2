import "./ResumeBuilder.css"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useEffect } from "react";

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
    return (
        <section id="ResumeBuilder">
            <div id="container"></div>
            <div id="resume">
                <div className="resume-head resume-side-offset">
                    <h1>Tai Helsel</h1>
                    <div className="resume-contact">
                        <hr />
                        <h3>tai.helsel@gmail.com</h3>
                        <h3>2536708508</h3>
                        <h3>Jupiter, FL</h3>
                    </div>
                </div>
                <div className="resume-section resume-side-offset">
                    <div className="resume-section-title">
                        <h3>Experience</h3>
                    </div>
                    <ul className="resume-section-content">
                        <hr className="resume-section-splitter" />
                        <li>
                            <h2 className="resume-job-company">Sentry Data Systems</h2>
                            <div className="resume-job-title">
                                <h3>Production Support Analyst</h3>
                                <h3>06/2019-10/2021</h3>
                            </div>
                            <ul className="resume-job-desc">
                                <li>Developed tools that helped reduce time spent on daily tasks by up to 50</li>
                                <li>Performed daily system health checks</li>
                                <li>Created documentation for internal tools</li>
                                <li>Identified and resolved errors in data ingestion feeds</li>
                                <li>Managed and escalated incidents in order to troubleshoot and resolve high priority issues</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default ResumeBuilder;