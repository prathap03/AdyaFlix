import axios from "axios";
import { useEffect, useState } from "react";


function AllMovies() {

    const [movies,setMovies] = useState<any>([])

    const [filters,setFilters] = useState({
        languages:[{name:'Tamil',selected:false},{name:'English',selected:false},{name:'Malayalam',selected:false},{name:'Hindi',selected:false},{name:'Telugu',selected:false}],
        genere:[{name:'Drama',selected:false},{name:'Action',selected:false},{name:'Comedy',selected:false},{name:'Thriller',selected:false},{name:'Crime',selected:false},{name:'Sci-fi',selected:false}]
    
    })

    useEffect(()=>{
       const getMovies = async()=>{
        try{
            const {data} = await axios.get(`http://localhost:8000/movie/getMovies`)
            if(movies){
                console.log(data)
                setMovies(data)
            }
        }catch(err){
            console.log(err)
        }
       }
       getMovies()
    },[])

    

  return (
    <div className="flex flex-grow overflow-x-hidden">
      <div className="flex flex-col gap-4 w-[15%] p-4 ">
        <div>
          <h1 className="font-semibold text-[2rem]">Filters</h1>
        </div>

        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md p-2 w-[100%] ">
          <div className="flex w-[100%]  items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Languages</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button  onClick={()=>{setFilters(
                {
                    ...filters,
                    languages:filters.languages.map((lang) => lang.name === 'Tamil' ? {...lang,selected:!lang.selected} : lang)
                }
            
            )}} className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Tamil
            </button>
            <button onClick={()=>{
                setFilters({
                    ...filters,
                    languages:filters.languages.map((lang) => lang.name === 'English' ? {...lang,selected:!lang.selected} : lang)
                
                })
            }} className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              English
            </button>
            <button onClick={()=>{
                setFilters({
                    ...filters,
                    languages:filters.languages.map((lang) => lang.name === 'Malayalam' ? {...lang,selected:!lang.selected} : lang)
                
                })
            }} className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Malayalam
            </button>
            <button onClick={()=>{
                setFilters({
                    ...filters,
                    languages:filters.languages.map((lang) => lang.name === 'Hindi' ? {...lang,selected:!lang.selected} : lang)
                
                })
            }} className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Hindi
            </button>
            <button onClick={()=>{
                setFilters({
                    ...filters,
                    languages:filters.languages.map((lang) => lang.name === 'Telugu' ? {...lang,selected:!lang.selected} : lang)
                
                })
            }} className={`text-[#5B0A36] ${filters.languages.find(lang => lang.name === 'Telugu' && lang.selected) ? 'bg-blue-500' : ''}  bg-white ring-1 ring-[#8E888D] p-1`}>
              Telugu
            </button>
          </div>
        </div>

        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md  p-2 w-[100%] ">
          <div className="flex w-[100%]  items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Genere</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Drama
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Action
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Comedy
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Thriller
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Crime
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Sci-fi
            </button>
          </div>
        </div>
      </div>
      
      
      <div className="flex ml-[5rem] flex-col gap-2 flex-grow p-4 ">
      <div>
          <h1 className="font-semibold text-[2rem]">Movies</h1>
        </div>
        <div className="flex gap-4 w-[30%]  p-1">
        <button className="bg-[#5B0A36] shadow-md w-[20%] rounded-full text-white outline-[#8E888D] outline-2 p-1">
              2D
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Tamil
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              English
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Malayalam
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Hindi
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Telugu
            </button>

            
        </div>
        <div className="grid grid-cols-5 gap-4 w-[100%]">
        {movies.length > 0 ? (
            movies.map((movie:any) => {
                if(filters.languages.filter((lang) => lang.selected).length > 0){
                    if(filters.languages.filter((lang) => lang.selected).some((lang) => movie.languages.includes(lang.name))){
                        return(
                            <div className='flex flex-col '>
                            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                                <img className='h-[100%]   w-[100%] ' src={movie.gif}  alt="aavesham" />
                                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={movie.poster} alt="" />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-[1.4rem] mb-0'>{movie.title}</h1>
                                <h1 className='text-[1rem] text-[#979797]'>{movie.genre.join(",")}</h1>
                            </div>
                            </div>
                        )
                    }else if(filters.languages.filter((lang) => lang.selected).some((lang) => movie.languages.includes(lang.name)) && filters.genere.filter((gen) => gen.selected).some((gen) => movie.genre.includes(gen.name))){
                        return(
                            <div className='flex flex-col '>
                            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                                <img className='h-[100%]   w-[100%] ' src={movie.gif}  alt="aavesham" />
                                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={movie.poster} alt="" />
                            </div>
                            <div className='flex flex-col ml-2'>
                                <h1 className='text-[1.4rem] mb-0'>{movie.title}</h1>
                                <h1 className='text-[1rem] text-[#979797]'>{movie.genre.join(",")}</h1>
                            </div>
                            </div>
                        )
                    }
                }else{
                return(
            <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src={movie.gif}  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={movie.poster} alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>{movie.title}</h1>
                <h1 className='text-[1rem] text-[#979797]'>{movie.genre.join(",")}</h1>
            </div>
            </div>
                )}})
            
        ) : (<h1>Loading...</h1>)}

    
            
    
            
        </div>
      </div>
    </div>
  );
}

export default AllMovies;
