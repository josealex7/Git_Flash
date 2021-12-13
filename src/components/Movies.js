import React from "react"
import '../styles/Movies.css'
import '../styles/detalleMovie.css'
import axios from "axios"
import SliderPeliculas from './Peliculas/PintarPeliculas'
import { Typography, 
    Button, 
    Card, 
    CardMedia, 
    Slide,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Movies = () => {

    const [detallePelicula, setDetallePelicula] = React.useState({
        id:0,
        name:"",
        valoracion:"",
        image:"",
        trailer:"",
        categoria:"",
        descripcion:""
    })

    const [peliculas, setPeliculas] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    
    
    const getData = () => {
            let url = ("https://blockmaster-backend.herokuapp.com/peliculas/")
            axios.get(url)
            .then(response => {
                    
                    let array = response.data
                    console.log(array)
                    setPeliculas(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
  
    const handleClickOpen = (e,id) => {
      detalleMovie(id)
      setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };
      
    const detalleMovie = (id) =>{
       peliculas.forEach(element=>{
           if(element.id===id){
               setDetallePelicula({
                id:element.id,
                name:element.name,
                valoracion:element.valoracion,
                image:element.image,
                trailer:element.trailer,
                categoria:element.categoria,
                descripcion:element.descripcion
               })
           }
       })
    }

    const masPopulares = () =>{
        let masPop = peliculas;
        masPop.sort(function (a, b){
            return (b.valoracion - a.valoracion)
        })
        actualizarPelis(masPop)
    }

    const menosPopulares = () =>{
        let masPop = peliculas;
        masPop.sort(function (a, b){
            return (a.valoracion - b.valoracion)
        })
        actualizarPelis(masPop)
        
    }

    const actualizarPelis = (masPop) =>{
        let newArray=[]
        masPop.forEach(element=>{
            newArray.push(element);
        })
        setPeliculas(newArray)
    }

    React.useEffect(()=>{
        getData()
    }, [])

    console.log(detallePelicula);

    return (
        <div>
            <div  className="contenedor-principal">
            
            <SliderPeliculas/>
            <div className="contenedorBotones">
                <Button variant="contained" sx={{ m:2 }} onClick={getData}>All movies</Button>
                <Button variant="contained" sx={{ m:2 }} onClick={masPopulares}>More popular</Button>
                <Button variant="contained" sx={{ m:2 }} onClick={menosPopulares}>less popular</Button>
            </div>
            
            <Typography variant="h4" sx={{ mx: 6}} color={'white'}>Todas las peliculas</Typography>
            <div className="contenedorPeli">
            <div className="contenedorPeliculas">
            {
                peliculas.map(element=>(
                <div className="contedorCard">
                <Button size="small" onClick={(e) => handleClickOpen(e,element.id)}>
                    <Card sx={{m:2,  maxWidth: 280  }} spacing={2}>
                        <div>
                            <img className="imgPeli" src={element.image}></img>
                        </div>
                        
                            <div className="favoritos">
                                <img src="https://img.icons8.com/fluency/25/000000/star.png"/>
                                <label >
                                    {element.valoracion}
                                </label>
                            </div>
                        
                    </Card>
                </Button>  
                </div>                 
                ))
            }
            </div>
            </div>
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    >
                    <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Movie: {detallePelicula.name}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                    save
                    </Button>
                </Toolbar>
                </AppBar>
                <div class="ContenedorPrincipalDetalle" id="contenedorPrincipal">
                    <div class="div-img">
                            <img src={detallePelicula.image} alt=""></img>
                    </div>
                    <div class="contenedor-descripcion">
                        <div>
                            <div class="div-titulo">
                                <h2>{detallePelicula.name}</h2>
                                <label for="">{detallePelicula.valoracion}</label>
                            </div>
                            <div>
                                <p>
                                    {detallePelicula.descripcion}
                                </p>
                            </div>
                            <div class="contenedor-botones">
                                <div class="div-boton">
                                    
                                </div>       
                                <div class="div-boton">
                                    <iframe width="560" height="315" src={detallePelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>    
                            </div>
                        </div>
                    </div>
                 </div>
                `;
            </Dialog>
        </div>
    )
}