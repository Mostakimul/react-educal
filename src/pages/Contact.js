import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="bg-green-500">
        <div className="container mx-auto text-white">
          <h2 className="text-6xl font-semibold py-10">Contact Us</h2>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-gray-200">
        <form className="container mx-auto pt-10">
          <label className="block text-center text-lg font-medium my-2">
            <input
              type="text"
              className="mx-2 w-2/4 p-1 rounded"
              placeholder="Enter Your Name"
            />
          </label>
          <label className="block text-center text-lg font-medium my-2">
            <input
              type="email"
              className="mx-2 w-2/4 p-1 rounded"
              placeholder="Enter Your Email"
            />
          </label>
          <label className="block text-center text-lg font-medium">
            <textarea
              cols="20"
              rows="8"
              className="mx-2 w-2/4 p-1 rounded my-2"
              placeholder="Your Message"
            ></textarea>
          </label>

          <div className="text-center">
            <button className="bg-green-700 text-white py-1 px-3 my-3">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
