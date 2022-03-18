import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>Resume</h2>
            <a href={require("../../assets/ml_resume.pdf")} download>Download Resume</a>
            <h3>Front-end Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>Bulma</li>
                <li>JQuery</li>
                <li>JSON</li>
            </ul>

            <h3>Back-end Skills</h3>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>HTML</li>
            </ul>

            <h3>Work Experience</h3>
            <p>Software Developer Engineer: Yardi Systems Inc. Jul 2018 – Jan 2021</p>

            <p>Full stack development with the .NET framework. 
            Used the ASP.NET Web Forms and ASP.NET MVC models to create dynamic web pages.  
            Used SQL Server to create backend solutions.  
            Used Yardi’s proprietary SSRS language to produce reports. 
            Used ETL to import data objects in bulk from CVS files. 
            Extensively used the Visual Studio IDE</p>
            <ul>
                <li>Designed schema and dynamic web pages for clients managing single family homes.  </li>
                <li>Used ETL to import large amounts of data and created applications for bulk data conversion 
                    for clients managing single family homes.</li>
                <li>Refactored and maintained Code for clients managing military housing. </li>
                <li>Used a Proprietary SSRS language to produce reports for clients managing 
                    military housing and single family homes.</li>    
            </ul>

            <h3>Additional Relevant Experience</h3>
            <ul>
                <li>Received a college grant to attend a Stanford workshop called 
                    “Designing Musical Games :: Gaming Musical Design.” </li>
                <li>Participated in the 2015 AMC-ICPC regional programming competition. </li>    
            </ul>
        </div>
    );
}

export default Resume;