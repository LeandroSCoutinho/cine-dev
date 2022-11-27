import { useEffect, useState } from "react";
import api from "../../services/api";

import { Link } from "react-router-dom";

import "./home.css"

function Home(){
    const [movies, setMovies ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadMovies(){
            const response = await api.get("movie/now_playing/",{
                params:{
                    api_key: "5fa1b016e6dd6ddf5254625d5adb28b7",
                    language:"pt-BR",
                    page:1,
                }
            });
           // console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results.slice(0, 10));
            setLoading(false);
        }
        loadMovies();
    },[]);

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando filmes...</h1>
            </div>
        )
    }

    return(
        <main className="container">
            <div className="list-movie">
                {movies.map((movie) => {
                    return(
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />
                        <Link to={`/movies/${movie.id}`}>Acessar</Link>
                    </article>  
                    )
                    
        })}
            </div>
        </main>
    );
}

export default Home;