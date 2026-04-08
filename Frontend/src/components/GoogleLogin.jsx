import React from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import { googleAuth } from '../api';
import {useNavigate} from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const responseGoogle = async (authResult) => {
    try{
        if(authResult['code']){
            const result = await  googleAuth(authResult['code']);
            const {email,name,image} = result.data.user;
            const token = result.data.token;
            const obj = {email,name,image,token};

            localStorage.setItem('user-info',JSON.stringify(obj));
            
            console.log('result.data.user ---' , result.data.user);
            console.log('token ---' , token);
            navigate('/dashboard');
        }
    }
    catch(err){
        console.error('Error while requesting google code', err);
    }
  }
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">
        
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome 👋
        </h1>
        
        <p className="text-gray-500 mb-6">
          Login to continue
        </p>

        <button
          onClick={() => googleLogin()}
          className="flex items-center justify-center gap-3 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

      </div>
    </div>
  )
}

export default GoogleLogin