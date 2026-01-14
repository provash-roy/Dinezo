import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="relative gradient-hero text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🍕</div>
                <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🍔</div>
                <div className="absolute bottom-32 left-1/4 text-7xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🍜</div>
                <div className="absolute bottom-20 right-1/3 text-6xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>🍱</div>
                <div className="absolute top-1/2 right-10 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🥗</div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
                        <span className="text-2xl">🎉</span>
                        <span className="text-sm font-medium">Discover Amazing Restaurants Near You</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Your Favorite Food,
                        <br />
                        <span className="inline-block mt-2">Delivered with</span>{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">Love</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-white/30 -rotate-1"></span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light">
                        Explore the best restaurants, discover new cuisines, and order your favorite meals with just a few clicks
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
                        <div className="relative glass-effect rounded-full p-2 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl ml-4">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search for restaurants, cuisines, or dishes..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 text-lg"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="animate-slide-in-left">
                            <div className="text-4xl md:text-5xl font-bold">500+</div>
                            <div className="text-white/80 mt-1">Restaurants</div>
                        </div>
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                            <div className="text-4xl md:text-5xl font-bold">10K+</div>
                            <div className="text-white/80 mt-1">Happy Customers</div>
                        </div>
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                            <div className="text-4xl md:text-5xl font-bold">50+</div>
                            <div className="text-white/80 mt-1">Cuisines</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#fafafa"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
