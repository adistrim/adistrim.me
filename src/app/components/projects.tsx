import React from "react";
import projectData from "../data/projects.json";

export default function Home() {
  return (
    <section className="mt-8">
      <h1 className="font-medium dark:text-gray-100 text-xl mb-4">What I Create</h1>
      <div className="grid gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-[#FFFBF5] dark:bg-[#191919] shadow-md rounded-lg p-6">
            <h2 className="font-semibold dark:text-gray-100 text-lg mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                GitHub
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-300 hover:underline"
                >
                  Visit Website
                </a>
              )}

            </div>
          </div>
        ))}
        <div className=" text-end ">
          <a
            href="https://github.com/adistrim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 hover:underline"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
