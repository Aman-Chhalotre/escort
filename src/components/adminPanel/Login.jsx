import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { AxiosPost } from "../../apiCall/ApiCall";
import Cookies from 'js-cookie'

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await AxiosPost(`/api/users/login`, {
  //       email,
  //       password,
  //     },{ withCredentials: true });
  //     if (response.status == "Success") {
  //       setSuccessMessage(response.data.message);
  //       setErrorMessage("");
  //       // setEmail("")
  //       // setPassword("")
  //       navigate("/admin")
  //     }
  //   } catch (error) {
  //     setErrorMessage(error.response?.data?.error);
  //     setSuccessMessage("");
  //   }
  // };
  
  useEffect(()=>{
    const token = Cookies.get("accessToken");
          console.log(token) 
  },[])


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosPost(`/api/users/login`, { email, password }, { withCredentials: true });
  
      if (response.status == "Success") {
        setSuccessMessage(response.data.message);
        setErrorMessage("");
        setEmail("");
        setPassword("");
  
        // ✅ Check if the token is set before redirecting
        setTimeout(() => {
          const token = Cookies.get("accessToken");
          console.log(token) 
          if (token) {
            navigate("/admin");
          }
        }, 500); // Give some time for the cookie to be set
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error);
      setSuccessMessage("");
    }
  };
  return (
    <>
      <div className="h-[60vh] flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 text-gray-500 text-sm focus:outline-none hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
