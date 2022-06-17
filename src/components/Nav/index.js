import React from 'react';



function Nav() {
    return (
        <header>
            <nav className="flex-row space-between px-2">
                <h1>
                    Raymond Williams
                </h1>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li className="mx-1">
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;