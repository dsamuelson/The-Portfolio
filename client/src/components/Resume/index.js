import React from "react";

function Resume() {
    return (
        <section className="resume-cont">

            <h2> Proficiencies </h2>
            <h3>Front End</h3>
            <ul>
                <li>HTML5, CSS, Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Apollo Server</li>
                <li>Stripe</li>
            </ul>
            <h3>Backend</h3>
            <ul>
                <li>Node.js</li>
                <li>Handlebars</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>MERN Stack in general</li>
                <li>GraphQL</li>
            </ul>
            <a href={require("../../assets/pdf/resume.pdf")} download>Click to Download Resume</a>
        </section>
    )
}

export default Resume;