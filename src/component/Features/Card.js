import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow '>
        <img src={props.image} alt='' />
        <h6>{props.title}</h6>
       </div>
    </>
  )
}

export default Card
