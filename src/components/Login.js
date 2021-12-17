import React, { useState } from "react"
import {TextField, 
        Typography, 
        FormControl, 
        InputLabel, 
        OutlinedInput, 
        InputAdornment, 
        IconButton,
        Button
    } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles/Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Login = () => {

    const MySwal = withReactContent(Swal)

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const [Usuario, setUsuario] = useState();

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      

      const UsuarioLogin = (e) =>{
          e.preventDefault();
          const valor = e.target.value
          setUsuario(valor)
          console.log(Usuario); 
      }

      const ValidarUsuario = () =>{
        let existe = false;
        let dataUsuarios = [];
        if(localStorage.getItem('Usuario')){
            dataUsuarios = JSON.parse(localStorage.getItem('Usuario'))
        }

        dataUsuarios.forEach(element => {
            if(Usuario === element.User && values.password==element.Password){
                console.log('Acceso Autorizado, Bienvenido ',element.FullName);
                existe=true;
                let usuarioLogin = {
                    exist:existe,
                    User: element.User
                }
                localStorage.setItem('Auth', JSON.stringify(usuarioLogin))
                window.location.href="https://josealex7.github.io/Git_Flash/";
                // window.location.replace('/')
            }
        });

        if(!existe){
            localStorage.setItem('Auth', JSON.stringify(existe))
            console.log('Usuario no encontrado')
            MySwal.fire({
                title: 'User not found!',
                html: 'The username or password is not correct!',
                icon: 'error'
              })
        }

      }


    return (
        <div className="contenedorprincipal">
            <div className="contenedor">
                <div className="contenedor-img">
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-movie-cinema-kiranshastry-lineal-color-kiranshastry-2.png"/>
                </div>
                <Typography variant="h4" align={'center'}  style={{color:"#032541"}}>Log in into your account</Typography>
                <p>To watch the movies, as well as to get personal 
                    recommendations, you need to log in with your 
                    account. If you don't have one, you need to register
                </p>
                <form>
                    <TextField sx={{ mt   : 2, width: '100%' }} id="filled-basic" onChange={UsuarioLogin} label="User" variant="outlined" required />
                    <FormControl sx={{ mt   : 3, width: '100%' }} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
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
                    </FormControl>
                    <Button variant="contained" size="large" sx={{ mt   : 3, width: '100%' }} onClick={ValidarUsuario}>To access</Button>
                </form>
            </div>
        </div>
    )
}

