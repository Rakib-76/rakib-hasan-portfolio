import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "Frontend Developer",
            "Full-Stack Web Developer",
            "MERN Stack Developer",
            "React Developer",
            "Backend Developer",
        ],
        loop: 0,
        typeSpeed: 120,
        // delaySpeed: 1300
    });
    return (
        <div className="hero max-w-7xl mx-auto min-h-screen">
            <div className="hero-content flex-col lg:flex-row lg:gap-36 ">
                <div className='flex-1 mt-20'>
                    <h3 className="text-3xl font-bold text-white my-5">
                       Hello, It's Me
                       </h3>
                       <h1  className="text-5xl font-bold text-white">
                        Md Rakib Hasan !
                        </h1>
                    <p className="my-5">
                        <span className="text-3xl text-[#F5EEDD] font-bold">And I'm a </span> <span className="text-3xl text-[#2b7fff] font-semibold">{text}</span>
                        <Cursor cursorColor="white" />
                    </p>
                    <p className='text-xl text-[#F5EEDD] my-5'>
                        A passionate Frontend Developer who loves turning creative ideas into beautiful, functional, and user-friendly web experiences.
                    </p>
                    <button className="btn btn-primary py-6">Download Resume</button>


                    <div className='flex gap-4 py-6'>
                        {/* GitHub */}
                        <a
                            href="https://github.com/Rakib-76"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#1877F2] dark:hover:text-white transition-colors duration-300"
                        >
                            <FaGithub size={28} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/rakib76"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/rakib.hasan.190064?rdid=9lZ5sR4PlSo0N3Ay&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AiRoDyPhr%2F#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#1877F2] transition-colors duration-300"
                        >
                            <FaFacebook size={28} />
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#1DA1F2] transition-colors duration-300"
                        >
                            <FaTwitter size={28} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="rounded-full p-[4px] bg-gradient-to-br from-[#0f0f1a] via-[#1a1446] to-[#2b7fff] ">
                        <img
                            src="https://i.postimg.cc/HLQjJ0pg/Confident-Smile-Against-Black-Backdrop-removebg-preview.png"
                            alt="profile"
                            className=" rounded-full object-cover bg-black"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;


