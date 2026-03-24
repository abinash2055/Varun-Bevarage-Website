import React from "react";

const policy = () => {
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Text  */}
      <div className="bg-gradient-to-b from-[#fff7f7] to-[#f3eaea] py-28 px-6">
        <div className="max-w-6xl mx-auto">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
              Privacy Policy
            </h2>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-10 space-y-6">
              {/* Map over 10 points */}
              {[
                {
                  number: 1,
                  title: "Information Collection",
                  description:
                    "We collect personal information such as your name, email, phone number, shipping address, and payment details when you interact with our website, purchase our products, or subscribe to newsletters. This helps us provide personalized services and efficient support.",
                },
                {
                  number: 2,
                  title: "Usage of Information",
                  description:
                    "The data we collect is used to process orders, deliver products, manage your account, respond to inquiries, send updates about promotions or new products, and improve our website, products, and services for a better customer experience.",
                },
                {
                  number: 3,
                  title: "Data Sharing",
                  description:
                    "We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted business partners such as delivery services, payment gateways, or marketing providers solely to fulfill your requests or services.",
                },
                {
                  number: 4,
                  title: "Cookies and Tracking",
                  description:
                    "Our website uses cookies, analytics tools, and other tracking technologies to understand how visitors interact with our site. These tools help us analyze traffic, measure website performance, and deliver a more personalized experience.",
                },
                {
                  number: 5,
                  title: "Marketing Communication",
                  description:
                    "With your consent, we may send promotional emails, newsletters, or SMS notifications about our products, offers, or events. You can opt out at any time using the unsubscribe link or contacting our support team.",
                },
                {
                  number: 6,
                  title: "Data Security",
                  description:
                    "Protecting your personal data is our priority. We implement technical and organizational measures, including encryption, secure servers, and access controls, to prevent unauthorized access, alteration, disclosure, or destruction of your information.",
                },
                {
                  number: 7,
                  title: "Third-Party Links",
                  description:
                    "Our website may include links to third-party websites, apps, or services. These external sites have their own privacy policies, and Varun Beverage Pvt Ltd is not responsible for how your information is collected or used by these third parties.",
                },
                {
                  number: 8,
                  title: "Children’s Privacy",
                  description:
                    "Our products and services are intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If we become aware that personal data from a child has been collected, we delete it immediately.",
                },
                {
                  number: 9,
                  title: "Access and Correction",
                  description:
                    "You have the right to access, review, update, or request deletion of your personal information held by us. To exercise these rights, contact our support team through the email or contact form provided on our website.",
                },
                {
                  number: 10,
                  title: "Policy Updates",
                  description:
                    "This Privacy Policy may change over time to reflect updates in our business practices, legal requirements, or technology changes. We encourage users to review this policy periodically. Continued use constitutes acceptance of any updates.",
                },
              ].map((point) => (
                <div
                  key={point.number}
                  className="flex gap-6 items-start hover:bg-red-50 rounded-xl p-4 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-red-100 text-red-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow">
                      {point.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1 text-xl md:text-2xl">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 text-xl md:text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Footer Link */}
              <p className="text-gray-600 text-xl text-center mt-6">
                For more details, please refer to our{" "}
                <span className="text-red-500 font-semibold cursor-pointer hover:underline">
                  Terms and Conditions
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default policy;
