import React from "react";

const WhyCountryroof = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Why Choose Countryroof
          </h2>
          <p className="text-gray-600">
            Real estate made simple, transparent, and reliable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {/* Feature 1 */}
          <div className="p-6">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-semibold mb-2">
              Verified Properties
            </h3>
            <p className="text-sm text-gray-600">
              Every listing is carefully verified to ensure authenticity,
              transparency, and trust.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold mb-2">
              Zero Brokerage
            </h3>
            <p className="text-sm text-gray-600">
              No hidden charges or middlemen. Deal directly and save money.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">
              Prime Locations
            </h3>
            <p className="text-sm text-gray-600">
              Properties across India’s fastest-growing and high-ROI locations.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-sm text-gray-600">
              Thousands of buyers and investors trust Countryroof every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCountryroof;
