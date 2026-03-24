import React from "react";

const Brands = () => {
  const products = [
    // Pepsi
    {
      name: "Pepsi",
      description: "Enjoy the crisp and refreshing taste of Pepsi Original.",
      image:
        "https://i5.walmartimages.com/seo/Pepsi-Cola-Soda-Pop-20-fl-oz-Bottle-Allergens-Not-Contained_66d1f90a-489e-43eb-832c-3dca5cdd8932.1f25b5e2977ffaa1f1d77a8f370fdd03.png",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrates", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    //Sting
    {
      name: "Sting",
      description: "Enjoy the crisp and refreshing taste of Sting Original.",
      image:
        "https://springs.com.pk/cdn/shop/files/ic-1069122_sting_berry_blast_500ml_pet.jpg?v=1754925188",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    // Aquafine
    {
      name: "AQUAFINA",
      description: "Enjoy the crisp and refreshing taste of AQUAFINA.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1dy2Y7ZNpSC0-dc0xXSR8ijvp2rHEk19cA&s",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    // 7UP
    {
      name: "7-UP",
      description: "Enjoy the crisp and refreshing taste of 7 UP RGB.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbiuHfg23KhsiuKcxwLQzHvDBNdQlyzOOVg&s",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    // Mountain Dew
    {
      name: "Mountain Dew",
      description:
        "Enjoy the crisp and refreshing taste of Mountain Dew Original.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4eHRhmZZLB6_iKvBaXe7A66gamwgaMTntg&s",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    // Mirinda
    {
      name: "Mirinda",
      description: "Enjoy the crisp and refreshing taste of Mirinda Original.",
      image: "https://usafoods.com.au/cdn/shop/files/Mirinda.png?v=1718162425",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },

    // Slice
    {
      name: "Slice",
      description: "Enjoy the crisp and refreshing taste of Slice Original.",
      image:
        "https://nazarjanssupermarket.com/cdn/shop/products/slice-juice-mango-1ltr-nazar-jan-s-supermarket.jpg?v=1715279902",
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Acidulants (338)",
        "Caffeine",
        "Color (150d)",
        "Natural Flavors",
      ],
      nutrition: [
        { label: "Energy", value: "44kcal" },
        { label: "Protein", value: "0" },
        { label: "Carbohydrate", value: "11g" },
        { label: "Sugar", value: "11g" },
        { label: "Fat", value: "0" },
      ],
    },
  ];

  const ProductCard = ({ product, reverse }) => {
    // Dynamic colors
    const titleColor =
      product.name === "7-UP" || product.name === "Mountain Dew"
        ? "text-green-500"
        : product.name === "Mirinda" || product.name === "Slice"
        ? "text-orange-500"
        : "text-red-500";

    const descColor =
      product.name === "7-UP" || product.name === "Mountain Dew"
        ? "text-green-700"
        : product.name === "Mirinda" || product.name === "Slice"
        ? "text-orange-700"
        : "text-gray-700";

    const headerBg =
      product.name === "7-UP" || product.name === "Mountain Dew"
        ? "bg-green-500"
        : product.name === "Mirinda" || product.name === "Slice"
        ? "bg-orange-500"
        : "bg-red-500";

    const innerBg =
      product.name === "7-UP" || product.name === "Mountain Dew"
        ? "bg-green-50"
        : product.name === "Mirinda" || product.name === "Slice"
        ? "bg-orange-50"
        : "bg-red-50";

    return (
      <div
        className={`flex flex-col md:flex-row items-center justify-center md:justify-between bg-white shadow-md rounded-2xl p-8 my-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 md:pr-10 text-xl">
          <h2 className={`text-3xl font-bold mb-3 ${titleColor}`}>
            {product.name}
          </h2>
          <p className={`mb-6 ${descColor}`}>{product.description}</p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3
                className={`text-white font-semibold px-3 py-1 rounded-t-lg ${headerBg}`}
              >
                Ingredients
              </h3>
              <div className={`${innerBg} p-3 rounded-b-lg space-y-2`}>
                {product.ingredients.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 bg-white px-2 py-1 rounded shadow-sm"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3
                className={`text-white font-semibold px-3 py-1 rounded-t-lg ${headerBg}`}
              >
                Nutrition
              </h3>
              <div className={`${innerBg} p-3 rounded-b-lg space-y-2`}>
                {product.nutrition.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between text-gray-700 bg-white px-2 py-1 rounded shadow-sm"
                  >
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-[250px] md:h-[350px] relative">
        <img
          src="https://www.blendernation.com/wp-content/uploads/2023/05/jakub-pawlowski-untitled2.jpg"
          alt="Brands Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center items-start text-white pl-20 md:pl-40 pr-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">Brands</h1>
          <p className="text-lg md:text-xl max-w-xl">
            We are a prominent FMCG company with a strong presence across Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {products.map((product, idx) => (
          <ProductCard
            key={product.name}
            product={product}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default Brands;
