import React, {useState} from 'react';
import Project from '../../components/Project';

const Portfolio = () => {
    const [projects, setProjects] = useState([
        {
            name: "12-Tone Matrix Generator",
            technologies: "HTML/CSS/JavaScript",
            pic: "12-tone_screenshot",
            link: 'https://mirandal27.github.io/12-Tone-Matrix-Generator/',
            gitHub: "https://github.com/MirandaL27/12-Tone-Matrix-Generator"
        },
        {
            name: "Adopt A Parrot",
            technologies: "HTML/CSS",
            pic: "adopt-a-parrot_screenshot",
            link: 'https://mirandal27.github.io/Adopt-A-Parrot/',
            gitHub: "https://github.com/MirandaL27/Adopt-A-Parrot"
        },
        {
            name: "Monster-Code-Quiz",
            technologies: 'HTML/JavaScript/RoboHash API/Lordicon API',
            pic: 'monster-code-quiz-screenshot',
            link: 'https://mirandal27.github.io/Monster-Code-Quiz/',
            gitHub: "https://github.com/MirandaL27/Monster-Code-Quiz" 
        },
        {
            name: 'Lost Pet App',
            technologies: 'Handlebars/Heroku/Multer/Sequelize/Express/Node.js',
            pic: 'lost-pet-app_screenshot',
            link: 'https://lost-pet-app-project.herokuapp.com/',
            gitHub:"https://github.com/MirandaL27/lost-pet-app"
        }
    ]);

    return (
        <div>
            <Project projects={projects}/>
        </div>
    );
}

export default Portfolio;