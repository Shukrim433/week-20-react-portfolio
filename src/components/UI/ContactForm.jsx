import { useState } from 'react';

// helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function ContactForm () {
    // 'email' state
    const [email, setEmail] = useState('')
    // 'name' state
    const [name, setName] = useState('')
    // 'message' state
    const [message, setMessage] = useState('')
    // 'errorMessage' state
    const [errorMessage, setErrorMessage] = useState('')


    // OnChange event handler function called whenever the user types something in an input area
    const handleInputChange = (event) => {
        const inputType = event.target.name         //the name attribute of the input area being typed in
        const inputValue = event.target.value        // the text being typed in the input area

        // update the state based on which input area (inputType) is being typed in currently
        if(inputType === 'email') {
            setEmail(inputValue)
            // check to see if email is valid while user is typing
            if(!validateEmail(email)) {
                setErrorMessage('Email is invalid')
             }
        } else if (inputType === 'name') {
            setName(inputValue)
            // if user removes text and leaves it blank, they get an error message
            if (!name) {
                setErrorMessage('Field required');
              }
        } else {
            setMessage(inputValue)
             // if user removes text and leaves it blank, they get an error message
             if (!message) {
                setErrorMessage('Field required');
              }
        }
    }

    // OnSubmit event handler function called when the form submit button is clicked
    const handleFormSubmit = (event) => {
        event.preventDefault()  // prevents form from clearing on submit

        // check if input areas are empty, if yes, dont submit, just send error message
        if (!name || !email || !message) {
            setErrorMessage('All fields are required');
            return;
        }

        // else if submit successful, we want to clear out the input after submit.
        setEmail('')
        setName('')
        setMessage('')
    }

    
    return(
        <div className='form-container'>
            <form className='form' onSubmit={handleFormSubmit}>
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                />
                <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                ></textarea>
                <button type="submit">
                    Submit
                </button>
                {errorMessage && (<div> <p className="error-message">{errorMessage}</p> </div>)}
            </form>
        </div>
    )
}