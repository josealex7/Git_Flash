import React, {useState} from "react";
import {TextField, 
        Typography, 
        FormControl, 
        InputLabel, 
        OutlinedInput, 
        InputAdornment, 
        IconButton,
        Button,
        MenuItem,
        Box
    } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles/Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const SingUp = () => {

  const MySwal = withReactContent(Swal)

    const [Usuario, setUsuario] = useState({
        FullName: "",
        Birthday: "",
        Question: "",
        Answer: "",
        User: "",
    });

    //TextField pregunta
    const currencies = [
        {
          value: 'what is the name of your first pet?',
          label: 'what is the name of your first pet?',
        },
        {
          value: 'what is your city of birth',
          label: 'what is your city of birth?',
        },
        {
          value: 'What is the name of your first boyfriend',
          label: 'What is the name of your first boyfriend?',
        },
        {
          value: 'What is the name of your best friend',
          label: 'What is the name of your best friend?',
        },
      ];

        const [currency, setCurrency] = React.useState('What is the name of your best friend');
      
        const handleChangeOption = (event) => {
          setCurrency(event.target.value);
        };
    //TextField ----------------------------------------------------------------------

    //Password -----------------------------------------------------------------------
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleUser = (e) => {
        const valor = e.target.value
        const nombre = e.target.name
        setUsuario({
          ...Usuario,
          [nombre]: valor
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const GuardarUsuario = (e) =>{
        e.preventDefault();
          let DataUsuario = []
          let existe = true;
          if(localStorage.getItem('Usuario')){
              DataUsuario = JSON.parse(localStorage.getItem('Usuario'))
              
              DataUsuario.forEach(element =>{
                  if(element.User==Usuario.User){
                      existe=false;
                      console.log("El usuario ya existe")
                      MySwal.fire({
                        title: 'Error!',
                        html: 'The user entered already exists!',
                        icon: 'error'
                      })
                  }
              })
          }


          if(existe){
            DataUsuario.push({
                "FullName": Usuario.FullName,
                "Birthday": Usuario.Birthday,
                "Question": currency,
                "Answer": Usuario.Answer,
                "User": Usuario.User,
                "Password":values.password,
              });
              localStorage.setItem('Usuario', JSON.stringify(DataUsuario));
              MySwal.fire({
                title: 'Good job!',
                html: 'User has been successfully registered!',
                icon: 'success'
              }).then(() => {
                window.location.replace('https://josealex7.github.io/Git_Flash/');
              })
          }
          
      }

    return (
        <div className="contenedorprincipal">
            <div className="contenedor">
                <div className="contenedor-img">
                <img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/64/000000/external-movie-stay-at-home-wanicon-two-tone-wanicon.png"/>
                </div>
                <Typography variant="h4" align={'center'}  style={{color:"#032541"}}>Create an account</Typography>
                <p>Creating an account is easy and free. Fill in the form to get started
                </p>
                <form>
                    
                    <TextField sx={{ mt   : 2, width: '100%' }} id="FullName" name="FullName" onChange={handleUser} label="Full name" variant="outlined" required />
                    <TextField
                    sx={{ mt   : 2, width: '100%' }}
                    id="Birthday"
                    name="Birthday"
                    label="Birthday"
                    type="date"
                    onChange={handleUser}
                    InputLabelProps={{
                        shrink: true
                    }}
                    required/>

                    {/* Select Recuperación ------------------------------*/}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { mt: 2, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div>
                            <TextField
                            id="Question"
                            name="Question"
                            select
                            label="please select a security question"
                            value={currency}
                            onChange={handleChangeOption}
                            align={'left'}
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </div>
                    </Box>
                    {/* Select Recuperación-----------------------------------------------*/}
                    <TextField sx={{ mt   : 2, width: '100%' }} id="Answer" name="Answer" onChange={handleUser}  label="Answer" variant="outlined" required />
                    <TextField sx={{ mt   : 2, width: '100%' }} id="User" name="User" onChange={handleUser} label="User" variant="outlined" required />
                    
                    <FormControl sx={{ mt   : 3, width: '100%' }} variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="Password"
                        name="Password"
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
                    <Button variant="contained" size="large" sx={{ mt   : 3, width: '100%' }} type="submit" onClick={GuardarUsuario}>Register</Button>
                </form>
            </div>
        </div>
    )
}