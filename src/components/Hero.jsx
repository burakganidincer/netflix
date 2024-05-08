import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  //Store'da tutulan verilere eriş
  const store = useSelector((store) => store.movieReducer);

  const i = Math.floor(Math.random() * 20);

  store.popularMovies[i];

  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] ">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB: </span>
              <span className="text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5 ">
              <button className=" bg-red-600 hover:bg-red-700 p-2 rounded transition">
                Film İzle
              </button>
              <button className=" bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded transition">
                Listeye Ekle
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="my-4 img-fluid rounded hero-img max-h-[300px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
