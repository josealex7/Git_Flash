import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import '../../styles/NewPeli.css'
import axios from "axios";

export default function FormDialog() {
  const [openNew, setOpenNew] = React.useState(false);

  const [detallePelicula, setDetallePelicula] = React.useState({
    id:0,
    name:"",
    valoracion:"",
    image:"",
    trailer:"",
    categoria:"",
    descripcion:""
})

const {name, valoracion, image, trailer, categoria, descripcion} = detallePelicula

    const newPeli = (e) => {
        setDetallePelicula({
            ...detallePelicula,
            [e.target.name]: e.target.value
        })
        console.log(detallePelicula);
    }

  const handleClickOpen = () => {
    setOpenNew(true);
  };

  const handleClose = () => {
    setOpenNew(false);
  };

  const postData = () => {
      let url =("https://blockmaster-backend.herokuapp.com/peliculas/")
    axios.post(url, detallePelicula)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

    handleClose()
}

  return (
    <div className="ContenedorbotonNew">
      <Button variant="contained" sx={{ m:2 }} onClick={handleClickOpen}>
        New movie
      </Button>
      <Dialog open={openNew} onClose={handleClose}>
        <DialogTitle>Add movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Add the information of the movie you want to add, in the image it must be 
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
            onChange={newPeli}
          />
          <TextField
            autoFocus
            margin="dense"
            name="valoracion"
            label="Score"
            type="number"
            fullWidth
            variant="standard"
            onChange={newPeli}
          />
          <TextField
            autoFocus
            margin="dense"
            name="trailer"
            label="Url Trailer"
            fullWidth
            variant="standard"
            onChange={newPeli}
          />
          <TextField
            autoFocus
            margin="dense"
            name="categoria"
            label="Category"
            fullWidth
            variant="standard"
            onChange={newPeli}
          />
           <TextField
            autoFocus
            margin="dense"
            name="descripcion"
            label="Description"
            fullWidth
            variant="standard"
            onChange={newPeli}
          />
          <TextField
            autoFocus
            margin="dense"
            name="image"
            label="Url Image"
            fullWidth
            variant="standard"
            onChange={newPeli}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" sx={{ m:2 }} onClick={handleClose}>Cancel</Button>
          <Button color="success" variant="contained" sx={{ m:2 }} onClick={postData}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
