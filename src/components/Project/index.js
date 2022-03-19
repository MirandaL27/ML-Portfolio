import React from 'react';

const Project = (props) => {
    const {
        projects
    } = props;


    return (
        <div className="flex-column color-1 center-vertically">
            <div>
                <h2 className="p-3 black-background">Portfolio</h2>
            </div>
            <div>
                {projects.map((project, i) => (
                    <div className = "center-vertically flex-column p-3" key={`project${i}`}>
                        <div className="image-holder-2">
                            <a target="_blank" href={project.link}>
                                <img className="width-1 thick-border transition pic" alt={`screenshot of ${project.name}`} src={require(`../../assets/${project.pic}.jpg`)}></img>
                            </a>
                        </div>
                        <div className="black-background">
                            <h3>{project.name}</h3>
                            <p>{project.technologies}</p>
                            <p>Github Repo: <a className="no-border color-1 transition clickable" target="_blank" href={project.gitHub}>{project.gitHub}</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;