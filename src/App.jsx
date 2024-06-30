import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>

    <SocialLinks></SocialLinks>
    </>
  )
}

export default App;
