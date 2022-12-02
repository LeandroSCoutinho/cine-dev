import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./favorites.css";

function Favorites(){
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {

        const movieList = localStorage.getItem("@favoriteMovies");
        setMovie(JSON.parse(movieList) || []);  

    },[]);

    function deleteMovie(id){
        const filterMovie = movie.filter((item) => {
            return (item.id !== id);

        });

        setMovie(filterMovie);
        localStorage.setItem("@favoriteMovies",JSON.stringify(filterMovie))

        toast.success("Filme excluido com sucesso!");
    }

    return(
        <div className="movies-list">
            <h1>Meus favoritos</h1>

            {movie.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul>
                {movie.map((movie) =>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>

                            <div>
                                <Link to={`/movies/${movie.id}`}>Ver detalhes</Link>
                                <button onClick={() =>{deleteMovie(movie.id)}}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;