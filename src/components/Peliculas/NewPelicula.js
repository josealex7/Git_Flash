import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import '../../styles/NewPeli.css'

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

  const handleClickOpen = () => {
    setOpenNew(true);
  };

  const handleClose = () => {
    setOpenNew(false);
  };

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
            id="name"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="valoracion"
            label="Valoración"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="trailer"
            label="Enlace Trailer"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="categoria"
            label="Categoria"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Descripcion"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Image"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" sx={{ m:2 }} onClick={handleClose}>Cancel</Button>
          <Button color="success" variant="contained" sx={{ m:2 }} onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
