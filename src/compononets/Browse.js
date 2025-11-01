import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import MainContainer from "./MainContainer";

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
