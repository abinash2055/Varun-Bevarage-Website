import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  // For Pop up Career
  const [showCareerModal, setShowCareerModal] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPf7uDEiyd8fJVy4Z8Z4KWdpnsmVDJxtIDQ&s"
            alt="Logo"
            className="h-20 rounded-4xl"
          />
          <div>
            <h1 className="text-2xl font-semibold text-red-600">
              Varun Beverages
            </h1>
            <p className="text-sm">Nepal Private Limited</p>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h2 className="text-red-500 font-bold mb-2 text-lg">LOCATIONS</h2>
          <p className="font-medium">Pepsicola, Kathmandu</p>
          <p className="text-sm">Corporate Office</p>
          <p className="text-sm mb-3">pcnpl@mail.com.np</p>

          <p className="font-medium">Nawalpur, West Nawalparasi</p>
          <p className="text-sm">Corporate Office</p>
          <p className="text-sm">pcnpl@mail.com.np</p>
        </div>

        {/* Common Links */}
        <div>
          <h2 className="text-red-500 font-semibold mb-2 text-lg">
            COMMON LINKS
          </h2>
          <ul className="space-y-2 text-md">
            <li>
              <a href="/about" className="hover:text-red-500 transition-colors">
                Business
              </a>
            </li>
            <li>
              <a
                href="/brands"
                className="hover:text-red-500 transition-colors"
              >
                Brands
              </a>
            </li>
            <li>
              <button
                onClick={() => setShowCareerModal(true)}
                className="hover:text-red-500 transition-colors"
              >
                Career
              </button>
            </li>
            <li>
              <a href="/media" className="hover:text-red-500 transition-colors">
                Media
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Policies & Connect */}
        <div>
          <h2 className="text-red-500 font-semibold mb-2 text-lg">POLICIES</h2>
          <ul className="space-y-1 text-md mb-4">
            <li>
              <a href="/terms" className="hover:text-red-500">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-red-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:text-red-500">
                Disclaimer
              </a>
            </li>
          </ul>

          <h2 className="text-red-500 font-semibold mb-2 text-lg">CONNECT</h2>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/NepalPepsi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Facebook size={18} />
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=pax9yfCV1cY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube size={18} />
              </div>
            </a>

            <a
              href="https://www.instagram.com/pepsi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Instagram size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Red Section */}
      <div className="relative mt-10 bg-red-600 text-white text-center py-10">
        {/* Splash background */}
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8NDQ8PDQ8PDw0NDQ8NDw8NDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zOD8tNygtLisBCgoKDQ0NDg0NDisZFRk3LS03Ny0rKystKysrLSsrKysrKys3KysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQUD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxUEbDmqKAigAAIAAACoCoILQEAAABBUFFQAAAVFBFAEAAUAAQRQFAAFBAUAAAQCAAEFEXRBAKAAAigIogoKAgoCKAIKAACCKgKAoAIKIqgAIAAAABQURQEFRAAAAAAAAAAAAAAAAARQAAFEUEUAAFQAAAARQUQUEAQAAAAAARQAAAAAAAAARQAAAUAAUABAAAAAABFBRFRAUQAAAAAAAAAAAAAAAAAAFEUAEBQFQAAAAARRFAEVAVFAQVAAAAAAAAAAAAAAAFQABQRQAAUABAAAwEUAAAAAARQEFQAAAAAAAAAAANAUQAWIAKIAoAAKgAAAgAQUA0AAAAEAAAAABUABUAAAAAAAAAVABRIoAiqAEEAAAEBFBRFMAABBQEAAAABQRUUEUAQAAAAAAABUAURQASgoCoCKKAAUBAAAQAVAAFQAABUUBFAQAAAAAAAAAAAAABRAVFAAAAAABEFKKIKCAAoAAAIqAKgAAAAAAAAAaYAAAKIAogCgCAAoAqACAgCgAKgAKgCiAKgA//9k="
          alt="splash"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />

        {/* Left Bottle Cap */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJbXmuJi9Gnu6rMl9XX5wbPgnAUOU_fVpg&s"
          alt="cap-left"
          className="absolute bottom-0 h-50 w-50 rounded-full object-cover ml-5 my-6"
        />

        {/* Right Bottle Cap */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPf7uDEiyd8fJVy4Z8Z4KWdpnsmVDJxtIDQ&s"
          alt="cap-right"
          className="absolute bottom-0 h-50 w-50 rounded-full object-cover mr-5 my-6 right-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-xl font-semibold">
            © "PEPSI", "7UP", "MOUNTAIN-DEW", "MIRINDA", "STING", "AQUAFINA" &
            "SLICE" are the registered trademarks of The Varun Bevarages
            Company.
          </p>
          <p className="text-sm mt-2">
            © 2026 BOTTLERS NEPAL LIMITED ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* Career Modal Page */}
      {showCareerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCareerModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Careers at Varun Beverages
            </h2>
            <p className="text-gray-700">
              Join our team and be part of an exciting journey! At Varun
              Beverages, we value talent, innovation, and dedication. Explore
              opportunities in production, marketing, sales, and more. Contact
              us at <span className="font-bold">info@vbnpl.com.np.</span>
              for more information.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
