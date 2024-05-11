import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tickets() {
  const [tickets, setTickets] = useState<Array<any>>([]);

  let baseUrl = "http://localhost:8000";
  if (import.meta.env.MODE === "production") {
    baseUrl = "https://adyaflix-backend.onrender.com"; 
  }

  useEffect(() => {
   const get = async()=>{
    try{
        const {data} = await axios.get(`${baseUrl}/booking/getBookings`,{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        });
        console.log(data)
        if(data){
            setTickets(data)
           
        }
    }catch(err){
        console.log(err)
    }
   }

   get()
  }, []);

  return (
    <div className="flex flex-col gap-1 p-2">
      {tickets.length > 0 ? (
        tickets.map((ticket: any, index: number) => {
          return (
           <Link to={ticket._id}>
            <div className="flex p-1 bg-white shadow-md">
                   <div className='flex flex-col '>
            <div className='w-[9rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[11rem]'>
                <img className='h-[100%]   w-[100%] ' src={ticket.movie.gif}  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={ticket.movie.poster} alt="" />
            </div>
           
            </div>
              <div
                key={index}
                className="flex flex-col justify-center gap-2  text-[1.5rem] p-2 text-black "
              >
                <h1>{ticket.movie.title}</h1>
                <h1>{ticket.bookingDate}</h1>
                <h1>{ticket.bookingTime}</h1>
                <h1>Rs.{ticket.price}</h1>
              </div>
            </div>
           </Link>
          );
        })
      ) : (
        <h1>No Tickets</h1>
      )}
    </div>
  );
}

export default Tickets;
