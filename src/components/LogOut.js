import React from "react"
import { AppRouter } from "../router/AppRouter"

export const LogOut = () =>{
    localStorage.setItem('Auth', JSON.stringify(false))
    return <AppRouter/>
}