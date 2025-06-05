import React from 'react'
import './ContactMe.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const ContactMe = () => {
    return (
        <div className='contact-me' id="contact">
            <div className="container">
                <h4>Contact Me</h4>
                <p>You can Book an Apointment or ask for consulation by contacting Dr.Sara Via :</p>
                <div className="contact">
                    <div className='icon-card'>
                        <FaFacebookSquare className='icon-media' />
                        <a href="https://www.facebook.com/share/1EM65Zsq44/?mibextid=qi2Omg">sara Jouney</a>
                        {/* <p>www.sarahJpuney.cpm</p> */}
                    </div>
                    <div className='icon-card'>
                        <FaPhoneSquareAlt className='icon-media' />
                        <p>098665436</p>
                    </div>
                    <div className='icon-card'>
                        <FaInstagram className='icon-media' />
                        <a href="https://www.instagram.com/sarajouney?igsh=YmN2cWx6d2x0dGhv">sarajouney/instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
