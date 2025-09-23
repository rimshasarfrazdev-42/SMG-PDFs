// src/components/StatementPage2.jsx
import React from "react";
import { statementPage2 } from "../data/Data";

const StatementPage2 = () => {
  const d = statementPage2;

  return (
    <div
      className="
          w-full max-w-full md:max-w-[210mm] 
          min-h-screen md:min-h-[297mm]
          bg-white text-gray-900 text-[12px] sm:text-[13px] leading-snug 
          p-4 sm:p-6 md:p-8 shadow-md
          print:shadow-none print:w-[210mm] print:min-h-[297mm]
        "
    >
      {/* === HEADER === */}
      <div className="flex justify-end mb-6 sm:mb-8">
        <div className="space-y-0.5 text-xs sm:text-sm ">
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
            <span className="text-left">{d.statement.primaryAccount}</span>
          </div>
        </div>
      </div>

      {/* === AUTOMATIC DEBIT CHARGES === */}
      <Section title="AUTOMATIC DEBIT CHARGES">
        <Table
          headers={["Date", "Description", "Amount"]}
          rows={d.debitCharges.map((t) => [t.date, t.description, t.amount])}
        />
      </Section>

      {/* === REVIEW OF CHECKS === */}
      <Section title="A REVIEW OF YOUR CHECKS IN CHECK NUMBER ORDER">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-green-800">
                <th className="text-left py-1">Date</th>
                <th className="text-left py-1">Check#</th>
                <th className="text-right py-1 px-2">Amount</th>
                <th className="text-left py-1">Date</th>
                <th className="text-left py-1">Check#</th>
                <th className="text-right py-1">Amount</th>
              </tr>
            </thead>
            <tbody>
              {d.checksReview.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-100 transition border-b border-gray-200 ${
                    i % 2 === 1 ? "bg-gray-100/70" : ""
                  }`}
                >
                  <td className="py-1">{row.date}</td>
                  <td className="py-1">{row.check}</td>
                  <td className="py-1 text-right">{row.amount}</td>
                  <td className="py-1 px-2">{row.date2}</td>
                  <td className="py-1">{row.check2}</td>
                  <td className="py-1 text-right">{row.amount2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] mt-1 italic">
          * Indicates skip in check numbers
        </p>
      </Section>

      {/* === DAILY BALANCE SECTION === */}
      <Section title="Daily Balance Section">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-green-800">
                <th className="text-left py-1">Date</th>
                <th className="text-right py-1">Balance</th>
                <th className="text-left py-1 px-2">Date</th>
                <th className="text-right py-1">Balance</th>
              </tr>
            </thead>
            <tbody>
              {d.balances.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-100 transition border-b border-gray-200 ${
                    i % 2 === 1 ? "bg-gray-100/70" : ""
                  }`}
                >
                  <td className="py-1">{row.date}</td>
                  <td className="py-1 text-right">{row.balance}</td>
                  <td className="py-1 px-2">{row.date2}</td>
                  <td className="py-1 text-right">{row.balance2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* === INTEREST RATE SUMMARY === */}
      <Section title="INTEREST RATE SUMMARY">
        <Table
          headers={["DATE", "INTEREST RATE"]}
          rows={d.interestSummary.map((row) => [row.date, row.rate])}
        />
      </Section>

      {/* === PROMO SECTION === */}
      <div className="border border-gray-300 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between rounded-sm mt-8 sm:mt-10">
        {/* Left Content */}
        <div className="text-sm mb-4 sm:mb-0">
          <h3 className="font-bold mb-2">
            Introducing our all-new Rewards Credit Card!
          </h3>
          <ul className="list-none space-y-1">
            <li>✯ Earn rewards with most purchases</li>
            <li>
              ✯ Redeem your points for a statement credit, merch, gas, and more
            </li>
            <li>✯ Contactless payment option</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="sm:ml-6 flex-shrink-0">
          <img
            src="/credit-cards.png"
            alt="Credit Card"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// === Reusable Section Wrapper ===
const Section = ({ title, children }) => (
  <div className="mt-6">
    <h3 className="mb-1 border-b pb-2 border-black">{title}</h3>
    {children}
  </div>
);

// === Reusable Simple Table Component ===
const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border-spacing-0  min-w-[400px]">
      <thead>
        <tr className="border-b-2 border-green-800">
          {headers.map((h, i) => (
            <th
              key={i}
              className={`py-2 px-2 text-sm ${
                i === headers.length - 1 ? "text-right" : "text-left"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={`transition border-b border-gray-300  ${
              i % 2 === 1 ? "bg-gray-100/70" : ""
            }`}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={`py-2 px-2 text-sm leading-relaxed ${
                  j === row.length - 1 ? "text-right" : "text-left"
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StatementPage2;
