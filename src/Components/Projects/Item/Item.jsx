import { useParams } from "react-router";
import projectData from "../../Data/ProjectData"

function Item() {
    const { id } = useParams()
    const item = projectData.find(item => item.id === id)
    return (
        <div style={{ marginBottom: "7rem", marginTop: "7rem" }}>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    <strong>{item.title}</strong>
                </h1>
                <a class="section__subtitle section__subtitle--intro" style={{ fontSize: "1.3rem" }} href={item.link}>  {item.link} </a>
                <img src={item.img} alt="" class="intro__img" />
            </section>

            <div class="portfolio-item-individual">
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                <img src="img/portfolio-details.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Saepe et amet tenetur!Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                <p>Voluptatibus, soluta blanditiis!Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </div>
        </div>
    )
}

export default Item