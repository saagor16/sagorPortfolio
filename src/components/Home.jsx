import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
    >
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 ">
        <div className="flex flex-col justify-center h-full mt-8 md:mt-0">
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
            className="font-bold text-gray-400 text-lg sm:text-xl md:text-3xl lg:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Sagor</span>
          </motion.p>
          <p className="text-white text-base sm:text-lg md:text-xl mb-4">
            Hello, I am Sagor, a Junior web developer. My proficiency in developing personalized websites with JavaScript guarantees that your distinct requirements are fulfilled.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href='/resume.pdf'
              target="_blank"
              rel="noreferrer"
              download={true}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 border-black"
            >
              Resume
              <span className="px-2">
                <FaArrowCircleDown size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full mb-8 md:mb-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-2/3 sm:w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
