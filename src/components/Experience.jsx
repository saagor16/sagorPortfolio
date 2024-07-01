import ProgressBar from '@ramonak/react-progress-bar';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: <FaHtml5 className="w-16 h-16 mx-auto text-orange-500" />,
      title: "HTML",
      style: "shadow-orange-500",
      color: "#F16529",
      labelColor: "#FFFFFF",
      completed: 90,
    },
    {
      id: 2,
      icon: <FaCss3Alt className="w-16 h-16 mx-auto text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-500",
      color: "#2965F1",
      labelColor: "#FFFFFF",
      completed: 85,
    },
    {
      id: 3,
      icon: <FaJs className="w-16 h-16 mx-auto text-yellow-500" />,
      title: "JavaScript",
      style: "shadow-yellow-500",
      color: "#F0DB4F",
      labelColor: "#000000",
      completed: 80,
    },
    {
      id: 4,
      icon: <FaReact className="w-16 h-16 mx-auto text-blue-600" />,
      title: "React",
      style: "shadow-blue-600",
      color: "#61DAFB",
      labelColor: "#000000",
      completed: 75,
    },
    {
      id: 5,
      icon: <SiTailwindcss className="w-16 h-16 mx-auto text-sky-400" />,
      title: "Tailwind",
      style: "shadow-sky-400",
      color: "#38BDF8",
      labelColor: "#000000",
      completed: 80,
    },
    {
      id: 6,
      icon: <SiNextdotjs className="w-16 h-16 mx-auto text-white" />,
      title: "Next JS",
      style: "shadow-white",
      color: "#FFFFFF",
      labelColor: "#000000",
      completed: 65,
    },
    {
      id: 7,
      icon: <FaGithub className="w-16 h-16 mx-auto text-gray-400" />,
      title: "GitHub",
      style: "shadow-gray-400",
      color: "#181717",
      labelColor: "#FFFFFF",
      completed: 60,
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title, style, color, labelColor, completed }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              {icon}
              <p className="mt-4 font-medium">{title}</p>
              <div className="px-4 mt-2">
                <ProgressBar 
                  completed={completed}
                  bgColor={color}
                  baseBgColor="#374151"
                  labelColor={labelColor}
                  height="14px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
