import { Button } from "@mui/material"
import React from "react"
import '../styles/profilePage.css'

export const ProfilePages = () => {
    
    const [usuario, setUsuario] = React.useState(null)

    const compararDatos = (usuarios, user) =>{
        const loggerUser =  usuarios.find(element => element.User === user);
        setUsuario(loggerUser)
    }

    const traerDatosUser = () =>{
        let userLog = JSON.parse(localStorage.getItem('Auth'))
        let usuarios = JSON.parse(localStorage.getItem('Usuario'))
        compararDatos(usuarios, userLog.User)
    }

    React.useEffect(() => {
        traerDatosUser()
    }, [])

    return (
        <div className="contenedorprincipal">
            {
                usuario ?
                <div className="ContenedorProfile">
                <div className="contenedorImg">
                    <img src="https://img.icons8.com/ios/100/FFFFFF/gender-neutral-user.png"/>
                </div>
                <div>
                    <h1>User: {usuario.User}</h1>
                </div>
                <div>
                    <h1>Name: {usuario.FullName}</h1>
                </div>
                <div>
                    <h1>Birthday: {usuario.Birthday}</h1>
                </div>
            </div> : <h1>no hay usuario</h1>
            }
        </div>
    )
}