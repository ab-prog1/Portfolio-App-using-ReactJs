import React, { useState } from "react"
import { IoIosGitBranch } from 'react-icons/io';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>

      <div className= {!isDark ? "dark-mode ":  undefined   } >
      <div className=' box btn_shadow'>
        <div className='img '>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category '>
          <span onClick={toggleModal}>{props.category}</span>

          <label>
            <i className='fork'><IoIosGitBranch /></i>{props.totalFork}

            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <a className='btn_shadow' href='#popup' onClick={toggleModal}>
            <span>LIVE DEMO</span>
          </a>
          <h5 onClick={toggleModal}>{props.title}</h5>
          <a href='#popup' className='arrow' >
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
            <video    muted controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} poster={props.image}>
            
            <source  src={props.video} type="video/webm"/>
            
  
            </video>
              {/* <img src={props.image} alt='' /> */}
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.category}</h1>
              <p>{props.title}</p>
              <p>{props.detail}</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button>
                <a className='btn_shadow' href={props.link}>
                  VIEW  SOURCE CODE<i className='fas fa-chevron-right'></i>
                </a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
