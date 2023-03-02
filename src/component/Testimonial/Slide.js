import React, { useContext } from "react"
import TestimonialApi from "./TestimonialApi"
import { FaBookReader } from 'react-icons/fa';
import { ThemeContext } from "../../contexts/theme";





const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index}) => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
    <div  className= {!isDark ? 'dark-mode sleid' :  undefined } >
      <article className={`d_flex ${position}`} key={id}>
            <div className='left box_shodow'>
          <div className='int-img' >
            <img  src={image} alt='' />
          </div>
          <div className='details mtop'>
            <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label>
          </div>
        </div>

        <div className='right'>
          <div className='icon'>
            <div >
              <span className='quote'><FaBookReader size={50}/></span>
            </div>
          </div>

          <div className='content box_shodow mtop'>
            <h2>{post}</h2>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
      </div>
  )
}

export default Slide
