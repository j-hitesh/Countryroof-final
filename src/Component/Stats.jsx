import React from "react";

const Stats = () => {
  return (
<div>
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          {/* STAT 1 */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a4d5c] mb-2">
              45,000+
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Verified Properties
            </p>
          </div>

          {/* STAT 2 */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a4d5c] mb-2">
              2,80,000+
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Active Buyers
            </p>
          </div>

          {/* STAT 3 */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a4d5c] mb-2">
              98%
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Customer Satisfaction
            </p>
          </div>

          {/* STAT 4 */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a4d5c] mb-2">
              15+ Years
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Industry Expertise
            </p>
          </div>

        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-black">
          Frequently Asked Questions{" "}
          <span className="text-[#163E64]">(FAQs)</span>
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <details className="group bg-white rounded-lg shadow-md overflow-hidden">
            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
              1. What type of projects does Countryroof develop?
              <span className="transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              Countryroof develops residential and commercial real estate
              projects with a strong focus on quality construction, practical
              layouts, and long-term value. Each project is planned to meet
              modern living needs while ensuring reliability for investors.
            </div>
          </details>

          {/* FAQ 2 */}
          <details className="group bg-white rounded-lg shadow-md overflow-hidden">
            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
              2. Is Countryroof a trusted real estate developer in Gurgaon?
              <span className="transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              Yes. Countryroof is known for its transparent processes, disciplined
              development approach, and commitment to delivering quality
              projects. The brand focuses on building trust through consistency,
              clarity, and dependable execution.
            </div>
          </details>

          {/* FAQ 3 */}
          <details className="group bg-white rounded-lg shadow-md overflow-hidden">
            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
              3. Are Countryroof projects suitable for both homebuyers and investors?
              <span className="transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              Absolutely. Homebuyers benefit from well-planned living spaces,
              while investors value the long-term growth potential, construction
              quality, and location-focused planning of Countryroof developments.
            </div>
          </details>

          {/* FAQ 4 */}
          <details className="group bg-white rounded-lg shadow-md overflow-hidden">
            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
              4. How does Countryroof ensure construction quality?
              <span className="transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              Quality is ensured through careful planning, reliable materials,
              efficient design, and strict supervision at every stage of
              construction. The focus is on durability, usability, and long-term
              performance rather than short-term trends.
            </div>
          </details>

          {/* FAQ 5 */}
          <details className="group bg-white rounded-lg shadow-md overflow-hidden">
            <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition">
              5. Does Countryroof focus on sustainable development?
              <span className="transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              Yes. Countryroof integrates sustainable practices such as efficient
              space utilization, eco-conscious materials, and long-term planning
              to create developments that are both responsible and future-ready.
            </div>
          </details>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Stats;
