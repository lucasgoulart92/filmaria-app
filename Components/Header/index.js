import './header.css';
import {Link} from 'react-router-dom';
import logo from '../../icons/logo.png';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <Link className="logo" to="/">
                    <img src={logo}></img>
                </Link>
                <Link className="favoritos" to="/Favoritos">
                    Favoritos
                </Link>
            </div>
        </header>
    )
}