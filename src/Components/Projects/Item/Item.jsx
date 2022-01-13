import { useParams } from "react-router";
import projectData from "../../Data/ProjectData"
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Item() {
    const { id } = useParams()
    const items = projectData.projects.find(item => item.id === id)
    const imgs = items.imgs.map((item, index) => {
        if (items.imgs.length === 0) return <div></div>
        return <div>
            <img style={{ maxWidth: "300px", margin: "1rem" }} className="portfolio__img2" src={items.imgs[index]} alt="" />
        </div>
    })
    return (
        <div style={{ marginBottom: "7rem", marginTop: "7rem" }}>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <strong>{items.title}</strong>
                </h1>

                <p className="section__subtitle section__subtitle--intro" style={{ fontSize: "1.5rem" }}></p>

                <img src={items.img} alt="" className="intro__img" />
            </section>

            <div className="portfolio2">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {
                        items.githubLink ? <div style={{ color: "#0c192f", border: "solid 3px #0c192f", borderRadius: 11, padding: ".5rem 1rem" }}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <a style={{ color: "#0c192f", marginLeft: "1rem", fontSize: "1.5rem" }} href={items.githubLink}>Github</a>
                        </div> : null
                    }
                    {
                        items.link ? <div style={{ color: "#0c192f", border: "solid 3px #0c192f", borderRadius: 11, marginLeft: "2rem", padding: ".5rem 1rem" }}>
                            <FontAwesomeIcon icon={faPlay} size="2x" />
                            <a style={{ color: "#0c192f", marginLeft: "1rem", fontSize: "1.5rem" }} href={items.link}>Start</a>
                        </div> : null
                    }
                </div>
                {imgs}
            </div>
        </div>
    )
}

export default Item