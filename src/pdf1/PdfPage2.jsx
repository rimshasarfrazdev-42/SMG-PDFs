import { pdf2Data } from "../data/Data";

const Pdf2 = () => {
  const d = pdf2Data;

  return (
    <div className="w-full flex  justify-center bg-neutral-100 print:bg-white ">
      <div
       className="
      w-[210mm] min-h-[297mm]            /* Fixed A4 size */
      bg-white  shadow print:shadow-none
      p-4 sm:p-5 md:p-6 lg:p-8
      font-sans text-[10px] sm:text-[11px] md:text-[12px] leading-snug
      overflow-hidden  
      text-gray-400        
    "
  
      >
        {/* === CHANGE OF CONTACT INFORMATION FORM === */}
        <div className="border border-gray-400">
          <div className="p-3 sm:p-4">
            <h2 className="font-bold tracking-tight mb-2 uppercase text-[12px] sm:text-[13px]">
              CHANGE OF CONTACT INFORMATION FORM
            </h2>

            <p className="mb-2 text-justify break-words">
              Please change my address on the face of this loan payment notice
              <br />
              and update my contact information as follows:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* LEFT: form fields */}
              <div className="space-y-2">
                <FormLine
                  label="Street Address"
                  value={d.changeContactInfo.streetAddress}
                />
                <FormLine
                  label="Mailing Address"
                  value={d.changeContactInfo.mailingAddress}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <FormLine label="City" value={d.changeContactInfo.city} />
                  <FormLine label="State" value={d.changeContactInfo.state} />
                  <FormLine label="Zip Code" value={d.changeContactInfo.zip} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <FormLine
                    label="Home Telephone"
                    value={d.changeContactInfo.homeTelephone}
                  />
                  <FormLine
                    label="Business Telephone"
                    value={d.changeContactInfo.businessTelephone}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <FormLine
                    label="Home Cell"
                    value={d.changeContactInfo.homeCell}
                  />
                  <FormLine
                    label="Business Cell"
                    value={d.changeContactInfo.businessCell}
                  />
                </div>

                <FormLine
                  label="Email Address"
                  value={d.changeContactInfo.email}
                />

                <div className="grid grid-cols-1 sm:grid-cols-[3fr,1fr] gap-2">
                  <FormLine
                    label="Authorized Signature"
                    value={d.changeContactInfo.authorizedSignature}
                  />
                  <FormLine label="Date" value={d.changeContactInfo.date} />
                </div>
              </div>

              {/* RIGHT: instructions */}
              <div className="mt-4 md:mt-0 md:border-l md:border-gray-300 md:pl-4 text-[11px] sm:text-[12px] leading-snug">
                <p className="mb-2">{d.instructions.left}</p>

                <div className="space-y-1">
                  <div className="font-semibold text-[11px] sm:text-[12px]">
                    Please check one of the following boxes:
                  </div>
                  <CheckLine
                    text={d.instructions.boxes.changeThisAccountOnly}
                  />
                  <CheckLine text={d.instructions.boxes.changeAllAccounts} />
                  <CheckLine
                    text={d.instructions.boxes.changeSpecificAccounts}
                    subNote={d.instructions.boxes.specificHint}
                  />
                </div>

                {Array.isArray(d.instructions.right) &&
                  d.instructions.right.length > 0 && (
                    <ul className="list-disc ml-4 mt-2 space-y-1">
                      {d.instructions.right.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* === TEAR LINE === */}
        <div className="my-4">
          <div className="border-t border-gray-400 border-dashed" />
          <div className="text-center text-[10px] sm:text-[11px] mt-1 text-gray-500">
            {d.perfLineText || "Tear along perforated line"}
          </div>
        </div>

        {/* === IMPORTANT INFORMATION === */}
        <Section title={d.importantInfo.title} content={d.importantInfo.content} />

        {/* === BILLING RIGHTS SUMMARY === */}
        <Section
          title={d.billingRights.title}
          preface={d.billingRights.preface}
          subTitle={d.billingRights.subTitle}
          content={d.billingRights.content}
          bullets={d.billingRights.bullets}
        />

        {/* === FINANCE CHARGES === */}
        <Section
          title={d.financeCharges.title}
          subTitle={d.financeCharges.subTitle}
          content={d.financeCharges.content}
        />
      </div>
    </div>
  );
};

/* --------- Helpers --------- */
function FormLine({ label, value }) {
  return (
    <div className="grid grid-cols-[auto,1fr] items-center gap-2">
      <span className="whitespace-nowrap">{label}</span>
      <div className="relative flex-1">
        <div className="border-b border-gray-400 h-[16px]" />
        {value && (
          <span className="absolute inset-y-0 left-2 flex items-center text-[9px] sm:text-[10px] text-gray-700">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

function CheckLine({ text, subNote }) {
  return (
    <div className="flex items-start gap-2">
      <span className="inline-block w-[12px] h-[12px] border border-gray-600 mt-[2px]" />
      <div>
        <div>{text}</div>
        {subNote && <div className="text-[9px] sm:text-[9px] text-gray-500">{subNote}</div>}
      </div>
    </div>
  );
}

function Section({ title, preface, subTitle, content, bullets }) {
  return (
    <section className="mb-4">
      <h3 className="font-bold mb-2 uppercase text-[12px] sm:text-[13px]">{title}</h3>
      {preface && <p className="mb-1">{preface}</p>}
      {subTitle && <div className="font-semibold mb-1">{subTitle}</div>}
      {content?.map((p, idx) => (
        <p key={idx} className="mb-1 text-justify break-words">
          {p}
        </p>
      ))}
      {bullets?.length > 0 && (
        <ul className="list-disc ml-5 mt-1 space-y-[3px]">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Pdf2;
