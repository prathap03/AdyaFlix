import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
function ViewTicket() {

    const [selectedSeats,setSelectedSeats] = useState<Array<number>>([])
    const [total,setTotal] = useState<number>(0)
    const {id} = useParams();
    const [movie,setMovie] = useState<any>([])
    const [bookingId,setBookingId] = useState<string>('')
    const [bookingDate,setBookingDate] = useState<string>('')
    const [bookingTime,setBookingTime] = useState<string>('')
    

    useEffect(() => {
        setSelectedSeats([]);
        setTotal(0);

        const getTicket = async()=>{
            try{
                const {data} = await axios.get(`http://localhost:8000/booking/getBookingDetails/${id}`,
                    {
                        "headers":{
                            "Authorization":localStorage.getItem('token')
                        }
                    }
                )
                console.log(data);
                if(data){
                    setSelectedSeats(data.bookedSeats)
                    setMovie(data.movie)
                    setTotal(data.price)
                    setBookingDate(data.bookingDate)
                    setBookingId(data._id)
                    setBookingTime(data.bookingTime)
                }
            }catch(err){
                console.log(err)
            }
        }

        getTicket()

        
        
    },[])

  return (
   
    <div className='flex flex-grow  justify-center items-center bg-[#cac5c5]'>
       {movie && movie.title ? (
         <div className='flex flex-col p-2 bg-white rounded-md shadow-md'>
         <div className='p-4 font-mono tracking-wide text-[#39071F] text-[1.7rem]'>
         <div className='flex gap-2'>
         <div className='w-[4em] relative justify-center items-center overflow-hidden rounded-[6%] h-[8rem]'>
             <img className='h-[100%]   w-[100%] ' src={movie.gif}  alt="aavesham" />
             <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src={movie.poster} alt="" />
         </div>
         <div className='flex flex-col'>
             <h1>{movie.title} ({movie.rating})</h1>
             <h1>{movie.languages[0]},2D</h1>
             <h1>Today, {bookingTime}</h1>
         </div>
         </div>
         <div className='flex justify-between p-1 mt-2 '>
             <div className='h-[5rem] w-[5rem]'>
             <img src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg" alt="" />
             </div>
             <div className='flex flex-col text-[0.8rem] font-medium'>
                 <h1>2 Ticket(s)</h1>
                 <div>
                     <h1>Seats:</h1>
                     <h1>{selectedSeats.join(',')}</h1>
                 </div>
                 <div>
                     <h1 className='font-semibold'>BOOKING ID: {bookingId.toUpperCase().slice(1,6)}</h1>
                 </div>
             </div>
         </div>
         <div className='flex justify-between items-center flex-grow mt-2 w-[100%]'>
             <h1 className='text-[1.2rem] mt-2'>Total Amount</h1>
             <h1>Rs.{total}</h1>
         </div>
         
         </div>
         

 </div>
       ) : (<h1>Loading...</h1>)}
    

        
    </div>


 

    

  


  )
}

export default ViewTicket