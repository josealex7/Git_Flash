import { TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card } from '@mui/material'
import { Link } from "react-router-dom";
import '../styles/NavbarUser.css'
import '../styles/search.css'


const NavbarUser = () =>{
        const [searchField, setSearchField] = useState("");
        const [peliculas, setPeliculas] = React.useState([]);
        const [busqueda, setBusqueda] = useState([])
        const [searchShow, setSearchShow] = useState(false); 

        const getData = () => {
            let url = ("https://blockmaster-backend.herokuapp.com/peliculas/")
            axios.get(url)
            .then(response => {        
                setPeliculas(response.data);
        }).catch(error => {
            console.log(error);
        })
        }

        React.useEffect(() => {
            getData()
        }, [])

        const handleChangeSearch = e => {
            setSearchField(e.target.value);

            var element = document.getElementById('contenedorPrincipalBusqueda')
            if(e.target.value===""){
                setSearchShow(false);
                element.style.display = "none";
            }
            else {
                validarPalabra()
                setSearchShow(true);
                element.style.display = "inline-flex";
            }
        };

        const validarPalabra = () =>{
            let array=[]
            peliculas.forEach(element=>{
                let name = element.name.toLowerCase()
                if(name.includes(searchField.toLowerCase())){
                    array.push(
                        {
                        name:element.name,
                        image:element.image,
                        valoracion:element.valoracion
                        }
                    )
                }
            })
            setBusqueda(array)
        }
        function searchList() {
            if (searchShow) {
            return (
                busqueda.map(element =>(
                    <div className="contedorCardBusqueda">
                            <Button size="small" >
                                <Card sx={{m:2,  maxWidth: 280  }} spacing={2}>
                                    <div>
                                        <img className="imgPeli" src={element.image}></img>
          
                                </div>
                                <div className="favoritos">
                                    <img src="https://img.icons8.com/fluency/25/000000/star.png"/>
                                    <label >{element.valoracion}</label>
                                </div>
                            </Card>
                        </Button>  
                    </div>    
          ))
      )
                }
}


    return(
         <div className='divContenedorNav'>
            <header className='headerNav'>
                <nav className='NavHeader'>
                <img  className='imgLogo' src="https://img.icons8.com/emoji/64/000000/ticket-emoji.png"/>
                    <Link className='link link1' to="/movies">Home</Link>
                    <TextField sx={{ mx:2, width: '30%' }} 
                    id="searcher" 
                    type = "search" 
                    placeholder = "Search People"  
                    onChange = {handleChangeSearch} 
                    label="Search" 
                    variant="filled" 
                    color='warning' 
                    style={{backgroundColor:"#DDDDDD", color:"white"}}/>                    
                    <Link className='link ' to="/logout">Log out</Link>
                    <Link className='link ' to="/profilepage">Profile</Link>
                </nav>
            </header>
                <div id="contenedorPrincipalBusqueda" className="contenedorPrincipalBusqueda">
                    {searchList()}
                </div>            
        </div>
    )
}

export default NavbarUser;