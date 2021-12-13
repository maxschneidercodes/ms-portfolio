import img from "../../Images/Download.jpeg"
function Intro() {
    return (
        <section class="intro-container intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Max Schneider</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Front-end developer</p>
            <img src={img} alt="" class="intro__img" />
        </section>
    )
}

export default Intro