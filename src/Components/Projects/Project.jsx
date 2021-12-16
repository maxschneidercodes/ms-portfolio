import projectData from "../Data/ProjectData"
import { useState } from "react"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSwift, faUnity } from '@fortawesome/free-brands-svg-icons'
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

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
                return item.props.name === filterSelected
            }))
        }
    }, [filterSelected, allData])

    const types = projectData.filterData.map((item, index) => {
        let icon;
        if (item.icon === "Unity") {
            icon = faUnity
        } else if (item.icon === "Swift") {
            icon = faSwift
        } else if (item.icon === "React") {
            icon = faReact
        } else {
            icon = faListAlt
        }
        return <div >
            <button key={index} id={index} onClick={() => {
                setFilter(projectData.filterData[index].type)
            }} className={`btn2 ${projectData.filterData[index].type === filterSelected ? "btn-selected " : ""}`}>
                <FontAwesomeIcon icon={icon} size="2x" style={{ marginRight: ".5rem" }} /> {projectData.filterData[index].type}</button >
        </div>
    })

    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio-container">
                <div className="btn-container">
                    {types}
                </div>
                <div className="portfolio">
                    {filterData}
                </div>
            </div>
        </section>
    )
}

export default Projects