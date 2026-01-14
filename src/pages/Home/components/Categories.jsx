import React from "react";

const categories = [
  { id: 1, name: "Pizza", emoji: "🍕" },
  { id: 2, name: "Burgers", emoji: "🍔" },
  { id: 3, name: "Sushi", emoji: "🍱" },
  { id: 4, name: "Asian", emoji: "🍜" },
  { id: 5, name: "Desserts", emoji: "🍰" },
  { id: 6, name: "Healthy", emoji: "🥗" },
  { id: 7, name: "Mexican", emoji: "🌮" },
  { id: 8, name: "Italian", emoji: "🍝" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore by Category
          </h2>
          <p className="text-gray-600 mt-3">
            Discover restaurants by your favorite cuisine type
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
