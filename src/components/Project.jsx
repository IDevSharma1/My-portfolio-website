import React from "react";
import projectsData from "../data/projects.json";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
