import "./Experience.css";
import React, { useState } from "react";
const experienceData = {
    "Sentry Data Systems": {
        title: "Production Support Analyst",
        date: "June 2019 - November 2021",
        desc: [
            "Designed and developed tools that made the daily workload\nmore efficient",
            "Developed jobs to automate daily tasks",
            "Performed daily system health checks",
            "Created documentation for internal tools",
            "Identify and resolve errors in data ingestion feeds",
        ],
        skills: "Git, HTML, CSS, JavaScript, Powershell, and Ruby",
        company: "Sentry Data Systems",
    },
    "RTRT.me": {
        title: "Web Developer",
        date: "AA 201239 - AAA 2323",
        desc: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
        ],
        skills: "blah blah blah",
        company: "RTRT.me",
    },
    "Freelance Web Development": {
        title: "Web Developer",
        date: "BBBB 23232 - BBBB 2323",
        desc: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
        ],
        skills: "asdfasdfasdfblah",
        company: "Freelance Web Development",
    },
}
function Experience() {
    const defaultExp = experienceData[Object.keys(experienceData)[0]];
    const [selectedExp, setSelectedExp] = useState(defaultExp);
    const loadSelectedExpData = (selectedExp) => {
        const { title, date, desc, skills } = selectedExp;
        return (
            <div id="experience-details">
                <div id="experience-details-title">
                    <h2>{title}</h2>
                    <p className="experience-details-text">{date}</p >
                </div>
                <ul id="experience-details-list">
                    {desc.map((detail, index) => {
                        return <li className="experience-details-text" key={`${selectedExp}-detail-${index}`}>{detail}</li>
                    })}
                </ul>
                <div id="experience-details-skills">
                    <h2>Skills</h2>
                    <p className="experience-details-text">{skills}</p>
                </div>
            </div>
        )
    }
    const handleControlClick = title => e => {
        e.preventDefault();
        if (selectedExp.company !== title) {
            setSelectedExp(experienceData[title]);
        }
    }
    const loadControls = (titles) => {
        return titles.map((title, index) => {
            console.log("title", title);
            return (
                <li key={`exp-control-${title}-${index}`} id={title === selectedExp.company ? "experience-controls-selected" : ""}><a onClick={handleControlClick(title)} href="">{title}</a></li>
            )
        });
    }
    return (
        <section id="Experience">
            <div className="section-content">
                <div className="section-title">
                    <h1 className="section-title">Experience</h1>
                    <hr />
                </div>
                <div id="experience-content">
                    <div id="experience-left">
                        <ul id="experience-controls">
                            {loadControls(Object.keys(experienceData))}
                        </ul>
                    </div>
                    <div id="experience-right">
                        {loadSelectedExpData(selectedExp)}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;