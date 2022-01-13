import React, { useState, useEffect } from "react";

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
            <li><a className="nav__link" href="/#home">Home</a></li>
            <li><a className="nav__link" href="/#work">Projects</a></li>
            <li><a className="nav__link" href="/#about">About</a></li>
            <li><a href="mailto:maxschneidercodes@gmail.com" className="btn3" >Say Hello! 👋</a></li>
        </ul> :
        <ul>
            <li><a className="nav__link" href="#home">Home</a></li>
            <li><a className="nav__link" href="#work">Projects</a></li>
            <li><a className="nav__link" href="#about">About</a></li>
            <li><a href="mailto:maxschneidercodes@gmail.com" className="btn3" >Say Hello! 👋</a></li>
        </ul>

    return (
        <header>
            <div className="container">
                <div className="container-nav">
                    <nav className="nav">
                        {links}
                    </nav>
                    <button onClick={() => {
                        setMenuOpen(prev => {
                            return !prev
                        })
                    }} className="menu-button nav-toggle ">  <span className="hamburger"></span> </button>
                </div>
                <nav className="nav-2" style={menuOpen && !matches ? { display: "flex" } : { display: "none" }}>
                    {links}
                </nav>
            </div>
        </header>
    )
}

export default Header

