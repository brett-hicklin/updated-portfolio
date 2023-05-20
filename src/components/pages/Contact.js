import React, { useState } from 'react';


export default function Contact(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleNameBlur() {
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  }

  function handleEmailBlur() {
    if (email.trim() === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  }

  function handleMessageBlur() {
    if (message.trim() === '') {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === '') {
      setNameError('Name is required');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
    }
    if (message.trim() === '') {
      setMessageError('Message is required');
    }

    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
    
      setName('');
      setEmail('');
      setMessage('');
      console.log('Form submitted!');
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      
    <label>
      Name:
      <input
          type="text"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          required
        />
         {nameError && <div>{nameError}</div>}
    </label>
    <br />
    <label>
      Email:
      <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
        />
        {emailError && <div>{emailError}</div>}
    </label>
    <label>
      Message:
      <input
          type="message"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleMessageBlur}
          required
        />
        {messageError && <div>{messageError}</div>}
    </label>
    <br />
    <button type="submit">Submit</button>
  
    </form>
  )
}











