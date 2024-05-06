import Home from "./screens/Home";
import { Element, animateScroll as scroll } from 'react-scroll';

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
    <div className="bg-amber-100 " >
      {/* <Header /> */}
      <Element name="home"  className=" ">
        <Home />
      </Element>
      <Element name="demo" className="">
        <Demo />
      </Element>
      <Element name="signup" className="">
        <SignUp />
      </Element>
    </div>
  )
}

export default App