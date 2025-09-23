import { footer } from "../data/Data";

const StatementBalancePage = ({ leftSection = [], rightSection = {} }) => {
  return (
    <div className="w-full bg-white print:bg-white">
      <div
        className="
          relative mx-auto w-full max-w-[210mm]
          min-h-screen                 /* mobile/tablet: grow naturally */
          lg:min-h-[297mm] lg:h-[297mm] /* A4 height for large screens */
          print:min-h-[297mm] print:h-[297mm]
          font-sans shadow-md print:shadow-none
          text-[10px] leading-[1.25] tracking-tight text-gray-400
          px-5 py-6
          box-border
        "
      >
        {/* ===== MAIN CONTENT ===== */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 leading-snug
            overflow-visible           /* allow natural growth on mobile */
            pb-8 lg:pb-28 print:pb-0   /* leave space for footer on lg/print */
          "
        >
          {/* LEFT COLUMN */}
          <div className="space-y-4 break-words text-[11px] lg:mx-4">
            {(leftSection ?? []).map((section, idx) => (
              <div key={idx} className="bg-white">
                <h2 className="uppercase font-semibold text-[10px] border-b border-gray-300 pb-1 mb-2">
                  {section.title}
                </h2>

                {(section.paragraphs ?? []).map((para, i) => (
                  <p key={i} className="mb-2">
                    {para}
                  </p>
                ))}

                {Array.isArray(section.list) && section.list.length > 0 && (
                  <ul className="list-disc list-inside space-y-1">
                    {section.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white break-words text-[11px]">
            {/* Heading */}
            <div className="mb-2">
              <h2 className="uppercase font-semibold text-[10px]">
                {rightSection.title}
              </h2>
              <div className="border-t border-gray-300 mt-1" />
            </div>

            {(rightSection.description ?? []).map((t, i) => (
              <p key={i} className="mb-2">
                {t}
              </p>
            ))}

            {/* ===== Checks and withdrawals ===== */}
            <div className="mt-3">
              <div className="border border-gray-300">
                <div className="text-center font-medium text-sm py-1">
                  {rightSection.tableTitle}
                </div>
              </div>

              {/* Keep width fixed but let page grow vertically */}
              <div className="-mt-[1px] overflow-x-auto">
                <table
                  className="w-full table-fixed text-[10px] text-gray-400 border border-gray-300"
                >
                  <colgroup>
                    <col className="w-[20%]" />
                    <col className="w-[22%]" />
                    <col className="w-[8%]" />
                    <col className="w-[20%]" />
                    <col className="w-[22%]" />
                    <col className="w-[8%]" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th rowSpan={2} className="border px-2 py-1 text-left">No./Date</th>
                      <th colSpan={2} className="border px-2 py-1 text-center">Amount</th>
                      <th rowSpan={2} className="border px-2 py-1 text-left">No./Date</th>
                      <th colSpan={2} className="border px-2 py-1 text-center">Amount</th>
                    </tr>
                    <tr>
                      <th className="border px-2 py-1 font-normal text-center">$</th>
                      <th className="border px-2 py-1 font-normal text-center"></th>
                      <th className="border px-2 py-1 font-normal text-center">$</th>
                      <th className="border px-2 py-1 font-normal text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 11 }).map((_, i) => {
                      const r = rightSection.table?.rows?.[i] || {};
                      const dot = "·";
                      return (
                        <tr key={i}>
                          <td className="border px-2 py-1">{r.noDate ?? ""}</td>
                          <td className="border px-2 py-1 text-right">{r.amountADollars ?? ""}</td>
                          <td className="border px-2 py-1 text-right">{r.amountACents ?? dot}</td>
                          <td className="border px-2 py-1">{r.noDateB ?? ""}</td>
                          <td className="border px-2 py-1 text-right">{r.amountBDollars ?? ""}</td>
                          <td className="border px-2 py-1 text-right">{r.amountBCents ?? dot}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="border px-2 py-1 font-medium">Subtotal A:</td>
                      <td className="border px-2 py-1" colSpan={2}>
                        {rightSection.table?.subtotalA || "·"}
                      </td>
                      <td className="border px-2 py-1 font-medium">Subtotal B:</td>
                      <td className="border px-2 py-1" colSpan={2}>
                        {rightSection.table?.subtotalB || "·"}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1 font-medium">Total A + B:</td>
                      <td className="border px-2 py-1" colSpan={2}>
                        <div className="flex items-center gap-2">
                          <span className="flex-1 border-b border-gray-400 h-[10px]" />
                          <span className="shrink-0">+</span>
                        </div>
                      </td>
                      <td className="border px-2 py-1" colSpan={2}>
                        <div className="flex items-center gap-2">
                          <span className="flex-1 border-b border-gray-400 h-[10px]" />
                          <span className="shrink-0">=</span>
                        </div>
                      </td>
                      <td className="border px-2 py-1 text-right">
                        {rightSection.table?.totalAB || "·"}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Mini balance table */}
            <div className="mt-3">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-[10px] border border-gray-300">
                  <colgroup>
                    <col />
                    <col className="w-[20%]" />
                    <col className="w-[10%]" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1">Enter statement closing balance.</td>
                      <td className="border px-2 py-1">$</td>
                      <td className="border px-2 py-1">
                        {rightSection.calc?.closingBalance ?? "·"}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">
                        Add deposits recorded in your register but not shown.
                      </td>
                      <td className="border px-2 py-1">$</td>
                      <td className="border px-2 py-1">
                        {rightSection.calc?.depositsNotShown ?? "·"}
                      </td>
                    </tr>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <tr key={i}>
                        <td className="border px-2 py-[2px]" />
                        <td className="border px-2 py-[2px]" />
                        <td className="border px-2 py-[2px]">·</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="border px-2 py-1">
                        Subtract total outstanding checks & withdrawals.
                      </td>
                      <td className="border px-2 py-1">$</td>
                      <td className="border px-2 py-1">
                        {rightSection.calc?.outstandingChecks ?? "·"}
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">Balance should agree with checkbook balance.</td>
                      <td className="border px-2 py-1">$</td>
                      <td className="border px-2 py-1 font-semibold">
                        {rightSection.calc?.finalBalance ?? "·"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        {/* Static on mobile; pinned bottom on lg & print */}
        <footer
          className="
            bg-white py-3
            w-full
            static
            lg:absolute lg:bottom-0 lg:left-0
            print:absolute print:bottom-0 print:left-0
          "
        >
          <div
            className="
              mx-auto w-full max-w-[210mm]
              px-3 sm:px-4
              flex flex-col sm:flex-row items-center justify-between
              gap-3 sm:gap-4 text-gray-700 text-center sm:text-left
            "
          >
            <div className="flex items-center gap-2">
              <img
                src="/footer-left.png"
                alt="Equal Housing Lender"
                className="h-5 object-contain max-w-[140px]"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/footer-center.png"
                alt="Print Mail Vendor"
                className="h-6 object-contain max-w-[160px]"
              />
            </div>
            <div className="text-[11px] sm:text-[12px] whitespace-nowrap">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {footer.right.website}
              </a>
              <span className="mx-2 hidden sm:inline text-gray-400">|</span>
              <span>{footer.right.phone}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StatementBalancePage;
