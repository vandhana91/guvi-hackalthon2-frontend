import React, { useState } from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import "./Login.css";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
export default function Payment() {
  
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "1234567891221345",
      password: "sri@1010"
    },
    {
      username: "2345123478463211",
      password: "surya@12"
    }
  ];

  const errors = {
    uname: "invalid card number",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        
        setIsSubmitted(true);
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>CARD NUMBER </label>
          <input type="number" name="uname" required ></input>
          {renderErrorMessage("uname")}
        </div>
        <br></br>
      
        <div className="input-container">
          <label>CVV </label>
          <input type="password" name="pass" required></input> 
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <Button variant="contained" color="primary" type="submit"
          >PAY NOW</Button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Payment Page</div><br></br>
        {isSubmitted ? <div>You have successfully paid <br></br> <br></br>
          
        </div> : renderForm}
      </div>
    </div>
  );
}