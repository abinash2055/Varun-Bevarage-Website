import React from "react";

const About = () => {
  return (
    <div className="w-full h-[250px] md:h-[350px] relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhrL9sc9aqM0t389a0kWI3YnfTY8SXAGWZw&s"
        alt="Contact Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start text-white pl-20 md:pl-40 pr-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3">About</h1>
        <p className="text-lg md:text-xl max-w-xl">
          We are a leading FMCG company delivering refreshing beverages across
          Nepal with quality and taste you can trust.
        </p>
      </div>
    </div>
  );
};

export default About;
