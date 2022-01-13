import Header from "../Components/Header/Header"
import Projects from '../Components/Projects/Project';
import { Routes, Route } from 'react-router';
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';
import Item from '../Components/Projects/Item/Item';
import Imprint from "../Components/Imprint"
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Header backButton={false} />
            <Intro />
            <Projects />
            <About />
            <Footer />
          </div>
        }>
        </Route>
        <Route path="/work/:id" element={
          <div>
            <Header backButton={true} />
            <Item />
            <Footer />
          </div>
        }>
        </Route>
        <Route path="/imprint" element={
          <div className="container">
            <Header backButton={true} />
            <Imprint />
            <Footer />
          </div>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
