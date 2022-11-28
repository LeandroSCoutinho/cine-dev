import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./movie.css";

function Movies(){
    const { id } = useParams();
    const [ movie, setMovie ] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "5fa1b016e6dd6ddf5254625d5adb28b7",
                    language:"pt-BR",
                }
            }).then((response) =>{
                setMovie(response.data);
                setLoading(false);
            }).catch(
                console.log("Filme não encontrado!")
            ); 
        }
        loadMovie();

        return() => {
            console.log("Desmontando componente");
        }
    },[]);
    
    return(
        <div className="movie-info">
            <h1>{ movie.title }</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>

            <strong>Avaliação: { movie.vote_average } / 10 </strong>

            <div className="button-group">
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movies;