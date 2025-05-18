import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/NotFound"; // NotFound Component for unknown routes
import PackageStatusCard from "./components/PackageStatusCard";
import Campaign from "./components/ndakwizeye";

import "./App.css";
import Byiringiro from "./components/byiringiro";

// Lazy load components for code splitting
const Main = lazy(() => import("./components/Main"));
const PrivacyPolicy = lazy(() => import("./components/privacy"));
const SwiftLogin = lazy(() => import("./components/Login"));

// Loader Component
const Loader = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-gray-900 space-y-4">
    <div className="relative w-24 h-24">
      {/* Pulsating Core */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 animate-pulse-ring"></div>
      
      {/* Spinner Arc */}
      <div className="absolute inset-0 rounded-full border-[4px] border-teal-500/30 animate-spin"></div>
      
      {/* Central Icon */}
      <div className="absolute inset-1 flex justify-center items-center bg-gray-900 rounded-full">
      <svg
  className="w-10 h-10 text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
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
</svg>

      </div>
    </div>
    
    {/* Animated Text */}
    <div className="flex space-x-2">
      <span className="text-teal-400 font-semibold text-xl animate-wave">T</span>
      <span className="text-teal-400 font-semibold text-xl animate-wave delay-100">R</span>
      <span className="text-teal-400 font-semibold text-xl animate-wave delay-200">U</span>
      <span className="text-teal-400 font-semibold text-xl animate-wave delay-300">S</span>
      <span className="text-teal-400 font-semibold text-xl animate-wave delay-400">T</span>
     
    </div>
  </div>
);


// Layout Component that handles routing and loader state on route change
const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s delay before hiding loader
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<SwiftLogin />} />
          <Route path="/ndakwizeye"   element={<Campaign/>}   />
            <Route path="/PackageStatusCard" element={<PackageStatusCard />} />
            <Route path="/byiringiro"  element={<Byiringiro/>}  />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
