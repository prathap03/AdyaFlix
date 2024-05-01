
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
function Layout() {
    const [search,setSearch] = useState<Array<any>>([])
    const [query,setQuery] = useState<string>("")

    const navigate = useNavigate();

    const searchdb = async()=>{
        if(query==""){
            setSearch([])
            return;
        }
        const {data} = await axios.get("http://localhost:8000/booking/search/"+query)
        if(data){
            setSearch(data)
        }
    }
  return (
    <div className='flex flex-col min-h-screen'>    
    <div className='bg-[#39071F] p-2 text-white flex justify-between items-center min-h-[5rem]'>
        <div className=' ml-[4rem] w-[50%] flex gap-2   items-center'>
            <h1 className='p-2 font-semibold text-[2rem]'>AdyaFlix</h1>
            <div className='bg-white w-[80%] relative flex items-center gap-2 p-2 h-[2.7rem]'>
                <div className='flex items-start justify-center text-black'>
                <IoSearchOutline />
                </div>
                <input onBlur={()=>{setTimeout(()=>{setQuery("");setSearch([])},5000)}} onChange={(e)=>{setQuery(e.target.value);searchdb()}} type='text' className='bg-transparent  border-none focus:outline-none text-black w-[100%]' placeholder='Search for Movies' />
     {search && (
                   <div className="absolute bg-[#fff] z-0 shadow-md rounded-b-md top-10 left-0 w-[100%]">
                   {search.map((movie:any,index:number)=>{
                          return (
                              <div onClick={()=>{navigate("/movie/"+movie._id)}} key={index} className='flex items-center gap-2 p-2 text-balck'>
                               
                                 <img className='w-[3rem] h-[4rem]' src={movie.poster} alt="" />
                                 <h1>{movie.title}</h1>
                            
                            </div>
                          )
                     
                   })}

           </div>
     )}
            </div>
        </div>
        <div className='w-[10%] gap-[2rem] flex p-2 justify-center items-center '>
            <div>
                <button className='bg-[#8D1431] w-[110%] font-semibold p-2'>Sign In</button>
            </div>
            <button className='flex justify-center items-center bg-[#8D1431] p-[0.78rem]'>
            <GiHamburgerMenu className='scale-[220%]' />
            </button>

        </div>
       
       
    </div>
    <Outlet />
    </div>
    
  )
}

export default Layout