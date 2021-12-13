import React from "react"
import '../styles/profilePage.css'



export const ProfilePages = () => {
    
    const [user, setUser] = React.useState({})

    const [usuario, setUsuario] = React.useState({
        FullName:"",
        Birthday:"",
        User:""
    })

    const traerDatos = () =>{
        
        let userLog=JSON.parse(localStorage.getItem('Auth'))
        setUser(userLog.User)
        validarUser()
    }

    const validarUser = () =>{
        let Usuarios = JSON.parse(localStorage.getItem('Usuario'))
        Usuarios.forEach(element => {
            if(element.User==user){
                setUsuario({
                    ["FullName"]: element.FullName,
                    ["Birthday"]: element.Birthday,
                    ["User"]: element.User
                })
            }
        });
        
    }

    React.useEffect(() => {
        traerDatos()
    }, [])

    return (
        <div className="contenedorprincipal">
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
            </div>
        </div>
    )
}


