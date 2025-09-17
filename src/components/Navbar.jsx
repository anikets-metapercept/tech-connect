import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Main_Logo from "../assets/techConnect.png";
import { Link, NavLink } from "react-router-dom";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Membership", path: "/membership" },
  {
    name: "Events",
    path: "/events",
    dropdown: [
      { name: "Webinar", path: "/webinar" },
      { name: "Panel Discussion", path: "/panel-discussion" },
      { name: "Podcast", path: "/podcast" },
      { name: "Workshop", path: "/workshop" },
      { name: "Conference", path: "/conference" },
    ],
  },
  { name: "Sponsors", path: "/solutions" },
  {
    name: "Resources",
    path: "/events",
    dropdown: [
      { name: "Blogs", path: "/blogs" },
      { name: "Articles", path: "/articles" },
      { name: "Global Conferences", path: "/global-conferences" },
      { name: "Magazines", path: "/magazines" },
      { name: "Metapercept Training", path: "/metapercept-training" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const isParentActive = (link) => {
    if (!link.dropdown) return false;
    return link.dropdown.some(
      (item) => item.path && location.pathname.startsWith(item.path)
    );
  };

  const handleDropdownClick = (index) => {
    setIsDropdownOpen((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <nav className="fixed top-0 z-40 left-0 right-0 shadow customWidth:rounded-full max-w-screen-2xl mx-auto">
        <div className="py-5 px-4 lg:px-12 flex items-center justify-between bg-backgroundColor w-full text-white mx-auto">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={Main_Logo}
              alt="MetR logo"
              className="w-16 sm:w-28 h-auto"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="lg:flex gap-10 items-center hidden">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(index)}
                onMouseLeave={() => setIsDropdownOpen(null)}
              >
                {link.dropdown ? (
                  <span
                    className={`flex items-center gap-1 cursor-pointer font-medium transition-colors duration-200 ${
                      isParentActive(link) ? "text-textHover" : "text-white"
                    } hover:text-textHover text-nowrap`}
                  >
                    {link.name}
                    <MdOutlineKeyboardArrowDown
                      className={`transition-transform duration-200 ${
                        isDropdownOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                ) : (
                  <NavLink
                    to={link.path || "/"}
                    className={({ isActive }) =>
                      `font-medium transition-colors duration-200 ${
                        isActive ? "text-textHover" : "text-white"
                      } hover:text-textHover`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Dropdown */}
                {link.dropdown && isDropdownOpen === index && (
                  <ul
                    className="absolute mt-[0.5px] top-full left-0 w-fit bg-white rounded shadow py-2
          transition-all duration-200 ease-out"
                  >
                    {link.dropdown.map((item, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `font-medium block text-nowrap px-4 py-2 text-sm transition-colors duration-150 ${
                              isActive
                                ? "text-textHover"
                                : "text-[#000000] hover:text-textHover"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link className="font-medium transition-colors duration-200 hover:text-textHover hidden lg:block">
            Login
          </Link>

          {/* -------------------------- Mobile Navigation ---------------------- */}

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <aside
            id="default-sidebar"
            className={`lg:hidden fixed top-[65px] sm:top-[80px] left-0 z-40 w-64 h-screen transition-all duration-300 ease-in-out sm:translate-x-0 bg-backgroundColor text-white ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-8 overflow-y-hidden flex flex-col">
              <ul className="lg:hidden mt-4 space-y-4 font-medium px-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.dropdown ? (
                      <>
                        {/* Dropdown Parent */}
                        <div
                          className="cursor-pointer font-medium flex items-center justify-between"
                          onClick={() => handleDropdownClick(index)}
                        >
                          <span
                            className={`text-[18px] ${
                              isDropdownOpen === index
                                ? "text-textHover"
                                : "hover:text-textHover"
                            }`}
                          >
                            {link.name}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transform transition-transform duration-200 ${
                              isDropdownOpen === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>

                        {/* Dropdown Items */}
                        {isDropdownOpen === index && (
                          <ul className="transition-all duration-300 ease-in-out space-y-3 mt-3">
                            {link.dropdown.map((item, subIndex) => (
                              <li key={subIndex} className="my-1">
                                <NavLink
                                  to={item.path || "/"}
                                  className={({ isActive }) =>
                                    `font-medium text-[18px] ${
                                      isActive
                                        ? "text-textHover"
                                        : "hover:text-textHover"
                                    }`
                                  }
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      // Regular NavLink for items without dropdowns
                      <NavLink
                        to={link.path || "/"}
                        className={({ isActive }) =>
                          `font-medium text-[18px] ${
                            isActive ? "text-textHover" : "hover:text-textHover"
                          } ${link.notranslate ? "notranslate" : ""}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <Link className="px-4 mt-8 font-medium text-[18px] transition-colors duration-200 hover:text-textHover sm:hidden">
                Login
              </Link>
            </div>
          </aside>
        )}
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
