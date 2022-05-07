import React, { useState } from 'react';

function ContactForm(props) {
    // ability to initialize the values of the state, we want to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '', }); // defaultValue = {formState.name}
    const { name, email, message } = formState; // we destructure it instead, defaultValue={name}, etc.

    // This function will sync the internal state of the component formState with the user input from the DOM. 
    // The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
    // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        // e.target.name matches the attribute on the input element, thus being dynamic
        
    }

    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
    // Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously.
};

// name of the function needs to be in the export statement.
export default ContactForm;