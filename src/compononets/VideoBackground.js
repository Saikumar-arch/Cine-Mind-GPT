import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contraints";


const VideoBackground = (movieId) => {

  const getMovieVideos = async()=>{

    const response = await fetch(`https://api.themoviedb.org/3/movie/911430/videos`, API_OPTIONS);
    const json = await response.json();
    console.log(json);

    const filterVideo = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    console.log(trailer);
  }
  
  useEffect(()=>{
    getMovieVideos();
  },[])
  return (
    <div>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/ge_ABjtYx88?si=oSLL5yL0GGyYZSMU" 
      title="YouTube video player" 
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
    ></iframe>
    </div>
  );
};


export default VideoBackground;
