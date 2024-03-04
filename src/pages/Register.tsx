import { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    const { name, email, password, confirmPassword } = user;

    if (email === "" || name === "" || password === "" || confirmPassword) {
      alert("All fields are required!");
    }
    if (password !== confirmPassword) {
      alert("Passwords should be same");
    }

    const userString = JSON.stringify(user);

    localStorage.setItem("userData", userString);
    alert("Registered successfully!");

    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col gap-3 shadow-xl rounded-md p-7 w-[450px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-green-300 text-3xl font-semibold">LOGO</h1>
          <p>Register to your account to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <div className="flex items-center border-2 gap-2 bg-white border-gray-500 rounded-md px-3 py-1 mt-2 w-full">
              <FiUser />
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                id="name"
                placeholder="Enter your name"
                className="border-none w-full p-1 outline-none"
              />
            </div>
          </div>
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
            <label>Password</label>
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

          <div className="flex flex-col gap-1">
            <label>Confirm Password</label>
            <div className="flex items-center border-2 gap-2 bg-white border-gray-500 rounded-md px-3 py-1 mt-2 w-full">
              <FiLock />
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
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
            Register
          </button>
          <a href="/login" className="mt-4 text-blue-900">
            Already have an account? Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
