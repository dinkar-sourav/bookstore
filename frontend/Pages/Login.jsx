import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate();
  const handleClose= ()=>{
    navigate("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Login</h3>
            <div className="py-4 space-y-3">
              <span>Email</span>
              <br />
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
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
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"
                type="password"
                placeholder="Enter your Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 cursor-pointer">
                Login
              </button>

              <p>
                Not registered ?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  signup
                </Link>
              </p>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              
                <button 
                 onClick={handleClose}
                className="btn">Close</button>
              
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
