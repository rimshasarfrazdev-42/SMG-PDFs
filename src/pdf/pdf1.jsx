import React, { useRef } from "react";
import Pdf1Main from "../pdf1/Pdf1Main";
import html2pdf from "html2pdf.js";

const Pdf1Page = () => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;

    // Clone for safe scaling
    const clone = element.cloneNode(true);
    clone.style.transformOrigin = "top left";
    clone.style.width = element.offsetWidth + "px";

    // 🔹 Calculate scaling so content fits into 2 A4 pages
    const A4_HEIGHT_PX = 1122; // A4 ~1122px at 96dpi
    const MAX_HEIGHT = A4_HEIGHT_PX * 2; // 2 pages
    const actualHeight = element.scrollHeight;

    let scale = 1;
    if (actualHeight > MAX_HEIGHT) {
      scale = MAX_HEIGHT / actualHeight; // shrink proportionally
    }

    clone.style.transform = `scale(${scale})`;

    document.body.appendChild(clone);

    const options = {
      margin: 0,
      filename: "pdf1-document.pdf",
      image: { type: "jpeg", quality: 0.9 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all"] }, // avoid extra page breaks
    };

    html2pdf()
      .from(clone)
      .set(options)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        // ✅ Remove any accidental extra pages
        while (pdf.internal.getNumberOfPages() > 2) {
          pdf.deletePage(pdf.internal.getNumberOfPages());
        }
      })
      .save()
      .then(() => {
        document.body.removeChild(clone);
      });
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF 1
      </button>

      <div ref={pdfRef}>
        <Pdf1Main />
      </div>
    </div>
  );
};

export default Pdf1Page;
