
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className='flex flex-col   min-w-[100%] h-[100%]  flex-grow overflow-y-hidden'>
        <div className='bg-black/[70%] h-[25rem] flex justify-center items-center w-[100%]'>
            <div className='bg-black h-[100%] min-w-[40%]   justify-center items-center flex overflow-clip'>
                <img alt="carousel" className='h-[100%] w-[100%]' style={{objectFit:"fill"}}  src="https://imgs.search.brave.com/AB3nKFiOteyVTAEOtF0j9CiAJrZxi6Yf3X3yklIKCaY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk4ySmlNRGho/TVdVdFlXSTJZaTAw/WWpkaExUa3pORFF0/WW1KallqYzVZMk5s/T0daaVhrRXlYa0Zx/Y0dkZVFYVnlNVEUw/TXpRd01qZ3ouX1Yx/X1FMNzVfVVg1MDBf/Q1IwLDEsNTAwLDI4/MV8uanBn"/>
            </div>
        </div>
        <div className='flex mr-[4rem] justify-between items-center mt-[2rem] ml-[4rem] font-semibold text-[2rem]'>
            <h1>Recommended Movies</h1>
            <div className='flex items-center justify-center text-[1.2rem]'>
            <Link to="/all"><h1 className='text-[#850C46]'>See all</h1></Link>
            <h1>&gt;</h1>
            </div>
        </div>

        <div className='flex mr-[4rem] justify-center gap-[3.6rem] items-center mt-[1rem] ml-[4rem] font-semibold text-[2rem]'>
            <Link to='/movie/1'>
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
            </Link>
        
            <div className='flex flex-col '>
            <div className='relative w-[15rem] justify-center items-center overflow-hidden rounded-[6%] h-[22rem]'>
                <img className='h-[100%]   w-[100%] '  src="https://media.tenor.com/ANoIvVOqjY8AAAAM/mamitha-baiju-premalu.gif"   alt="aavesham" />
                <img className='absolute hover:hidden ease-linear transition-all duration-[250] z-10 top-0 h-[100%] w-[100%]'  src="https://imgs.search.brave.com/h9v_1nxVJXhP7CDmIB3kMW9gSvJqf23tC7VqnxVvrtQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZW1hY2xvY2su/Y29tL2ltYWdlcy9w/b3N0ZXJzLzEwMDB4/MTUwMC80NS9wcmVt/YWx1LTIwMjQtb3Jp/Zy1wb3N0ZXIuanBn"alt="" />
            </div>
            <div className='flex flex-col ml-2'>
                <h1 className='text-[1.4rem] mb-0'>Premalu</h1>
                <h1 className='text-[1rem] text-[#979797]'>Romance/Comedy</h1>
            </div>
            </div>



            
        </div>
    </div>
  )
}

export default Home