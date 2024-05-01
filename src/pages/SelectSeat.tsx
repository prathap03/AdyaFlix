import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function SelectSeat() {

    const navigate = useNavigate()
    const { id,day,time } = useParams();



    type seat = {
        id:number,
        booked:boolean
        selected:boolean
    }


    const [seats,setSeats] = useState<Array<seat>>([])
    const [selectedSeats,setSelectedSeats] = useState<Array<number>>([])
    const [total,setTotal] = useState<number>(0)
    const [movie,setMovie] = useState<any>([])

    useEffect(() => {
        var arr:Array<seat>  = [];
        const check = async()=>{
            for(var i=1;i<=100;i++){
                arr.push({id:i,booked:false,selected:false})
            }
            try{
                const {data} = await axios.get(`http://localhost:8000/movie/getMovies/${id}/shows/${day}/${time}`)
                console.log(data);
                if(data){
                    data.seats[0].map((seat:number) => {
                        arr[seat].booked = true;
                    })
                    setMovie(data.movie)
                }
            }catch(err){
                console.log(err)
            }
        }
       
        check()
        setSeats(arr);
        setSelectedSeats([]);
        setTotal(0);
        if(localStorage.getItem('booking') !== null){
            let data = JSON.parse(localStorage.getItem('booking') || '{}')
            if(data.seats.length > 0){
                data.seats.map((seat:number) => {
                    arr[seat].selected = true;
                })
                setSelectedSeats(data.seats)
                setTotal(data.total)
            }
        }

        
    },[])



    const Pay = ()=>{
        localStorage.setItem('booking',JSON.stringify(
            {
                id:'$e24567yiop',
                name:'Aavesham',
                date:'01/05/20204',
                time:'10:30PM',
                seats:selectedSeats,
                total:total
            }
        ))
    }

    const selectSeat = (index:number) => {
         console.log(index,seats[index])
        let arr = [...seats];
        if(arr[index].booked){
            return;
        }
        arr[index].selected = !arr[index].selected;
        


        if(arr[index].selected){
            setSelectedSeats([...selectedSeats,index])
            if(index <= 60){
                setTotal(total+100)
            }
            else{
                setTotal(total+60)
            }
        
        }else{
            setSelectedSeats(selectedSeats.filter((seat) => seat !== index))
            if(index <= 60){
                setTotal(total-100)
            }
            else

            setTotal(total-60)
        }
       
        setSeats(arr);
    }
 

  return (
    <div className='flex flex-col items-center flex-grow'>
        {movie && movie.title ? (
            <>
            <div className='w-[100%] flex flex-col bg-[#39071F] text-white p-2 text-[2rem]'>
            <div className='flex items-center gap-2'>
            <h1>{movie.title}</h1>
            <div className=' ring-2 shadow-md ring-white h-[1.7rem] w-[1.7rem] flex justify-center items-center rounded-full text-[0.7rem] p-2'>
                <h1>{movie.rating}</h1>
            </div>
            </div>
           
            <h1 className='text-[1rem] font-light'>Today, {time}</h1>
        </div>
        <div className='flex w-[38%] mt-[2rem] gap-4  flex-wrap items-center justify-center '>
        {seats.map((_,index) => {
            return <button disabled={seats[index].booked} key={index} onClick={()=>{selectSeat(index)}} className='flex '>
            <div className={`${seats[index].selected ? 'bg-green-500 text-white' : 'bg-[#D9D9D9] text-black'} ${seats[index].booked && 'bg-red-400 ring-red-800'} ring-2 hover:scale-[95%] transition-all ease-linear justify-center items-center  flex ring-green-500 h-[3rem] w-[3.5rem] rounded-md m-[3px]`}>{index+1}</div>
          </button>
        })}

        <div className='bg-black h-[0.5rem] w-[100%] mt-[1rem]'>
           
        </div>
        <h1 className='font-semibold text-[1.2rem]'>All Eyes This Way Please</h1>
        </div>

        {selectedSeats.length > 0 && <div className='flex gap-4 mt-[2rem]'> 
        <h1 className='font-semibold text-[1.2rem]'>Selected Seats</h1>
        <div className='flex gap-4'>
            {selectedSeats.map((seat,index) => {
                return <h1 key={index} className='font-semibold text-[1.2rem]'>{seat+1}</h1>
                
            }
            )}
            
            </div>
        </div>}

        {total > 0 && <div className='flex bg-black/[30%] w-[100%] p-2 justify-center items-center gap-4 flex-grow'>
            <h1 className='font-semibold text-[1.2rem]'>Total</h1>
            <h1 className='font-semibold text-[1.2rem]'>Rs. {total}</h1>
            <button onClick={()=>{Pay();navigate('payment')}} className='p-1 w-[12rem]  text-white font-semibold rounded-md shadow-md bg-[#8D1431] hover:scale-[95%] transition-all ease-linear'>Pay</button>

        </div>
        }
        </>
        ): (<h1>Loading</h1>)}

      

        
    </div>
  )
}

export default SelectSeat