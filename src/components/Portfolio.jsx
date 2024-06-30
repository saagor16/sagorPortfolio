import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';

const Portfolio = () => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef();

  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      name: 'Array Destructuring',
      description: 'A project demonstrating array destructuring.',
      githubLink: '#',
      liveLink: '#',
      techs: ['React', 'JavaScript'],
      features: ['Feature 1', 'Feature 2'],
    },
    // Add more projects as needed
  ];

  const handlerControlModal = (index) => {
    setModal(index);
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" id="projects" name="portfolio">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="section__title text-4xl font-bold text-center pb-2">Projects</h2>
        <span className="text-lg text-center block mt-2 mb-8">All of my projects</span>
        <div className="projects__container container grid lg:grid-cols-2 gap-8 mx-auto px-4 sm:px-0">
          {projects.map((project, i) => (
            <div key={i} className="shadow-md shadow-gray-600 rounded-lg p-6">
              <img src={project.src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center mt-4">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-800 text-white rounded-md flex items-center justify-center gap-2">
                  Code <FaGithub />
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-800 text-white rounded-md flex items-center justify-center gap-2">
                  Demo <FaExternalLinkAlt />
                </a>
              </div>
              <div onClick={() => handlerControlModal(i)} className="cursor-pointer text-center mt-4">
                <h3 className="projects__title text-xl font-semibold">{project.name}</h3>
                <p className="projects__modal-description text-gray-400">{project.description}</p>
              </div>

              {modal === i && (
                <div ref={modalRef} className="projects__modal active__modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="projects__modal-content bg-white text-black rounded-lg p-6 relative">
                    <FaTimes className="projects__modal-close absolute top-2 right-2 text-xl cursor-pointer" onClick={() => handlerControlModal(null)} />
                    <h3 className="projects__modal-title text-center text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="projects__modal-description text-center mb-4">{project.description}</p>
                    <div className="project_modal_techs flex flex-wrap justify-center gap-2 mb-4">
                      {project.techs.map((tech, i) => (
                        <p key={i} className="project_modal_tech bg-gray-200 px-4 py-2 rounded">{tech}</p>
                      ))}
                    </div>
                    <div className="modal-btn flex justify-center gap-4 mb-4">
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="projects__btn bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        Github <FaGithub />
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="projects__btn bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    </div>
                    <p className="projects__modal-feature-title text-lg font-semibold mb-2">Features</p>
                    <ul className="projects__modal-features grid grid-cols-1 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="projects__modal-feature">
                          <p className="projects__feature-info">{index + 1}. {feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="more-btn text-center mt-8">
          <Link to="projects" className="button bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-600 duration-200 inline-flex items-center">
            View More <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
