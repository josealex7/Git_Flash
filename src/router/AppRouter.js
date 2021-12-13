import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import {Login} from '../components/Login'
import { SingUp } from '../components/SingUp';
import {ProfilePages} from '../components/profilePage';
import Navbar from '../components/Navbar';
import NavbarUser from '../components/NavbarUser';
import {Footer} from '../components/Footer';
import {Movies} from '../components/Movies'
import {MenosPopu}  from '../components/MenosPopulares'
import Populares from '../components/populares'
import {LogOut} from '../components/LogOut'
import {FooterUser} from '../components/FooterUSer'

export const AppRouter = () => {
    // let Auth = {};
    // if(localStorage.getItem('Auth')){
    //     Auth=JSON.parse(localStorage.getItem('Auth'));
    //     console.log(Auth.exist)
    // }
    if(false){
        return (
            <div>
                <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route exact path="/signup" element={<SingUp/>}/>
                        <Route path="/**" element={<Login/>}/>
                    </Routes>
                <Footer/>           
                </Router>
            </div>
        )
    } else {
        return (
            <div>
                <Router>
                <NavbarUser/>
                    <Routes>
                        <Route exact path="/profilepage" element={<ProfilePages/>}/>
                        <Route exact path="/movies" element={<Movies/>}/>
                        <Route exact path="/menospopulares" element={<MenosPopu/>}/>
                        <Route exact path="/populares" element={<Populares/>}/>
                        <Route exact path="/logout" element={<LogOut/>}/>
                        <Route path="/**" element={<ProfilePages/>}/>
                    </Routes>
                <FooterUser/>         
                </Router>
                {/* <button>Hola</button> */}
            </div>
        )
    }
}