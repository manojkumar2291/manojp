import React, { useState } from "react";
import emailjs from "emailjs-com";
import download from "../assets/download.jpeg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_uca9qvf",
        "template_29ztut8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Db1z7qAl9ZDJqY6D8"
      );

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all ease-in-out duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! Fill out the form below to get in touch with us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300 transform hover:scale-105 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {successMessage && <p className="mt-4 text-center text-green-600">{successMessage}</p>}
        </div>

        {/* Right Side: Text & Image */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center bg-blue-100 rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              "Let’s create something amazing together!"
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We are always open to new ideas and collaborations. Reach out, and let's make magic happen.
            </p>
          </div>

          {/* Image */}
          <div className="mt-6">
            <img
              src={download}
              alt="Collaborative Work"
              className="w-72 h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
