import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./favorites.css";

function Favorites(){
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        const movieList = JSON.parse(localStorage.getItem("@favoriteMovies") || []);

        setMovie(movieList);    
    },[]);

    return(
        <div className="movies-list">
            <h1>Meus favoritos</h1>
            <ul>
                {movie.map((movie) =>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>

                            <div>
                                <Link to={`/movies/${movie.id}`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;