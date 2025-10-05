"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Database, GitBranch, Server, Cloud } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      tools:
        "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: "Backend Development",
      description: "Designing robust and scalable server-side solutions.",
      tools: "Node.js, Express, Flask",
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Database Management",
      description: "Working with structured and unstructured data.",
      tools: "MongoDB, SQL, PostgreSQL, Firebase",
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: "AI/ML Enthusiast",
      description: "Exploring machine learning and AI technologies.",
      tools: "TensorFlow, PyTorch, Scikit-learn",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-pink-500" />,
      title: "Version Control",
      description: "Collaborating and managing code efficiently.",
      tools: "Git, GitHub",
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      title: "Cloud & DevOps",
      description: "Exploring Deploying and managing cloud infrastructure.",
      tools: "Docker",
    },
  ];

  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 ease-out hover:translate-y-[-8px] group ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex items-center justify-center w-16 h-16 mb-6 rounded-2xl transition-all duration-400 ease-out group-hover:scale-110 group-hover:rotate-6 ${
                theme === 'dark' ? 'bg-slate-700' : 'bg-gray-100'
              }`}>
                {skill.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.title}
              </h3>
              <p className={`mb-4 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {skill.description}
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <span className="font-medium">Tools:</span> {skill.tools}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
