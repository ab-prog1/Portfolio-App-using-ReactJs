import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme";



const Card = (props) => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      <div className={!isDark ? 'dark-mode' :  undefined } >
        <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h4>{props.title}</h4>
            <h5>{props.year}</h5>
          </div>
          <div className='rate'>
            <button className='btn_shadow '><span>{props.rate}</span> </button>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
      </div>
    </>
  )
}

export default Card
