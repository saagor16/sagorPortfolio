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
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
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
            className="font-bold text-gray-400 text-xl lg:text-5xl md:text-3xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Sagor</span>
          </motion.p>

          <div className="flex gap-4">
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

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
