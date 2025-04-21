"use client";
import { Globe, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      image: "/dozzy.png",
      title: "Dozzy",
      description:
        "A machine learning-powered web application that predicts a user's natural chronotype (morning person or night person) based on their daily habits and preferences. What makes Dozzy unique is its interactive feedback loop—users can vote on the accuracy of their prediction, and this data is used to retrain and improve the machine learning model periodically.",
      tools:
        "React.js, Vite, TailwindCSS, scikit-learn, Python - Flask, SQLite",
      liveLink: "https://dozzy.vercel.app",
      // githubLink: "https://github.com/Iyabivuz-e/Dozzy",
    },
    {
      image: "/ClassTap.png",
      title: "ClassTap",
      description:
        "In partnership with a 'Word Mission High School' in Kigali-Rwanda, I Developed a student attendance management system utilizing RFID cards for efficient attendance tracking. Built with Next.js, MongoDB, Tailwind CSS, and DaisyUI, the platform enables students to record their attendance seamlessly, while providing the Director of Studies with a comprehensive dashboard to manage and monitor attendance records effectively..",
      tools: "Next.ts, TailwindCSS, DaisyUI, MongoDB",
      // liveLink: "https://example.com",
      githubLink: "https://github.com/Iyabivuz-e/ClassTap",
    },
    {
      image: "/KeetEats.png",
      title: "KiitEats",
      description:
        "I developed KiitEats, a full-stack web application for KIIT University students, using React.js, Tailwind CSS, Node.js, Express, and MongoDB. The platform optimizes meal ordering with an intuitive interface, location-based services for nearby food courts, and seamless stripe payment integration, addressing the growing demand for convenient online food services.",
      tools: "React.js, Node.js, TailwindCSS, MongoDB",
      liveLink: "https://kiiteats.vercel.app/",
      githubLink: "https://github.com/Iyabivuz-e/KiitEats",
    },
    {
      image: "/realEstate.png",
      title: "Jephte Houses Ltd.",
      description:
        "Developed and maintained a full-stack real estate website utilizing Next.js, Tailwind CSS, and MongoDB. Enhanced user experience by streamlining the search process, integrating a contact form, and adding features such as a map view and detailed property pages with photos, descriptions, and amenities. Gained hands-on experience in web development, including creating a custom API to interface with a third-party database.",
      tools: "React.js, SCSS",
      liveLink: "https://jephte-house-ltd.netlify.app/",
      githubLink: "https://github.com/Iyabivuz-e/Real-Estate",
    },
    {
      image: "/DioEats.png",
      title: "DioEats",
      description:
        "Developed a responsive food ordering platform using React.js and Tailwind CSS, focusing on a seamless user experience. Implemented dynamic components for interactive browsing and utilized Tailwind's utility-first classes for efficient styling. The project is hosted on Netlify, ensuring optimal performance and accessibility.",
      tools: "React.js, TailwindCSS, Vite",
      liveLink: "https://dioeats.netlify.app/",
      githubLink: "https://github.com/Iyabivuz-e/Tailwind-Recipe-Simple-App",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 bg-gradient-to-br from-gray-100 to-blue-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Some of the projects I’ve worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white bg-gradient-to-br from-gray-100 to-blue-300 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  priority
                  width={500}
                  height={500}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Tools:</span> {project.tools}
                </p>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-purple-700 cursor-not-allowed">
                      <Globe className="w-5 h-5" />
                      <span>Ongoing</span>
                    </span>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
