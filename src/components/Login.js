import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

  //email -> challenge@alkemy.org
  //password -> react
  axios.post('http://challenge-react.alkemy.org',{email, password})
  .then(res => { 
    console.log(res);
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    //Para borrar localStorage data
    //localStorage.clear()
  });

}

const validateEmailFormat = (email) => {
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (regexEmail.test(email));
}

/* const Label = (props) => {
  return(
    <label>
      <span>{props.name}:</span>
      <input type={props.type} name={props.name} id={props.id}></input>
    </label>
  );
} */

const Login = () => {
  //State
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  //Copiado de Mui->TextField
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  //Copiado de Mui->TextField
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  //Copiado de Mui->TextField
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //Devuelve JSX
  return(
      <form onSubmit={submitHandler}>
        <div className = "form-child"><h2>Login</h2></div>
        <div className = "form-child">
          <TextField
            required
            id="emailId"
            label="Email"
            defaultValue=""
            name="email"
          />
          {/* source: Mui->TextField */}
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            id="passwordId"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {/*End Mui->TextField*/ }
          {/* Copied from https://github.com/mui/material-ui/tree/v5.6.2/docs/data/material/getting-started/templates/sign-in */}
            
          {/* End copy from github*/}
        </div>
        <button type="submit"> Login </button>
      </form>
  );
}

export default Login; 

