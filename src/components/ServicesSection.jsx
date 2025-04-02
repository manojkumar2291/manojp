import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaPalette } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
    description:
      "As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it’s an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.",
  },
  {
    title: "UI Development",
    icon: <FaPaintBrush className="text-green-400 text-4xl" />,
    description:
      "UI (User Interface) development focuses on creating the visual elements of a website or application. I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript. My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.",
  },
  {
    title: "UI Designing",
    icon: <FaPalette className="text-yellow-400 text-4xl" />,
    description:
      "UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, and consistency. My designs aim to enhance the overall look and feel of your digital product.",
  },
];

const ServicesSection = () => {
  return (
   <div className="my-5" id="services">
     <motion.section
      
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-300 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are the services I provide to help bring your digital ideas to life.
        </motion.p>

        {/* Services Grid */}
        <div className="my-15 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
   </div>
  );
};

export default ServicesSection;
