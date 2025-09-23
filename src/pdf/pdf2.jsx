import React, { useRef } from "react";
import Pdf2Main from "../Pdf2/Pdf2Main";
import html2pdf from "html2pdf.js";

const Pdf2Page = () => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;

    // Clone the element so we can apply scaling without messing UI
    const clone = element.cloneNode(true);
    clone.style.transformOrigin = "top left";

    // ✅ Force scale so content fits into 4 pages
    clone.style.transform = "scale(0.9)";  
    clone.style.width = element.offsetWidth + "px";

    document.body.appendChild(clone);

    const options = {
      margin: [10, 10, 10, 10],
      filename: "pdf2-document.pdf",
      image: { type: "jpeg", quality: 0.6 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] },
    };

    html2pdf()
      .set(options)
      .from(clone)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        // Trim extra pages if more than 4
        while (pdf.internal.getNumberOfPages() > 4) {
          pdf.deletePage(pdf.internal.getNumberOfPages());
        }

        // Add blank pages if fewer than 4
        while (pdf.internal.getNumberOfPages() < 4) {
          pdf.addPage();
        }
      })
      .save()
      .then(() => {
        document.body.removeChild(clone); // cleanup
      });
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download PDF 2 (4 Pages)
      </button>

      <div ref={pdfRef}>
        <Pdf2Main />
      </div>
    </div>
  );
};

export default Pdf2Page;
