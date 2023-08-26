import React from "react";
import { Link } from "react-router-dom";
import { BoltIcon } from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <Link to="/" className=" flex items-center"></Link>
        {/* logo-part */}
        <BoltIcon className="h-6 w-6 text-blue-500" />
        <span className="font-bold ms-3  text-xl">nextPage</span>

        
      </div>
    </div>
  );
};

export default Header;
