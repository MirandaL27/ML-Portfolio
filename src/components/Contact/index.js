import React from 'react';

const Contact = () => {
    return (
        <div className = "color-1 vh-1">
            <h2 className = "p-3 black-background">Contact</h2>
            <form className="contact-form p-3">
                <div className = "flex-row p-3">
                    <label className = "half-width black-background p-3" htmlFor='name'>Name: </label>
                    <input className = "name half-width light-green-background thin-border p-2 box font color-2 no-outline" type="text" id="name"></input>
                </div>
                <div className = "flex-row p-3">
                    <label className = "half-width black-background p-3" htmlFor='email'>Email Address: </label>
                    <input className = "email half-width light-green-background thin-border p-2 box font color-2 no-outline" type="text" id="email"></input>
                </div>
                
                <div className = "flex-row p-3">
                    <label className = "half-width black-background p-3" htmlFor='message'>Message: </label>
                    <input className = "message half-width light-green-background thin-border p-2 box font color-2 no-outline" type="textarea" id="message"></input>
                </div>
                <button className = "p-2 light-green-background font color-2 thin-border btn">Submit</button>
            </form>
        </div>
    );
}

export default Contact;