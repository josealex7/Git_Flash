import React from "react";
import '../styles/Footer.css'


export const Footer = () =>{
    return(
        <div>
            <footer className="Footer">
                <nav>

                    <ul>
                        <li>© 2021 Dalic, Inc.
                            <a> · Privacidad</a>
                            <a> · Términos</a>
                        </li>
                        <li className="redSocial">GitHub</li>
                        <li className="redSocial">Linkedln</li>
                        <li className="redSocial">Contacto</li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}