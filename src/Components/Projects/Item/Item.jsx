import { useParams } from "react-router";
import projectData from "../../Data/ProjectData"

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
                <a className="section__subtitle section__subtitle--intro" style={{ fontSize: "1.5rem" }} href={items.link}> {items.link ? "Test It" : ""}</a>
                <img src={items.img} alt="" className="intro__img" />
            </section>
            <div className="portfolio2">
                {imgs}
            </div>
        </div>
    )
}

export default Item