import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const MovieShows = ({movie}: {movie: any})=>{
  const [showGif, setShowGif] = useState(false);
  return (
    
      <div className='flex flex-col '>
      <div className="w-[22rem] relative justify-center items-center overflow-hidden shadow-md rounded-md h-[25rem]">
      <div className="relative h-[100%] w-[100%]" onTouchStart={() => setShowGif(true)} onTouchEnd={() => setShowGif(false)} onMouseEnter={() => setShowGif(true)} onMouseLeave={() => setShowGif(false)}>
<img className="object-fill w-full h-full" src={showGif ? movie.gif : movie.poster} alt="movie" />
</div>
      </div>
      <div className="flex flex-col ml-2">
              <h1 className="text-[1.4rem] mb-0">{movie.title}</h1>
              <h1 className="text-[1rem] text-[#979797]">
                {movie.genre.join("/")}
              </h1>

              <p className="mt-2 text-justify w-[135%]">{movie.description}</p>
            </div>
      </div>
    
  )
}

function Showtime() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({});
  const [showtimes, setShowtimes] = useState<Array<any>>([]);
  const [selectedDate, setSelectedDate] = useState<any>(0);

  let baseUrl = "http://localhost:8000";
  if (import.meta.env.MODE === "production") {
    baseUrl = "https://adyaflix-backend.onrender.com"; 
  }

  useEffect(() => {
    const check = async () => {
      try {
        var { data } = await axios.get(
          `${baseUrl}/movie/getMovies/${id}`
        );
        console.log(data);
        if (data) {
          setMovie(data);
        }
        var { data } = await axios.get(
          `${baseUrl}/movie/getMovies/${id}/shows`
        );
        if (data) {
            const updatedShowtimes = data.map((showtime: any) => {
                var date = new Date(showtime.date);

                // Get the month in short form (e.g., Jan, Feb, etc.)
                var monthShort = date.toLocaleString("default", {
                  month: "short",
                });

                // Get the day
                var day = date.getDate();
              
                return {
                  ...showtime,
                  date: day,
                  month: monthShort,
                };
              });
          setShowtimes(updatedShowtimes);
          console.log(updatedShowtimes);
        }
      } catch (err) {
        console.log(err);
      }
    };
    check();
  }, []);
  return (
    <div className="flex flex-grow overflow-x-hidden">
      <div className="flex flex-col gap-4 w-[15%] p-4 ">
        {movie && movie.title ? (
          // <div className="flex flex-col ">
          //   <div className="w-[22rem] relative justify-center items-center overflow-hidden shadow-md rounded-md h-[25rem]">
          //     <img
          //       className="h-[100%]   w-[100%] "
          //       src={movie.gif}
          //       alt="aavesham"
          //     />
          //     <img
          //       className="absolute hover:hidden ease-linear transition-all duration-[250]  top-0 h-[100%] w-[100%]"
          //       src={movie.poster}
          //       alt=""
          //     />
          //   </div>
          //   <div className="flex flex-col ml-2">
          //     <h1 className="text-[1.4rem] mb-0">{movie.title}</h1>
          //     <h1 className="text-[1rem] text-[#979797]">
          //       {movie.genre.join("/")}
          //     </h1>

          //     <p className="mt-2 text-justify w-[135%]">{movie.description}</p>
          //   </div>
          // </div>
          <MovieShows key={movie._id} movie={movie} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>

      <div className="flex ml-[5rem]  flex-col gap-2 flex-grow p-4 ">
        <div>
          <h1 className="font-semibold text-[2rem]">Showtimes</h1>
        </div>

        <div className="flex flex-col flex-grow gap-4 h-[100%] w-[100%] shadow-md  ring-1 rounded-md p-2">
          <div className="w-[100%] flex">
            {showtimes.length > 0 ? (
              showtimes.map((showtime: any, idx) => {
                
                
              
           
            
              
                return (
                  <button
                    onClick={() => {
                      setSelectedDate(idx);
                    }}
                    className={`flex text-[1.6rem] ${
                      selectedDate == idx &&
                      "text-white bg-[#39071F] rounded-md shadow-md"
                    }  text-[#39071F] w-[6%] flex-col items-center justify-center p-2 h-max `}
                  >
                    <h1 className="font-semibold">{showtime.date}</h1>
                    <h1>{showtime.month}</h1>
                  </button>
                );
              })
            ) : (
              <h1>No Showtimes</h1>
            )}
          </div>

          {showtimes.length > 0 && showtimes[selectedDate].shows.length > 0 ? (
            showtimes[selectedDate].shows.map((show: any) => {
              return (
                <Link
                  to={`${showtimes[selectedDate]._id}/${show.time}/selectseat`}
                >
                  <div className="p-2 font-semibold text-[2rem] bg-[#e6e6e6] rounded-md shadow-md">
                    <h1>{show.time}</h1>
                  </div>
                </Link>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Showtime;
