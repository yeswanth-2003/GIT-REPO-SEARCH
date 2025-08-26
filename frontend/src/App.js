import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import HistoryPage from "./components/HistoryPage";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-github-dark d-flex flex-column align-items-center p-5">
        <h1 className="display-4 fw-bold text-github-title mb-4 d-flex align-items-center gap-2" style={{fontFamily: 'Segoe UI, Arial, sans-serif'}}>
          <FaGithub /> GitHub Repo Search
        </h1>
        <nav className="mb-4">
          <Link to="/search" className="btn bg-github-green text-light me-2 border-github">Search</Link>
          <Link to="/history" className="btn bg-github-dark text-github-title border-github">History</Link>
        </nav>
        <div className="w-100" style={{maxWidth: '600px'}}>
          <Routes>
            <Route path="/search" element={<SearchForm />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<SearchForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
