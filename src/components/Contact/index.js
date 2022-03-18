import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            <form className="contact-form">
                <label htmlFor='name'>Name: </label>
                <input type="text" id="name" className="name"></input>

                <label htmlFor='email'>Email Address: </label>
                <input type="text" id="email" className="email"></input>

                <label htmlFor='message'>Message: </label>
                <input type="textarea" id="message" className="message"></input>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Contact;