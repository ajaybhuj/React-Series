import React from "react";

const Logo = () => {
  return (
    <div className="bg-white  rounded-lg shadow-md">
      <svg
        className="text-gray-600 w-16 h-16 mb-4"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm0-8h-2V7h2v3zm-3 0H7v-2h1v2zm0-3H7V7h1v3zm4 3h-2V7h2v3zm3 0h-1v-3h1v3zm0-6h-1v-2h1v2z"></path>
      </svg>

      <p className="text-xl font-semibold text-gray-800">GitHub Profile</p>
    </div>
  );
};

export default Logo;
