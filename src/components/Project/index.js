import React from 'react';

const Project = (props) => {
    const {
        projects
    } = props;


    return (
        <div>
            <h2>Portfolio</h2>
            {projects.map((project, i) => (
                <div key = {`project${i}`}>
                <a target="_blank" href={project.link}>
                    <img alt={`screenshot of ${project.name}`} src={require(`../../assets/${project.pic}.jpg`)}></img>
                </a>
                <div>
                    <h3>{project.name}</h3>
                    <p>{project.technologies}</p>
                </div>
                </div>
            ))}
            
        </div>
    );
}

export default Project;