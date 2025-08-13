import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        {/* Introduction */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m <span className="text-indigo-400 font-medium">Rakib Hasan</span>, a passionate Frontend Developer who loves turning creative ideas into beautiful, functional, and user-friendly web experiences. With expertise in React, Tailwind CSS, and DaisyUI, I specialize in crafting modern, responsive interfaces that deliver both style and performance. My focus is on writing clean, maintainable code and ensuring that every project I build leaves a lasting impact.
          </p>
        </div>

        {/* Programming Journey */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">My Programming Journey</h3>
          <p className="text-gray-300 leading-relaxed">
           My journey began with curiosity — experimenting with HTML & CSS to customize small web pages. Over time, I discovered JavaScript and React, which completely transformed my vision of what I could create. I joined Programming Hero Batch 11, where I learned structured development, built real-world projects, and collaborated with peers to strengthen my skills. From self-learning and online projects to guided mentorship, I’ve built a strong foundation in frontend development. Now, I constantly push myself to learn new tools, frameworks, and best practices to stay ahead in the fast-paced tech world.
          </p>
        </div>

        {/* Type of Work */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">The Type of Work I Enjoy</h3>
          <p className="text-gray-300 leading-relaxed">
            I enjoy working on projects that challenge my problem-solving skills and allow me to be creative. Building interactive UI components, responsive layouts, and smooth animations excites me the most. I love turning wireframes into pixel-perfect designs and ensuring the final product works seamlessly across all devices. Collaborative projects where design meets functionality are my absolute favorite.
          </p>
        </div>

        {/* Hobbies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Hobbies</h3>
          <p className="text-gray-300 leading-relaxed">
            Outside of coding, I’m an avid tech explorer — experimenting with new technologies, designing UI mockups, and contributing to small open-source projects. When I’m not in front of the screen, I enjoy reading about emerging tech trends, watching tech tutorials, traveling, and occasionally trying my hand at photography.
          </p>
        </div>

        {/* Personality */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">My Personality</h3>
          <p className="text-gray-300 leading-relaxed">
            I’m detail-oriented, highly adaptable, and always eager to learn. I approach challenges with a problem-solving mindset and believe in continuous improvement. I’m a team player who values communication, creativity, and innovation. At the same time, I enjoy working independently when deep focus is needed. My motto is: <span className="text-indigo-400 font-medium">“Build with passion, refine with purpose.”</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
