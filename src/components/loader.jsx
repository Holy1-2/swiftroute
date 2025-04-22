import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-10 h-10 border-4 border-solid border-gray-400 border-t-teal-600 rounded-full"
      />
    </div>
  );
};

export default Loader;
