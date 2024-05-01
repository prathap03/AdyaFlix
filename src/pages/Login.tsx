import axios  from "axios"
import { useState } from "react"


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignIn = async() => {
        try{
            const {data} = await axios.post("http://localhost:8000/user/login",{
                email:email,
                password:password
            })
            if(data){
                localStorage.setItem('token',data.token)
            }else{
                console.log('Invalid Credentials')
            }
        }catch(err){
            console.log(err)
    }
}

  return (
    <div className='bg-[#39071F] flex flex-grow justify-center items-center'>
        <div className='p-4 bg-white rounded-md'>
            <h1 className='text-[2rem] font-semibold'>Login</h1>
            <div className='flex flex-col gap-2'>
                <input onBlur={(e)=>{setEmail(e.target.value)}} type='text' className='p-2 border-none rounded-md' placeholder='Email' />
                <input onBlur={(e)=>{setPassword(e.target.value)}} type='password' className='p-2 border-none rounded-md' placeholder='Password' />
                <button onClick={()=>{SignIn()}} className='bg-[#8D1431] text-white p-2 rounded-md'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login