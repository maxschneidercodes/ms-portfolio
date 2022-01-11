import img from "../../Images/profile1.png"
function Intro() {
    return (
        <section className="intro-container intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Max Schneider</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Junior Frontend Developer </p>
            <img src={img} alt="" className="intro__img" />
        </section>
    )
}

export default Intro