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
          </div>
        }>
        </Route>
        <Route path="/work/:id" element={
          <div>
            <Header backButton={true} />
            <Item />
          </div>
        }>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;