import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-[250px] md:h-[350px] relative">
        <img
          src="https://www.equitypandit.com/wp-content/uploads/2022/11/Varun-Beverages-Hits-12-in-3-days-Records-Strong-Q3-Results-EP.jpeg"
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
      About
    </>
  );
};

export default About;
