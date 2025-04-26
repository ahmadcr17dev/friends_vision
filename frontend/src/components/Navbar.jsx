import React, { useState } from "react";
import file from "../images/file.png";
import "typeface-poppins";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-stone-100 font-poppins">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={file}
              className="h-[4rem] xl:h-[6rem] lg:h-[6rem] md:h-[6rem] rounded-full"
              alt="Logo"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/verification"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  Verification
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return `block py-2 px-3 md:p-0 text-gray-900 rounded-sm ${
                      isActive ? "text-violet-600" : "text-gray-900"
                    }`;
                  }}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
