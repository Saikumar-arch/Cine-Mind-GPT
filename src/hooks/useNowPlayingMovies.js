import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contraints";
import { AddNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

  //Fetch data from TMDB throught API Call and update Redux store
  const dispatch = useDispatch();

  const GetNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(AddNowPlayingMovies(json.results));
  };

  useEffect(() => {
    GetNowPlayingMovies();
  },[]);

  return null;
};
export default useNowPlayingMovies;