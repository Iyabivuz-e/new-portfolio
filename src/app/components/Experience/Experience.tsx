"use client";
import { Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();

  const workExperience = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Frontend Web Development Intern",
      company: "Computer Engineering Forum",
      location: "Nairobi, Kenya",
      date: "October 2023 - April 2024",
      description:
        "Developed and maintained a CEF's frontend a highly-traffic web application using ReactJs, and CSS. Gained valuable experience in frontend web development, including designing and developing complex components and optimizing application performance.",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Web Development Intern",
      company: "SYNC' INTERN",
      location: "Uttar Pradesh, India",
      date: "September - October 2023",
      description:
        "Developed interns' web development skills in HTML, CSS, JavaScript, and ReactJS through a comprehensive four-task program, which equips them with practical experience to excel in the field."
    },
  ];

  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Master of Computer Science - Artificial Intelligence",
      company: "University of Pisa",
      location: "Pisa, Italy",
      date: "2024 - Present",
      description:
        "Currently furthering my skills and knowledge in AI, focusing on advanced topics and research to enhance my expertise in artificial intelligence and machine learning.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Bachelor of Computer Application",
      company: "Kalinga Institute Of Industrial Technology",
      location: "Odisha, India",
      date: "2021 - 2024",
      description:
        "Gained hands-on experience in software development and web development, building a strong foundation in programming and project management.",
    },
  ];

  return (
    <section className={`py-24 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-800 to-gray-900'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-5xl lg:text-6xl font-light mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                      : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h4 className={`text-lg font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h4>
                      <p className={`text-base font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {exp.location}
                      </span>
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {exp.date}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Subtle hover indicator */}
                  <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-600 group-hover:bg-white'
                      : 'bg-gray-200 group-hover:bg-gray-900'
                  }`}></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                      : 'bg-white border-gray-200 hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h4 className={`text-lg font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h4>
                      <p className={`text-base font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {exp.location}
                      </span>
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {exp.date}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Subtle hover indicator */}
                  <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-600 group-hover:bg-white'
                      : 'bg-gray-200 group-hover:bg-gray-900'
                  }`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;