import React, { useContext } from "react"
import hero from "../pic/logo2.jpg"
import Lebenslauf from "../pic/Lebenslauf.pdf"
import { CiLocationOn } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import { Typewriter } from "react-simple-typewriter"
import { ThemeContext } from "../../contexts/theme";
import "./Home.css"

const Home = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);


  return (
    <>
      <section className= {!isDark ? " dark-mode hero ": "  hero " } id='home'>
        <div className='container hero home f_flex '>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Abolfazl Ghorbani</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Software Engineer.", " Developer." ]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

           
            <a ><CiLocationOn /><span className='location'>Kiel, Germany</span></a>
            <p>Dynamic, detail-oriented Software Engineer With many years of experience in the industry. Skilled in a variety of programming languages, including  JavaScript, and Type.js. Proficient in agile development methodologies and experienced in the full software development lifecycle. Hold a doctorate degree in Computer Science from  University of Isfahan, Iran.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a className='btn_shadow' href={Lebenslauf}  download="" rel="follow">
                    <span>DOWNLOAD RESUME</span>
                  </a>
                  <a className='btn_shadow' href="https://github.com/ab-prog1" target="_blank" >
                    <span ><AiFillGithub/></span>
                  </a>
                  <a className='btn_shadow' href="https://linkedin.com/in/abolfazl-ghorbani" target="_blank" >
                  <span><FaLinkedinIn/></span>
                  </a>
                  <a className='btn_shadow' href="https://researchgate.net/profile/Abolfazl-Ghorbani-2" target="_blank" >
                  <span><SiResearchgate/></span>
                  </a>
                </div>
              </div>
              </div>
          </div>
          <div className="col-lg-4 righ">
            <div className="div-img-bg">
              <div className="about-img">
                <img src={hero} className="responsive" alt="me"/>
              </div>
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Home
