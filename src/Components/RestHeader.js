import { useSelector } from "react-redux";
import { Link } from "react-router"; // ✅ fixed import (use react-router-dom)

export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-orange-500 hover:text-orange-600 transition duration-200">
          Swiggy
        </Link>

        {/* Cart */}
        <Link
          to="/Checkout"
          className="relative flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-orange-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11a1 1 0 001-1v-1m-6-6V6m0 6v6"
            />
          </svg>
          <span className="text-xl">Cart ({counter})</span>
        </Link>
      </div>
    </header>
  );
}
