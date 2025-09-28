import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_wd97pr7',   // EmailJS Service ID
      'template_2cboo3d',  // EmailJS Template ID
      form.current,
      'Psn6q2BKvm8M_0pAh' // EmailJS Public Key / User ID
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset(); // form reset
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.log(error.text);
      }
    );
  };

  return (
    <section className="bg-gray-900 text-white py-36 px-4" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8">Send Me a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name" // Must match EmailJS template variable
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="user_email" // Must match EmailJS template variable
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message" // Must match EmailJS template variable
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="btn btn-primary hover:bg-blue-600 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold mb-8">Contact Information</h2>

          <div className="flex items-center mb-4 gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex items-center mb-4 gap-3">
            <FaEnvelope className="text-blue-500 text-xl" />
            <a href="mailto:mrrakibhasan76@gmail.com" className="hover:text-blue-400 transition-colors">
              mrrakibhasan76@gmail.com
            </a>
          </div>

          <div className="flex items-center mb-6 gap-3">
            <FaPhone className="text-blue-500 text-xl" />
            <a href="tel:+8801756823597" className="hover:text-blue-400 transition-colors">
              +880 1756823597
            </a>
          </div>

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
