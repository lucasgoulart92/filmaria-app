import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/Favoritos">
                <svg height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m27.19 34a2.22 2.22 0 0 1 -1.24-.38l-7.46-5a.22.22 0 0 0 -.25 0l-7.46 5a2.22 2.22 0 0 1 -3.38-2.41l2.45-8.64a.23.23 0 0 0 -.08-.24l-7.06-5.55a2.22 2.22 0 0 1 1.29-4l9-.34a.23.23 0 0 0 .2-.15l3.1-8.43a2.22 2.22 0 0 1 4.17 0l3.1 8.43a.23.23 0 0 0 .2.15l9 .34a2.22 2.22 0 0 1 1.29 4l-7.06 5.55a.22.22 0 0 0 -.08.24l2.45 8.64a2.23 2.23 0 0 1 -2.18 2.79zm-8.82-7.42a2.21 2.21 0 0 1 1.23.42l7.46 5a.22.22 0 0 0 .34-.25l-2.45-8.64a2.21 2.21 0 0 1 .77-2.35l7.06-5.55a.22.22 0 0 0 -.13-.4l-9-.34a2.22 2.22 0 0 1 -2-1.46l-3.1-8.43a.22.22 0 0 0 -.42 0l-3.07 8.42a2.22 2.22 0 0 1 -2 1.46l-9 .34a.22.22 0 0 0 -.13.4l7.07 5.56a2.22 2.22 0 0 1 .77 2.35l-2.44 8.64a.21.21 0 0 0 .08.24.2.2 0 0 0 .26 0l7.46-5a2.22 2.22 0 0 1 1.23-.37z"/><path d="m0 0h36v36h-36z" fill="none"/></svg>
                Favoritos
            </Link>
        </header>
    )
}