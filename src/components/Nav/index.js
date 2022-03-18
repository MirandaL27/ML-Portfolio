import React from 'react';

function Nav(props) {
    const {currentSelectedLink, setCurrentSelectedLink} = props;
    return (
        <header>
            <h1>
                <span onClick={() => setCurrentSelectedLink("About")} >Miranda Lane</span>
            </h1>
            <nav>
                <ul>
                    <li className={(currentSelectedLink==='About' ? "link": "link-navActive")}>
                        <span onClick={() => setCurrentSelectedLink("About")}>About</span>
                    </li>
                </ul>
                <ul>
                    <li className = {(currentSelectedLink==='Contact' ? "link": "link-navActive")}>
                        <span onClick={() => setCurrentSelectedLink("Contact")}>Contact</span>
                    </li>
                </ul>
                <ul>
                    <li className = {(currentSelectedLink==='Portfolio' ? "link": "link-navActive")}>
                        <span onClick={() => setCurrentSelectedLink("Portfolio")}>Portfolio</span>
                    </li>
                </ul>
                <ul>
                    <li className = {(currentSelectedLink==='Resume' ? "link": "link-navActive")}>
                        <span onClick={() => setCurrentSelectedLink("Resume")}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

