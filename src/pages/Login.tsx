import { useState } from "react";
import { FiLock, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storedUserData = localStorage.getItem("userData");
  let retrievedUser: { email: string; password: string; };
  if (storedUserData !== null) {
     retrievedUser = JSON.parse(storedUserData);
  } else {
    console.log("User data not found in localStorage");
  }

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: unknown) => {
    e.preventDefault();
    const {email, password}=user
    if(email !==retrievedUser.email && password !==retrievedUser.password){
      alert("invalid emal or password")
      return;
    }
    login()
    alert("login succussfull")
    const data={
      retrievedUser,
      isAuthenticated:true
    }
    dispatch(signInSuccess(data))
    navigate('/')

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col gap-3 shadow-xl rounded-md p-7 w-[450px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-green-300 text-3xl font-semibold">LOGO</h1>
          <p>Login to your account to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <div className="flex items-center border-2 gap-2 bg-white border-gray-500 rounded-md px-3 py-1 mt-2 w-full">
              <FiUser />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your email"
                className="border-none w-full p-1 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <label>Password</label>
              <p>Forgot password</p>
            </div>
            <div className="flex items-center border-2 gap-2 bg-white border-gray-500 rounded-md px-3 py-1 mt-2 w-full">
              <FiLock />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                id="password"
                placeholder="Enter your password"
                className="border-none w-full p-1 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md p-3 w-full mt-4"
          >
            Log In
          </button>
          <a href="/register" className="mt-4 text-blue-900">
            Don't have an account? Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
