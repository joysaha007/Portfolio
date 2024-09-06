import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <>
      <div className="container contact my-5" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos='zoom-in'
        data-aos-duration='1000'
        >
            <a href='https://www.instagram.com/joy2570saha?igsh=M3gyaDlnZTZwb24w' className="items"><FaInstagram  className='icons'/></a>
            <a href='https://www.facebook.com/joysaha2570?mibextid=ZbWKwl' className="items"><CiFacebook className='icons' /></a>
            <a href='https://www.linkedin.com/in/joysaha007'  className="items"><CiLinkedin className='icons' /></a>
            <a href='https://github.com/joysaha007' className="items"><FaGithubSquare className='icons' /></a>
            <a href="mailto:joysaha2570@gmail.com" className="items"><SiGmail className='icons' /></a>
        </div>
      </div>
    </>
  )
}

export default Contact
