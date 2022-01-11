import img from "../../Images/profile1.png"

function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about ">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Junior Frontend developer based in Cologne Germany </p>

            <div className="about-me__body">
                <p> My name is Max and I enjoy creating Websites and Apps.
                    <br /> I really like to solve problems and wrap my head arround difficult bugs.
                    <br /> You'll find me using modern frontend technologies to bring the project to life.
                </p>
                <p>Moreover I am a passionate Christian and I like Fitness.</p>
            </div>

            <img src={img} alt="" className="about-me__img" />
        </section>
    )
}
export default About