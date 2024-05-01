import React from 'react'
import { Link } from 'react-router-dom'

function Showtime() {
  return (
    <div className="flex flex-grow overflow-x-hidden">
      <div className="flex flex-col gap-4 w-[15%] p-4 ">
      <div className='flex flex-col '>
            <div className='w-[22rem] relative justify-center items-center overflow-hidden shadow-md rounded-md h-[25rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>

                <p className='mt-2 text-justify w-[135%]'>
                Directed by Jithu Madhavan. With Fahadh Faasil, Hipster, Hipster, Mithun Jai Shankar. Three teenagers reaches Bangalore for their engineering degree and gets involved in a fight with seniors. They find a local gangster named Ranga to help them take revenge.
                </p>
            </div>
            </div>       

      </div>
      
      
      <div className="flex ml-[5rem]  flex-col gap-2 flex-grow p-4 ">
      <div>
          <h1 className="font-semibold text-[2rem]">Showtimes</h1>

          
        </div>

        <div className='flex flex-col flex-grow gap-4 h-[100%] w-[100%] shadow-md  ring-1 rounded-md p-2'>
           <div className='w-[100%] flex'>
           <button className='flex text-[1.6rem] bg-[#39071F] text-white w-[6%] flex-col items-center justify-center p-2 h-max '>
                <h1 className='font-semibold'>30</h1>
                <h1>APR</h1>
            </button>

            <button className='flex text-[1.6rem]  text-[#39071F] w-[6%] flex-col items-center justify-center p-2 h-max '>
                <h1 className='font-semibold'>01</h1>
                <h1>MAY</h1>
            </button>

            <button className='flex text-[1.6rem]  text-[#39071F] w-[6%] flex-col items-center justify-center p-2 h-max '>
                <h1 className='font-semibold'>02</h1>
                <h1>MAY</h1>
            </button>

            <button className='flex text-[1.6rem]  text-[#39071F] w-[6%] flex-col items-center justify-center p-2 h-max '>
                <h1 className='font-semibold'>04</h1>
                <h1>MAY</h1>
            </button>
           </div>
           
           <Link to="30042004/0900/selectseat">
           <div className='p-2 font-semibold text-[2rem] bg-[#e6e6e6] rounded-md shadow-md'>
            <h1>9:00 AM</h1>
           </div>
           
           </Link>
          

           <div className='p-2 font-semibold text-[2rem] bg-[#e6e6e6] rounded-md shadow-md'>
            <h1>3:00 PM</h1>
           </div>
          </div>
        
    
      </div>
    </div>
  )
}

export default Showtime