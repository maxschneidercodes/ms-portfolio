import img from "../../Images/Download.jpeg"

function About() {
    return (
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Front-end developer based out of Cologne</p>

            <div class="about-me__body">
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

            </div>

            <img src={img} alt="" class="about-me__img" />
        </section>
    )
}
export default About