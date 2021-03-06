import projectData from "../Data/ProjectData"
import { useState } from "react"
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSwift, faUnity, faNode, faJs, } from '@fortawesome/free-brands-svg-icons'
import { faListAlt, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

function Projects() {
    const [filterSelected, setFilter] = useState("ALL");
    const [filterData, setFilterData] = useState([]);
    const [allData, setALLData] = useState([]);


    useEffect(() => {
        const data = projectData.projects.map(item => {
            return <div key={item.id} data={item} className="item-container">
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
                if (item.props.data.language === filterSelected) {
                    return item.props.data.language === filterSelected
                } else if (item.props.data.dataBase === filterSelected) {
                    return item.props.data.dataBase === filterSelected
                } else if (item.props.data.framework === filterSelected) {
                    return item.props.data.framework === filterSelected
                }
            }))
        }
    }, [filterSelected, allData])

    function getIcon(iconString) {
        let icon
        switch (iconString) {
            case "C#":
                icon = faCode
                break;
            case "TypeScript":
                icon = faCode
                break;
            case "Firebase":
                icon = faDatabase
                break;
            case "Contentful":
                icon = faDatabase
                break;
            case "MongoDB":
                icon = faDatabase
                break;
            case "ALL":
                icon = faListAlt
                break;
            case "Swift":
                icon = faSwift
                break;
            case "JavaScript":
                icon = faJs
                break;
            case "React":
                icon = faReact
                break;
            case "Node.js":
                icon = faNode
                break;
            case "Unity":
                icon = faUnity
                break;
            default:
                icon = null
        }
        return icon
    }

    const programmingLanguagesButtons = projectData.language.map((item, index) => {
        return <div >
            <button key={index} id={index} onClick={() => {
                setFilter(filter => {
                    return projectData.language[index].type
                })
            }} className={`btn2 ${projectData.language[index].type === filterSelected ? "btn-selected " : ""}`}>
                <FontAwesomeIcon icon={getIcon(item.icon)} size="2x" style={{ marginRight: ".5rem" }} /> {projectData.language[index].type}</button >
        </div>
    })

    const frameworkButton = projectData.framework.map((item, index) => {

        return <div >
            <button key={index} id={index} onClick={() => {
                setFilter(filter => {
                    return projectData.framework[index].type
                })
            }} className={`btn2 ${projectData.framework[index].type === filterSelected ? "btn-selected " : ""}`}>
                <FontAwesomeIcon icon={getIcon(item.icon)} size="2x" style={{ marginRight: ".5rem" }} /> {projectData.framework[index].type}</button >
        </div>
    })

    const databaseButton = projectData.dataBase.map((item, index) => {
        return <div >
            <button key={index} id={index} onClick={() => {
                setFilter(filter => {
                    return projectData.dataBase[index].type
                })
            }} className={`btn2 ${projectData.dataBase[index].type === filterSelected ? "btn-selected " : ""}`}>
                <FontAwesomeIcon icon={getIcon(item.icon)} size="2x" style={{ marginRight: ".5rem" }} /> {projectData.dataBase[index].type}</button >
        </div>
    })

    return (
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio-container">

                <div className="btn-container">
                    <button key={0} id={0} onClick={() => {
                        setFilter("ALL")
                    }} className={`btn2 ${filterSelected.includes("ALL") ? "btn-selected " : ""}`}>
                        <FontAwesomeIcon icon={getIcon("ALL")} size="2x" style={{ marginRight: ".5rem" }} />ALL</button>
                    {programmingLanguagesButtons}
                    {frameworkButton}
                    {databaseButton}
                </div>
                <div className="portfolio">
                    {filterData}
                </div>
            </div>
        </section>
    )
}

export default Projects