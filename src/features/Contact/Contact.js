import './contact.css';
import React from 'react';

export const Contact = () => {

    return (
        <section className='contact-container'>
            <div className='contact'>
                <h1>
                    Contact!
                </h1>
                <p>
                    Contact me to see if I can meet your business's needs!
                </p>
            </div>
            <div className='form-container'>
                <form>
                    <input 
                        type='text'
                        placeholder='Name'
                    />
                    <input 
                        type='text'
                        placeholder='Subject' 
                    />
                    <input 
                        type='email'
                        placeholder='Email' 
                    />
                    <textarea 
                        placeholder='Let me hear it!'
                    />
                    <button type='submit'>Send!</button>
                </form>
            </div>
            <p className='author'>Made with love by <a href='https://github.com/mrmakki12'>Tyreeck</a></p>
        </section>
    )
}
