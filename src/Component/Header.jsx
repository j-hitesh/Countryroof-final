import React, { useState } from "react";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
          
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
            <a
              href="/post"
              className="bg-[#1a4d5c] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Post Property
            </a>

            <button
              onClick={() => setLoginOpen(true)}
              className="bg-[#1a4d5c] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* -------------- LOGIN MODAL -------------- */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
          <div className="bg-white w-[350px] p-6 rounded-lg relative">
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-center text-xl font-semibold mb-4">Login</h2>

            {/* Google Login */}
            <button className="border w-full py-2 rounded-md flex justify-center items-center gap-2 font-semibold">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                width="20"
                alt=""
              />
              Continue with Google
            </button>

            <p className="text-center text-gray-500 my-3 text-sm">
              or login with email
            </p>

            <input
              type="email"
              placeholder="Email"
              className="border rounded-md w-full p-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md w-full p-2 mb-3"
            />

            <button className="w-full bg-[#1a4d5c] text-white py-2 rounded-md font-semibold">
              Login
            </button>

            <p className="text-center text-sm mt-3">
              Don’t have an account?
              <span
                onClick={() => {
                  setLoginOpen(false);
                  setSignupOpen(true);
                }}
                className="text-[#1a4d5c] font-semibold ml-1 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* -------------- SIGNUP MODAL -------------- */}
      {signupOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
          <div className="bg-white w-[350px] p-6 rounded-lg relative">
            <button
              onClick={() => setSignupOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-center text-xl font-semibold mb-4">Sign Up</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md w-full p-2 mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md w-full p-2 mb-3"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border rounded-md w-full p-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md w-full p-2 mb-3"
            />

            <button className="w-full bg-[#1a4d5c] text-white py-2 rounded-md font-semibold">
              Create Account
            </button>

            <p className="text-center text-sm mt-3">
              Already have an account?
              <span
                onClick={() => {
                  setSignupOpen(false);
                  setLoginOpen(true);
                }}
                className="text-[#1a4d5c] font-semibold ml-1 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}

      {/* -------------- PROFILE MODAL -------------- */}
      {profileOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
          <div className="bg-white w-[350px] p-6 rounded-lg relative">
            <button
              onClick={() => setProfileOpen(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>

            <p>Name: Jatt</p>
            <p>Email: example@gmail.com</p>
            <p>Mobile: +91 XXXXXXX</p>

            <button className="w-full bg-[#1a4d5c] text-white py-2 rounded-md mt-4 font-semibold">
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
