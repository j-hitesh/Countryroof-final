import React from "react";

const UpcomingProjects = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-8">
          Upcoming Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* PROJECT 1 */}
          <div className="bg-white border rounded-lg flex overflow-hidden hover:shadow-xl transition">
            <div className="w-[70%] h-[240px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop"
                alt="DLF Aralias"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1a4d5c] mb-1">
                  DLF Aralias
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 Sector 42, Gurgaon
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Ultra-luxury residential project with world-class amenities
                </p>

                <div className="flex justify-between text-xs text-gray-500 border-b pb-2 mb-3">
                  <span>Launch: Q2 2025</span>
                  <span>Units: 450+</span>
                </div>
              </div>

              <button className="bg-[#1a4d5c] text-white py-2 rounded-md text-sm font-semibold">
                Notify Me
              </button>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white border rounded-lg flex overflow-hidden hover:shadow-xl transition">
            <div className="w-[70%] h-[240px] overflow-hidden">
              <img
                src="https://psgroup.in/blog/wp-content/uploads/2022/08/Sub_05.jpg"
                alt="Lodha Codename Crown"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1a4d5c] mb-1">
                  Lodha Codename Crown
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 Bandra, Mumbai
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Premium waterfront development with panoramic city views
                </p>

                <div className="flex justify-between text-xs text-gray-500 border-b pb-2 mb-3">
                  <span>Completion: Q4 2026</span>
                  <span>Units: 300+</span>
                </div>
              </div>

              <button className="bg-[#1a4d5c] text-white py-2 rounded-md text-sm font-semibold">
                Notify Me
              </button>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-white border rounded-lg flex overflow-hidden hover:shadow-xl transition">
            <div className="w-[70%] h-[240px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
                alt="Godrej 24 Green"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1a4d5c] mb-1">
                  Godrej 24 Green
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  📍 Sector 75, Gurgaon
                </p>

                <p className="text-sm text-gray-600 mb-3">
                  Eco-friendly development with sustainable living features
                </p>

                <div className="flex justify-between text-xs text-gray-500 border-b pb-2 mb-3">
                  <span>Launch: Q3 2025</span>
                  <span>Units: 600+</span>
                </div>
              </div>

              <button className="bg-[#1a4d5c] text-white py-2 rounded-md text-sm font-semibold">
                Notify Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
