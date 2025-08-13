import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          {/* Location */}
          <div className="flex items-center mb-4 gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Email */}
          <div className="flex items-center mb-4 gap-3">
            <FaEnvelope className="text-blue-500 text-xl" />
            <a href="mailto:yourmail@example.com" className="hover:text-blue-400 transition-colors">
              yourmail@example.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-6 gap-3">
            <FaPhone className="text-blue-500 text-xl" />
            <a href="tel:+8801234567890" className="hover:text-blue-400 transition-colors">
              +880 1234-567890
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-xl">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
