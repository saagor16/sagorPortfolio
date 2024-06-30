import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <footer className="bg-gradient-to-b from-black to-gray-800">
      <div className="container mx-auto py-8">
        <h1 className="text-white text-center mb-8">Sagor</h1>
        <ul className="flex justify-center space-x-6 mb-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="lg:px-10 md:px-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200  relative inline-block pb-1 group hover:text-white"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </li>
        ))}
        </ul>
        <div className="flex justify-center space-x-5">
          <a
            href="https://github.com/saagor16"
            className="bg-gray-900 text-white text-2xl p-2.5 rounded-md inline-flex hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saagor/"
            className="bg-gray-900 text-white text-2xl p-2.5 rounded-md inline-flex hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            className="bg-gray-900 text-white text-2xl p-2.5 rounded-md inline-flex hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551216816741"
            className="bg-gray-900 text-white text-2xl p-2.5 rounded-md inline-flex hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <span className="block mt-10 text-gray-400 text-center text-sm">
          Copyright © 2023. All rights are reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
