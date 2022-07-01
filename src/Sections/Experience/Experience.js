import "./Experience.css";
import React, { useState } from "react";
import { experience } from "../../portfolioInfo.js";
function Experience() {
    const [selectedExp, setSelectedExp] = useState(experience[0]);

    const handleControlClick = index => e => {
        e.preventDefault();
        if (selectedExp.company !== experience[index].company) {
            setSelectedExp({ ...experience[index] });
        }
    }
    const loadControls = (expData) => {
        return expData.map((exp, index) => {
            const { company } = exp;
            return (
                <li key={`exp-control-${company}-${index}`} id={company === selectedExp.company ? "experience-controls-selected" : ""}><a onClick={handleControlClick(index)} href="">{company}</a></li>
            )
        });
    }
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
    return (
        <section id="Experience">
            <div className="section-content">
                <div className="section-title">
                    <h1>Experience</h1>
                    <hr />
                </div>
                <div id="experience-content">
                    <div id="experience-left">
                        <ul id="experience-controls">
                            {loadControls(experience)}
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