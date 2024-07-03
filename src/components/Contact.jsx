import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRegAddressCard,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b  from-black to-gray-800 text-white">
      <div className="container max-w-screen-lg mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="p-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Location: Amtali, Barguna</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaRegAddressCard className="text-green-500" />
              <span>Postal Code: 1234 Postal St, City, Country</span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="tel:+880123456789"
                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-green-500 transition-colors duration-300"
              >
                <FaPhone className="text-green-500" />
                <span>Phone: +880 123-456-789</span>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="mailto:email@example.com"
                className="flex items-center space-x-2 bg-gray-800 border border-gray-700 p-2 rounded-md hover:border-green-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-green-500" />
                <span>Email: email@example.com</span>
              </a>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 rounded-md"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-500 rounded-md"
                rows="4"
              ></textarea>
              <button className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300">
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
