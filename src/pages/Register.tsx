import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"


function Register() {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  const SignUp = async() => {
    if(name === '' || userName === '' || email === '' || password === '' || phone === '') return console.log('Please fill all the fields')
      
    try{
      const {data} = await axios.post("http://localhost:8000/user/register",{
        fullName:name,
        userName:userName,
        email:email,
        password:password,
        phone:phone
      })
      if(data){
        navigate("/login")
      }
      else{
        console.log('Invalid Credentials')
      }
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className='bg-[#39071F] flex flex-grow justify-center items-center'>
        <div className='p-4 bg-white rounded-md'>
            <h1 className='text-[2rem] font-semibold'>Register</h1>
            <form className='flex flex-col gap-2'>
                <input onBlur={(e)=>{setName(e.target.value)}} type='text' className='p-2 border-none rounded-md' placeholder='Name' required/>
                <input onBlur={(e)=>{setUserName(e.target.value)}} type='text' className='p-2 border-none rounded-md' placeholder='User Name' required/>
                <input onBlur={(e)=>{setEmail(e.target.value)}} type='text' className='p-2 border-none rounded-md' placeholder='Email' required/>
                <input onBlur={(e)=>{setPhone(e.target.value)}} type='text' className='p-2 border-none rounded-md' placeholder='Phone' required/>
                <input onBlur={(e)=>{setPassword(e.target.value)}} type='password' className='p-2 border-none rounded-md' placeholder='Password' required />
                <button onClick={()=>{SignUp()}} className='bg-[#8D1431] text-white p-2 rounded-md'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register