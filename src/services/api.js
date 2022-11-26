import axios from 'axios';

//base da URL:https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/550?api_key=5fa1b016e6dd6ddf5254625d5adb28b7&language-pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;