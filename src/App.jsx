import Home from "./screens/Home";
import About from "./screens/About";
import { Element, animateScroll as scroll } from 'react-scroll';
import Header from "./components/Header";

////////INITIALISING GOOGLE ANALYTICS///////////
import ReactGA from "react-ga4";
import Demo from "./screens/Demo";
import SignUp from "./screens/SignUp";
ReactGA.initialize("G-5B5PDH99X3");
ReactGA.send({  hitType: "pageview", 
                page: "/", 
                title: "Envofa" 
});
////////////////////////////////////////////////

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
      <Element name="demo" className="bg-amber-100">
        <Demo />
      </Element>
      <Element name="signup" className="bg-amber-100">
        <SignUp />
      </Element>
    </div>
  )
}

export default App