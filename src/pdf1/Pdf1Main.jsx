import Pdf2 from "./PdfPage2";
import LoanStatement from "./PdfPage1";

const Pdf1Main = () => {
  return (
    <div>
      <LoanStatement />

      <Pdf2 />
    </div>
  );
};

export default Pdf1Main;
