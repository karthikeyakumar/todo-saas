import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 mix-blend-multiply"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      ></motion.div>
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <motion.h1 
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-white">Take control of your tasks</span>
          <span className="block text-indigo-300">with TaskMaster</span>
        </motion.h1>
        <motion.p 
          className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Streamline your workflow, boost productivity, and never miss a deadline again with our intuitive task management solution.
        </motion.p>
        <motion.div 
          className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <Link to="/signup">
              <motion.a 
                href="#" 
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-50 sm:px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started
              </motion.a>
            </Link>
            <motion.a 
              href="#" 
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 sm:px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
