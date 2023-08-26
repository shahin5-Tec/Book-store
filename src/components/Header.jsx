import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="  bg-gray-100  px-4 py-5 container mx-auto lg:px-8 lg:max-w-screen-xl">
      <div className="flex items-center justify-between">
        
          {/* logo-part */}
          <Link to="/" className="flex items-center ">
            <BoltIcon class="h-6 w-6 text-blue-500" />
            <span className="text-xl ms-2 font-bold -tracking-wide">
              nextPage
            </span>
          </Link>
       
        <div>
          <ul className="lg:flex  items-center space-x-8 font-semibold">
          <li >
                  <NavLink
                    to={'/'}
                    className={({ isActive }) =>isActive ? " text-blue-600": ""}         
                    
                  >
                    Home
                   
                  </NavLink>
                </li>
          <li >
                  <NavLink
                    to={'/books'}
                    className={({ isActive }) =>isActive ? "  text-blue-600": ""}         
                    
                  >
                    Books
                   
                  </NavLink>
                </li>
          <li >
                  <NavLink
                    to={'/about'}
                    className={({ isActive }) =>isActive ? "  text-blue-600": ""}         
                    
                  >
                    About us
                   
                  </NavLink>
                </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
