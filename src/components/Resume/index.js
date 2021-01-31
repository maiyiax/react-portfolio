import React from 'react';

const Resume = () => {

    return (
        <div>
            <h1>Resume</h1>
            <form method="get" action="../../assets/template/resume-template.docx">
                <button type="submit">Download my resume!</button>
            </form>

            <h2>Front-End Proficiencies</h2>

            <ul>
                <li>HTMK</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h2>Back-end Proficiencies</h2>

            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </div>
    )
}

export default Resume;