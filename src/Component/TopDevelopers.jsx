import React from "react";

const TopDevelopers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Top Developers
          </h2>
          <p className="text-gray-600">
            Trusted builders shaping India's real estate landscape
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* DLF */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACUCAMAAAAUEUq5AAAA"
                alt="DLF Limited"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">DLF Limited</h3>
            <p className="text-sm text-gray-600 mb-4">
              India's largest real estate developer with 40+ years of excellence
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Residential
              </span>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                Commercial
              </span>
            </div>
            <button className="text-blue-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* JMD */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D0BAQHC5_Q_J3CCaw/company-logo_200_200/company-logo_200_200/0/1635835316850/jmd_leasers_developers_logo"
                alt="JMD Group"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">JMD Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Premium residential & commercial spaces in Gurgaon & NCR
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Luxury Homes
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Offices
              </span>
            </div>
            <button className="text-green-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Godrej */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/1/1d/Godrej_Enterprises_Group.svg"
                alt="Godrej Enterprises"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Godrej Enterprises</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sustainable & eco-friendly developments across India
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                Green Living
              </span>
              <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                Affordable
              </span>
            </div>
            <button className="text-red-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Lodha */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQEFOj0NwhLtxQ/company-logo_200_200/company-logo_200_200/0/1630563176769/lodha_group_logo"
                alt="Lodha Group"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Lodha Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ultra-luxury projects in Mumbai, Bangalore & beyond
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                Ultra-Luxury
              </span>
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                Premium
              </span>
            </div>
            <button className="text-purple-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Prestige */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/5/50/Prestige_Group.svg"
                alt="Prestige Group"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Prestige Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Iconic developments across South & North India
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                Integrated Townships
              </span>
              <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                Retail
              </span>
            </div>
            <button className="text-orange-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Suncity */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://www.propertyinjaipur.com/backend/builder_profile/3123Suncity%20Group.png"
                alt="Suncity Group"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Suncity Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Residential & commercial spaces with modern amenities
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Modern Designs
              </span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Gurgaon
              </span>
            </div>
            <button className="text-yellow-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Emaar */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://media.licdn.com/dms/image/v2/D560BAQE95cMMIkc-9g/company-logo_200_200/B56ZU70.SkHQBY-/0/1740465498969/emaarindia_logo"
                alt="Emaar India"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Emaar India</h3>
            <p className="text-sm text-gray-600 mb-4">
              World-class developments with international standards
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                International
              </span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                Luxury
              </span>
            </div>
            <button className="text-indigo-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

          {/* Hiranandani */}
          <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
              <img
                src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/Hirassssnandani_Grssoup_Lss.jpg"
                alt="Hiranandani Group"
                className="max-h-14"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Hiranandani Group</h3>
            <p className="text-sm text-gray-600 mb-4">
              Pioneering townships and integrated communities
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                Townships
              </span>
              <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                Mumbai
              </span>
            </div>
            <button className="text-pink-600 font-semibold text-sm">
              View Projects →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopDevelopers;
