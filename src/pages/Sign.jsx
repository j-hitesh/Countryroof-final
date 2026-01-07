import React from "react";
import { useNavigate,Link } from "react-router-dom";

// import { auth } from "../Component/FirebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { db } from "../Component/FirebaseConfig";
// import { ref, set } from "firebase/database";

const Sign = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [fireError, setFireError] = React.useState(""); // Firebase error

  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = "Enter a valid email";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(phone)) {
      errs.phone = "Enter a valid phone number (digits only)";
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFireError("");

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      

      await set(ref(db, `users/${userCredential.user.uid}`), {
       name,
       phone,
       email,
       createdAt: Date.now(),
       });


      console.log("User created:", userCredential.user);

      navigate("/login");
    } catch (err) {
      console.error(err);
      setFireError(err.message); 
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="flex flex-col h-190">
    <nav className="fixed top-0 left-0 w-full bg-[#FCFCFC] shadow-md z-50 h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="https://countryroof.in/upload/logo/1819668946722953.png"
              alt="logo"
              className="w-30 md:w-40"
            />
          </Link>
        </div>

        <Link
          to="/PostProperty"
          className="bg-[#2D548F] text-white px-4 py-2 rounded-md text-sm font-semibold" 
        >
          Post Property
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
 
    </nav>

    <div className="flex flex-row items-center justify-center">
      <div>
       <img className="object-cover h-full" src="https://countryroof.in/upload/property/thambnail/1827637885326559.jpg" alt="Imgae" />
      </div>
      <div className="bg-white w-lg p-8 mt-25">
        <div className="flex justify-center mb-6">
          <img
            src="https://countryroof.in/upload/logo/1819668946722953.png"
            className="w-32"
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-white shadow-md flex items-center justify-center gap-3 py-3 rounded-lg border hover:bg-gray-100 transition cursor-pointer"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-800 font-medium">
            Continue with Google
          </span>
        </button>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-gray-50 border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-gray-50 border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-gray-50 border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full bg-gray-50 border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <label className="flex items-center gap-2 text-gray-700 text-sm mb-6">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            Remember me
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2D548F] hover:bg-blue-800 text-white py-2 rounded-lg shadow-lg transition disabled:opacity-60 font-medium"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 underline cursor-pointer font-medium hover:text-blue-800"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  </div>
);

};

export default Sign;