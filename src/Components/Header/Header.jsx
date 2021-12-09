import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import "../Header/Header.css"
function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 951px)").matches
    )

    useEffect(() => {
        window.matchMedia("(min-width: 951px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    let links = props.backButton ?
        <ul>
            <li><a className="nav__link" href="/#work">back</a></li>
        </ul> :
        <ul>
            <li><a className="nav__link" href="#home">Home</a></li>
            <li><a className="nav__link" href="#services">Services</a></li>
            <li><a className="nav__link" href="#about">About</a></li>
            <li><a className="nav__link" href="#work">Work</a></li>
        </ul>

    return (
        <header>
            <div class="container">
                <div className="container-nav">
                    <nav className="nav">
                        {links}
                    </nav>
                    <button onClick={() => {
                        setMenuOpen(prev => {
                            return !prev
                        })
                    }} className="menu-button nav-toggle ">  <span class="hamburger"></span> </button>
                </div>
                <nav className="nav-2" style={menuOpen && !matches ? { display: "flex" } : { display: "none" }}>
                    {links}
                </nav>
            </div>
        </header>
    )
}

export default Header

