
import { IoSearchOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
function Layout() {
    const [search,setSearch] = useState<Array<any>>([])
    const [query,setQuery] = useState<string>("")
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user,setUser] = useState<any|null>(null)

    let baseUrl = "http://localhost:8000";
    if (import.meta.env.MODE === "production") {
      baseUrl = "https://adyaflix-backend.onrender.com"; 
    }

    const navigate = useNavigate();
    useEffect(() => {
        // Check if the user is authenticated when the component mounts
        const token = localStorage.getItem("token");
        
        if (token) {
          setAuthenticated(true);
          if(localStorage.getItem("user") != null){
            
              setUser(JSON.parse(localStorage.getItem("user") || ''))
          }
        }
      }, []);

      
  const handleSignOut = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    setAuthenticated(false);
  };

    const searchdb = async()=>{
        if(query==""){
            setSearch([])
            return;
        }
        const {data} = await axios.get(`${baseUrl}/booking/search/`+query)
        if(data){
            setSearch(data)
        }
    }
  return (
    <div className='flex flex-col min-h-screen'>    
    <div className='bg-[#39071F] p-2 text-white flex justify-between items-center min-h-[5rem]'>
        <div className=' ml-[4rem] w-[50%] flex gap-2   items-center'>
            <Link to="">
            <h1 className='p-2 font-semibold text-[2rem]'>AdyaFlix</h1>
            </Link>
            <div className='bg-white w-[80%] relative flex items-center gap-2 p-2 h-[2.7rem]'>
                <div className='flex items-start justify-center text-black'>
                <IoSearchOutline />
                </div>
                <input onBlur={()=>{setTimeout(()=>{setQuery("");setSearch([])},5000)}} onChange={(e)=>{setQuery(e.target.value);searchdb()}} type='text' className='bg-transparent  border-none focus:outline-none text-black w-[100%]' placeholder='Search for Movies' />
     {search && (
                   <div className="absolute z-10 bg-[#fff]  shadow-md rounded-b-md top-10 left-0 w-[100%]">
                   {search.map((movie:any,index:number)=>{
                          return (
                              <div  onClick={()=>{navigate("/movie/"+movie._id);window.location.reload()}} key={index} className='z-0 flex items-center gap-2 p-2 hover:bg-red-500 text-balck'>
                               
                                 <img className='w-[3rem] h-[4rem]' src={movie.poster} alt="" />
                                 <h1 className="text-black">{movie.title}</h1>
                            
                            </div>
                          )
                     
                   })}

           </div>
     )}
            </div>
        </div>
       {authenticated ? (
         <div className="pr-[1rem] gap-[2rem] flex p-2 justify-center items-center">
         <div className="flex items-center justify-center gap-1">
         <div className="w-[3rem] scale-[85%]  rounded-[100%] shadow-md">
            <img src="https://imgs.search.brave.com/aAFHfyw4Vb7b_KzP1Cr2cAfK4SIlXF01__zxvsqpHlk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEz/NzgvUE5HLzUxMi9h/dmF0YXJkZWZhdWx0/XzkyODI0LnBuZw" alt="" />
         </div>

<h1 className="text-[1.7rem]">{user?.fullName.split(' ')[0]}</h1>
         </div>
         <button
         onClick={handleSignOut}
         className="bg-[#8D1431]  w-[110%] font-semibold p-2"
       >
         Sign Out
       </button>
       </div>
       ) : (
         <div className='pr-[1rem] gap-[2rem] flex p-2 justify-center items-center '>
         <Link to='/login'>
         
         <div>
             <button className='bg-[#8D1431] w-[110%] font-semibold p-2'>Sign In</button>
         </div>
         </Link>
         

     </div>
       )}
       
       
    </div>
    <Outlet />
    </div>
    
  )
}

export default Layout