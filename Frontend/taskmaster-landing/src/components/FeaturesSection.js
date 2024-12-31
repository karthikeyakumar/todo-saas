import React from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-check-circle",
      title: "Task Organization", 
      description: "Keep your tasks organized with custom lists, tags, and priorities.",
    },
    {
      icon: "fas fa-bell",
      title: "Smart Reminders",
      description: "Never miss a deadline with intelligent notifications and reminders.",
    },
    {
      icon: "fas fa-chart-line", 
      title: "Progress Tracking",
      description: "Monitor your productivity with detailed analytics and reports.",
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Work together seamlessly with team sharing and real-time updates.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-28 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">All-in-one platform for task management</h2>
          <p className="mt-4 text-lg text-gray-600">Everything you need to manage your tasks efficiently and boost productivity.</p>
        </motion.div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <dt>
                <motion.div 
                  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white"
                  whileHover={{ 
                    x: feature.icon === "fas fa-bell" ? 0 : [-2, 2, -2],
                    backgroundColor: "#4338ca",
                    rotate: feature.icon === "fas fa-bell" ? [0, 15, -15, 0] : 0
                  }}
                  transition={{ 
                    x: {
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.i 
                    className={`${feature.icon} text-2xl`}
                  ></motion.i>
                </motion.div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-800">{feature.title}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesSection;
