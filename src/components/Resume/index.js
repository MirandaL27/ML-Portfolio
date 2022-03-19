import React from 'react';

const Resume = () => {
    return (
        <div className="color-1 p-3">
            <div>
                <h2 className="black-background p-3 inline-block">Resume</h2>
            </div>
            <div>
                <a className="p-3 no-border color-1 transition clickable inline-block black-background" href={require("../../assets/ml_resume.pdf")} download>Download Resume</a>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Front-end Skills</h3>
            </div>
            <div>
                <ul className="no-list-style black-background p-3 inline-block">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>BootStrap</li>
                    <li>Bulma</li>
                    <li>JQuery</li>
                    <li>JSON</li>
                </ul>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Back-end Skills</h3>
            </div>
            <div>
                <ul className="no-list-style black-background p-3 inline-block">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Work Experience</h3>
            </div>
            <div>
                <p className="p-3 black-background inline-block">Software Developer Engineer: Yardi Systems Inc. Jul 2018 – Jan 2021</p>
            </div>
            <div>
                <p className="p-3 black-background inline-block">Full stack development with the .NET framework.
                    Used the ASP.NET Web Forms and ASP.NET MVC models to create dynamic web pages.
                    Used SQL Server to create backend solutions.
                    Used Yardi’s proprietary SSRS language to produce reports.
                    Used ETL to import data objects in bulk from CVS files.
                    Extensively used the Visual Studio IDE</p>
            </div>
            <div>
                <ul className="no-list-style p-3 black-background inline-block">
                    <li>Designed schema and dynamic web pages for clients managing single family homes.  </li>
                    <li>Used ETL to import large amounts of data and created applications for bulk data conversion
                        for clients managing single family homes.</li>
                    <li>Refactored and maintained Code for clients managing military housing. </li>
                    <li>Used a Proprietary SSRS language to produce reports for clients managing
                        military housing and single family homes.</li>
                </ul>
            </div>
            <div>
                <h3 className="p-3 black-background inline-block">Additional Relevant Experience</h3>
            </div>
            <div>
                <ul className="no-list-style p-3 black-background inline-block">
                    <li>Received a college grant to attend a Stanford workshop called
                        “Designing Musical Games :: Gaming Musical Design.” </li>
                    <li>Participated in the 2015 AMC-ICPC regional programming competition. </li>
                </ul>
            </div>

        </div>
    );
}

export default Resume;