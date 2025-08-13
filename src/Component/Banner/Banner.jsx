import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-96">
                <img
                    src="https://i.postimg.cc/HLQjJ0pg/Confident-Smile-Against-Black-Backdrop-removebg-preview.png"
                    className="max-w-sm rounded-lg shadow-2xl flex-1"
                />
                <div className=''>
                    <h1 className="text-5xl font-bold text-white">Hi This is Md Rakib Hasan !</h1>
                    <p className="py-6 text-white">
                        I AM A FRONTEND DEVELOPER
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
            </div>
        </div>
    );
};

export default Banner;