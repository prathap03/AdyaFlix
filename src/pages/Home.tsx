
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {

    const [recommended,setRecommended] = useState<Array<any>>([])

    useEffect(()=>{
        const check = async()=>{
            try{
                const {data} = await axios.get("http://localhost:8000/movie/getMovies")
                console.log(data)
                if(data){
                    setRecommended(data)
                }
            }catch(err){
                console.log(err)
            }
        }
        check()
       
    },[])

  return (
    <div className='flex flex-col   min-w-[100%] h-[100%]  flex-grow overflow-y-hidden'>
        <div className='bg-black/[70%] h-[25rem] flex justify-center items-center w-[100%]'>
            <div className='bg-black h-[100%] min-w-[40%]   justify-center items-center flex overflow-clip'>
                <img alt="carousel" className='h-[100%] w-[100%]' style={{objectFit:"fill"}}  src="https://imgs.search.brave.com/AB3nKFiOteyVTAEOtF0j9CiAJrZxi6Yf3X3yklIKCaY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk4ySmlNRGho/TVdVdFlXSTJZaTAw/WWpkaExUa3pORFF0/WW1KallqYzVZMk5s/T0daaVhrRXlYa0Zx/Y0dkZVFYVnlNVEUw/TXpRd01qZ3ouX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDEsNTAwLDI4/MV8uanBn"/>
            </div>
        </div>
        <div className='flex mr-[4rem] justify-between items-center mt-[2rem] ml-[4rem] font-semibold text-[2rem]'>
            <h1>Recommended Movies</h1>
            <div className='flex items-center justify-center text-[1.2rem]'>
            <Link to="/all"><h1 className='text-[#850C46]'>See all</h1></Link>
            <h1>&gt;</h1>
            </div>
        </div>

        <div className='flex mr-[4rem] justify-center gap-[3.6rem] items-center mt-[1rem] ml-[4rem] font-semibold text-[2rem]'>
          {recommended.length > 0 ? (
            recommended.map((movie)=>{
                return (
                    <>
                      <Link to={'movie/'+movie._id}>
            <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src={movie.gif}  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={movie.poster} alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>{movie.title}</h1>
                <h1 className='text-[1rem] text-[#979797]'>{movie.genre.join("/")}</h1>
            </div>
            </div>
            </Link>
                    </>
                )
            })
          ): (<h1 className="font-semibold text-[2rem] animate-pulse text-balance">Loading...</h1>)}
        



            
        </div>
    </div>
  )
}

export default Home