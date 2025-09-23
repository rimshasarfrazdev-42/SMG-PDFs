import React from "react";
import { checksData as checks, headerData as header } from "../data/Data";

const ChecksPage = () => {
  return (
    <div  className="
          w-full max-w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm]
          bg-white text-black p-6 shadow-md font-sans
          print:shadow-none print:w-[210mm] print:min-h-[297mm] 
        ">
      {/* === HEADER === */}
      <div className="flex justify-end text-xs sm:text-sm mb-6 text-gray-800  pt-16">
        <div className=" space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="">Page:</span>
            <span className="text-left">{header.page}</span>
          </div>

          <div className="flex justify-between">
            <span className="">Statement Date:</span>
            <span className="flex text-left">{header.statementDate}</span>
          </div>

          <div className="flex justify-between">
            <span className="">Primary Account:</span>
            <span className="flex text-left">{header.primaryAccount}</span>
          </div>
        </div>
      </div>

      {/* === CHECKS GRID === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {checks.map((check) => (
          <div
            key={check.id}
            className="group flex flex-col border border-gray-200 bg-white overflow-hidden"
          >
            {/* Check Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={check.imageUrl}
                alt={`Check ${check.number}`}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Check Details */}
            <div className="flex justify-between items-center text-xs sm:text-sm px-2 sm:px-3 py-2 border-t border-gray-200">
              <span className="text-gray-700">#{check.number}</span>
              <span className="text-gray-700">{check.date}</span>
              <span className="font-semibold text-gray-900">
                {check.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Print-specific styles */}
      <style>
        {`
          @media print {
            div {
              width: 794px !important;
              height: 1123px !important;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ChecksPage;
