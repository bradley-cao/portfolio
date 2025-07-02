"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function Resume() {
  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Georgia Tech Research Institute (ATAS Lab)",
      location: "Phoenix, AZ",
      period: "May 2025 - August 2025",
      description: [
        "Developed containerized IoT solutions hosted on Cisco IR1101 router for Air Force threat system training, \
        reducing hardware requirements by 33% and streamlining the development and deployment, enabling rapid scalability \
        for production of hundreds of training systems",
        "Engineered an embedded remote satellite-based relay control system for gas-powered generators to provide \
        plug-and-play capabilities for Air Force range equipment globally utilizing Iridium SBD"
      ]
    },
    {
      title: "Research Assistant",
      company: "George Mason University",
      location: "Fairfax, VA",
      period: "July 2023 - August 2023",
      description: [
        "Utilized Python and fine-tuning of ChatGPT 3.5 LLM to create a chatbot for addressing community questions about climate \
        change by integrating into a website platform"
      ]
    },
    {
      title: "Serious Game Development Intern",
      company: "George Mason University",
      location: "Fairfax, VA",
      period: "June 2022 - August 2022",
      description: [
        "Led a seven person intern team to design and develop a serious game in Unity and C# for investigating the \
        potentials of geopolitical education, demonstrating educational value and efficacy of serious games in over 80% \
        of players, publishing in GMU Journal of Student-Scientist Research"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "2024 - Present",
      description: "Relevant Coursework: Computer Systems, Data Structures and Algorithms, \
                    Computer Systems and Networks, Intro to Blockchain, Intro to AI, Robotics and Perception",
      honors: "Dean's List"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Maryland, College Park",
      location: "College Park, MD",
      period: "2023 - 2024",
      description: "Relevant Coursework: Algorithms, Organization of Programming Languages, Discrete Structures",
      honors: "Dean's List"
    },
    {
      degree: "Advanced Studies Diploma",
      school: "Thomas Jefferson High School for Science and Technology",
      location: "Alexandria, VA",
      period: "2019 - 2023",
    },
  ];

  // const certifications = [
  //   "AWS Certified Solutions Architect",
  //   "Google Cloud Professional Developer",
  //   "Adobe Certified Expert - Photoshop",
  //   "Scrum Master Certification"
  // ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span>Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey, education, and achievements
          </p>
          <a href="/resume.pdf" download className="inline-block mb-4">
            <button className="w-full flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg 
                           font-medium transition-colors shadow-lg hover:shadow-xl cursor-pointer">
              <span className="relative z-10">Download PDF Resume</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-300 group-hover:w-full z-0"></span>
            </button>
          </a>
          
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {job.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {job.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.school}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end mt-2 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                      {edu.honors}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md flex items-center"
              >
                <Award className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
