// src/pages/Pdf3Page.jsx
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import Pdf3Main from "../pdf3/Pdf3Main";

const Pdf3Page = () => {
  const pdfRef = useRef();

  const handleDownload = () => {
   
    const element = pdfRef.current;

 
    const clone = element.cloneNode(true);
    clone.style.transformOrigin = "top left";

    // Scale to roughly fit 2 pages
    // (adjust scale if your content is longer/shorter)
    clone.style.transform = "scale(0.9)";
    clone.style.width = element.offsetWidth + "px";

    document.body.appendChild(clone);

    const options = {
      margin: [10, 10, 10, 10], // mm
      filename: "pdf3-document.pdf",
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"] }, // allow controlled breaks
    };

    html2pdf()
      .set(options)
      .from(clone)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();

        // Guarantee exactly 2 pages
        if (totalPages > 2) {
          // delete extra pages
          for (let i = totalPages; i > 2; i--) {
            pdf.deletePage(i);
          }
        } else if (totalPages < 2) {
          // add blank page(s)
          for (let i = totalPages; i < 2; i++) {
            pdf.addPage();
          }
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
        Download PDF 3 (2 Pages)
      </button>

      {/* === Content Wrapper (scaled into 2 pages) === */}
      <div ref={pdfRef} className="container">
        <Pdf3Main />
      </div>
    </div>
  );
};

export default Pdf3Page;
