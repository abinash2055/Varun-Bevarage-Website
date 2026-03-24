import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      title: "Brands",
      number: 7,
      suffix: "",
      image: "https://bnl.com.np/images/brand-image.png",
    },
    {
      title: "Plants",
      number: "2",
      suffix: "",
      image: "https://bnl.com.np/images/plant.png",
    },
    {
      title: "Employees",
      number: 800,
      suffix: "+",
      image: "https://bnl.com.np/images/peo1.png",
    },
    {
      title: "Customers",
      number: 1200,
      suffix: "M+",
      image: "https://bnl.com.np/images/peo.png",
    },
  ];

  // --- Slideshow State ---
  const images = [
    "https://www.hatchwise.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-29-at-7.02.52-AM.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsurt0m-zxvwu8wn_yLn3Jj63_vVtbZVZ9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nV3VcpRb2k7PJW7CSxZGnKV3q3FYu5b5bQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LD_wXb-XbXG28YYvL9oUZfAR2KokeWW0XA&s",
  ];

  // Image Movement
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Number Movement
  const [counts, setCounts] = useState(cards.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const intervalTime = duration / steps;

    const intervals = cards.map((card, i) => {
      let step = 0;
      const increment = card.number / steps;

      return setInterval(() => {
        step++;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(Math.floor(increment * step), card.number);
          return updated;
        });

        if (step >= steps) clearInterval(intervals[i]);
      }, intervalTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt="Banner"
            className="w-full h-full object-cover brightness-50 transition duration-1000"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left */}
          <div className="flex-1 text-white space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to Varun Beverages
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-md">
              Delivering refreshing beverages and excellence across Nepal.
              Discover our journey, products, and achievements.
            </p>

            <Link
              to="/about"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg transition-all duration-300 font-bold inline-block"
            >
              Learn More
            </Link>
          </div>

          {/* Right Cards */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-4xl text-center"
              >
                <div className="w-full h-32 md:h-40 flex items-center justify-center bg-gray-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-28 md:h-36 object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg md:text-3xl font-bold text-blue-700 mb-2">
                    {card.title}
                  </h3>

                  {/* Animated Number */}
                  <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {counts[index]}
                    {card.suffix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
