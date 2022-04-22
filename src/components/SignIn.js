import * as React from 'react';
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import setSignIn from '../servicies/SignIn.service';
import { typography } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const validateEmailFormat = (email) => {
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (regexEmail.test(email));
}

export default function SignIn() {
  //State
  const [values, setValues] = useState({ email: '', password: '' });

  const [showMessage, setShowMessage] = useState({
    status: false,
    message: '',
    type: 'error'
    //Inicializo en "error" para evitar error en consola de severity not "" apenas se carga el comp.
  });

  const [token, setToken] = useState();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    console.log("submitHandler log:");
    const email = e.target.email.value;
    const password = e.target.password.value;
    //Cambiar para usar Snackbar en vez de swal QUITAR
    console.log(email);
    console.log(password);
  
    //email -> challenge@alkemy.org
    //password -> react
    setSignIn(values)
      .then(res => {
        console.log("Usuario creado correctamente.");
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        //Para borrar localStorage data
        //localStorage.clear()
        setShowMessage({
          status: true,
          message: 'El usuario se logueo correctamente!',
          type: 'success'
        });
        navigate("/List");

      })
      .catch((err) => {
        console.log("Hubo un error en la llamada: ", err)
            setShowMessage({
                status: true,
                message: 'Ocurrio un error al loguearse.',
                type: 'error'
            })
      })
      .finally( () => {
        console.log("termino la llamada.") 
     });
  
  }

  const handleClose = () => {
    setShowMessage({ ...showMessage, status: false });
  }

  //Copiado de Mui->TextField
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
  const marginXY = {m: '2px 0px'};

  return (
    <div>
      <div className="avatar-container">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
      </div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <ValidatorForm onSubmit={submitHandler}>
        <TextValidator sx={marginXY} id="emailId"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          validators={['required', 'isEmail']}
          errorMessages={['Este campo es obligatorio', 'No es un mail valido']}
        />
        <TextValidator sx={marginXY} id="passwordId"
          label="Contraseña"
          variant="outlined"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          validators={['required']}
          errorMessages={['Este campo es obligatorio']}
        />
        {/*Cambiar a componente Button de MUI */}
        {/* <button type="submit">Ingresar</button> */}
        <Button variant="contained" type="submit" sx={marginXY}> Ingresar </Button>
      </ValidatorForm>
      <Snackbar open={showMessage.status} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={showMessage.type} >
          {showMessage.message}
        </Alert>
      </Snackbar>
    </div>
  );
}