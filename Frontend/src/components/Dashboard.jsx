import React, {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';


const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() =>{
    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  },[])

  const handleLogOut = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600">
    
    <div className="bg-white shadow-2xl rounded-3xl p-8  text-center animate-fade">
      
      {/* Profile Image */}
      <img
        src={userInfo?.image}
        alt="User Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
      />

      {/* Welcome Text */}
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome ...
        <h3>{userInfo?.name}</h3>
      </h1>

      {/* Email */}
      <p className="text-gray-500 mt-2">
        {userInfo?.email}
      </p>

      {/* Divider */}
      <div className="my-5 border-t"></div>

      {/* Logout Button */}
      <button
        onClick={handleLogOut}
        className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition duration-300 shadow-md"
      >
        Logout
      </button>

    </div>
  </div>
);
}

export default Dashboard