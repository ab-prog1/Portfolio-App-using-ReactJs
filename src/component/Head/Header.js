import React, { useContext, useState } from "react";
import logo from "../pic/logo1.png";
import { HiOutlineSun } from "react-icons/hi";
import { BsMoonStars } from "react-icons/bs";
import { ThemeContext } from "../../contexts/theme";
import "./header.css";

const Header = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <div className={!isDark ? " dark-mode " : undefined}>
      <header className="header">
        <div className="container grid">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">skills</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#portfolio">project</a>
              </li>
              <li>
                <a href="#blog">publications</a>
              </li>
              <li>
                <a href="#clients">interests</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>

              <i className="moon">
                <BsMoonStars />
              </i>
              <i className="d-m ">
              <label className=" switch">
                <input type="checkbox" onClick={toggleTheme} checked={isDark} />
                <span className="slider round"></span>
              </label>
              </i>
              <i className="sun">
                <HiOutlineSun />
              </i>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
