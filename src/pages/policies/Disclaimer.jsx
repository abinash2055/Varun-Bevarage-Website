import React from "react";

const Disclaimer = () => {
  return (
    <>
      <div className="w-full h-[250px] md:h-[350px] relative">
        <img
          src="https://www.blendernation.com/wp-content/uploads/2023/05/jakub-pawlowski-untitled2.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start text-white pl-20 md:pl-40 pr-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">
            Disclaimer
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Limitation of liability regarding the use of our content and
            services.
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="bg-gradient-to-b from-[#fff7f7] to-[#f3eaea] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="p-4 bg-red-100 rounded-full shadow-md animate-pulse">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 12v.01"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
              Disclaimer
            </h2>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-10 space-y-8">
              {/* Paragraph 1 */}
              <div className="flex gap-6 items-start hover:bg-red-50 rounded-xl p-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-md md:text-xl leading-relaxed font-bold">
                    The information provided on the Varun Beverage Pvt Ltd
                    website, including product details, pricing, and promotions,
                    is for general informational purposes only. While we strive
                    to keep the information accurate and up-to-date, we make no
                    warranties or representations of any kind, express or
                    implied, about the completeness, accuracy, reliability,
                    suitability, or availability of the content.
                  </p>
                </div>
              </div>

              {/* Paragraph 2 */}
              <div className="flex gap-6 items-start hover:bg-red-50 rounded-xl p-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-md md:text-xl leading-relaxed font-bold">
                    Varun Beverage Pvt Ltd does not guarantee that its products,
                    services, or website content will meet your specific
                    requirements. Product images, descriptions, and nutritional
                    information are for illustrative purposes and may vary in
                    actual delivery. We reserve the right to modify product
                    details, specifications, or availability without prior
                    notice.
                  </p>
                </div>
              </div>

              {/* Paragraph 3 */}
              <div className="flex gap-6 items-start hover:bg-red-50 rounded-xl p-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-md md:text-xl leading-relaxed font-bold">
                    In no event shall Varun Beverage Pvt Ltd, its directors,
                    employees, or affiliates be liable for any direct, indirect,
                    incidental, or consequential damages arising out of or in
                    connection with the use of our website, products, or
                    services. Users are encouraged to verify information
                    independently and use the products responsibly.
                  </p>
                </div>
              </div>

              {/* Footer Link */}
              <p className="text-gray-600 text-xl text-center mt-4">
                Please refer our{" "}
                <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                  Terms and Conditions
                </span>{" "}
                for detailed Liability Disclaimer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
