import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
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
            <h1 className="text-2xl font-bold text-red-600">Varun Beverages</h1>
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
          <h2 className="text-red-500 font-bold mb-2 text-lg">COMMON LINKS</h2>
          <ul className="space-y-2 text-md font-semibold">
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
              <a href="#" className="hover:text-red-500 transition-colors">
                Careers
              </a>
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
          <h2 className="text-red-500 font-bold mb-2 text-lg">POLICIES</h2>
          <ul className="space-y-1 text-md mb-4 font-semibold">
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

          <h2 className="text-red-500 font-bold mb-2 text-lg">CONNECT</h2>
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

        {/* Bottle cap */}
        <img
          src="https://i.etsystatic.com/19440880/r/il/d870fb/2597787191/il_570xN.2597787191_ons0.jpg"
          alt="cap"
          className="absolute bottom-0 h-37 w-37 rounded-full object-cover"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-xl font-bold">
            © "PEPSI", "7UP", "MOUNTAIN-DEW", "MIRINDA", "STING", "AQUAFINA" &
            "SLICE" are the registered trademarks of The Varun Bevarages
            Company.
          </p>
          <p className="text-sm font-bold mt-2">
            © 2026 BOTTLERS NEPAL LIMITED ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
