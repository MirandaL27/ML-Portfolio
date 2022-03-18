import React from 'react';

function Nav(props) {
    const {currentSelectedLink, setCurrentSelectedLink} = props;
    return (
        <header>
            <h1>
                <a href="/">Portfolio</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <span className = {(currentSelectedLink==='About' ? "link": "link-navActive")} onClick={setCurrentSelectedLink("About")}>About</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className = {(currentSelectedLink==='Contact' ? "link": "link-navActive")} onClick={setCurrentSelectedLink("Contact")}>Contact</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className = {(currentSelectedLink==='Portfolio' ? "link": "link-navActive")} onClick={setCurrentSelectedLink("Portfolio")}>Portfolio</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className = {(currentSelectedLink==='Resume' ? "link": "link-navActive")} onClick={setCurrentSelectedLink("Resume")}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

