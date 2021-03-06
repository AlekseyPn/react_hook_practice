import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg px-2">
            <div className="navbar-brand">
                GitHub Search
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}