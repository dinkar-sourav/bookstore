import Home from "../Pages/Home"
import Course from '../Pages/Course'
import { Toaster } from 'react-hot-toast';
import Signup from "../Pages/Signup"
import { Routes,Route } from "react-router-dom"
import { useAuth } from "./Components/Contextapi/provider";
import { Navigate } from "react-router-dom";
function App() {

  const [authUser, setAuthUser]= useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/course" element={authUser ? <Course/> : <Navigate to="/signup"/>}/>
       <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster position="top-right" reverseOrder={false} />
    </>
    
  )
}

export default App
