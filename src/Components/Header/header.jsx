import {Link} from 'react-router-dom'
import '../../Styles/Header.css'
import logo from '../../Assets/logo.png'

/**
 * header with navbar redirecting (temporary) on user 12 main page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header() {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo SportSee" className="logo"/>
            <Link to="/" className="navbar-link">Accueil</Link>
            <Link to="/" className="navbar-link">Profil</Link>
            <Link to="/" className="navbar-link">Réglages</Link>
            <Link to="/" className="navbar-link">Communauté</Link>
        </div>
    )
}