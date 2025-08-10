import manoj from '../assets/manoj.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side - Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={manoj} // Replace with your actual image
              alt="Profile"
              className="w-64 h-64 object-cover rounded-xl border-4 border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-2/3 md:ml-10 mt-10 md:mt-0 text-center md:text-left">
            <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              I am a passionate developer who loves building modern web applications and exploring new technologies. 
              My journey in the world of programming started with a curiosity to create interactive digital experiences, 
              which soon turned into a full-fledged passion. I enjoy solving problems, optimizing performance, and crafting 
              seamless user experiences. 
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Whether it&apos;s front-end development with React and Tailwind CSS or back-end work using Node.js and FastAPI,
              I thrive on the challenge of creating scalable and efficient applications. My goal is to continuously learn, 
              adapt, and contribute to impactful projects.
            </p>
            {/* Resume Button */}<div className="mt-6">
              <a
                href="https://drive.google.com/uc?export=download&id=1RxORCAF8-daZ8EqyWA0meDD2SZdHZHaO"
                download
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Download Resume
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
