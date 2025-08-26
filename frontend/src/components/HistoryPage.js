import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/results");
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  const navigate = useNavigate();

  const handleHistoryClick = (item) => {
    navigate("/search", { state: { keyword: item.keyword, results: item.data?.items || [] } });
  };

  return (
    <div className="card shadow-lg p-4 mt-4 bg-github-dark text-github-title border-github w-100">
      <h2 className="mb-4">Search History</h2>
      {loading ? (
        <p className="text-github-muted">Loading...</p>
      ) : history.length > 0 ? (
        <ul className="list-group">
          {history.map((item) => (
            <li
              key={item._id}
              className="list-group-item d-flex justify-content-between align-items-center list-group-item-action bg-dark text-github-title border-github"
              onClick={() => handleHistoryClick(item)}
              title="Show search results"
              style={{ cursor: 'pointer' }}
            >
              <span className="text-github-link fw-bold text-decoration-underline">{item.keyword}</span>
              <span className="text-github-muted">{new Date(item.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-github-muted">No history available.</p>
      )}
    </div>
  );
}

export default HistoryPage;
