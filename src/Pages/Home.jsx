import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {add} from "../Slice/EditSlice"
import Listgroup from "../Components/Listgroup"



const Home = () => {

  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const {edit} = useSelector(state => state.edit)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!user) {
      navigate("/")
    }
  },[user,navigate])

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [state,setState] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault();
   const newfeedback = {
        id :crypto.randomUUID(),
        name,
        email,
        password,
        state
    }
    dispatch(add(newfeedback));

    setName("")
    setEmail("")
    setPassword('')
    setState("")


};

useEffect(() =>{
  setName(edit.edit.name);
        setEmail(edit.edit.email);
        setPassword(edit.edit.password)
        setState(email.email.state)
},[edit])


  return (
    <div>

<h1>View and Edit Your Account</h1>

<form className="space-y-6 px-4 max-w-sm mx-auto font-[sans-serif]" onSubmit={handlesubmit}>
      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Name</label>
        <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name}
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">password</label>
        <input type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password}
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <div className="flex items-center">
        <label className="text-gray-400 w-36 text-sm">State</label>
        <input type="text" placeholder="Enter your state" onChange={(e)=>setState(e.target.value)} value={state}
          className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
      </div>

      <button type="submit"
        className="!mt-8 px-6 py-2 w-full bg-[#333] hover:bg-[#444] text-sm text-white mx-auto block">Submit</button>


       
    </form>

    <Listgroup/>
    
    </div>
  )
}

export default Home
