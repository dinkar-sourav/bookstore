import React from 'react'
import axios from 'axios';
import Login from '../Pages/Login'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../src/Components/Contextapi/provider';
export default function Signup() {
  const [authUser,setAuthUser]= useAuth();
  const navigate= useNavigate();
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = async (data)=>{
      const userInfo={
         name:data.name,
         email : data.email,
         password : data.password
      }
      try {
        const response= await axios.post("https://bookstore-3-yk4b.onrender.com/users/signup", userInfo);

        if(response.status==201){
          alert("user created successfully");
          console.log(response.data);
          localStorage.setItem("loginusers",JSON.stringify(response.data.user));
          setAuthUser(response.data.user);
          navigate("/")
          
        }
      } catch (error) {
          if(error.response){
             alert(error.response.data.msg);
          }
          else{
            console.log(error.message);
          }
      }

   }

   const handleClose = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) modal.close(); // 👈 manually close it
    navigate("/");             // 👈 now navigate will work
  };

  return (
    <div className="flex h-screen items-center justify-center">
    <div id="my_model_5" className='shadow-md p-5 rounded-md'>
      <h3 className="font-bold text-lg">Sign up</h3>
      {/* name */}
      <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="py-4 space-y-3">
         <span>Name</span>
         <br />
         <input className="w-80 px-3 py-1 border rounded-md outline-none" type="text" placeholder="Enter your name" 
         {...register("name",{required:true})} 
         />
         <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
      </div>

      {/* email */}
      <div className="py-4 space-y-3">
         <span>Email</span>
         <br />
         <input className="w-80 px-3 py-1 border rounded-md outline-none" type="email" placeholder="Enter your email" 
          {...register("email" , {required:true})} 
         />
         <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
      </div>

      {/* password */}
      <div className="py-4 space-y-3">
         <span>Password</span>
         <br />
         <input className="w-80 px-3 py-1 border rounded-md outline-none" type="password" placeholder="Enter your Password" 
          {...register("password" , {required:true})} 
         />
         <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
      </div>
     {/* button */}
     <div className="mt-5 flex justify-around">
        <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 cursor-pointer">Sign up</button>
      
        <button>
            Have account <span 
                            onClick={()=>document.getElementById("my_modal_5").showModal()}
            className='text-blue-600 underline'>Login</span>
        </button>

        <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}

              <button onClick={handleClose} className="btn">
                Close
              </button>
            </div>
       
     </div>
     </form>
     <Login/>
    </div>
    </div>
  
  )
}
