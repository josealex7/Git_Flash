import { TextField, FormControl, FilledInput, FormHelperText, InputAdornment, IconButton, Button } from '@mui/material';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/NavbarUser.css'

const NavbarUser = () =>{
    return(
         <div>
            <header className='headerNav'>
                <nav className='NavHeader'>
                <img  className='imgLogo' src="https://img.icons8.com/emoji/64/000000/ticket-emoji.png"/>
                    <Link className='link link1' to="/movies">Movies</Link>
                    <TextField sx={{ mx:2, width: '30%' }} id="filled-basic" label="Seacrh" variant="filled" color='warning' style={{backgroundColor:"#DDDDDD", color:"white"}}/>
                    <Link className='link ' to="/logout">Log out</Link>
                    <Link className='link ' to="/profilepage">Profile</Link>
                </nav>
            </header>
        </div>
    )
}

export default NavbarUser;