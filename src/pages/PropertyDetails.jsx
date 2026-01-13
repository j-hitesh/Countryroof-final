import { FaCheckCircle,FaWhatsapp,FaMapMarkedAlt,FaMapMarkerAlt,FaPhoneAlt,FaHome,FaRegClock,FaUsers,FaCheck } from 'react-icons/fa';
import React, { useState } from 'react';

// import FloorPlan from "../Component/FloorPlan"
import { Link } from "react-router-dom";

export default function PropertyDetails() {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    'https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766914080915-g4.webp',
    'https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766914080913-g3.webp',
    'https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766914080915-g4.webp',
    'https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766914080915-g4.webp',
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedIndex(null);
  };

  const goToNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
    return (
    <section className="bg-blue-200 pb-20">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-350 mx-auto flex justify-between items-center p-4">
          
          {/* LOGO */}
          <Link to="/">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-32"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 font-medium">
            <Link to="/properties">Properties</Link>
           
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
             <Link className="bg-[#2D548F] text-white px-4 py-2 rounded-md text-sm font-semibold" to="/PostProperty">Post Property</Link>
            <button
              className="bg-red-700 opacity-80 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
            >
              <Link to="/Login">
                Login
              </Link>
            </button>
          </div>
        </div>
      </header>
     <div>
  <div>
    <img 
      src="https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766911888732-banner.webp" 
      alt="Top banner property" 
      className="relative h-132 w-full" 
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
    
    <div className="absolute bottom-1/5 left-1/3">
      <h3 className="text-xl font-bold mb-1 text-white">Rajgriham Ridge Residency</h3>
      <p className="text-sm text-white mb-4 text-center">Sector 25, Sohna, Gurugram</p>
    </div>

    <div className="grid grid-cols-3 gap-4 absolute bottom-8 left-1/5">
      <div className="bg-white/40 rounded backdrop-blur-md p-4">
        <h3 className="text-xl text-center">Possession</h3>
        <p className="text-center text-2xl">Feb 2030</p>
      </div>
      
      {/* Removed empty divs */}
      <div className="bg-white/40 rounded backdrop-blur-md p-4">
        <h3 className="text-xl text-center">Status</h3>
        <p className="text-center text-2xl">Under Construction</p>
      </div>

      <div className="bg-white/40 rounded backdrop-blur-md p-4">
        <h3 className="text-xl text-center">Location</h3>
        <p className="text-center text-2xl">Gurugram</p>
      </div>
    </div>
  </div>
</div>
    <div className="rounded-4xl bg-white p-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-10 shadow-lg">
      {/* Image Section */}
      <div className="w-full md:w-[420px] h-[400px] flex-shrink-0 overflow-hidden rounded-[24px] mb-6 md:mb-0 md:mr-8">
        <img
          src="/" 
          alt="/"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="flex-1 text-white">
        <p className="text-red-500 font-bold tracking-wider mb-2 uppercase text-sm">
          About Rajgriham Ridge Residency
        </p>
        <h1 className="text-3xl font-extrabold leading-tight mb-4 text-black">
          Rajgriham Ridge Residency
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-4 text-gray-600">
          The Ridge Residency by RajGriham offers a perfect blend of modern comfort, smart design, and serene living in the heart of Sector 25, Sohna. Spread across 6.36 acres, The Ridge brings thoughtfully designed 2BHK and 3BHK apartments that cater to families seeking quality homes at affordable prices. Set amidst landscaped green spaces and equipped with essential amenities, The Ridge Residency promises a lifestyle filled with convenience, security, and peace.
        </p>
        <button className="mt-4 bg-[#2D548F] text-white font-bold rounded-lg px-12 py-4 text-lg hover:bg-red-700 transition cursor-pointer">
          Get Details
        </button>
      </div>
    </div>
       <div className='bg-gray-700 mt-20'>
        <h3 className="text-white text-center text-2xl font-bold mb-4 pt-10"> PROJECT HIGHLIGHTS</h3>
        <div className="flex flex-col md:flex-row text-white p-8 rounded-lg">
      {/* Left Section */}

      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-red-500">Rajgriham Ridge Residency Features</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Situated in Sector 25, Sohna, with seamless connectivity to Gurugram, Delhi NCR, and just 2 minutes from KMP Expressway. Close proximity to the upcoming International Airport enhances future growth.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Approved under PMAY and Haryana Affordable Housing Policy (AHP)—making your dream home more accessible and affordable.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Located near Asia's largest Lithium-Ion Battery Factory and the upcoming Aravalli Safari, ensuring strong appreciation and high rental potential.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Well-planned sector roads, wide internal streets, reliable water supply, sewage system, and modern urban amenities.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Surrounded by a 50+ meter green belt on all four sides, along with landscaped gardens and open spaces for a refreshing, eco-friendly lifestyle.
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-orange-500 mr-2" />
            Secure your home with complete transparency, assured benefits, and long-term value.
          </li>
        </ul>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img 
          src="https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766911888732-banner.webp"
          alt="Rajgriham Ridge Residency"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
       </div>
     
       <div className="bg-white text-black p-8 rounded-2xl shadow-lg max-w-6xl mx-auto mt-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
        Rajgriham Ridge Residency - Unit Details
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#2D548F] text-white">
              <th className="px-6 py-3 text-left">UNIT TYPE</th>
              <th className="px-6 py-3 text-left">AREA (SQ.FT.)</th>
              <th className="px-6 py-3 text-left">PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">2 BHK</td>
              <td className="px-6 py-4">669 SQ.FT.</td>
              <td className="px-6 py-4">₹ 25 Lacs</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">2 BHK</td>
              <td className="px-6 py-4">698 SQ.FT.</td>
              <td className="px-6 py-4">₹ 25 Lacs</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">3 BHK</td>
              <td className="px-6 py-4">977 SQ.FT.</td>
              <td className="px-6 py-4">₹ 31 Lacs</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4">3 BHK</td>
              <td className="px-6 py-4">899 SQ.FT.</td>
              <td className="px-6 py-4">₹ 31 Lacs</td>
            </tr>
            <tr>
              <td className="px-6 py-4">3 BHK</td>
              <td className="px-6 py-4">899 SQ.FT.</td>
              <td className="px-6 py-4">₹ 31 Lacs</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contact Section */}
      <div className="mt-6 flex gap-x-5 justify-center items-center">
        <a href="tel:+9205190065" className="text-4xl text-green-500 hover:underline">
          <FaWhatsapp/>
        </a>
        <a href='' className="bg-[#2D548F] text-white py-2 px-6 rounded-lg hover:bg-red-500 cursor-pointer transition duration-300">
          
            Get in Touch
        </a>
      </div>
    </div>
       <div className="flex flex-wrap gap-4 mt-20 bg-white/60 p-8 rounded-2xl shadow-lg max-w-6xl mx-auto ">
      {images.map((image, index) => (
        <div key={index} className="w-1/4 cursor-pointer">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-full h-auto rounded-md shadow-md"
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {isOpen && selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-3xl cursor-pointer p-2"
            >
              &times;
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-white/20 rounded-4xl p-2"
            >
              &#60;
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-white/20 rounded-4xl p-2"
            >
              &#62;
            </button>

            <img
              src={images[selectedIndex]}
              alt={`selected-${selectedIndex}`}
              className="max-w-screen-lg max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>

    <section className="bg-gray-700 text-white py-10 px-5 mt-20">
       <FaMapMarkedAlt className="mx-auto text-6xl mb-4"/>
      <h2 className="text-center text-3xl font-bold mb-10">Strategic Location with Unmatched Connectivity</h2>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">

        {/* Left Column - Map and Overview */}
        <div className="lg:w-2/3 space-y-5">
          <div className="relative">
            <img
              src="https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1766913269447-5.webp" 
              alt="Location Map"
              className="w-180 h-120 rounded-lg shadow-lg"
            />
            <div className="absolute top-5 left-0 bg-[#2D548F] text-white py-1 px-4 rounded-r-lg font-semibold">
              Rajghiram Ridge Residency
            </div>
          </div>

          {/* Quick Actions - Buttons */}
          <div className="flex space-x-5">
            <button className="bg-red-500 cursor-pointer text-white py-2 px-4 rounded-md shadow-md">
              Call
            </button>
            <button className="bg-red-500 cursor-pointer text-white py-2 px-4 rounded-md shadow-md">
              Email
            </button>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="lg:w-xl  space-y-5 flex flex-col justify-between">
          <div className="bg-white p-5 rounded-lg shadow-lg flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
             <FaPhoneAlt className='text-2xl'/>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">24/7 Accessibility</h3>
              <p className='text-gray-600'>Seamless transportation and public infrastructure around the clock.</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
              <FaMapMarkerAlt className='text-red-500 text-2xl'/>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Prime Location</h3>
              <p className='text-gray-600'>Well connected by major highways and close to key business districts.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center">
              <FaHome className='text-[#2D548F] text-2xl'/>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">Secure Neighborhood</h3>
              <p className='text-gray-600'>A family-friendly, secure neighborhood with 24/7 security.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-white py-10 px-5 text-black rounded-2xl shadow-lg max-w-6xl mx-auto mt-20">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-10 text-red-500">About RajGriham</h2>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <p className="text-gray-600 text-lg leading-relaxed">
          RajGriham - we are more than just a Real Estate Developer, we are creators of Thriving Communities, and Landmarks.
          Focusing with a Vision our Customer-First Approach with a dynamic team of experts, we deliver Residential Property
          Developments in Sohna, Gurugram, and more, with innovative designs and streamlined execution. Our journey began with
          a commitment of Redefining Urban Lifestyles through Transparency, Integrity, and Excellence. Over the years, we have
          grown into a trusted name in the industry and commitment towards Excellence, Conformance, and Longevity for our clients
          and sustainers. Through the confluence of Modern Infrastructure, Eco-Friendly Practices, and Strategic Development Planning,
          RajGriham is shaping real estate narrative. Find your place among Trusted Real Estate Developers as we create quality spaces
          for people to Live, Work, and Grow, whether it be Residential Property or Commercial Real Estate Opportunities, we have the
          right fit for you.
        </p>
      </div>

      {/* Features Section - Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Quality Assurance Card */}
        <div className="w-64 bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4 flex justify-center">
            <FaCheck />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
          <p className="text-sm">Premium construction standards</p>
        </div>

        {/* Timely Delivery Card */}
        <div className="w-64 bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4 flex justify-center"> 
            <FaRegClock/>
          </div>
          <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
          <p className="text-sm">On-time project completion</p>
        </div>

        {/* Customer Focus Card */}
        <div className="w-64 bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4 flex justify-center">
            <FaUsers /></div>
          <h3 className="text-xl font-semibold mb-2 ">Customer Focus</h3>
          <p className="text-sm">Dedicated customer service</p>
        </div>
      </div>
    </section>
     <section className="bg-gray-700 py-10 px-5 mt-20">
      <div className="max-w-7xl mx-auto text-white">
        <div className="flex flex-col gap-10 text-center items-center justify-between">
          <div className="text-sm">
            <p className="text-red-500 text-2xl font-semibold">Still Have Questions?</p>
            <p className="mt-2 text-lg">
              Our expert team is here to help you with any additional questions about Rajgirham Ridge Residency.
              Get personalized assistance and detailed project information.
            </p>
          </div>
          <button className="bg-orange-600 cursor-pointer text-white py-2 px-6 rounded-md hover:bg-orange-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
    </section>
  );
}

