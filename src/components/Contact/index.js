import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleBlur(event) {

        if (event.target.name === 'email') {
            const valid = validateEmail(event.target.value);
            if (!valid) {
                setErrorMessage('Your email is invalid.');
            }
        }
        else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (errorMessage.length === 0) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="color-1 vh-1">
            <h2 className="p-3 black-background">Contact</h2>
            <form className="contact-form p-3" onSubmit={handleSubmit}>
                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='name'>Name: </label>
                    <input name="name" className="name half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="text" defaultValue={name} onBlur={handleBlur} id="name"></input>
                </div>
                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='email'>Email Address: </label>
                    <input name="email" className="email half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="text" defaultValue={email} onBlur={handleBlur} id="email"></input>
                </div>

                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='message'>Message: </label>
                    <input name="message" className="message half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="textarea" defaultValue={message} onBlur={handleBlur} id="message"></input>
                </div>
                <button disabled={errorMessage} type="submit" className={(errorMessage ? "p-2 font transition disabled" : "p-2 font light-green-background color-2 thin-border transition btn")}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text p-3 black-background inline-block">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;