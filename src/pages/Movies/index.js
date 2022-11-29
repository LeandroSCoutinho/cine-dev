import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";

import "./movie.css";

function Movies(){
    const { id } = useParams();
    const navigate = useNavigate();
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
            }).catch(()=>{
                navigate("/", { replace: true });
                return;
            }); 
        }
        loadMovie();

        return() => {
            console.log("Desmontando componente");
        }
    },[navigate,id]);

   if(loading){
      return(
        <div className="movie-info">
            <h1>Carregando detalhes do filme...</h1>
        </div>
      ) 
   }
    
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
                    <a
                     target="blanck"
                     rel="external"
                     href={`https://youtube.com/results?search_query=${movie.title} trailer`}
                     >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movies;