import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Rules and guidelines for using our website and services.
          </p>
        </div>
      </div>
      {/* Terms Text */}
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
              Terms and Conditions
            </h2>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-10 space-y-6">
              {/* Map over 10 points */}
              {[
                {
                  number: 1,
                  title: "Acceptance of Terms",
                  description:
                    "By accessing or using the Varun Beverage Pvt Ltd website, mobile applications, or services, you agree to comply with and be bound by these Terms and Conditions, along with our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.",
                },
                {
                  number: 2,
                  title: "Permitted Use of Website",
                  description:
                    "You agree to use the website and services only for lawful purposes. You shall not use the website in any way that could damage, disable, overburden, or impair the website or interfere with other users’ access. You may not attempt to gain unauthorized access to any part of our systems, servers, or networks. All content accessed is for personal, non-commercial use unless expressly permitted.",
                },
                {
                  number: 3,
                  title: "Product Information",
                  description:
                    "All product descriptions, pricing, images, and specifications are provided for general information only. While we strive to maintain accuracy, we do not guarantee completeness, currentness, or freedom from errors. Varun Beverage Pvt Ltd reserves the right to modify product information, availability, and pricing at any time without prior notice.",
                },
                {
                  number: 4,
                  title: "Orders and Payment",
                  description:
                    "Orders are subject to acceptance by Varun Beverage Pvt Ltd. Payments must be made using the available methods listed on our website. We reserve the right to cancel orders in case of payment failure, suspected fraud, or incorrect order information.",
                },
                {
                  number: 5,
                  title: "Shipping and Delivery",
                  description:
                    "Delivery timelines are estimates and may vary due to logistics, weather, or other factors. Varun Beverage Pvt Ltd is not liable for delays or damages caused during shipping by third-party delivery services. Risk of loss or damage to products passes to the customer upon delivery.",
                },
                {
                  number: 6,
                  title: "Returns and Refunds",
                  description:
                    "Returns are subject to the company’s return and refund policy, available on our website. Refunds will be processed according to the original payment method and may take time depending on the payment provider. Certain products may be non-returnable for hygiene or safety reasons.",
                },
                {
                  number: 7,
                  title: "Intellectual Property",
                  description:
                    "All content on the website, including text, images, logos, graphics, and software, is the property of Varun Beverage Pvt Ltd or its licensors. You may not copy, reproduce, distribute, or create derivative works from our content without explicit written permission.",
                },
                {
                  number: 8,
                  title: "Third-Party Links",
                  description:
                    "Our website may include links to third-party websites, apps, or services. These external sites have their own terms and privacy policies. Varun Beverage Pvt Ltd is not responsible for how your information is collected or used by third parties. Linking to third-party websites does not constitute endorsement by Varun Beverage Pvt Ltd.",
                },
                {
                  number: 9,
                  title: "User Representations and Warranties",
                  description:
                    "By using our website and services, you represent and warrant that you are at least 13 years old or have parental consent, all information you provide is accurate, you will not use our services for unlawful activities, and you will not post offensive, defamatory, or harmful content on the website.",
                },
                {
                  number: 10,
                  title: "Modification of Website and Terms",
                  description:
                    "We reserve the right to modify, suspend, or discontinue the website or any part of the services at any time without notice. We may update these Terms and Conditions periodically. Continued use of our website or services after changes constitutes acceptance of the revised terms.",
                },
                {
                  number: 11,
                  title: "Limitation of Liability",
                  description:
                    "Varun Beverage Pvt Ltd is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website, products, or services. We are not responsible for any losses due to technical issues, network failures, or third-party actions.",
                },
                {
                  number: 12,
                  title: "Governing Law",
                  description:
                    "These Terms and Conditions are governed by the laws of Nepal. Any disputes arising from the use of our website or services will be subject to the exclusive jurisdiction of the courts in Nepal.",
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
                    <h3 className="font-bold text-gray-800 mb-1 text-lg md:text-xl">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 text-md md:text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Footer Link */}
              <p className="text-gray-600 text-md text-center mt-6">
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

export default Terms;
