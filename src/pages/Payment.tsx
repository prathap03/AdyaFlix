import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

function Payment() {




    const [selectedSeats,setSelectedSeats] = useState<Array<string>>([])
    const [total,setTotal] = useState<number>(0)
    const { id,day,time } = useParams();
    const [movie,setMovie] = useState<any>([])


    let baseUrl = "http://localhost:8000";
    if (import.meta.env.MODE === "production") {
      baseUrl = "https://adyaflix-backend.onrender.com"; 
    }


    const navigate = useNavigate()

     const Book = async()=>{
        setSelectedSeats(selectedSeats.map((seat:string) => {
            return seat.toString()
        }))

        try{
            const {data} = await axios.post(`${baseUrl}/booking/bookMovie`,{
                token:localStorage.getItem('token'),
                bookingTime:time,
                movieId: id,
                showId:day,
                noOfSeats: selectedSeats.length,
                price: total+(30.24)*(selectedSeats.length),
                bookedSeats: selectedSeats
            },{
                headers:{
                    'Authorization':`${localStorage.getItem('token')}`
                }
            })
            localStorage.removeItem("booking")
            navigate("/user/tickets/"+data.id)
            console.log(data)
        }catch(err){
            console.log(err)
        }
        
       

     }

 
     const location = useLocation();
   
     useEffect(() => {
   
     if(localStorage.getItem('token') === null){
       const currentUrl = encodeURIComponent(location.pathname + location.search);
       navigate(`/login?redirect=${currentUrl}`)
     }
        setSelectedSeats([]);
        setTotal(0);

        const check = async()=>{
            
            try{
                const {data} = await axios.get(`${baseUrl}/movie/getMovies/${id}/shows/${day}/${time}`)
                console.log(data);
                if(data){
                    
                    setMovie(data.movie)
                }
            }catch(err){
                console.log(err)
            }
        }
       
        check()

        if(localStorage.getItem('booking') !== null){
            let data = JSON.parse(localStorage.getItem('booking') ?? '{}')
            if(data.seats.length > 0){
                setSelectedSeats(data.seats)
                setTotal(data.total)
            }
        }
    },[])




  return (
    
    <div className='flex flex-col items-center flex-grow bg-[#cac5c5]'>
        <div className='w-[100%] flex flex-col bg-[#39071F] text-white p-2 text-[2rem]'>
            <div className='flex items-center gap-2'>
            <h1>{movie.title || 'Loading'}</h1>
            <div className=' ring-2 shadow-md ring-white h-[1.7rem] w-[1.7rem] flex justify-center items-center rounded-full text-[0.7rem] p-2'>
                <h1>{movie.rating || 'L'}</h1>
            </div>
            </div>
           
            <h1 className='text-[1rem] font-light'>Today, {time ?? 'Loading'}</h1>
        </div>

        <div className='flex flex-grow justify-center items-center  w-[100%]'>
            <div className='bg-white shadow-md flex p-2  flex-col  w-[25%] rounded-md'>
                <div className='p-4 font-mono tracking-wide text-[#39071F] text-[1.7rem]'>
                    <h1>BOOKING SUMMARY</h1>
                </div>

                <div>
                    <div className='flex flex-col items-center justify-between p-2 border-b-2'>
                        <div className='flex w-[100%] justify-between'>
                        <div className='flex gap-2'>
                        <h1>Selected Seats</h1>
                       
                       <h1>({selectedSeats.length})</h1>
                        </div>
                        <h1>₹{total}</h1>
                        </div>
                        <div className='flex w-[100%] flex-wrap gap-2'>
                        {selectedSeats.length === 0 ? <h1></h1> : selectedSeats.map((seat,index) => {
                            return <h1 key={index}>{seat}</h1>
                        })}
                        </div>
                    
                    </div>
                    <div className='flex items-center justify-between p-2 border-b-2'>
                        <h1>Platform Fees (Rs. 30.34 per seat)</h1>
                        <h1>₹{(30.24)*(selectedSeats.length)}</h1>
                    </div>
                    <div className='flex items-center justify-between p-2 border-b-2'>
                        <h1>Sub Total</h1>
                        <h1>₹{total+(30.24)*(selectedSeats.length)}</h1>
                    </div>
                </div>
                <div className='flex mt-[2rem] justify-between p-2 font-medium bg-[#cde967]'>
                        <h1>Amount Payable</h1>
                        <h1>Rs. {total+(30.24)*(selectedSeats.length)}</h1>
                </div>

                <button onClick={()=>{Book()}} className='flex hover:scale-[98%] transition-all ease-linear mt-[2rem] mb-[2rem] justify-between pl-[2rem] pr-[2rem] p-2 text-white rounded-md font-medium bg-[#8D1431]'>
                      
                        <h1>TOTAL: Rs. {total+(30.24)*(selectedSeats.length)}</h1>
                        <h1>PROCEED</h1>
                </button>
            </div>
            
        </div>
    

     

        

      

        
    </div>
  )
}

export default Payment