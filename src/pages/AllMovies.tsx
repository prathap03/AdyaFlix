

function AllMovies() {
  return (
    <div className="flex flex-grow overflow-x-hidden">
      <div className="flex flex-col gap-4 w-[15%] p-4 ">
        <div>
          <h1 className="font-semibold text-[2rem]">Filters</h1>
        </div>

        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md p-2 w-[100%] ">
          <div className="flex w-[100%]  items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Languages</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Tamil
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              English
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Malayalam
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Hindi
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Telugu
            </button>
          </div>
        </div>

        <div className="bg-[#3F0822]/[22%] shadow-md rounded-md  p-2 w-[100%] ">
          <div className="flex w-[100%]  items-center justify-between">
            <h1 className="text-[#5B0A36] font-semibold">Genere</h1>
            <h1 className="text-[0.8rem]">Clear</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Drama
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Action
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Comedy
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Thriller
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Crime
            </button>
            <button className="text-[#5B0A36] bg-white ring-1 ring-[#8E888D] p-1">
              Sci-fi
            </button>
          </div>
        </div>
      </div>
      
      
      <div className="flex ml-[5rem] flex-col gap-2 flex-grow p-4 ">
      <div>
          <h1 className="font-semibold text-[2rem]">Movies</h1>
        </div>
        <div className="flex gap-4 w-[30%]  p-1">
        <button className="bg-[#5B0A36] shadow-md w-[20%] rounded-full text-white outline-[#8E888D] outline-2 p-1">
              2D
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Tamil
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              English
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Malayalam
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Hindi
            </button>

            <button className="text-[#5B0A36] shadow-md w-[20%] rounded-full bg-white ring-1 ring-[#8E888D] p-1">
              Telugu
            </button>

            
        </div>
        <div className="grid grid-cols-5 gap-4 w-[100%]">
        <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>
            </div>
            </div>

            <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[150] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>
            </div>
            </div>
            <div className='flex flex-col flex-wrap w-[90%]'>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>
            </div>
            </div> <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>
            </div>
            </div> <div className='flex flex-col '>
            <div className='w-[15rem] relative justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] ' src="https://imgs.search.brave.com/0KybdnqkPEfolo1UU6_pt4hI88QBEVagLiespUZ2JPo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/dTFhRExXMVA4Z2NB/QUFBTS9mYWhhZC1m/YWFzaWwtYWF2ZXNo/YW0uZ2lm.gif"  alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]' src="https://imgs.search.brave.com/S6QpMKQvPe9k5IN9205VI4uQuVBnFAkgTT5F08UBJBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdWJk/bC5vcmcvY2RuL3Bv/c3Rlci9kZHVxcXF3/d3V2LndlYnA" alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Aavesham</h1>
                <h1 className='text-[1rem] text-[#979797]'>Action/Comedy</h1>
            </div>
            </div> 
            
    
            
        </div>
      </div>
    </div>
  );
}

export default AllMovies;
