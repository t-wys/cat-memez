import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (<nav className="navbar">
        <span className="navbar-brand">Cat Memez</span>
        <ul className="navbar-links">
            <li>
                <NavLink to="/">Latest</NavLink>
            </li>
            <li>
                <NavLink to="/best">Best</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </nav>)
}
