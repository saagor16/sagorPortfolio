import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="md:pt-40 pt-28">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-center h-full px-4">
          <div className="flex flex-col justify-center h-full text-center items-center lg:text-start lg:items-start">
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-400 text-xl md:text-3xl lg:text-5xl italic mb-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-200 text-2xl md:text-5xl lg:text-7xl tracking-tight mb-4"
            >
              HEY, I AM <br />
              <span className="text-purple-500">Sagor</span>
            </motion.p>
            <p className="text-white text-base md:text-lg lg:text-xl">
              Hello, I am Sagor, a Junior web developer. My proficiency in
              developing personalized websites with JavaScript guarantees that your distinct requirements are fulfilled.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-4 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1 md:size-25" />
                </span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download={true}
                className="group text-white w-fit px-4 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 border-black text-sm md:text-base"
              >
                Resume
                <span className="px-2">
                  <FaArrowCircleDown size={20} className="ml-1 md:size-25" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl w-5/6 sm:w-2/3 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
