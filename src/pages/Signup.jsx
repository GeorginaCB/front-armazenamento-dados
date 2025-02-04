import React from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const Signup = () => {
  return (
    <>
    <Header/>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form id="signupForm" className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1">Username</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">passwordConfirmation</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <a href="login.html" className="text-blue-500">Login</a></p>
      </div>
    </div>
    <Footer/>
    </>
  );
};


