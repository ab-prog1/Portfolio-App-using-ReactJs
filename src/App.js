import React, { useContext } from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "./contexts/theme";
import "./App.css"



const App = () => {
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className= {!isDark ? 'dark-mode' :  undefined } >
      <Header />
      <Home />
      <Features />
      <Resume />
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
      <ToastContainer />  
      </div>
  )
}

export default App
