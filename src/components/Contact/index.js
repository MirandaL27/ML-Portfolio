import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(event){
        setFormState({ ...formState, [event.target.name]: event.target.value });   
    }

    function handleBlur(event) {

        if (event.target.name === 'email') {
            if (!validateEmail(event.target.value)) {
                setErrorMessage('Your email is invalid.');
            }
            else{
                if(!name.length){
                    setErrorMessage("name is required.");
                }
                else if(!message.length){
                    setErrorMessage("message is required.");
                }
                else{
                    setErrorMessage("");
                }
            }
        }
        else if(event.target.name === "name"){
            if (!event.target.value.length) {
                setErrorMessage(`name is required.`);
            } 
            else {
                if(!validateEmail(email)){
                    setErrorMessage('Your email is invalid');
                }
                else if(!message.length){
                    setErrorMessage("message is required");
                }
                else{
                    setErrorMessage('');
                }
                
            }
        }
        else{
            if(!event.target.value.length){
                setErrorMessage('Message is required.')
            }
            else{
                if(!validateEmail(email)){
                    setErrorMessage("Your email is invalid");
                }
                else if(!name.length){
                    setErrorMessage("name is required.")
                }
                else{
                    setErrorMessage('');
                }
            }
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        setFormState({name: "", email: "", message: ""});
    }

    return (
        <div className="color-1 vh-1">
            <h2 className="p-3 black-background">Contact</h2>
            <form className="contact-form p-3" onSubmit={handleSubmit}>
                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='name'>Name: </label>
                    <input name="name" className="name half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="text" value={name} onBlur={handleBlur} onChange={handleChange} id="name"></input>
                </div>
                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='email'>Email Address: </label>
                    <input name="email" className="email half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="text" value={email} onBlur={handleBlur} onChange={handleChange} id="email"></input>
                </div>

                <div className="flex-row p-3">
                    <label className="half-width black-background p-3" htmlFor='message'>Message: </label>
                    <input name="message" className="message half-width light-green-background thin-border p-2 transition box font color-2 no-outline" type="textarea" value={message} onBlur={handleBlur} onChange={handleChange} id="message"></input>
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