const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className='lg:pt-32 pt-10 '>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-center">
            <p className="text-4xl font-bold inline">Contact</p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="flex justify-center items-center">
            <form className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
                required
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300"
                >
                  Lets talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
