import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="">
            <div className="container mx-auto text-white md:flex lg:gap-5 items-center px-10">
                <div className="md:w-[40%] z-10">
                    <img src='https://i.postimg.cc/HLQjJ0pg/Confident-Smile-Against-Black-Backdrop-removebg-preview.png' alt="" className="" />
                </div>
                <div className="md:w-[60%]">
                    <h3 className="text-4xl text-white font-bold mb-4 py-4">About Me</h3>
                    <p className="text-white text-lg pb-3">
                        <span className="font-bold text-2xl">Name & Background:</span> Md Rakib Hasan, Full-Stack Developer. MERN stack learner from Programming Hero Batch-11.
                        <br/>
                        <span className="font-bold text-2xl">Programming Journey:</span> Started with curiosity about how websites work, leading to building interactive, user-friendly web applications.
                        <br/>
                        <span className="font-bold text-2xl">Work Preference:</span> Enjoys working on full-stack projects, handling both front-end and back-end development.
                        <br/>
                        <span className="font-bold text-2xl">Hobbies & Interests:</span> Exploring tech trends, playing cricket, and spending time with friends.
                        <br/>
                        <span className="font-bold text-2xl">Personality:</span> Curious, dedicated, and adaptable; enjoys problem-solving and continuous learning.
                    </p>
                    
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
