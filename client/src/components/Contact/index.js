import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client'
import {ADD_RESPONSE} from '../../utils/mutations'


function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    const [addResponse] = useMutation(ADD_RESPONSE);

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is not Valid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }  
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
            console.log('Handle Form', formState)
        }
        
        
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const mutationResponse = await addResponse({
            variables: {
                name: e.target.name.value || formState.name,
                email: e.target.email.value || formState.email,
                message: e.target.message.value || formState.message
            }
        })
        setErrorMessage("Successfully submitted. Please allow some time for a response and be sure to check your SPAM folder.")
      
      }

    return (
        <section className="form-cont">
          <h2>Contact me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <br />
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <br />
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>)}
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default ContactForm;