"use client";
import { Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
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
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Frontend Web Development Intern",
      company: "Computer Engineering Forum.",
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
      date: "From September - October 2023",
      description:
        "Developed interns' web development skills in HTML, CSS, JavaScript, and ReactJS through a comprehensive four-task program, which equips them with practical experience to excel in the field."
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-300 via-indigo-100 to-purple-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            My Professional Journey
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            A visual timeline of my career milestones and experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-500 transform -translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12 px-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center justify-between w-full`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon and Dot */}
                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  {exp.icon}
                  <div className="absolute -bottom-2 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "ml-6" : "mr-6"
                  } p-8 bg-white bg-gradient-to-r from-blue-300 via-indigo-100 to-purple-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-100`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 mt-2">{exp.company}</p>
                  <p className="text-lg text-gray-700 mt-2">{exp.location}</p>
                  <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                  <p className="mt-4 text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
