import { Refresh } from "@material-ui/icons"
import React from "react"


export const LogOut = () =>{
    let objectUSer = {
        exist:false
    }
    localStorage.setItem('Auth', JSON.stringify(objectUSer))
    window.location.replace('https://josealex7.github.io/Git_Flash/');
    // window.location.replace('/')
}