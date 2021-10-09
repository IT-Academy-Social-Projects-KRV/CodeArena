import React, { Component } from 'react';
import facebooklogo from "./images/facebooklogo.png"
import linkedinlogo from "./images/linkedinlogo.png"
import telegramlogo from "./images/telegramlogo.png"
import twitterlogo from "./images/twitterlogo.png"
import './aboutsm.css'

function AboutSM() {
    return (
        <section className="about_sm">
             <div className="about_sm_container">
            <h2>Find us in social media</h2>
                <ol>
                    <li><a href="https://www.linkedin.com/" target="_blank"><img src={linkedinlogo}/></a></li>
                    <li><a href="https://twitter.com/login" target="_blank"><img src={twitterlogo}/></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank"><img src={facebooklogo}/></a></li>
                    <li><a href="https://web.telegram.org/k/" target="_blank"><img src={telegramlogo}/></a></li>                
                </ol>
            </div>
        </section>
    )
}
export default AboutSM;
