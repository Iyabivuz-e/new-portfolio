"use client";
import {
  Code,
  Cpu,
  Database,
  GitBranch,
  Server,
//   Smartphone,
  Cloud,
//   BrainCircuit,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      tools: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
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
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Tools:</span> {skill.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
