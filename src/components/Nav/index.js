import React from 'react';

function Nav(props) {
    const {currentSelectedLink, setCurrentSelectedLink} = props;
    return (
        <header className='flex-row space-between center-vertically p-2 black-background height-1'>
            <h1 className='biggest-font color-1 flex-row half-width'>
                <span className = 'p-1 transition clickable' onClick={() => setCurrentSelectedLink("About")} >Miranda Lane</span>
            </h1>
            <nav className="half-width">
                <ul className='no-list-style flex-row space-between'>
                    <li className={(currentSelectedLink==='About' ? "link navActive ": "link color-1")}>
                        <span className="p-3 transition clickable" onClick={() => setCurrentSelectedLink("About")}>About</span>
                    </li>
                    <li className = {(currentSelectedLink==='Contact' ? "link navActive ": "link color-1")}>
                        <span className="p-3 transition clickable"onClick={() => setCurrentSelectedLink("Contact")}>Contact</span>
                    </li>
                    <li className = {(currentSelectedLink==='Portfolio' ? "link navActive ": "link color-1")}>
                        <span className="p-3 transition clickable" onClick={() => setCurrentSelectedLink("Portfolio")}>Portfolio</span>
                    </li>
                    <li className = {(currentSelectedLink==='Resume' ? "link navActive ": "link color-1")}>
                        <span className="p-3 transition clickable" onClick={() => setCurrentSelectedLink("Resume")}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

