import Home from "./screens/Home";
import About from "./screens/About";
import { Element, animateScroll as scroll } from 'react-scroll';
import Header from "./components/Header";
function App() {


  return (
    <div className="bg-amber-100 h-screen" >
      <Header />
      <Element name="home" >
        <Home />
      </Element>
      <Element name="about" className="bg-amber-100">
        <About />
      </Element>
    </div>
  )
}

export default App