import React, { useState } from 'react';


export default function Contact(){

  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message,setMessage]= useState('');

  return(
    <form>
      
    <label>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br />
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <label>
      Message:
      <input type="message" value={message} onChange={(e) => setMessage(e.target.value)} />
    </label>
    <br />
    <button type="submit">Submit</button>
  
    </form>
  )
}











