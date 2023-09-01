import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";

const Home = () => {
  return (
    <div className=" my-container flex flex-col lg:flex-row sm:flex-col items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold max-w-xl mb-6 text-gray-900">
          A reader lives a <br /> thousand lives
          <span className="text-blue-600"> before he dies</span>
        </h2>
        <p className="font-semibold text-gray-700">
          Books are a uniquely portable magic. Books serve to show a <br />  man
          that those original thoughts of his aren’t very new after <br />  all.
          The man who does not read good books is no better than   the man
          who can’t.
        </p>
        <div>
          <button>View Store</button>
        </div>
      </div>
      {/* lottie-animation */}
      <div className="lg:relative lg:w-1/2">
       <div className="w-full lg:w-4/5 lg:ml-auto h-48  sm:h-64">
       <Lottie animationData={reader} loop={true} />;
       </div>
      </div>
    </div>
  );
};

export default Home;
