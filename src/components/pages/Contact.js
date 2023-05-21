import React, { useState } from "react";
import "../../Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  }

  function handleEmailBlur() {
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  }

  function handleMessageBlur() {
    if (message.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError("Name is required");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
    }

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      setName("");
      setEmail("");
      setMessage("");
      setFormSubmitted(true);
      console.log("Form submitted!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <legend>Contact Information</legend>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            required
          />
          {nameError && <div className="error-message">{nameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageBlur}
            required
          ></textarea>
          {messageError && <div className="error-message">{messageError}</div>}
        </div>
      </div>
      {formSubmitted && (
        <div className="success-message">Thank you for your message!</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
