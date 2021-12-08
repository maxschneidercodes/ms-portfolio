import './App.css';
import Header from "./Components/Header/Header"
import Projects from './Components/Projects/Project';
import { Routes, Route } from 'react-router';
import img from "../src/Images/Download.jpeg"
function App() {
  return (
    <div className="App">
      <Header />

      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Max Schneider</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={img} alt="" class="intro__img" />
      </section>

      <section class="my-services" id="services">
        <h2 class="section__title section__title--services">What I do</h2>
        <div class="services">
          <div class="service">
            <h3>Design + Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="service">
            <h3>E-Commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div class="service">
            <h3>WordPress</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <a href="#work" class="btn">My Work</a>
      </section>


      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who I am</h2>
        <p class="section__subtitle section__subtitle--about">Frontend developer based out of Cologne</p>

        <div class="about-me__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <img src="img/dev-jane-02.jpg" alt="" class="about-me__img" />
      </section>

      <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My work</h2>
        <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div class="portfolio">
          <a href="html/portfolio-item.html" class="portfolio__item">
            <img src="img/portfolio-01.jpg" alt="" class="portfolio__img" />
          </a>

          <a href="html/portfolio-item.html" class="portfolio__item">
            <img src="img/portfolio-02.jpg" alt="" class="portfolio__img" />
          </a>
        </div>
      </section>


      <footer class="footer">
        <a href="mailto:hello@jane.dev" class="footer__link">maxschneidercodes@gmail.com</a>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="https://codepen.io">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="http://dribbble.com">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
