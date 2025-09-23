// src/components/BankStatement.jsx

import { bankData } from "../data/Data";

const BankStatement2 = () => {
  const d = bankData;

  return (
    <>
      <div
        className="
        w-full max-w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm]
        bg-white text-black p-4 sm:p-6 shadow-md font-sans
        print:shadow-none print:w-[210mm] print:min-h-[297mm]
      "
      >
        {/* === HEADER SECTION === */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ">
          {/* === LEFT CONTAINER === */}
          <div className="flex flex-col items-center h-auto sm:h-80 w-full sm:w-1/2 relative mx-auto">
            {/* Logo (center top) */}
            <div className="w-full flex justify-center mt-2">
              <img
                src="/pdf3logo.png"
                alt="Bank Logo"
                className="w-74 lg:h-20 sm:h-14"
              />
            </div>
            {/* Return Service Requested (bottom center) */}
            <p className="text-[8px] mt-1 text-center w-full">
              Address Service Requested
            </p>

            {/* Customer Info (middle) */}
            <div className="flex flex-col justify-end flex-grow text-center sm:text-left mt-4 sm:mt-0">
              {/* Centered barcode image */}
              <div className="flex justify-center">
                <img
                  src="/pdf3Barcode.png"
                  alt="barcode"
                  className="h-auto w-auto"
                />
              </div>

              <p className="text-sm font-semibold">{d.customer.name}</p>
              <p className="text-sm ">{d.customer.address1}</p>
              <p className="text-sm ">{d.customer.address2}</p>
            </div>
          </div>

          {/* === RIGHT CONTAINER === */}
          <div className="text-xs w-full sm:w-48 space-y-3">
            {/* Statement Info */}
            {/* === Right panel: Statement box + promo image === */}
            <div className="w-full sm:w-auto max-w-[300px] mx-auto sm:mx-0">
              {/* Title + dates */}
              <div className="text-[13px] sm:text-[14px]">
                {/* Centered title */}
                <h3 className="text-center font-semibold border-b-2 border-[#8A1E1E] pb-2">
                  Statement of Account(s)
                </h3>

                {/* From / Through on one line */}
                <div className="mt-2 flex items-center justify-end text-xs gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-800">From:</span>
                    <span>{d.statement.fromDate}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-gray-800">Through:</span>
                    <span>{d.statement.toDate}</span>
                  </div>
                </div>

                {/* Page, right-aligned on its own line */}
                <div className="mt-1 flex justify-end">
                  <span className="text-gray-800">
                    Page:&nbsp;
                    <span className="font-medium">{d.statement.page}</span>
                  </span>
                </div>
              </div>

              {/* Promo image exactly below the box */}
              <div className="mt-3">
                <img
                  src="/pdf3img1.png" // <— replace with your image path
                  alt="Promotional"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === BANNER === */}
        <div className="mt-8 sm:mt-12">
          <img
            src="/pdf3banner.png"
            alt="Promo Banner"
            className="w-full object-cover"
          />
        </div>

        {/* ==== SUMMARY OF ACCOUNTS ==== */}
        <div className="mt-3 text-[11px] sm:text-[12px] leading-tight">
          <div className="border-[#8A1E1E] pt-1 flex flex-col sm:flex-row sm:items-end justify-between pb-2 border-b-2">
            <span className="font-medium">Summary of Account(s)</span>
            <span className="font-medium">
              Routing Number {d.routingNumber}
            </span>
          </div>

          <div className="overflow-x-auto mt-1">
            <table className="w-full min-w-[600px] sm:min-w-[720px] border-separate border-spacing-0 text-[11px] sm:text-[12px]">
              <thead>
                <tr>
                  {[
                    "Account",
                    "Type",
                    "Beginning Balance",
                    "Total Deposits",
                    "Interest Earned*",
                    "Total Withdraws",
                    "Service Charges",
                    "Ending Balance",
                  ].map((h, i) => (
                    <th
                      key={h}
                      className={[
                        "px-2 py-1 text-[11px] font-medium",
                        "border-b border-gray-400 pb-2",
                        i > 1 ? "text-right" : "text-left",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.summaryOfAccounts.map((acc, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-2 py-1 border-b border-gray-300">
                      {acc.accountNo}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300">
                      {acc.type}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.beginningBalance}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.totalDeposits}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.interestEarned}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.totalWithdrawals}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.serviceCharges}
                    </td>
                    <td className="px-2 py-1 border-b border-gray-300 text-right">
                      {acc.endingBalance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 sm:mt-6 text-[11px]  text-right text-gray-700 pb-2">
              * If applicable, please see Deposit Earning Analysis section for
              more information.
            </p>
          </div>
        </div>

        {/* ==== ACCOUNT DETAILS ==== */}
        <div className="mt-6 text-[12px] sm:text-[13px]">
          <div className="border-[#8b1e1e] pt-1 flex flex-col sm:flex-row justify-between pb-2 border-b-2">
            <span className="font-semibold">Account Details</span>
            <span className="font-semibold">
              Traditional Checking - {d.accountDetailsHeaderSuffix}
            </span>
          </div>

          <div className="overflow-x-auto mt-1">
            <table className="w-full min-w-[500px] sm:min-w-[640px] text-[12px] sm:text-[13px]">
              <thead>
                <tr>
                  <th className="px-2 py-1 border-b border-black font-medium text-left">
                    Date
                  </th>
                  <th className="px-2 py-1 border-b border-black font-medium text-left">
                    Description
                  </th>
                  <th className="px-2 py-1 border-b border-black font-medium text-right">
                    Amount
                  </th>
                  <th className="px-2 py-1 border-b border-black font-medium text-right">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {d.accountDetails.map((row, i) => (
                  <tr key={i}>
                    <td className="px-2 py-1">{row.date}</td>
                    <td className="px-2 py-1">{row.description}</td>
                    <td className="px-2 py-1 text-right">{row.amount}</td>
                    <td className="px-2 py-1 text-right">{row.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==== OVERDRAFT & RETURNED ITEM FEES ==== */}
        <div className="mt-6 text-[12px] sm:text-[13px]">
          <div className="border-b-2 pb-2 border-[#8b1e1e] pt-1 flex flex-col sm:flex-row justify-between">
            <span className="font-semibold">
              Summary of Overdraft and Returned Item Fees
            </span>
            <span className="font-semibold">
              Traditional Checking - {d.feeSummaryHeaderSuffix}
            </span>
          </div>

          <div className="overflow-x-auto mt-1">
            <table className="w-full min-w-[400px] sm:min-w-[560px] text-[12px] sm:text-[13px]">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-left"></th>
                  <th className="px-2 py-1 text-right font-medium">
                    Total For This Period
                  </th>
                  <th className="px-2 py-1 text-right font-medium">
                    Total Year-to-Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1">Total Overdraft Fees</td>
                  <td className="px-2 py-1 text-right">
                    {d.overdraftFees.overdraft.period}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {d.overdraftFees.overdraft.yearToDate}
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Total Returned Item Fees</td>
                  <td className="px-2 py-1 text-right">
                    {d.overdraftFees.returnedItem.period}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {d.overdraftFees.returnedItem.yearToDate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white pb-4">
        <div
          className="
      mx-auto w-full max-w-[210mm]
      md:max-h-[297mm]
      px-3 sm:px-4 py-3
      flex flex-col sm:flex-row
      items-center justify-between
      gap-3 sm:gap-4
      text-gray-700 text-center sm:text-left
    "
        >
          {/* Center: Vendor plaque */}
          <div className="flex-1 flex justify-center sm:justify-center">
            <img
              src="/footer-center.png"
              alt="Print Mail Vendor"
              className=" sm:h-7 object-contain max-w-[160px]"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default BankStatement2;
