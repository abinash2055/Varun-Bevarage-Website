import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/brands" },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-blue-900 text-white shadow-md">
        <div className="max-w-8xl mx-auto flex items-center px-6 sm:px-10 md:px-20 py-6">
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJbXmuJi9Gnu6rMl9XX5wbPgnAUOU_fVpg&s"
                alt="logo"
                className="h-12 sm:h-16 md:h-20 object-contain cursor-pointer rounded-4xl"
              />
            </Link>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Varun Beverage
            </span>
          </div>

          {/* Desktop Menu + Contact Button */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <ul className="flex gap-8 text-2xl font-bold">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link to={item.path}>{item.name}</Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full font-bold"></span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <button className="bg-white text-red-500 px-6 py-3 rounded-full font-bold text-xl shadow-lg hover:bg-gray-200 ring-2 hover:scale-105 transition duration-300 transform ring-red-500 hover:ring-red-600 focus:outline-none">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl ml-auto cursor-pointer">
            {open ? (
              <X onClick={() => setOpen(false)} />
            ) : (
              <Menu onClick={() => setOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white text-black px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <p className="border-b pb-2">{item.name}</p>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <button className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition">
                Contact
              </button>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
