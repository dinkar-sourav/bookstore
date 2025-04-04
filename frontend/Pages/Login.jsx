import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../src/Components/Contextapi/provider";
export default function Login() {
  const [authUser, setAuthUser]= useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "https://bookstore-3-yk4b.onrender.com/users/login",
        userInfo
      );

      if (response.status == 200) {
        localStorage.setItem("loginusers", JSON.stringify(response.data));
        setAuthUser(response.data);
        toast.success("Login successfully");
        // alert("Login successfully");
        const modal = document.getElementById("my_modal_5");
        if (modal) modal.close();
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };

  const handleClose = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) modal.close(); // 👈 manually close it
    navigate("/");             // 👈 now navigate will work
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} >
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

              <button onClick={handleClose} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
