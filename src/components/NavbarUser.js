import { TextField, FormControl, FilledInput, FormHelperText, InputAdornment, IconButton, Button } from '@mui/material';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/NavbarUser.css'

const NavbarUser = () =>{
    return(
         <div>
            <header className='headerNav'>
                <nav className='NavHeader'>
                <img src="https://img.icons8.com/emoji/64/000000/ticket-emoji.png"/>
                    <Link className='link link1' to="/movies">Movies</Link>
                    {/* <TextField color='info' size='small' sx={{ mx   : 5, width: '30%' }} id="Search" className="Search" label="Seacrh Movies" variant="filled"></TextField> */}
                    <FormControl sx={{ mx:2, width: '40%' }} variant="filled">
                        <FilledInput
                            id="filled-adornment-weight"
                            // value={}
                            // onChange={handleChangeWeight('weight')}
                            endAdornment={<InputAdornment position="end"></InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            inputProps={{'aria-label': 'weight'}}
                        />
                    </FormControl>
                    <Link className='link ' to="/logout">Log out</Link>
                    <Link className='link ' to="/profilepage">Profile</Link>
                </nav>
            </header>
        </div>
    )
}

export default NavbarUser;