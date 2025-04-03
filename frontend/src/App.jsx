import Home from "../Pages/Home"
import Course from '../Pages/Course'
import Signup from "../Pages/Signup"
import { Routes,Route } from "react-router-dom"
function App() {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/course" element={<Course/>}/>
       <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default App
