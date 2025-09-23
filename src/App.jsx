import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pdf1Page from "./pdf/pdf1";
import Pdf2Page from "./pdf/pdf2";
import Pdf3Page from "./pdf/pdf3";


function App() {
  return (
    <Router>
      <div className="p-6">
        {/* Navigation */}
        <nav className="mb-6 space-x-4">
          <Link to="/pdf1" className="text-blue-600 hover:underline">
            PDF 1
          </Link>
          <Link to="/pdf2" className="text-green-600 hover:underline">
            PDF 2
          </Link>
           <Link to="/pdf3" className="text-green-600 hover:underline">
            PDF 3
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/pdf1" element={<Pdf1Page />} />
          <Route path="/pdf2" element={<Pdf2Page />} />
          <Route path="/pdf3" element={<Pdf3Page />} />
          <Route path="*" element={<div>Select a PDF from above.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
