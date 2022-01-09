import './about.css';
import React from 'react';

export const About = () => {

    return (
        <section className='about-container'>
            <div className='about'>
                <h1>
                    About Me!
                </h1>
            </div>
            <div className='me-container'>
                <div className='me'>
                </div>
                <div className='me-info'>
                    <p>Hey! My name is Tyreeck. I am a web developer based in North Carolina. 
                        I love going to the gym, playing basketball and video games. I also love to draw. 
                        But what I love to do most is to push myself to become a better version of myself. I cannot wait to meet 
                        you!
                    </p>
                </div>
            </div>
        </section>
    )
}