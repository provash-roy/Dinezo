import React from 'react';

const categories = [
    { id: 1, name: 'Pizza', emoji: '🍕', color: 'from-red-400 to-orange-500' },
    { id: 2, name: 'Burgers', emoji: '🍔', color: 'from-yellow-400 to-orange-400' },
    { id: 3, name: 'Sushi', emoji: '🍱', color: 'from-pink-400 to-red-400' },
    { id: 4, name: 'Asian', emoji: '🍜', color: 'from-orange-400 to-red-500' },
    { id: 5, name: 'Desserts', emoji: '🍰', color: 'from-purple-400 to-pink-400' },
    { id: 6, name: 'Healthy', emoji: '🥗', color: 'from-green-400 to-emerald-500' },
    { id: 7, name: 'Mexican', emoji: '🌮', color: 'from-yellow-500 to-orange-600' },
    { id: 8, name: 'Italian', emoji: '🍝', color: 'from-red-500 to-pink-500' },
];

const Categories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Explore by <span className="gradient-text">Category</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover restaurants by your favorite cuisine type
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className="animate-scale-in card-hover cursor-pointer"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="relative group">
                                {/* Card */}
                                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center shadow-lg`}>
                                    {/* Emoji */}
                                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                                        {category.emoji}
                                    </div>
                                    {/* Name */}
                                    <h3 className="text-white font-semibold text-sm md:text-base">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="btn-secondary">
                        View All Categories
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
