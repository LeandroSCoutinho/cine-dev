import { Link } from "react-router-dom";

import "./header.css";

function Header(){
    return (
        <header>
            <Link className="logo" to="/">
                <span>Cine.</span> Dev
            </Link>
            <Link className="favorites" to="/favorites">Menu Filmes</Link>
        </header>
    );
}

export default Header;