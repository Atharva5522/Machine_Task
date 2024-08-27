import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import Login from "./Pages/Login"

import Register from "./Pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

<Routes>
<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/home" element={<Home/>}/>


</Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
