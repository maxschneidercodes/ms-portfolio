import { faCode, faCodeBranch, faStream } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faReact, faHtml5, faJs, faCss3, faNode, faSass, faSwift, faNpm, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Work() {
    return (
        <section className="my-services" id="services">
            <h2 className="techstack-maintitle section__title section__title--services">My Tech Stack </h2>
            <div className="services">
                <div className="work-container service">
                    <div className="techstack-title">
                        <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                        <h3>Development</h3>
                    </div>
                    <ul className="techstack-ul">
                        <li>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <div>
                                Github
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGitAlt} size="2x" />
                            <div>
                                git
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNpm} size="2x" />
                            <div>
                                npm
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBootstrap} size="2x" />
                            <div>
                                Bootstrap
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="service">
                    <div className="techstack-title">
                        <FontAwesomeIcon icon={faCode} size="2x" />
                        <h3>Markup</h3>
                    </div>
                    <ul className="techstack-ul">
                        <li>
                            <FontAwesomeIcon icon={faHtml5} size="2x" />
                            <div>
                                HTML
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCss3} size="2x" />
                            <div>
                                CSS
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSass} size="2x" />
                            <div>
                                Sass
                            </div>
                        </li>
                    </ul>

                </div>

                <div className="service">
                    <div className="techstack-title">
                        <FontAwesomeIcon icon={faStream} size="2x" />
                        <h3>Programming</h3>
                    </div>

                    <ul className="techstack-ul">
                        <li>
                            <FontAwesomeIcon icon={faJs} size="2x" />
                            <div>
                                Javascript
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faReact} size="2x" />
                            <div>
                                React.js
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNode} size="2x" />
                            <div>
                                Node.js
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSwift} size="2x" />
                            <div>
                                Swift
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="#work" className="btn">My Work</a>
        </section>
    )
}

export default Work