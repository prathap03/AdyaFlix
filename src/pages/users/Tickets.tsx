import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tickets() {
  const [tickets, setTickets] = useState<Array<any>>([]);

  useEffect(() => {
    if (localStorage.getItem("tickets") !== null) {
      let data = JSON.parse(localStorage.getItem("tickets") || "{}");
      console.log(data);
      setTickets(data.tickets);
    }
  }, []);

  return (
    <div className="flex flex-col gap-1 p-2">
      {tickets.length > 0 ? (
        tickets.map((ticket: any, index: number) => {
          return (
           <Link to='1'>
            <div className="flex p-1 bg-white shadow-md">
                   <div className='flex flex-col '>
            <div className='w-[9rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[11rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
           
            </div>
              <div
                key={index}
                className="flex flex-col justify-center gap-2  text-[1.5rem] p-2 text-black "
              >
                <h1>{ticket.name}</h1>
                <h1>{ticket.date}</h1>
                <h1>{ticket.time}</h1>
                <h1>Rs.{ticket.total}</h1>
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
