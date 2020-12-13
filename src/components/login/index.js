import React, { useState } from 'react' ;
import { useFirebaseApp } from 'reactfire' ;
import 'firebase/auth'
 
const Login = () => {
  // User State
  const [user, setUser] = useState({
    email : '' ,
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
  const firebase = useFirebaseApp();
 
  // Submit function (Log in user)
  const handleSubmit = e => {
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( result => {
        // if (!result.user.emailVerified) {
        //   setUser({
        //     ...user,
        //     error : 'Please verify your email before to continue' ,
        //   })
        //   firebase.auth().signOut();
        // }
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
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        <button type="submit">Log in</button>
      </form>
      {user.error && <h4>{user.error}</h4>}
    </div>
    </>
  )
};
 
export default Login;