// Contact.js
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_985zkds', // Replace with your EmailJS service ID
        'template_7qjr6gf', // Replace with your EmailJS template ID
        formData,
        'JYSgZVDvKZWy6dMrF' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setIsSent(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('Email sending error:', error);
          toast.error("I am working on fixing the email sending feature");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.5, 1] }}
      className="flex justify-center items-center pt-[8rem]"
    >
      <div className="w-full max-w-5xl bg-[#EBE6E0] rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-dashed border-[#277a598a]">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#277a59] mb-4">Drop a Hi 😉</h2>
          <p className="text-gray-700">
            I'd love to hear from you! Fill out the form below, and I’ll get back to you soon.
          </p>
        </div>

        {isSent && <p className="text-green-600 mb-4">Your message has been sent successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full border border-[#277a59] rounded-lg py-3 px-4 bg-[#f2f2f2] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#277a59] transition duration-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="w-full border border-[#277a59] rounded-lg py-3 px-4 bg-[#f2f2f2] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#277a59] transition duration-200"
            />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="w-full border border-[#277a59] rounded-lg py-3 px-4 bg-[#f2f2f2] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#277a59] transition duration-200"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className="w-full border border-[#277a59] rounded-lg py-3 px-4 h-40 bg-[#f2f2f2] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#277a59] transition duration-200"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#277a59] text-white py-3 rounded-full font-semibold hover:bg-[#1f5e46] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#277a59]/50"
          >
            Send Message
          </button>
        </form>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          className="text-sm"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
