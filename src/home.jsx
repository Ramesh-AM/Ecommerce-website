import React from "react";
import { FaArrowRight } from "react-icons/fa";
import homeImage from './assets/home-images.jpg'

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome to <span className="text-blue-600">Our Website</span>
          </h1>

          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            Discover amazing features, explore our services, and experience a modern,
            responsive UI built with React and Tailwind CSS.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:dark:bg-gray-800 transition flex items-center gap-2">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={homeImage}
            alt="Home Banner"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
