import React from 'react'
import { Button } from '../components/Shared/Button'

export const LoginSign = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form action="">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Sign up"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
            />
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an Account? <a href="#" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}
