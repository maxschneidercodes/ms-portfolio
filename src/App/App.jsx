import Header from "../Components/Header/Header"
import Projects from '../Components/Projects/Project';
import { Routes, Route } from 'react-router';
import Intro from '../Components/Intro/Intro';
import Work from '../Components/Work/Work';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';
import Item from '../Components/Projects/Item/Item';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Header backButton={false} />
            <Intro />
            <Work />
            <About />
            <Projects />
            <Footer color1="#fff" color2="#333" />
          </div>
        }>
        </Route>
        <Route path="/work/:id" element={
          <div>
            <Header backButton={true} />
            <Item />
            <Footer color1="#0c192f" color2="#fff" />
          </div>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
