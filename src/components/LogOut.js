import React from "react"

export const LogOut = () =>{
    let objectUSer = {
        exist:false
    }
    localStorage.setItem('Auth', JSON.stringify(objectUSer))
}