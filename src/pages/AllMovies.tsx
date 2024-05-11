import axios from "axios";
import { useEffect, useState } from "react";
import MovieImage from "../components/MovieImage";

function AllMovies() {
  const [movies, setMovies] = useState<any>([]);
  const [filters, setFilters] = useState({
    languages: [
      { name: 'Tamil', selected: false },
      { name: 'English', selected: false },
      { name: 'Malayalam', selected: false },
      { name: 'Hindi', selected: false },
      { name: 'Telugu', selected: false }
    ],
    genre: [
      { name: 'Drama', selected: false },
      { name: 'Action', selected: false },
      { name: 'Comedy', selected: false },
      { name: 'Thriller', selected: false },
      { name: 'Crime', selected: false },
      { name: 'Sci-fi', selected: false }
    ]
  });

  let baseUrl = "http://localhost:8000";
  if (import.meta.env.MODE === "production") {
    baseUrl = "https://adyaflix-backend.onrender.com";
  }

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/movie/getMovies`);
        if (movies) {
          setMovies(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);

  type Filters = {
    languages: { name: string; selected: boolean }[];
    genre: { name: string; selected: boolean }[];
    [key: string]: { name: string; selected: boolean }[];
  };

  const toggleFilter = (type: string, name: string) => {
    setFilters((prevFilters: Filters) => ({
      ...prevFilters,
      [type]: prevFilters[type].map((filter) => {
        if (filter.name === name) {
          return { ...filter, selected: !filter.selected };
        }
        return filter;
      }),
    }));
  };

  return (
    <div className="flex flex-grow overflow-x-hidden">
      {/* Filters section */}
      <div className="flex flex-col gap-4 w-[15%] p-4">
        <div>
          <h1 className="font-semibold text-[2rem]">Filters</h1>
        </div>

        {/* Language filter */}
        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md p-2 w-[100%]">
          <div className="flex w-[100%] items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Languages</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {filters.languages.map((lang: any) => (
              <button
                key={lang.name}
                onClick={() => toggleFilter('languages', lang.name)}
                className={` ring-1 ring-[#8E888D] p-1 ${lang.selected ? 'bg-[#5B0A36] text-white' : 'text-[#5B0A36] bg-white' }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Genre filter */}
        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md p-2 w-[100%]">
          <div className="flex w-[100%] items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Genre</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {filters.genre.map((gen: any) => (
              <button
                key={gen.name}
                onClick={() => toggleFilter('genre', gen.name)}
                className={` ring-1 ring-[#8E888D] p-1 ${gen.selected ? 'bg-[#5B0A36] text-white' : 'text-[#5B0A36] bg-white' }`}
              >
                {gen.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Movies section */}
      <div className="flex ml-[5rem] flex-col gap-2 flex-grow p-4">
        <div>
          <h1 className="font-semibold text-[2rem]">Movies</h1>
        </div>
        <div className="flex gap-4 w-[30%] p-1">
        {filters.languages.map((lang: any) => (
          <button onClick={() => toggleFilter('languages', lang.name)} key={lang.name} className={`text-[#5B0A36]  ${lang.selected ? 'bg-[#5B0A36] text-white' : 'ring-1 ring-[#8E888D]'} shadow-md w-[20%] rounded-full  outline-[#8E888D] outline-2 p-1`}>
            {lang.name}
        </button>
            ))}
         



          
        </div>
        <div className="grid grid-cols-5 gap-4 w-[100%]">
        {movies.length > 0 ? (
            movies
              .filter((movie: any) => {
                if (filters.languages.some(lang => lang.selected)) {
                  return filters.languages.every(lang =>
                    lang.selected ? movie.languages.includes(lang.name) : true
                  );
                }
                return true;
              })
              .filter((movie: any) => {
                if (filters.genre.some(gen => gen.selected)) {
                  return filters.genre.every(gen =>
                    gen.selected ? movie.genre.includes(gen.name) : true
                  );
                }
                return true;
              })
              .map((movie: any) => (
                <MovieImage key={movie._id} movie={movie} />
              ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllMovies;
