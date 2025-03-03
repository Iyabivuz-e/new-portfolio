"use client";
import { Briefcase, Code, Cpu, GraduationCap, Rocket } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Bachelor of Computer Application",
      company: "Kalinga Institute Of Industrial Technology",
      date: "2021 - 2021",
      description: "Gained th.",
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Frontend Web Development Intern",
      company: "Computer Engineering Forum.",
      date: "2023 - 2024",
      description: "Built responsive UIs using React and Tailwind CSS.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Web Development Itern",
      company: "SYNC' INTERN",
      date: "From Septer - October 2023",
      description:
        "Developed and maintained web applications using MERN stack.",
    },
  ];

  return (
  <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-200">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          My Professional Journey
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          A visual timeline of my career milestones and experiences.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-indigo-400 to-purple-500 transform -translate-x-1/2"></div>

        {/* Experience Items */}
        <div className="space-y-12 px-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center justify-between w-full`}
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
                } p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-100`}
              >
                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                  {exp.title}
                </h3>
                <p className="text-lg text-gray-700 mt-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                <p className="mt-4 text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Experience;
