import { useState } from "react";
import { Link } from "react-router-dom";

const MovieImage = ({movie}: {movie: any})=>{
    const [showGif, setShowGif] = useState(false);
    return (
        <Link key={movie._id} to={'/movie/'+movie._id}>
        <div className='flex flex-col '>
        <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
        <div className="relative h-[22rem] w-[15rem]"  onTouchStart={() => setShowGif(true)} onTouchEnd={() => setShowGif(false)} onMouseEnter={() => setShowGif(true)} onMouseLeave={() => setShowGif(false)}>
  <img className="w-full h-full" src={showGif ? movie.gif : movie.poster} alt="movie" />
</div>
        </div>
        <div className='flex flex-col ml-2'>
            <h1 className='text-[1.4rem] mb-0'>{movie.title}</h1>
            <h1 className='text-[1rem] text-[#979797]'>{movie.genre.join("/")}</h1>
        </div>
        </div>
        </Link>
    )
}

export default MovieImage;