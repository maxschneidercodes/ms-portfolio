import projectData from "../Data/ProjectData"
import { useState } from "react"
import { useEffect } from "react";
function Projects() {
    const [filterSelected, setFilter] = useState("ALL");
    const [filterData, setFilterData] = useState([]);
    const [allData, setALLData] = useState([]);

    useEffect(() => {
        const data = projectData.projects.map(item => {
            return <div key={item.id} name={item.type} className="item-container">
                <a key={item.id} href={"/work/" + item.id} className="portfolio__item portfolio-item-individual">
                    <img key={item.id} src={item.img} data={item} alt="" className="portfolio__img" />
                </a>
            </div>
        })
        setALLData(data)
        setFilterData(data)
    }, [])

    useEffect(() => {
        if (filterSelected === "ALL") {
            setFilterData(allData)
        } else {
            setFilterData(allData.filter(item => {
                console.log(filterSelected)
                return item.props.name === filterSelected
            }))
        }
    }, [filterSelected, allData])

    const types = projectData.filterData.map((item, index) => {
        return <button key={index} id={index} onClick={() => {
            setFilter(projectData.filterData[index])
        }} className={`btn2 ${projectData.filterData[index] === filterSelected ? "btn-selected " : ""}`}> {projectData.filterData[index]}</button >

    })

    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio-container">
                {types}
                <div className="portfolio">
                    {filterData}
                </div>
            </div>
        </section>
    )
}

export default Projects