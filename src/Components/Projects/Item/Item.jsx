import { useParams } from "react-router";
import projectData from "../../Data/ProjectData"

function Item() {
    const { id } = useParams()
    const item = projectData.find(item => item.id === id)
    console.log(item)
    return (
        <div>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    <strong>{item.title}</strong>
                </h1>
                <a class="section__subtitle section__subtitle--intro" style={{ fontSize: "1.3rem" }} href={item.link}>  {item.link} </a>
                <img src={item.img} alt="" class="intro__img" />
            </section>
        </div>
    )
}

export default Item