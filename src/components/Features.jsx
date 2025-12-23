import React from 'react';
import { MapPin, CreditCard, CalendarClock, ShieldCheck, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-24 bg-white font-sans text-gray-900">
      
      {/* --- Custom CSS for Smooth Entrance & Hover --- */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .card-zoom:hover .card-image {
          transform: scale(1.05);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-bold mb-6">
            <Zap size={14} className="fill-purple-500" />
            <span>Premium Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Parking reimagined for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              the modern driver.
            </span>
          </h2>
          <p className="text-xl text-gray-500">
            We've removed the friction. No tickets, no cash, no circling. Just park and go.
          </p>
        </div>

        {/* --- Showcase Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Feature 1: Smart Navigation */}
          <div className="group card-zoom relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 opacity-0 animate-fade-up delay-100">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1573108724029-4c46571d6490?q=80&w=2070&auto=format&fit=crop" 
              alt="City Navigation" 
              className="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Smart Navigation</h3>
              <p className="text-gray-200 text-lg">
                Navigate directly to open spots with live occupancy tracking in 50+ cities.
              </p>
            </div>
          </div>

          {/* Feature 2: Frictionless Payments */}
          <div className="group card-zoom relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 opacity-0 animate-fade-up delay-200">
            {/* Background Image - Abstract Tech */}
            <img 
              src="https://images.unsplash.com/photo-1758874385321-c986fb36d653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMHBheW1lbnRzfGVufDB8fDB8fHww" 
              alt="Contactless Payment" 
              className="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-purple-800/20 mix-blend-multiply opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full z-10">
               <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30">
                <CreditCard size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Zero-Touch Payments</h3>
              <p className="text-purple-100 text-lg">
                Automatic deductions via FastTag or UPI. Exit the lot without rolling down your window.
              </p>
            </div>
          </div>

          {/* Feature 3: Advance Booking */}
          <div className="group card-zoom relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 opacity-0 animate-fade-up delay-300">
             <div className="absolute inset-0 bg-white"></div>
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-60"></div>

             <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div>
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 border border-purple-100">
                    <CalendarClock size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Reserve in Advance</h3>
                  <p className="text-gray-500 text-lg">
                    Secure your spot for concerts or flights days before you leave home.
                  </p>
                </div>
                {/* Abstract Visual */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
                  <div className="w-2/3 h-full bg-gradient-to-r from-orange-400 to-purple-500 rounded-full"></div>
                </div>
             </div>
          </div>

          {/* Feature 4: Verified Safety */}
          <div className="group card-zoom relative h-[350px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 opacity-0 animate-fade-up delay-300">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Secure Parking" 
              className="card-image absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-green-400 font-bold tracking-wide uppercase text-sm">Verified Secure</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Safety First</h3>
              <p className="text-gray-300 text-lg">
                24/7 surveillance and well-lit environments for your peace of mind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;