import React, { useEffect, useState } from 'react'
function ViewTicket() {

    const [selectedSeats,setSelectedSeats] = useState<Array<number>>([])
    const [total,setTotal] = useState<number>(0)

    

    useEffect(() => {
        setSelectedSeats([]);
        setTotal(0);

        if(localStorage.getItem('tickets') !== null){
            let data = JSON.parse(localStorage.getItem('tickets') || '{}')
            let tickets = data.tickets;
            let ticket = tickets[0];
            setSelectedSeats(ticket.seats)
            setTotal(ticket.total)
        }
        
    },[])

  return (
   
    <div className='flex flex-grow  justify-center items-center bg-[#cac5c5]'>
        <div className='flex flex-col p-2 bg-white rounded-md shadow-md'>
            <div className='p-4 font-mono tracking-wide text-[#39071F] text-[1.7rem]'>
            <div className='flex gap-2'>
            <div className='w-[4em] relative justify-center items-center overflow-hidden rounded-[6%] h-[8rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col'>
                <h1>Aavesham (U/A)</h1>
                <h1>Tamil,2D</h1>
                <h1>Today, 10:30PM</h1>
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
                        <h1 className='font-semibold'>BOOKING ID: JPRMX742</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between flex-grow mt-2 w-[100%]'>
                <h1>Total Amount</h1>
                <h1>Rs.{total}</h1>
            </div>
            
            </div>
            

    </div>
    

        
    </div>


 

    

  


  )
}

export default ViewTicket