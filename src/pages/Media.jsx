import React from "react";

// Media data organized by category
const mediaData = {
  "Brand Logos": [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1280px-Pepsi_2023.svg.png",
      alt: "Pepsi",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEKTQcVC3csLXzcTewlLvm8-BzU3sdngbjw&s",
      alt: "Sting",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRTbJV9AebMF6ezw6wlY300MS_rT190AkAQ&s",
      alt: "Aquafine",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1IQWzWGLDM6PbWEthfRiHj7bu_zLG0xBbg&s",
      alt: "7 UP",
    },
    {
      src: "https://m.media-amazon.com/images/I/81sWNe3jo+L._AC_UF894,1000_QL80_.jpg",
      alt: "Mountain Dew",
    },
    {
      src: "https://fivestartrading-holland.eu/wp-content/uploads/2021/12/Mirinda.png",
      alt: "Mirinda",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2024/3/398585160/MX/TK/FM/25906824/screenshot-2024-03-11-133043-250x250.png",
      alt: "Slice",
    },
  ],

  "Board of Directors (Kathmandu)": [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOue5scChSu5loqlOzO1ajv7FC6zltGiMdQ&s",
      name: "Ravi Kant Jaipuria",
      designation: "Chairman",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEHZWuObMTsXqwKEohW_jr-pn9GH84w1ziWrXMNrMqxyOa_NyJMhtSxLSfwOndJLJiBmm5EKvMzhWNv39ana3c7SBhux_&s&ec=121584914",
      name: "Sanjeev Arora",
      designation: "Finance Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQH3YwjmBPDkWA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701791467875?e=2147483647&v=beta&t=gTgQ1CM4q_xvL86bUOjUS-mkmAVY1tKUzT--cKZK5vY",
      name: "Arbind Thakur",
      designation: "Key Managerial Person",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C4D03AQEK5fWD783Xnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516969449584?e=2147483647&v=beta&t=NaLbMa60wvxC6TTLpSMvU6fJre66odr_KEaOQlIqbks",
      name: "Praveen Kumar Agarwal",
      designation: "Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C5103AQERLwssdAlhkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1534402400963?e=2147483647&v=beta&t=BkW4NmUnJd_BRc_cOVaqe9qEjdth8h7Dr3ktpcR4WHs",
      name: "Vinod Kumar Singh",
      designation: "Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQH4Jqxbr4GfjA/profile-displayphoto-scale_200_200/B56ZmuFZLEG0AY-/0/1759562274908?e=2147483647&v=beta&t=25KSbK8EEJmIF-cGUlB0Q61ZTyjgY-1pRG7TBqglV28",
      name: "Ashok Kumar",
      designation: "Director",
    },
  ],

  "Board of Directors (Nawalparasi)": [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOue5scChSu5loqlOzO1ajv7FC6zltGiMdQ&s",
      name: "Ravi Kant Jaipuria",
      designation: "Chairman",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEHZWuObMTsXqwKEohW_jr-pn9GH84w1ziWrXMNrMqxyOa_NyJMhtSxLSfwOndJLJiBmm5EKvMzhWNv39ana3c7SBhux_&s&ec=121584914",
      name: "Sanjeev Arora",
      designation: "Finance Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D4D03AQH3YwjmBPDkWA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701791467875?e=2147483647&v=beta&t=gTgQ1CM4q_xvL86bUOjUS-mkmAVY1tKUzT--cKZK5vY",
      name: "Arbind Thakur",
      designation: "Key Managerial Person",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C4D03AQEK5fWD783Xnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516969449584?e=2147483647&v=beta&t=NaLbMa60wvxC6TTLpSMvU6fJre66odr_KEaOQlIqbks",
      name: "Praveen Kumar Agarwal",
      designation: "Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C5103AQERLwssdAlhkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1534402400963?e=2147483647&v=beta&t=BkW4NmUnJd_BRc_cOVaqe9qEjdth8h7Dr3ktpcR4WHs",
      name: "Vinod Kumar Singh",
      designation: "Director",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQH4Jqxbr4GfjA/profile-displayphoto-scale_200_200/B56ZmuFZLEG0AY-/0/1759562274908?e=2147483647&v=beta&t=25KSbK8EEJmIF-cGUlB0Q61ZTyjgY-1pRG7TBqglV28",
      name: "Ashok Kumar",
      designation: "Director",
    },
  ],

  "Office Images": [
    {
      src: "https://media.licdn.com/dms/image/v2/D5605AQHD0R1Iu_as9g/videocover-high/videocover-high/0/1718800097625?e=2147483647&v=beta&t=Go7u0tGLmz4_Wf6eGpWuqBz9jmfzh3Rlhx8NCLdAdP4",
      alt: "Kathmandu",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUWjY8f-a6ldUVSUL5oIEfAAIQrUK0jejbw&s",
      alt: "Nawalparasi",
    },
    {
      src: "https://media.edusanjal.com/__sized__/post_headers/WhatsApp_Image_2025-08-22_at_16.13.52_08e8e2a7-thumbnail-1000x525-70.jpg",
      alt: "Company Visit",
    },
    {
      src: "https://www.sidel.com/media/0t3negad/sidel_picture_varun_india_4_equipment.jpg?v=1db9fe50c04cd10",
      alt: "Power Plant",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVeIocHyn_OEMaNKSa7lEWEEgnbiNmUU4kA&s",
      alt: "Staff Ceremony",
    },
  ],
};

const Media = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full h-[250px] md:h-[350px] relative">
        <img
          src="https://www.equitypandit.com/wp-content/uploads/2022/11/Varun-Beverages-Hits-12-in-3-days-Records-Strong-Q3-Results-EP.jpeg"
          alt="Media Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start text-white pl-6 md:pl-40 pr-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
            Media
          </h1>
          <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
            Explore our latest updates, campaigns, and product highlights
            through engaging photos and videos.
          </p>
        </div>
      </div>

      {/* Media Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {Object.entries(mediaData).map(([category, items], idx) => (
          <div key={idx}>
            {/* Section Heading */}
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              {category}
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4"
                >
                  <img
                    src={item.src}
                    alt={item.alt || item.name}
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />

                  {item.name && (
                    <>
                      <h3 className="text-red-500 font-bold text-center">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 text-center">
                        {item.designation}
                      </p>
                    </>
                  )}

                  {!item.name && item.alt && (
                    <p className="text-gray-700 text-center font-bold">
                      {item.alt}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Media;
