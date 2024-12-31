import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/apiService'; // Import the login API call

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password }); // Call the login API
      const token = response.data.token; // Extract the token from the API response
      if (rememberMe) {
        localStorage.setItem('authToken', token); // Store token persistently
      } else {
        sessionStorage.setItem('authToken', token); // Store token for session
      }
      setErrorMessage(''); // Clear error message on success
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-4 p-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center space-y-2">
          <div className="mb-4">
            <img
              src="/images/app.png"
              alt="TaskMaster Logo"
              className="h-14 w-auto mx-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Welcome back to TaskMaster
          </h2>
          <p className="text-sm text-gray-600">
            Let's get back to being productive
          </p>
        </div>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="text-sm text-red-600">{errorMessage}</div>
          )}
          <div>
            <label htmlFor="username" className="block text-base font-medium text-gray-800">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-800">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Sign in
          </button>
          <div className="text-center">
            <Link to="/signup" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Don't have an account? Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
