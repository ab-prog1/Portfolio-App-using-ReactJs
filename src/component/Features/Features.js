import React, { useContext } from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import { ThemeContext } from "../../contexts/theme";


const Features = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      <section className=  {!isDark ? "dark-mode features":  "features"  } id='features'>
        <div className='container features '>
          <div className='heading'>
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>

          <div className='fe-content '>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Features
