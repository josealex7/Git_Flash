import React from "react";
import '../styles/FooterUser.css'


export const FooterUser = () =>{
    return(
        <div>
            <footer className="FooterUser">
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