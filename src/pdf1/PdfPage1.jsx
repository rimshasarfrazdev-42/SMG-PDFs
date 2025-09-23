// src/pdf/LoanStatement.jsx
import { loanStatementData } from "../data/Data";

const LoanStatement = (props) => {
  const data = { ...loanStatementData, ...props };

  // small reusable input
  const Field = ({ value, className = "", ...rest }) => (
    <input
      defaultValue={value}
      className={`bg-transparent border-b border-dashed border-gray-400 focus:outline-none px-1 ${className}`}
      {...rest}
    />
  );

  return (
    <div className="w-full flex justify-center bg-neutral-100 print:bg-white">
      <div
        className="
          bg-white text-black shadow
          w-full max-w-full md:max-w-[210mm] min-h-screen md:min-h-[297mm]
          p-4 sm:p-6 md:p-10
          font-sans text-[12px] leading-snug
          print:shadow-none print:w-[210mm] print:min-h-[297mm]
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Left: Logos */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              {/* Logo1 */}
              <div className="w-[200px] h-[50px] bg-gray-200 flex items-center justify-center text-[10px]">
                Your LOGO1
              </div>

              {/* Logo2 */}
              <div className="w-[300px] h-[30px] flex items-center justify-center text-[9px]">
                Your LOGO2
              </div>
            </div>

            <div className="text-[12px] mt-2 sm:mt-1 sm:ml-4 text-center sm:text-left">
              Return Service Requested
            </div>
          </div>

          {/* Right: Page Info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-[12px]">
            <div>Page 1 of 1</div>
            <div>
              Statement Date: <Field value={data.statementDate} />
            </div>
            <div>
              {data.loanLabel} #<Field value={data.loanNumber} />
            </div>
          </div>
        </div>

        {/* Customer Info + Amount Due */}
        <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-between items-start gap-6 mx-auto w-full">
          {/* Customer Info */}
          <div className="w-full md:w-[300px] md:h-[310px] text-center p-3 flex flex-col justify-center">
            <Field value={data.customerName} className="text-center mb-1" />
            <Field value={data.customerAddress1} className="text-center mb-1" />
            <Field value={data.customerAddress2} className="text-center" />
          </div>

          {/* Amount Due Box */}
          <div className="w-full md:w-[300px] border border-black">
            <div className="p-3">
              {/* Centered Heading */}
              <div className="mb-2 border-b border-black flex items-center justify-center h-[20px]">
                <span className="font-bold text-[13px] italic mb-2">Amount Due</span>
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[11px]">
                <div>Payment Due Date</div>
                <Field value={data.paymentDueDate} className="text-right font-semibold" />

                <div>Principal Due</div>
                <Field value={data.principalDue} className="text-right" />

                <div>Interest Due</div>
                <Field value={data.interestDue} className="text-right" />

                <div>Escrow Due</div>
                <Field value={data.escrowDue} className="text-right" />

                <div>Late Charges Due</div>
                <Field value={data.lateChargesDue} className="text-right" />

                <div>Past Due Amount</div>
                <Field value={data.pastDueAmount} className="text-right" />

                <div className="font-bold">Total Amount Due</div>
                <Field value={data.totalAmountDue} className="text-right font-bold" />
              </div>

              {/* Extra Lines */}
              <div className="mt-3 grid grid-cols-[auto,1fr] gap-1 text-[11px]">
                <div>Additional Principal:</div>
                <Field value="" />
                <div>Additional Escrow:</div>
                <Field value="" />
              </div>

              {/* Total Enclosed */}
              <div className="mt-3">
                <div className="font-semibold text-[12px]">Total Amount Enclosed</div>
                <div className="mt-1 flex gap-[2px] flex-wrap">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Field key={i} value="" className="w-5 h-6 text-center" maxLength={1} />
                  ))}
                </div>
              </div>
            </div>
            <div className="px-3 pb-1 text-[10px] italic text-rose-600 mt-4 mb-1 text-center">
              Payment will automatically be drafted from your account
            </div>
          </div>
        </div>

        {/* Tear Line */}
        <div className="my-4 border-t border-dashed border-black" />
        <div className="text-center text-[11px] text-gray-600">
          Please return this portion with your payment
        </div>

        {/* Info Panels */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Panel */}
          <div className="border border-black">
            <div className="p-3">
              <div className="mb-2 border-b border-black flex items-center justify-center h-[20px]">
                <span className="font-bold text-[13px] italic pb-2">
                  SUMMARY OF LOAN INFORMATION
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[11px]">
                <div>Sample Customer</div>
                <Field value={data.sampleCustomer} className="text-right" />

                <div>Account Number</div>
                <Field value={data.accountNumber} className="text-right" />

                <div>Interest Rate</div>
                <Field value={data.interestRate} className="text-right" />

                <div>Current Balance</div>
                <Field value={data.currentBalance} className="text-right" />

                <div>Interest Paid YTD</div>
                <Field value={data.interestPaidYTD} className="text-right" />

                <div>Escrow Balance</div>
                <Field value={data.escrowBalance} className="text-right" />

                <div>Original Loan Date</div>
                <Field value={data.originalLoanDate} className="text-right" />

                <div>Maturity Date Credit</div>
                <Field value={data.maturityDate} className="text-right" />

                <div>Line Amount</div>
                <Field value={data.lineAmount} className="text-right" />

                <div>Available Credit</div>
                <Field value={data.availableCredit} className="text-right" />
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="border border-black">
            <div className="p-3">
              <div className="mb-2 border-b border-black flex items-center justify-center h-[20px]">
                <span className="font-bold text-[13px] italic mb-2">
                  Explanation of Amount Due
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-1 text-[11px]">
                <div>Payment Due Date</div>
                <Field value={data.paymentDueDate} className="text-right" />

                <div>Principal Due</div>
                <Field value={data.principalDue} className="text-right" />

                <div>Interest Due</div>
                <Field value={data.interestDue} className="text-right" />

                <div>Escrow Due</div>
                <Field value={data.escrowDue} className="text-right" />

                <div>Late Charges Due</div>
                <Field value={data.lateChargesDue} className="text-right" />

                <div>Past Due Amount</div>
                <Field value={data.pastDueAmount} className="text-right" />

                <div className="font-bold">Total Amount Due</div>
                <Field value={data.totalAmountDue} className="text-right font-bold" />
              </div>

              <div className="mt-6 text-[10px] italic text-rose-600 text-center">
                Payment will automatically be drafted from your account
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Activity */}
        <div className="mt-6 border border-gray-400 overflow-x-auto">
          <table className="w-full min-w-[650px] text-[12px] text-left border-collapse">
            <thead>
              <tr>
                <th colSpan={5} className="text-center font-bold text-[13px] border-b-2 border-black py-2">
                  Transaction Activity
                </th>
              </tr>
              <tr className="font-bold">
                <th className="px-2 py-2">Posted Date</th>
                <th className="px-2 py-2">Effective Date</th>
                <th className="px-2 py-2">Description of Transaction</th>
                <th className="px-2 py-2 text-right">Transaction Amount</th>
                <th className="px-2 py-2 text-right">Principal Balance</th>
              </tr>
            </thead>

            <tbody>
              {data.transactionActivity.map((t, i) => (
                <tr key={i} className="border-t">
                  <td className="px-2 py-2">
                    <Field value={t.postedDate} />
                  </td>
                  <td className="px-2 py-2">
                    <Field value={t.effectiveDate} />
                  </td>
                  <td className="px-2 py-2">
                    <Field value={t.description} className="w-full" />
                  </td>
                  <td className="px-2 py-2 text-right">
                    <Field value={t.transactionAmount} className="text-right" />
                  </td>
                  <td className="px-2 py-2 text-right">
                    <Field value={t.principalBalance} className="text-right" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-6" />
      </div>
    </div>
  );
};

export default LoanStatement;
