import React from "react";
import { useAuth } from "./Contextapi/provider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Logout(){
    const [authUser, setAuthUser]= useAuth();
    const navigate= useNavigate();
    const handleLogout= ()=>{
        try {
            setAuthUser(null);
            localStorage.removeItem("loginusers");
            toast.success("logout successfully");
            setTimeout(() => {
                
            }, 3000);
            navigate("/"); 
        } catch (error) {
            toast.error("error "+error.message)
        }
    }
    return (
        <div>
            <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
             onClick={handleLogout}
            >Logout</button>

        </div>
    )
}

export default Logout;