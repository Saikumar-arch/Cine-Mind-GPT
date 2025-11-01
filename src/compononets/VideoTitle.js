

const VideoTitle = ({title, overview}) => {
  return (
    <div >
      <div className="pt-36 mt-36 absolute">
      <h1 className="mx-9 text-5xl text-black font-bold">{title}</h1>
      <p className="mx-9 py-6 text-xl w-1/4 text-black">{overview}</p>
      <div className="flex space-x-1">
        <button className="mx-7 p-3 px-7 text-lg rounded-lg bg-gray-300 text-black hover:bg-gray-300">▶️ Play</button>
        <button className="mx-7 p-3 px-7 text-lg rounded-lg bg-gray-300 text-black hover:bg-gray-300">More Info</button>
      </div>
      </div>
    </div>
  );
};

export default VideoTitle;
