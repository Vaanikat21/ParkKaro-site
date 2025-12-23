import React from 'react';
import { ArrowRight, Smartphone, MapPin, Bell, Star, Shield, Car, Navigation } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white selection:bg-purple-200 selection:text-purple-900 font-sans">
            {/* --- Main Content --- */}
            <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-20">

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Live in 50+ Cities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                        Parking made <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                            smart & simple.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto md:mx-0">
                        Stop circling the block. With <span className="font-semibold text-gray-800">Park Karo</span>, find secure spots, book instantly, and pay seamlessly using your phone.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="flex items-center justify-center cursor-pointer gap-2 px-8 py-4 text-white rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 font-semibold text-lg">
                            Get App
                            <ArrowRight size={20} />
                        </button>
                        <button className="flex items-center justify-center cursor-pointer gap-2 px-8 py-4 text-gray-700 bg-white border border-gray-200 rounded-full hover:border-purple-300 hover:text-purple-600 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-lg">
                            <MapPin size={20} />
                            Find Spot
                        </button>
                    </div>

                    {/* Trust/Stats */}
                    <div className="pt-8 flex items-center justify-center md:justify-start gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-left">
                            <p className="text-2xl font-bold text-gray-900">10k+</p>
                            <p className="text-sm text-gray-500">Daily Users</p>
                        </div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-gray-900">4.8</p>
                            <p className="text-sm text-gray-500">App Rating</p>
                        </div>
                    </div>
                </div>

                {/* Visual Content / Phone Mockup */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center lg:pl-10 mt-16 md:mt-0">

                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-200/40 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                    <div className="relative w-[280px] sm:w-[300px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/5 z-10 transition-transform hover:scale-[1.02] duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>

                        {/* Screen */}
                        <div className="w-full h-full bg-gray-50 flex flex-col relative">
                            {/* App Header */}
                            <div className="pt-10 px-5 pb-4 bg-white shadow-sm flex justify-between items-center z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        <Car size={16} />
                                    </div>
                                    <span className="font-bold text-gray-800">ParkKaro</span>
                                </div>
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <Bell size={16} className="text-gray-600" />
                                </div>
                            </div>

                            {/* Map Simulation */}
                            <div className="flex-1 bg-gray-100 relative overflow-hidden group">
                                {/* Stylized Roads */}
                                <div className="absolute top-1/3 left-0 w-full h-24 bg-gray-200 -rotate-12 scale-150 border-y-2 border-white"></div>
                                <div className="absolute -top-10 right-1/4 w-24 h-[120%] bg-gray-200 rotate-12 border-x-2 border-white"></div>

                                {/* Current Location */}
                                <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center animate-ping"></div>
                                <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-1"></div>

                                {/* Parking Pins */}
                                <div className="absolute top-1/4 left-1/3 hover:scale-110 transition-transform cursor-pointer z-10">
                                    <div className="relative">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                            $2.50/hr
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                        </div>
                                        <div className="bg-orange-500 p-2 rounded-full shadow-lg shadow-orange-500/30">
                                            <MapPin size={20} className="text-white fill-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-1/4 right-1/4 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                                    <div className="bg-white p-2 rounded-full shadow-md">
                                        <MapPin size={20} className="text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Booking Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl z-20 backdrop-blur-md bg-white/90 border border-white/20">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-gray-900">City Center Garage</h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                            <Navigation size={12} />
                                            <span>2 mins (0.4 km)</span>
                                        </div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                        Open
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                    Book Spot for $5.00
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats/Elements */}
                    <div className="absolute top-24 -right-4 md:right-0 lg:-right-8 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                        <div className="p-2 bg-green-50 rounded-full text-green-600">
                            <Shield size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-gray-900">Secure Parking</p>
                            <p className="text-xs text-gray-500">24/7 Surveillance</p>
                        </div>
                    </div>

                    <div className="absolute bottom-32 -left-4 md:left-0 lg:left-8 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center gap-3 animate-bounce [animation-delay:1.5s] [animation-duration:5s]">
                        <div className="p-2 bg-yellow-50 rounded-full text-yellow-600">
                            <Star size={20} className="fill-yellow-600" />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-gray-900">Top Rated</p>
                            <p className="text-xs text-gray-500">4.9/5 from users</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default HeroSection;