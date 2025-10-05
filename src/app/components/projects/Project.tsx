"use client";
import { Globe, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const Projects = () => {
  const { theme } = useTheme();
  const projects = [
    {
      image: "/ai-paper.png",
      title: "AI Paper Explainer",
      description:
        "An intelligent research paper analysis tool that transforms complex academic papers into digestible insights. Using advanced AI and RAG (Retrieval Augmented Generation), it provides serious analysis, intuitive explanations, and makes research accessible to everyone. Perfect for researchers, students, and curious minds wanting to quickly grasp paper concepts.",
      tools:
        "Next.js, TailwindCSS, LangChain, LangGraph, RAG, PostgreSQL (NeonDB), ChromaDB, Arxiv API, Groq",
      liveLink: "https://ai-paper-explainer.vercel.app/",
      githubLink: "https://github.com/Iyabivuz-e/paper_sum",
    },
    {
      image: "/deskribeai.png",
      title: "Deskribeai",
      description:
        "A modern SaaS application that helps freelancers, agencies, and businesses convert informal work descriptions into polished, professional invoice line items. Say goodbye to 'worked on website' and hello to 'Website Maintenance & Optimization: Comprehensive debugging and performance enhancement...'",
      tools:
        "Next.js, TypeScript, TailwindCSS, OpenAI API, Stripe, PostgreSQL",
      liveLink: "https://deskribeai.vercel.app",
      // githubLink: "Private Repository",
    },
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
      className={`py-24 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-5xl lg:text-6xl font-light mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Some of the projects I’ve worked on, showcasing my skills in web development and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group rounded-2xl border cursor-pointer transition-all duration-500 ease-out overflow-hidden hover:translate-y-[-8px] hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                  : 'bg-white border-gray-200 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0) scale3d(1, 1, 1)',
                    WebkitTransform: 'translateZ(0) scale3d(1, 1, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0) scale3d(1.08, 1.08, 1)';
                    e.currentTarget.style.filter = 'brightness(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(0) scale3d(1, 1, 1)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                  priority={index < 2}
                  width={800}
                  height={533}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/VK/g"
                />
                <div className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  theme === 'dark'
                    ? 'bg-gradient-to-t from-gray-900/60 to-transparent'
                    : 'bg-gradient-to-t from-black/20 to-transparent'
                }`}></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className={`text-2xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-6 leading-relaxed text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className={`mb-8 p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <span className="font-medium">Tech Stack:</span> {project.tools}
                  </p>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-400 ease-out hover:translate-y-[-3px] hover:shadow-lg ${
                        theme === 'dark'
                          ? 'bg-white text-gray-900 hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium cursor-not-allowed opacity-60 ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <Globe className="w-5 h-5" />
                      <span>Coming Soon</span>
                    </span>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-400 ease-out hover:translate-y-[-3px] hover:shadow-lg border ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
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
