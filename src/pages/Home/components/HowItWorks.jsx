import React from 'react';

const steps = [
    {
        id: 1,
        icon: '🔍',
        title: 'Search',
        description: 'Browse through hundreds of restaurants and cuisines',
        color: 'from-blue-400 to-blue-600',
    },
    {
        id: 2,
        icon: '🍽️',
        title: 'Choose',
        description: 'Select your favorite dishes from the menu',
        color: 'from-purple-400 to-purple-600',
    },
    {
        id: 3,
        icon: '💳',
        title: 'Pay',
        description: 'Secure and easy payment options available',
        color: 'from-pink-400 to-pink-600',
    },
    {
        id: 4,
        icon: '🚀',
        title: 'Enjoy',
        description: 'Get your food delivered hot and fresh',
        color: 'from-orange-400 to-orange-600',
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-9xl">🍕</div>
                <div className="absolute bottom-10 right-10 text-9xl">🍔</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Get your favorite food delivered in just 4 simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative animate-scale-in"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Connector Line (hidden on mobile and last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-300 to-purple-300 z-0">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-purple-300"></div>
                                </div>
                            )}

                            {/* Step Card */}
                            <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-gray-100 hover:border-orange-200">
                                {/* Step Number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {step.id}
                                </div>

                                {/* Icon */}
                                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="btn-primary text-lg px-10 py-4">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
