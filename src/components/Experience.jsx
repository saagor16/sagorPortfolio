import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiMongodb, DiNodejs, DiFirebase, DiBootstrap } from 'react-icons/di';


const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: <FaHtml5 className="w-16 h-16 mx-auto text-orange-500" />,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: <FaCss3Alt className="w-16 h-16 mx-auto text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: <FaJs className="w-16 h-16 mx-auto text-yellow-500" />,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: <FaReact className="w-16 h-16 mx-auto text-blue-600" />,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      icon: <SiTailwindcss className="w-16 h-16 mx-auto text-sky-400" />,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      icon: <DiMongodb className="w-16 h-16 mx-auto text-green-400" />,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 7,
      icon: <DiNodejs className="w-16 h-16 mx-auto text-green-600" />,
      title: "Express.js",
      style: "shadow-green-600",
    },
    {
      id: 8,
      icon: <DiFirebase className="w-16 h-16 mx-auto text-yellow-600" />,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 9,
      icon: <DiBootstrap className="w-16 h-16 mx-auto text-purple-600" />,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 10,
      icon: <FaGithub className="w-16 h-16 mx-auto text-gray-400" />,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md py-4 rounded-lg ${style}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {icon}
              <p className="mt-4 font-medium">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;