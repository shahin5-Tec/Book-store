import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="  bg-gray-100  px-4 py-5 md:max-w-full  container mx-auto lg:px-8 lg:max-w-screen-xl">
      <div className="flex relative items-center  justify-between">
        {/* logo-part */}

        <Link to="/" className="flex items-center ">
          <BoltIcon class="h-6 w-6 text-blue-500" />
          <span className="text-xl ms-2 font-bold -tracking-wide">
            nextPage
          </span>
        </Link>

        <ul className="lg:flex md:hidden items-center space-x-8 font-semibold">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? " text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/books"}
              className={({ isActive }) => (isActive ? "  text-blue-600" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "  text-blue-600" : "")}
            >
              About us
            </NavLink>
          </li>
        </ul>
        {/* mobile-navbar-section */}
        <div className="lg:hidden">
          {/* Drop-down-open-btn */}
          <button
            aria-label="open-menu"
            title="open-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomLeftIcon class="h-6 w-6 text-gray-500" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="flex items-center ">
                      <BoltIcon class="h-6 w-6 text-blue-500" />
                      <span className="text-xl ms-2 font-bold -tracking-wide">
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="open-menu"
                      title="open-menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/books"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : ""
                        }
                      >
                        Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
