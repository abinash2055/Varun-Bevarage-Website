import React from "react";

const Contact = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full h-[250px] md:h-[350px] relative">
        <img
          src="https://www.pepsi.com/prod/s3fs-public/2026-02/Pepsi_NA_header_Prebiotic-cola-blank-benefits_desktop.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start text-white pl-20 md:pl-40 pr-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Get in touch with our team for any inquiries and support.
          </p>
        </div>
      </div>

      {/* Kathmandu Location */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r from-red-500 to-pink-500 mb-10">
          Kathmandu Location
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Card */}
          <div className="md:w-1/3 bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-red-600">
              Quick Contact
            </h2>
            <p className="mb-6 text-gray-600">
              Reach out to us anytime using the details below.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">📍</span>
                <div>
                  <p className="font-semibold">ADDRESS</p>
                  <p className="text-gray-700">
                    Varun Beverages, Kathmandu Industrial District, Pepsicola,
                    Kathmandu, Nepal, P.O. Box: 44600
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">EMAIL</p>
                  <p className="text-gray-700">pcnpl@mail.com.np</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">📞</span>
                <div>
                  <p className="font-semibold">PHONE</p>
                  <p className="text-gray-700">01-4990066</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/NepalPepsi/"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/watch?v=pax9yfCV1cY"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/pepsi/"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-2/3 h-96 md:h-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <a
              href="https://www.google.com/maps/place/Varun+Beverages+(Nepal)+Pvt.Ltd/@27.6886892,85.3615724,483m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1b46abee07ff:0xeb4d5a801658c82b!2sVarun+Beverages+(Nepal)+Pvt.Ltd!8m2!3d27.688979!4d85.3621786!16s%2Fg%2F11kpcdmx4z!3m5!1s0x39eb1b46abee07ff:0xeb4d5a801658c82b!8m2!3d27.688979!4d85.3621786!16s%2Fg%2F11kpcdmx4z?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <iframe
                title="Kathmandu Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1530.093773101593!2d85.36265903464685!3d27.68852827996567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1774262172598!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </div>
      </section>

      {/* Nawalparasi Location */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-to-r from-red-500 to-pink-500 mb-10">
          Nawalparasi Location
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Card */}
          <div className="md:w-1/3 bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 text-red-600">
              Quick Contact
            </h2>
            <p className="mb-6 text-gray-600">
              Reach out to us anytime using the details below.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">📍</span>
                <div>
                  <p className="font-semibold">ADDRESS</p>
                  <p className="text-gray-700">
                    Varun Beverages, West Nawalparasi Industrial District,
                    Ramgram-10, Nawalparasi, Nepal, P.O. Box: 33000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">✉️</span>
                <div>
                  <p className="font-semibold">EMAIL</p>
                  <p className="text-gray-700">info@vbnpl.com.np</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-2xl">📞</span>
                <div>
                  <p className="font-semibold">PHONE</p>
                  <p className="text-gray-700">No Number</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/NepalPepsi/"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/watch?v=pax9yfCV1cY"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/pepsi/"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-2/3 h-96 md:h-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <a
              href="https://www.google.com/maps/place//@27.53321,83.63814,967m/data=!3m1!1e3!4m6!1m5!3m4!2zMjfCsDMxJzU5LjYiTiA4M8KwMzgnMTcuMyJF!8m2!3d27.53321!4d83.63814?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <iframe
                title="Kathmandu Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4210.521468742198!2d83.63813999999999!3d27.53321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2snp!4v1774263851036!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
