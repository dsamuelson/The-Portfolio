import React from "react";

function Resume() {
    return (
        <section className="resume-cont">

            <h2> Proficiencies </h2>
            <h3>Front End</h3>
            <p>
                - Html 5 <br/>
                - CSS <br/>
                - Javascript <br/>
                - React <br/>
                <br/>
                <br/>
            </p>
            <h3>Backend</h3>
            <p>
                - Node.js <br/>
                - Handlebars <br/>
                - GraphQL <br/>
                - MERN Stack <br/>
                - SQL <br/>
                - MongoDB <br/>
                - Express.js <br/>
                <br/>
                <br/>
            </p>
            <a href={require("../../assets/pdf/resume.pdf")} download>Click to Download Resume</a>
        </section>
    )
}

export default Resume;