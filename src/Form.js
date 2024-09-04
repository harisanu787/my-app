import React from 'react'

const Form = (props) => {
  return (
    <>
        <form class="main">
            <h2>Login</h2>
            <label> Username :</label><br></br>
            <input type="text"/>
            <br></br>
            <label>Password:</label><br></br>
            <input type="password" />
            <button>Login</button>
            
        </form>
    </>
  )
}

export default Form;