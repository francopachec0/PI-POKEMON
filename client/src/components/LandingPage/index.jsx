import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage/index.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


export default function LandingPage() {
    return(
        <div className='landing'>
            <br />
            <h1 className='landing_title'>¡Welcome to Pokemon App!</h1>
            <div className="social">
                <div className="item_1">
                    <div className="logo1">
                        <FaLinkedin className='linkedin'/>
                    </div>
                    <a href="https://www.linkedin.com/in/francopachec0/" target='_blank' className='a_1' rel="noreferrer"> LinkedIn</a>
                </div>
                <div className="item_2">
                    <div className="log2">
                        <FaGithubSquare className='github'/>
                    </div>
                    <a href="https://github.com/francopachec0" target='_blank' className='a_2' rel="noreferrer"> GitHub</a>
                </div>
                <div className="item_3">
                    <div className="log3">
                        <FaWhatsappSquare className='whatsapp'/>
                    </div>
                    <a href="https://wa.me/+543855374571" target='_blank' className='a_3' rel="noreferrer"> WhatsApp</a>
                </div>       
            </div>
            <Link to = '/home'>
                <button className='landing_btn'>START</button>
            </Link>
            
            <h5 className='footer'>Mini App developed by Franco Pacheco, Full-Stack Developer Student</h5>
        </div>
    );
};

