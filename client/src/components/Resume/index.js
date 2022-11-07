import React from "react";

function Resume() {
    return (
        <section className="resume-cont">

            <h2> Proficiencies </h2>
            <h3>Front End (In Brief)</h3>
            <ul>
                <li>HTML5, CSS, Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Apollo Server and GraphQL</li>
                <li>Stripe</li>
                <li>And More...</li>
            </ul>
            <h3>Backend (In Brief)</h3>
            <ul>
                <li>Node.js (MERN Stack in general)</li>
                <li>Handlebars</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>And More...</li>
            </ul>
            <a href={require("../../assets/pdf/resume.pdf")} className='dlResume' download>Click to Download Resume</a>
        </section>
    )
}

export default Resume;