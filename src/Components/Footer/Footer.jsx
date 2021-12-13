function Footer(props) {
    return (
        <footer className="footer " style={{ backgroundColor: props.color1 }} id="contact">
            <div style={{ color: props.color2 }} className="footer-container">
                <h2>Get In Touch</h2>
                <a style={{ margin: "2rem", color: props.color2 }} href="mailto:maxschneidercodes@gmail.com" className="btn">Say Hello</a>
            </div>
        </footer>
    )
}

export default Footer