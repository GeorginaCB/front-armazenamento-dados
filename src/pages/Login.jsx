import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Login = () => {
  return (
    
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form id="loginForm" className="space-y-4">
        <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <a href="signup.html" className="text-blue-500">Sign up</a></p>
      </div>
    </div>
    <Footer/>
    
    </>
  );
};

 
