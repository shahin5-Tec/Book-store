import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'



const Home = () => {
  return (
    <div className=" my-container flex flex-col lg:flex-row sm:flex-col items-center justify-between">
      <div>
      <p className='bg-yellow-400 font-semibold uppercase mb-4 w-20 rounded-full pl-2'>On Sale!</p>
        <h2 className="text-3xl font-bold max-w-xl mb-6 text-gray-900">
          A reader lives a <br /> thousand lives
          <span className="text-blue-600"> before he dies</span>
        </h2>
        <p className="font-semibold text-gray-700">
          Books are a uniquely portable magic. Books serve to show a <br /> man
          that those original thoughts of his aren’t very new after <br /> all.
          The man who does not read good books is no better than the man who
          can’t.
        </p>
        <div className="inline-flex flex-col  lg:flex-row items-center  ">
          <Link to="/books">
            <div className="text-white font-semibold inline-flex items-center mt-5 px-6  btn bg-blue-400 hover:bg-blue-700 transition duration-200">
              <p>Vist store</p>
                <ShoppingCartIcon className="text-white-600 h-6 w-6"/>
            </div>
          </Link>
          <Link to="/about">
            <div className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700">
              <p className="mt-5 ml-3 cursor-pointer">Learn More</p>
            </div>
          </Link>
        </div>
        {/* cart-fontawesome */}
      </div>
      {/* lottie-animation */}
      <div className="lg:relative lg:w-1/2">
        <div className="w-full lg:w-4/5 lg:ml-auto h-48  sm:h-64">
          <Lottie animationData={reader} loop={true} />
          ;J
        </div>
      </div>
    </div>
  );
};

export default Home;
