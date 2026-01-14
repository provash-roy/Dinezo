import React from 'react';
import { Link } from 'react-router';

const FeaturedRestaurants = ({ restaurants }) => {
    // If no restaurants, show skeleton
    if (!restaurants || restaurants.length === 0) {
        return (
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text">Restaurants</span>
                        </h2>
                        <p className="text-gray-600 text-lg">Loading amazing restaurants...</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Show first 6 restaurants
    const featured = restaurants.slice(0, 6);

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Restaurants</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Handpicked restaurants offering the best dining experience
                    </p>
                </div>

                {/* Restaurants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((restaurant, index) => {
                        const { restaurantID, restaurantName, type, rating = 4.5, deliveryTime = '30-40' } = restaurant;

                        return (
                            <div
                                key={restaurantID}
                                className="animate-scale-in card-hover bg-white rounded-2xl shadow-lg overflow-hidden group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gradient-to-br from-orange-400 to-red-500 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl group-hover:scale-110 transition-transform duration-500">
                                        {type?.toLowerCase().includes('pizza') ? '🍕' :
                                            type?.toLowerCase().includes('burger') ? '🍔' :
                                                type?.toLowerCase().includes('sushi') || type?.toLowerCase().includes('asian') ? '🍱' :
                                                    type?.toLowerCase().includes('italian') ? '🍝' :
                                                        type?.toLowerCase().includes('mexican') ? '🌮' :
                                                            type?.toLowerCase().includes('dessert') ? '🍰' : '🍽️'}
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                        <span className="text-yellow-500">⭐</span>
                                        <span className="font-semibold text-sm">{rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Restaurant Name */}
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                                        {restaurantName}
                                    </h3>

                                    {/* Type */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                                            {type}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <span>🕒</span>
                                            <span>{deliveryTime} min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>🚚</span>
                                            <span>Free delivery</span>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <Link
                                        to={`/restaurants/${restaurantID}`}
                                        state={restaurant}
                                        className="block w-full text-center btn-primary"
                                    >
                                        View Menu
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link to="/explore" className="btn-secondary inline-block">
                        View All Restaurants
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedRestaurants;
