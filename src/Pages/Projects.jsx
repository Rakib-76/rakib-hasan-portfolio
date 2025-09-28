import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        name: 'AthleticsHub',
        image: 'https://i.postimg.cc/cH7qrZ6T/Screenshot-133.png',
        techStack: 'React, Tailwind CSS, Firebase, Express js, Node js, mongoDB',
        description: 'In this project, users who want to attend athletics or participate in other types of events can view the details of these events, book them, and join. Additionally, anyone can come here and create a new event if they want. I mainly used React, TailwindCSS, Firebase, Express.js, Node.js, and other necessary tools to build this project.',
        liveLink: 'https://practice-job-portal.web.app/',
        github: 'https://github.com/Rakib-76/athleticHub-client-side',
        challenges: 'During development, I faced challenges in managing secure authentication and user sessions with Firebase, handling real-time updates for job listings and applications, and creating a responsive and user-friendly interface using TailwindCSS.',
        improvements: 'For future improvements, I plan to add filtering and search features, implement notifications for application updates, optimize performance for faster load times, and continuously enhance UI/UX for smoother user interaction.',
    },
    {
        id: 2,
        name: 'StudyHub',
        image: 'https://i.postimg.cc/nh9PXZP7/Screenshot-134.png',
        techStack: 'React, Tailwind CSS, Firebase, Express js, Node js, mongoDB',
        description: 'This project implements three user roles: Student, Tutor, and Admin, with JWT-based authentication to ensure role-specific access and protected routes. Tutors can create class sessions, while admins can approve, reject, or remove sessions, set fees, and send feedback messages to tutors. Students can join sessions and take notes during the classes. I mainly used React, TailwindCSS, Firebase, Express.js, Node.js, and other necessary tools to build this project.',
        liveLink: 'https://zap-shift-502f8.web.app/',
        github: 'https://github.com/Rakib-76/studyHub-client-repo',
        challenges: 'While working on these projects, I faced challenges in implementing role-based access control, managing real-time data updates, and ensuring secure authentication with JWT across different user dashboards. Designing a responsive and interactive UI using TailwindCSS and Framer Motion was also a key challenge.',
        improvements: 'For future improvements, I plan to optimize performance, add advanced features like notifications and search/filter functionality, and enhance security with improved JWT handling. I also aim to continuously refine the UI/UX for a smoother user experience.'
    },
    {
        id: 3,
        name: 'Job Stock',
        image: 'https://i.postimg.cc/d3X9FZvf/Screenshot-135.png',
        techStack: 'React, Tailwind CSS, Firebase ',
        description: 'This project allows users to search for jobs and view vacancies from different companies. Users can log in to see detailed job information and apply for positions. I mainly used React, TailwindCSS, Firebase, Express.js, Node.js, and other necessary tools to build this project.',
        liveLink: 'https://silver-yeot-dcb36c.netlify.app',
        github: 'https://github.com/Rakib-76/jobStock-client-side',
        challenges: 'During development, I faced challenges in managing secure authentication and user sessions with Firebase, handling real-time updates for job listings and applications, and creating a responsive and user-friendly interface using TailwindCSS.',
        improvements: 'For future improvements, I plan to add filtering and search features, implement notifications for application updates, optimize performance for faster load times, and continuously enhance UI/UX for smoother user interaction.',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover p-2 rounded-xl" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <button className="btn btn-primary mt-2">View More</button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes size={24} />
                            </button>

                            {/* Modal Content */}
                            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
                            <p className="text-gray-300 mb-2">
                                <span className="font-semibold text-xl">Tech Stack:</span> {selectedProject.techStack}
                            </p>
                            <p className="text-gray-300 mb-2">
                                <span className="font-semibold text-xl">Description:</span> {selectedProject.description}
                            </p>
                            <p className="text-gray-300 mb-2">
                                <span className="font-semibold text-xl">Challenges:</span> {selectedProject.challenges}
                            </p>
                            <p className="text-gray-300 mb-4">
                                <span className="font-semibold text-xl">Improvements:</span> {selectedProject.improvements}
                            </p>

                            {/* Links */}
                            <div className="flex gap-4 mt-4">
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 btn btn-outline"
                                >
                                    <FaExternalLinkAlt /> Live Project
                                </a>
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 btn btn-outline"
                                >
                                    <FaGithub /> GitHub Repo
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
