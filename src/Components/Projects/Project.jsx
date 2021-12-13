import projectData from "../Data/ProjectData"
function Projects() {

    const data = projectData.map(item => {
        return <div className="item-container">
            <h3 style={{ marginBottom: "2rem", marginTop: "2rem" }} className="item-center">{item.title}</h3>
            <a key={item.id} href={"/work/" + item.id} class="portfolio__item portfolio-item-individual">
                <img key={item.id} src={item.img} data={item} alt="" class="portfolio__img" />
            </a>
        </div>
    })

    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio-container">

                <div class="portfolio">
                    {data}
                </div>
            </div>
        </section>
    )
}

export default Projects