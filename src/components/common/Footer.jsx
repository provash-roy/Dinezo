import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="animate-fade-in">
                        <h3 className="text-3xl font-bold gradient-text mb-4">DINEZO</h3>
                        <p className="text-gray-400 mb-4">
                            Your favorite food, delivered with love. Discover the best restaurants and cuisines in your area.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                                <span>📘</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                                <span>🐦</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                                <span>📷</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/explore" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get special offers and updates
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                →
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p>© {currentYear} Dinezo. All rights reserved. Made with ❤️ for food lovers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
