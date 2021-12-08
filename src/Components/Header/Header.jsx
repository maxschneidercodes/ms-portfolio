import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import "../Header/Header.css"
function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 951px)").matches
    )

    useEffect(() => {
        window.matchMedia("(min-width: 951px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    let links = <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
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
                    }} className="menu-button">Open</button>
                </div>
                <nav className="nav-2" style={menuOpen && !matches ? { display: "flex" } : { display: "none" }}>
                    {links}
                </nav>
            </div>
        </header>
    )
}

export default Header

