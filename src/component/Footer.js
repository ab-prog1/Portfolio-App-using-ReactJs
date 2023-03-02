import React from "react";
import logo from "./pic/logo1.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="conatiner text-center top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <span>FIND WITH ME</span>
          <div className="buttons footer">
            <p>Email: ab.ghorbani28@gmail.com</p>
            <p>Call: +4915215269803</p>
        <div className="buttons footer">
        <a   className="btn_shadow"  href="https://github.com/ab-prog1"    target="_blank"  >
              <span>  <AiFillGithub />     </span>
            </a>
            <a className="btn_shadow" href="https://linkedin.com/in/abolfazl-ghorbani"  target="_blank" >
              <span>  <FaLinkedinIn />  </span>
            </a>
            <a  className="btn_shadow"  href="https://researchgate.net/profile/Abolfazl-Ghorbani-2"   target="_blank"  >
              <span>   <SiResearchgate />    </span>
            </a>
        </div>
  
          </div>
          <p>© 2022. All rights reserved by ab-prog1</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
