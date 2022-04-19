import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const submitHandler = e => {
  e.preventDefault();
  console.log("submitHandler log:");
  const email = e.target.email.value;
  const password = e.target.password.value;
  if(email === "" || password === "") {
    //alert("Email or Password is empty.");
    swal("Email or Password is empty", "Please complete both fields correctly", "error");

  }else if(!validateEmailFormat(email)){
    //alert("Invalid Email format.");
    swal("Invalid Email format.", "Correct Example: example@service.com", "error");
  }
  console.log(email);
  console.log(password);
  
  /* Debería estar una logica de validación de datos de usuario */

  axios.post('url_de_API_a_conectar',{email, password})
  .then(res => { 
    console.log(res);
    console.log(res.data);
  });

}

const validateEmailFormat = (email) => {
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (regexEmail.test(email));
}

const Label = (props) => {
  return(
    <label>
      <span>{props.name}:</span>
      <input type={props.type} name={props.name} id={props.id}></input>
    </label>
  );
}

const Login = () => {
  //Devuelve JSX
  return(
      <form onSubmit={submitHandler}>
        <div className = "form-child"><h2>Login</h2></div>
        <div className = "form-child">
          <Label name="email" type="email" id="emailId"/>
          <Label name="password" type="password" id="passwordId"/>
        </div>
        <button type="submit"> Login </button>
      </form>
  );
}

export default Login;