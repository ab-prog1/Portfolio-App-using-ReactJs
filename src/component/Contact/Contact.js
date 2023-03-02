import {  useRef, useState } from "react";
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { ImMobile } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { toast } from "react-toastify";
import emailjs from "emailjs-com";


import "./Contact.css"

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

 

  const formSubmit = (e) => {
    console.log(name,email,subject,message);
    e.preventDefault()
    if (name === ''| email === ''| subject === ''| message === '') {
        toast.error("All items on our form are required.")
        return
    }
    emailjs
    .sendForm(
      "service_dsv3n4u",
      "template_s4mko4e",
      formRef.current,
      "Godb31cgu5y2TB6Lv"
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success("Your message has been sent");
        setDone(true)
      },
      (error) => {
        console.log(error.text);
        toast.error(error.text);
      }
    );


  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
             
          
                <div className=' map '>
                <div className="address  ">
                <i><CiLocationOn/></i>
                <h3>Location:</h3>
                <p>Kiel, Germany</p>
              </div>

              <div className="email">
              <i><AiOutlineMail/></i>
                <h3>Email:</h3>
                <p>ab.ghorbani28@gmail.com</p>
              </div>

              <div className="phone">
              <i><ImMobile/></i>
                <h3>Call:</h3>
                <p> +4915215269803</p>
              </div>
                  <div >
                  <iframe className="test" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.8732558168053!2d10.144686655329467!3d54.328487663047824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b256445dbb150f%3A0x67d7caaab9460fb1!2sKiellinie%205%2C%2024105%20Kiel!5e0!3m2!1sen!2sde!4v1676986127692!5m2!1sen!2sde" 
                  width="640"
                  height="421"
                  style={{border:"0"}}
                  allowFullScreen=""
                  loading="lazy"
                  ></iframe>
                </div>
                
                </div>
              
           
              </div>
            </div>

            <div className='right box_shodow'>
              <form  ref={formRef} onSubmit={formSubmit}>
                <div >
                  <div className='input '>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' onChange={(e) => setName(e.target.value)} value={name}  />
                  </div>
                  </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email}  />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' onChange={(e) => setSubject(e.target.value)} value={subject}  />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                </div>
                <button type="submit" className='btn_shadow'><span> SEND MESSAGE</span>
                  <i><FiSend/></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
