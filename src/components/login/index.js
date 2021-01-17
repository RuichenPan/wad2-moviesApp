import React, { useState } from 'react' ;
import {MovieLogin} from '../../api/tmdb-api'; 

const Login = () => {
  // User State
  const [user, setUser] = useState({
    username : '' ,
    password : '' ,
    error : '' ,
  });
 
  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error : '' ,
    })
  };
 
  // Import firebase
 
  // Submit function (Log in user)
  const handleSubmit = e => {
    e.preventDefault();
    // Log in code here.

    MovieLogin(user.username,user.password)
      .then( result => {

        alert("Login!")
      })
      .catch( error => {
        // Update the error
        setUser({
          ...user,
          error : error.message,
        })
      })
  }
 
  return (
    <>
    <div className="d-flex flex-column">
    <h1 className="mx-auto">Log In</h1>
      <form onSubmit={handleSubmit} className="mx-auto">
        <input type="text" placeholder="username" name="username" onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button type="submit">Log in</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </div>
    </>
  )
};
 
export default Login;