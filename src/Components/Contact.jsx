function Contact(props) {
    return (
        <div style={{ margin: "4rem auto", marginTop: "5rem", display: "flex", backgroundColor: props.color1 }}>
            <div style={{ color: props.color2 }} className="footer-container">
                <h2>Get In Touch</h2>
                <a style={{ margin: "2rem", color: props.color2 }} href="mailto:maxschneidercodes@gmail.com" className="btn">Say Hello</a>
            </div>
        </div>
    )
}

export default Contact