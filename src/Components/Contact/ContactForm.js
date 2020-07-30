import React from 'react';

function ContactForm() {
    
    
    return (
        <form className="contact-form">
            <label for="name">Name: </label>
            <input type="text" className="form" name="name" />
            <label for="email">Email: </label>
            <input type="email" className="form" name="email" required/>
            <label for="nachricht">Message: </label>
            <textarea name="nachricht" rows="9" className="form" required></textarea>
        </form>
    );
}

export default ContactForm;