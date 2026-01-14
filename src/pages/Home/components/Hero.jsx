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
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 glass-effect px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                        <span className="text-xl sm:text-2xl">🎉</span>
                        <span className="text-xs sm:text-sm font-medium">Discover Amazing Restaurants Near You</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                        Your Favorite Food,
                        <br />
                        <span className="inline-block mt-1 sm:mt-2">Delivered with</span>{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">Love</span>
                            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-white/30 -rotate-1"></span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-white/90 font-light px-4">
                        Explore the best restaurants, discover new cuisines, and order your favorite meals with just a few clicks
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                        <div className="relative glass-effect rounded-full p-1.5 sm:p-2 shadow-2xl">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl ml-2 sm:ml-4">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search restaurants..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 text-sm sm:text-base lg:text-lg"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-orange-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 px-4">
                        <div className="animate-slide-in-left">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">500+</div>
                            <div className="text-white/80 mt-1 text-sm sm:text-base">Restaurants</div>
                        </div>
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">10K+</div>
                            <div className="text-white/80 mt-1 text-sm sm:text-base">Happy Customers</div>
                        </div>
                        <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold">50+</div>
                            <div className="text-white/80 mt-1 text-sm sm:text-base">Cuisines</div>
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
