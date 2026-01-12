import { Link } from "react-router-dom"
const ContactUs = () => {
  return (
    <>
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
    <section className="px-6 sm:px-12 lg:px-20 bg-blue-100 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl mb-4">Let's Connect</h2>
        <p className="text-sm sm:text-base text-gray-600">Ready to find your dream property? Our expert team is here to guide you every step of the way.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 my-8 bg-white/50 rounded-lg backdrop-blur-md max-w-6xl mx-auto p-4 gap-8 shadow-lg">
        <iframe 
          className="w-full h-80 sm:h-100 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56134.78012972459!2d76.99285200475691!3d28.436639624464842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0xb832ca965fff5828!2sCountryroof%20Infratech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1767863587416!5m2!1sen!2sin"
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form className="flex flex-col gap-6 p-6 w-full max-w-md mx-auto shadow-lg rounded-lg bg-white">
          <h2 className="text-xl font-medium text-gray-800">Consult a Property Expert Now</h2>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm text-gray-700">Message</label>
            <textarea 
              id="message" 
              placeholder="Your Message" 
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-[#2D548F] text-white py-2 rounded-md hover:bg-[#305081] cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12shadow-xl p-6 rounded-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <a href="mailto:countryroof.infobirth@gmail.com" className="text-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-lg font-semibold text-gray-800">Email</div>
          <p className="text-gray-600">countryroof.infobirth@gmail.com</p>
          <a href="mailto:countryroof.infobirth@gmail.com" className="text-blue-600 hover:underline mt-2 block">Send an Email</a>
        </a>
        <a href="tel:+919205190065" className="text-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-lg font-semibold text-gray-800">Phone</div>
          <p className="text-gray-600">+91 9205190065</p>
          <a href="tel:+919205190065" className="text-blue-600 hover:underline mt-2 block">Call Us</a>
        </a>
      </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800">Why Choose Countryroof?</h3>
          <p className="text-gray-600 mt-2">Trusted by thousands of property seekers across India</p>
          <ul className="mt-4 space-y-4">
            <li className="text-gray-700 font-medium">✔ Verified Listings - All properties are verified and authentic.</li>
            <li className="text-gray-700 font-medium">✔ Expert Support - Professional guidance from real estate experts.</li>
            <li className="text-gray-700 font-medium">✔ 24x7 Assistance - Round-the-clock support for all your needs.</li>
          </ul>
        </div>
    </section>
    </>
  );
};

export default ContactUs;
