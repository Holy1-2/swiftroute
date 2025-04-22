import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAgreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement OAuth integration here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/dashboard'); // Redirect after successful signup
  };

  const getStrengthColor = (index) => {
    const colors = ['bg-red-400', 'bg-yellow-400', 'bg-teal-400', 'bg-teal-600'];
    return index < passwordStrength ? colors[index] : 'bg-gray-600';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
     <svg
  className="w-10 h-10 text-teal-500 hover:text-teal-600 transition-colors cursor-pointer mx-auto mb-4"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Cube front face */}
  <path d="M5 8L12 4L19 8V16L12 20L5 16V8Z" />
  
  {/* Top flap shading */}
  <path 
    d="M12 4L19 8L12 12L5 8L12 4Z" 
    className="opacity-60"
  />
  
  {/* Vertical depth line */}
  <path d="M12 12V20" />
  
  {/* Diagonal fold line */}
  <path 
    d="M12 12L19 8" 
    className="opacity-40"
  />
  
  {/* Animated highlight effect */}
  <path
    d="M12 4L5 8L12 12M12 4L19 8L12 12"
    className="opacity-30 animate-pulse"
  />
</svg>          <h1 className="text-2xl font-bold text-white mb-2">
            Create Swift Route Account
          </h1>
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Social Login */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <i className="fab fa-google text-red-400"></i>
            <span>Google</span>
          </button>
          <button
            onClick={() => handleSocialLogin('github')}
            className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors"
          >
            <i className="fab fa-github text-purple-400"></i>
            <span>GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-400"
              >
                <i className={`fas fa-eye${showPassword ? '' : '-slash'}`}></i>
              </button>
            </div>
            <div className="mt-2 flex gap-1">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-1/4 rounded-full transition-colors ${getStrengthColor(index)}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-600 rounded bg-gray-700 text-teal-400 focus:ring-teal-400/30"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
              I agree to the{' '}
              <a href="/terms" className="text-teal-400 hover:text-teal-300 transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-teal-400 hover:text-teal-300 transition-colors">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <i className="fas fa-user-plus"></i>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
