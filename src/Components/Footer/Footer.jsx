import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center", marginTop: "2rem", marginBottom: "3rem" }}>
                <a href="https://github.com/maxschneidercodes">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            <a style={{ fontSize: "1.2rem", marginBottom: ".5rem" }} href="/imprint">Imprint</a>
            <p style={{ fontSize: ".9rem", margin: "1rem" }}>© Max Schneider 2021 </p>
        </footer>
    )
}

export default Footer