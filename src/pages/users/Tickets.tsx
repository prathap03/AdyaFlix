import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Tickets() {
  const [tickets, setTickets] = useState<Array<any>>([]);
  

  let baseUrl = "http://localhost:8000";
  if (import.meta.env.MODE === "production") {
    baseUrl = "https://adyaflix-backend.onrender.com"; 
  }


  const navigate = useNavigate();
  const location = useLocation();

  const TicketCard = ({ticket}:{ticket:any}) => {
    const [showGif, setShowGif] = useState(false);
    return (
      <Link to={ticket._id}>
      <div className="flex p-1 bg-white shadow-md">
             <div className='flex flex-col '>
      
      <div className="'w-[9rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[11rem]"  onTouchStart={() => setShowGif(true)} onTouchEnd={() => setShowGif(false)} onMouseEnter={() => setShowGif(true)} onMouseLeave={() => setShowGif(false)}>
  <img className="w-full h-full" src={showGif ? ticket.movie.gif : ticket.movie.poster} alt="ticket" />
</div>
     
      </div>
        <div
          key={ticket._id}
          className="flex flex-col justify-center gap-2  text-[1.5rem] p-2 text-black "
        >
          <h1>{ticket.movie.title}</h1>
          <h1>{ticket.bookingDate}</h1>
          <h1>{ticket.bookingTime}</h1>
          <h1>Rs.{ticket.price}</h1>
        </div>
      </div>
     </Link>
    )
  }

  useEffect(() => {

  if(localStorage.getItem('token') === null){
    const currentUrl = encodeURIComponent(location.pathname + location.search);
    navigate(`/login?redirect=${currentUrl}`)
  }
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
        tickets.map((ticket: any) => {
          console.log(ticket);
          return (
            
              <TicketCard key={ticket._id} ticket={ticket} />
            
          );
        })
      ) : (
        <h1>No Tickets</h1>
      )}
    </div>
  );
}

export default Tickets;
