import React from 'react';

const About = () => {
    return (
        <div className = "color-1 flex-row center-vertically space-evenly">
            <div className="image-holder-1">
                <img className="width-1 thick-border" alt="picture of Miranda Lane" src={require("../../assets/madphoto.com-34_pp.jpg")}></img>
            </div>
            <div className = "half-width">
            <h2 className = "black-background">About</h2>
            <p className='black-background'>     I'm a creative person who also has a strong coding background. 
                I graduated from the University of California Santa Barbara in june of 2018 with a BA in musical composition and a 
                BS in computer science. As a computer scientist and a musician, I'm always especially interested in projects where
                the two fields overlap.   
            </p>
            <br/>
            <p className="black-background">     I Worked for three years as a full stack developer for Yardi Systems from 2018 to 2021. As such I have extensive
                experience with VB.Net, C#, the .Net framework, and SQL server, along with moderate experience with HTML, CSS and 
                Javascript. I'm currently enrolled in the coding bootcamp of the University of Arizona to sharpen my skills 
                in web developement.
            </p> 
            </div>
        </div>
    );
}

export default About;