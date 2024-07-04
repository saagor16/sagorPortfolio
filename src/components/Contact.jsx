import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRegAddressCard,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_bxgnxcb",  // Replace with your Email.js service ID
        "template_5gm7w5h", // Replace with your Email.js template ID
        formData, // Pass the formData object
        "Od2pt1tvM7MATB-yH" // Replace with your Email.js public user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          setFormData({ name: "", subject: "", email: "", message: "" });
          console.log(result.text);
        },
        (error) => {
          alert("An error occurred, please try again");
          console.log(error.text);
        }
      );
  };

  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="container max-w-screen-lg mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="p-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-cyan-500" />
              <span>Location: Mirpur-2, Dhaka</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegAddressCard className="text-cyan-500" />
              <span>Postal Code: 1216, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="tel:+8801644984896"
                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-cyan-500 transition-colors duration-300"
              >
                <FaPhone className="text-cyan-500" />
                <span>Phone: +880 1644984896</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="mailto:saagor.16@gmail.com"
                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-cyan-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-cyan-500" />
                <span>Email: saagor.16@gmail.com</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-cyan-500 hover:text-white transition duration-300" />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-cyan-500 hover:text-white transition duration-300" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-cyan-500 hover:text-white transition duration-300" />
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 rounded-md"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 rounded-md"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 rounded-md"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 rounded-md"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="group text-white w-fit px-4 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 border-black text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
