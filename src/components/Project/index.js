import React from 'react';

const Project = (props) => {
    const {
        name,
        technologies,
        pic
    } = props;

    return (
        <div>
            <img alt={`screenshot of ${name}`} src={pic}></img>
            <div>
                <h3>{name}</h3>
                <p>{technologies}</p>
            </div>
        </div>
    );
}