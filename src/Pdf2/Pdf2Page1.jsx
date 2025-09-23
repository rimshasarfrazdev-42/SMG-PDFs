// src/components/BankStatement.jsx
import React from "react";
import { bankStatementData as d } from "../data/Data";

const BankStatement = () => {
  return (
    <div
      className="
          w-full max-w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm]
          bg-white text-black p-6 shadow-md font-sans
          print:shadow-none print:w-[210mm] print:min-h-[297mm]
        "
    >
      {/* === HEADER SECTION === */}
      <div className="flex justify-between items-center">
        {/* === LEFT CONTAINER === */}
        <div className="flex flex-col items-center h-80 w-full sm:w-1/2 relative">
          {/* Logo (center top) */}
          <div className="w-full flex justify-center ">
            <img src="/pdf2logo.png" alt="Bank Logo" className="w-64 h-14" />
          </div>
          {/* Return Service Requested (bottom center) */}
          <p className="text-[8px] mt-1 text-center w-full">
            Return Service Requested
          </p>
          {/* Customer Info (middle) */}
          <div className="flex flex-col justify-center flex-grow">
            <p className="text-sm font-semibold">{d.customer.name}</p>
            <p className="text-sm">{d.customer.address1}</p>
            <p className="text-sm">{d.customer.address2}</p>
          </div>
        </div>

        {/* === RIGHT CONTAINER === */}
        <div className="text-xs space-y-2 w-48">
          <div className="space-y-0.5 text-xs">
            <div className="flex justify-between">
              <span className="">Page:</span>
              <span>{d.statement.page}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Statement Date:</span>
              <span>{d.statement.statementDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Primary Account:</span>
              <span className="text-right">{d.statement.primaryAccount}</span>
            </div>
          </div>

          {/* Contact Image */}
          <div className="mt-3">
            <img src="/pdf2img1.png" alt="Contact Info" className="w-full " />
          </div>
        </div>
      </div>

      {/* === BANNER === */}
      <div>
        <img
          src="/pdf2img2.png" // your uploaded green banner image
          alt="Promo Banner"
          className="w-full"
        />
      </div>

      {/* === NOTICE === */}
      <p className="text-[11px] text-gray-700 mt-2 leading-snug mx-12">
        {d.notice}
      </p>

      <div>
        {/* === SUMMARY OF ACCOUNTS === */}
        <div className="w-full text-[13px]">
          <div className="font-semibold mb-1">Summary of Accounts</div>
          <div className="border-t-2 border-green-800 mb-1"></div>

          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse text-sm sm:text-xs md:text-sm">
              <thead>
                <tr className="border-b border-black bg-gray-50">
                  <th className="px-2 py-1 text-left font-medium">
                    Account No.
                  </th>
                  <th className="px-2 py-1 text-left font-medium">
                    Type of Account
                  </th>
                  <th className="px-2 py-1 text-right font-medium">
                    Current Balance
                  </th>
                  <th className="px-2 py-1 text-right font-medium">
                    Enclosures
                  </th>
                </tr>
              </thead>
              <tbody>
                {d.summaryOfAccounts.map((acc, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-2 py-1">{acc.accountNo}</td>
                    <td className="px-2 py-1">{acc.type}</td>
                    <td className="px-2 py-1 text-right">
                      {acc.currentBalance}
                    </td>
                    <td className="px-2 py-1 text-right">{acc.enclosures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* === RELATIONSHIP CHECKING === */}
        <div className="mt-6 text-[13px]">
          <div className="font-semibold">RELATIONSHIP CHECKING</div>
          <div className="border-t-2 border-green-800 mt-0.5 mb-3"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>Account Number</span>
                <span>{d.relationshipChecking.accountNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Previous Balance</span>
                <span>{d.relationshipChecking.previousBalance}</span>
              </div>
              <div className="ml-5 flex justify-between">
                <span>3 Deposits/Credits</span>
                <span>{d.relationshipChecking.depositsCredits}</span>
              </div>
              <div className="ml-5 flex justify-between">
                <span>5 Checks/Debits</span>
                <span>{d.relationshipChecking.checksDebits}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Charge</span>
                <span>{d.relationshipChecking.serviceCharge}</span>
              </div>
              <div className="flex justify-between">
                <span>Interest Paid</span>
                <span>{d.relationshipChecking.interestPaid}</span>
              </div>
              <div className="flex justify-between">
                <span>Ending Balance</span>
                <span>{d.relationshipChecking.endingBalance}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-0.5">
              <div className="flex justify-between">
                <span>Number of Images</span>
                <span>{d.relationshipChecking.numberOfImages}</span>
              </div>
              <div className="flex justify-between">
                <span>Statement Dates</span>
                <span>{d.relationshipChecking.statementDates}</span>
              </div>
              <div className="flex justify-between">
                <span>Days in the statement period</span>
                <span>{d.relationshipChecking.daysInPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Ledger</span>
                <span>{d.relationshipChecking.averageLedger}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Collected</span>
                <span>{d.relationshipChecking.averageCollected}</span>
              </div>
              <div className="flex justify-between">
                <span>Interest Earned</span>
                <span>{d.relationshipChecking.interestEarned}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Percentage Yield Earned</span>
                <span>{d.relationshipChecking.annualPercentageYield}</span>
              </div>
              <div className="flex justify-between">
                <span>2023 Interest Paid</span>
                <span>{d.relationshipChecking["2023InterestPaid"]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* === AUTOMATIC CREDITS AND DEPOSITS === */}
        <div className="mt-6 text-[13px]">
          <div className="font-semibold">AUTOMATIC CREDITS AND DEPOSITS</div>
          <div className="border-t-2 border-green-800 mt-0.5 mb-2"></div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-green-800">
                  <th className="px-2 py-1 text-left">Date</th>
                  <th className="px-2 py-1 text-left">Description</th>
                  <th className="px-2 py-1 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {d.transactions.map((t, i) => (
                  <tr key={i} className={`${i % 2 === 1 ? "bg-gray-200" : ""}`}>
                    <td className="px-2 py-1">{t.date}</td>
                    <td className="px-2 py-1">{t.description}</td>
                    <td className="px-2 py-1 text-right">{t.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatement;
