import { Refresh } from "@material-ui/icons"
import React from "react"


export const LogOut = () =>{
    let objectUSer = {
        exist:false
    }
    localStorage.setItem('Auth', JSON.stringify(objectUSer))
    window.location.reload(true);
}