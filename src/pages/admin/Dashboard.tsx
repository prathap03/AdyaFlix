
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieImage from "../../components/MovieImage";


function Dashboard() {

    const [recommended,setRecommended] = useState<Array<any>>([])

    let baseUrl = "http://localhost:8000";
    if (import.meta.env.MODE === "production") {
      baseUrl = "https://adyaflix-backend.onrender.com"; 
    }

    const navigate = useNavigate()

    

    useEffect(()=>{
      if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem('user')!)
        if(user.role !== 'admin'){
         navigate("/")
        }
      }else{
        navigate("/")
      }

        const check = async()=>{
            try{
                const {data} = await axios.get(`${baseUrl}/movie/getMovies`)
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
    <div>
         <div className='flex mr-[4rem]  gap-[3.6rem] items-center mt-[1rem] ml-[4rem] font-semibold text-[2rem]'>
          {recommended.length > 0 ? (
            recommended.map((movie)=>{
                return (
                    
        
            <MovieImage key={movie._id} movie={movie} />
                    
                )
            }
        
            
        )
          ): (<h1 className="font-semibold text-[2rem] animate-pulse text-balance">Loading...</h1>)}
        

        {recommended.length>0 && 
        <Link to='addMovie'>
          <div className="hover:cursor-pointer font-semibold text-[2rem] bg-green-500 flex justify-center items-start w-[3rem] h-[3rem] text-white shadow-md rounded-full"><h1>+</h1></div>
        </Link>}
        </div>

            
    </div>
  )
}

export default Dashboard