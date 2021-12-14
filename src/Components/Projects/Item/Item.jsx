import { useParams } from "react-router";
import projectData from "../../Data/ProjectData"

function Item() {
    const { id } = useParams()
    const item = projectData.projects.find(item => item.id === id)
    return (
        <div style={{ marginBottom: "7rem", marginTop: "7rem" }}>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    <strong>{item.title}</strong>
                </h1>
                <a className="section__subtitle section__subtitle--intro" style={{ fontSize: "1.3rem" }} href={item.link}>  {item.link} </a>
                <img src={item.img} alt="" className="intro__img" />
            </section>
        </div>
    )
}

export default Item