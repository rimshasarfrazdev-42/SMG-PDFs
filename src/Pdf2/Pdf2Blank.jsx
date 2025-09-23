// src/components/BankBlankPage.jsx
import React from "react";

const BankBlankPage = () => {
  return (
    <div
      className="
          w-full max-w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm]
          bg-white relative text-gray-900 p-6 md:p-8
          print:w-[210mm] print:min-h-[297mm] print:shadow-none
        "
    >
      {/* === HEADER === */}
      <div className="flex justify-between items-start pt-8">
        {/* Left: Logo + Address */}
        <div>
          <div className="mx-12 flex items-center gap-2">
            <img
              src="logo1.png" // Replace with your logo
              alt="Bank Logo"
              className="h-20 w-auto"
            />
          </div>
        </div>

        {/* Right: Website + Phone */}
        <div className="text-right text-xs text-gray-700">
          <p>www.yourbank.com</p>
          <p>(800) 565-4321</p>
        </div>
      </div>

      {/* === FOOTER === */}
      <div className="absolute bottom-4 left-0 w-full flex justify-between items-center px-6">
        {/* FDIC Logo */}
        <img
          src="/images/fdic-logo.png" // 🔹 Replace with actual FDIC logo
          alt="FDIC"
          className="h-6 w-auto"
        />

        {/* Disclaimer Text */}
        <p className="text-[10px] text-gray-600 text-center flex-1 mx-4">
          SEE REVERSE SIDE FOR IMPORTANT INFORMATION
        </p>

        {/* Equal Housing Lender Logo */}
        <img
          src="/images/ehl-logo.png" // 🔹 Replace with Equal Housing Lender logo
          alt="Equal "
          className="h-6 w-auto"
        />
      </div>
    </div>
  );
};

export default BankBlankPage;
