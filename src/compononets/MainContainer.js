import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {
  // Corrected the state path (assuming it's nowPlayingMovies, not nowPlayingmovies)
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);

  if(!movie) return;
  
  const mainMovie = movie[1];
  // Added movieId to VideoBackground component to fetch movie poster
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
