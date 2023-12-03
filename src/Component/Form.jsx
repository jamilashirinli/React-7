import React from 'react'
const Form = () => {
const myFunction = () =>{
        alert("müvəffəqiyyətli göndərilmə");
    }
  return (
    <div>
    <form>
    <label htmlFor='name'>Name:</label>
    <input type="text" id='name' required/>
    <label htmlFor='surname'>Surname:</label>
    <input type='text' id='surname'/>
    <label htmlFor='number'>Number:</label>
    <input type='text' id='number' />
    <label htmlFor='email'>Email:</label>
    <input type="email" id='email'/>
    <label htmlFor='comment'>Comment:</label>
    <textarea id='comment'></textarea>
    <button type='submit' onClick={myFunction}>Send</button> 
    </form>
    </div>
  )
}

export default Form