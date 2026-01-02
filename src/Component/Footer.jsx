import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a4d5c] text-white mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* COLUMN 1 */}
          <div>
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="Countryroof"
              className="w-40 mb-4"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Countryroof is a trusted real estate platform offering verified
              residential and commercial properties across India’s top cities.
              Transparent deals. Long-term value.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#properties" className="hover:text-white">Properties</a></li>
              <li><a href="#why-us" className="hover:text-white">Why Countryroof</a></li>
              <li><a href="#" className="hover:text-white">Post Property</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wide">
              Property Types
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Buy Property</li>
              <li>Rent Property</li>
              <li>Commercial</li>
              <li>Plots & Land</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>📍 Gurgaon, Haryana</li>
              <li>📞 +91 9310412672</li>
              <li>✉️ info@countryroof.in</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Countryroof. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
