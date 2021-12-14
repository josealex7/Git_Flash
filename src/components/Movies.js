import React from "react"
import '../styles/Movies.css'
import '../styles/detalleMovie.css'
import axios from "axios"
import SliderPeliculas from './Peliculas/PintarPeliculas'
import { Typography, 
    Button, 
    Card, 
    Slide,
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    DialogActions,
    TextField,
    DialogTitle,
    DialogContent,
    DialogContentText
    } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FormDialog from './Peliculas/NewPelicula'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Movies = () => {

    const MySwal = withReactContent(Swal)

    const [detallePelicula, setDetallePelicula] = React.useState({
        id:0,
        name:"",
        valoracion:"",
        image:"",
        trailer:"",
        categoria:"",
        descripcion:""
    })

    const [idmovie, setIdmovie] = React.useState()

    const [peliculas, setPeliculas] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    const [openUpdate, setopenUpdate] = React.useState(false);
    
    const getData = () => {
            let url = ("https://blockmaster-backend.herokuapp.com/peliculas/")
            axios.get(url)
            .then(response => {        
                setPeliculas(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const DeleteMovie = () =>{
        handleClose()
        MySwal.fire({
                    target:('form-modal'),
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    
                  }).then((result) => {
                    if (result.isConfirmed) {
                      axios.delete("https://blockmaster-backend.herokuapp.com/peliculas/" + idmovie)
                    .then(response => {
                        getData()
                    }).catch(error=>{
                        console.log(error)
                    })
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
    }

    const updateData = () => {
        axios.put("https://blockmaster-backend.herokuapp.com/peliculas/" + idmovie, detallePelicula)
        .then(response => {
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    handleCloseUpdate()
    getData()
}

    const updatePeli = (e) => {
        setDetallePelicula({
            ...detallePelicula,
            [e.target.name]: e.target.value
        })
    }
  
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

    const handleClickOpen = (e,id) => {
      setIdmovie(id)
      detalleMovie(id)

      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        getData()
    };

    const handleClickOpenUpdate = () => {
    setopenUpdate(true);
    };

    const handleCloseUpdate = () => {
    setopenUpdate(false);
    getData()
    };

    React.useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            <div  className="contenedor-principal">
            
                <SliderPeliculas/>

                <div className="contenedorBotones">
                    <Button variant="contained" sx={{ m:2 }} onClick={getData}>All movies</Button>
                    <Button variant="contained" sx={{ m:2 }} onClick={masPopulares}>More popular</Button>
                    <Button variant="contained" sx={{ m:2 }} onClick={menosPopulares}>less popular</Button>
                    <FormDialog/>
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
                                            <label >{element.valoracion}</label>
                                        </div>
                                    </Card>
                                </Button>  
                            </div>                 
                        ))
                    }
                    </div>
                </div>
            </div>
            <Dialog id='form-modal' fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: 'relative' }} style={{backgroundColor:'rgb(16, 17, 24)'}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Movie: {detallePelicula.name}
                        </Typography>
                        <Button autoFocus variant="contained" color="info" sx={{ m:2 }} onClick={handleClose}>
                            save
                        </Button>
                        <Button color="error" variant="contained" autoFocus onClick={DeleteMovie}>
                            Delete
                        </Button>
                        <Button color="success" variant="contained" sx={{ m:2 }} onClick={handleClickOpenUpdate}>
                            Update
                        </Button>
                        <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                            <DialogTitle>Add movie</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Add the information of the movie you want to update, in the image it must be 
                                        a url and in the trailer it must be the url that youtube gives you in the 
                                        option to incorporate video
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.name}
                                        onChange={updatePeli}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="valoracion"
                                        label="Score"
                                        type="number"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.valoracion}
                                        onChange={updatePeli}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="trailer"
                                        label="Url Trailer"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.trailer}
                                        onChange={updatePeli}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="categoria"
                                        label="Category"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.categoria}
                                        onChange={updatePeli}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="descripcion"
                                        label="Description"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.descripcion}
                                        onChange={updatePeli}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        name="image"
                                        label="Url Image"
                                        fullWidth
                                        variant="standard"
                                        value={detallePelicula.image}
                                        onChange={updatePeli}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button color="error" variant="contained" sx={{ m:2 }} onClick={handleCloseUpdate}>Cancel</Button>
                                    <Button color="success" variant="contained" sx={{ m:2 }} onClick={updateData}>Update</Button>
                                </DialogActions>
                            </Dialog>
                    </Toolbar>
                </AppBar>
                    <div class="ContenedorPrincipalDetalle" id="contenedorPrincipal">
                        <div class="div-img">
                            <img src={detallePelicula.image} alt=""></img>
                        </div>
                        <div class="contenedor-descripcion">
                            <div>
                                <div class="div-titulo">
                                    <h1>{detallePelicula.name}</h1>
                                    <img src="https://img.icons8.com/fluency/35/000000/star.png"/>
                                    <label>{detallePelicula.valoracion}</label>
                                    </div>
                                        <div className="contenedorDescripcionp">
                                            <p>
                                                {detallePelicula.descripcion}
                                            </p>
                                        </div>
                                    <div class="contenedor-botones">    
                                        <iframe width="560" height="315" src={detallePelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
                    </Dialog>
        </div>
    )
}