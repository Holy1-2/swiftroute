import React, { useState } from "react";
import { db, collection, addDoc } from "./components/FirebaseConfig"; // Import Firebase config
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Define navigate function using React Router

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), { email });
      setMessage("Subscription successful!");
      setEmail(""); // Clear input
    } catch (error) {
      setMessage("Error subscribing. Try again.");
      console.error("Error adding email: ", error);
    }
  };

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section: Logo & Company Name */}
        <div className="flex justify-center mb-8">
          <img src="favicon-96x96.png" alt="Swift Route Logo" className="w-24 h-24" />
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-6">
          {/* Left Section: QR Code */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="code.png" alt="QR Code" className="w-40 h-40 mb-4" />
            <p className="text-gray-600 text-center lg:text-left">
              Scan to download our app on the Play Store and App Store.
            </p>
          </div>

          {/* Middle Section: Subscription Form */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Get product updates and our changelog. No spam ever!
            </p>
            <form className="flex w-full max-w-md" onSubmit={handleSubmit}>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-4 pr-24 py-3 w-full border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="ml-3 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
          </div>

          {/* Right Section: Contact Information & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="text-gray-600 space-y-3 mb-6">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-500 w-6"></i>
                <span className="ml-3">123 Main Street, Cityname, Country</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-green-500 w-6"></i>
                <a href="tel:+1234567890" className="ml-3 hover:underline">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-green-500 w-6"></i>
                <a href="mailto:info@swiftroute.com" className="ml-3 hover:underline">
                  info@swiftroute.com
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="mt-8 text-center">
          <ul className="flex justify-center space-x-6 text-gray-600">
            <li><Link to="/#about" className="hover:text-green-500">About Us</Link></li>
            <li><Link to="/#services" className="hover:text-green-500">Services</Link></li>
            <li><Link to="/#faq" className="hover:text-green-500">FAQs</Link></li>
            <li><Link to="/#contact" className="hover:text-green-500">Our App</Link></li>
          </ul>
        </div>

        {/* Bottom Section: Privacy Policy */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Swift Route. All Rights Reserved.
            <Link to="/privacy" className="text-green-500 hover:underline ml-4">
              Privacy Policy
            </Link>  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
