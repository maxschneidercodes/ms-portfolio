import img from "../../Images/Download.jpeg"

function About() {
    return (
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Front-end developer based out of Cologne Germany </p>

            <div class="about-me__body">
                <p>Hello! My name is Max and I enjoy creating things that live on the internet. You'll find me using modern frontend technologies that bring the creative process to life.</p>

                <p>I am a passionate Christian and I love Mountain biking.</p>
            </div>

            <img src={img} alt="" class="about-me__img" />
        </section>
    )
}
export default About