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
     <section
      
      className="py-16 bg-transparent text-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-green-600 text-center"
        >
          My Services
        </h2>

        <p
          className="mt-4 text-lg text-gray-600 text-center"
        >
          Here are the services I provide to help bring your digital ideas to life.
        </p>

        {/* Services Grid */}
        <div className="my-15 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-slate-300 hover:border-green-600 transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default ServicesSection;
