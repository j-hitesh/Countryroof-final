import { Link } from "react-router-dom";


const Header = () => {
  

  return (
    <>

      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-350 mx-auto flex justify-between items-center p-4">
          
          {/* LOGO */}
          <a href="#" className="logo">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-32"
            />
          </a>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#properties">Properties</a>
            <a href="#why-us">Why countryroof</a>
            <a href="#contact">Contact</a>
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

    </>
  );
};

export default Header;
