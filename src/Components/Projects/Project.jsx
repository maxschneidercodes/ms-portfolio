import projectData from "../Data/ProjectData"
function Projects() {

    const data = projectData.map(item => {
        return <a key={item.id} href={"/work/" + item.id} class="portfolio__item">
            <img key={item.id} src={item.img} data={item} alt="" class="portfolio__img" />
        </a>
    })

    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div class="portfolio">
                {data}
            </div>
        </section>
    )
}

export default Projects