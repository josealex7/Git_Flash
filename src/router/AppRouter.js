import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
import {Login} from '../components/Login'
import { SingUp } from '../components/SingUp';
import {ProfilePages} from '../components/profilePage';
import Navbar from '../components/Navbar';
import NavbarUser from '../components/NavbarUser';
import {Footer} from '../components/Footer';
import {Movies} from '../components/Movies'
import {LogOut} from '../components/LogOut'
import {FooterUser} from '../components/FooterUSer'
import { LibraryAdd } from '@material-ui/icons';

export const AppRouter = () => {
    let Auth = {};
    if(localStorage.getItem('Auth')){
        Auth=JSON.parse(localStorage.getItem('Auth'));
        console.log(Auth.exist)
    }
    if(!Auth.exist){
        return (
            <div>
                <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route exact path="/signup" element={<SingUp/>}/>
                        <Route exact path="*" element={<Login/>}/>
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
                            <Route exact path="/logout" element={<LogOut/>}/>
                            <Route exact path="*" element={<Movies/>}/>                            
                        </Routes>
                    <FooterUser/>         
                </Router>
            </div>
        )
    }
}