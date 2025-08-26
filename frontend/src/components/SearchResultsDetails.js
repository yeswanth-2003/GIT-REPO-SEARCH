import React from "react";

function SearchResultsDetails({ results }) {
  if (!results || results.length === 0) {
    return <p className="text-github-muted">No details available.</p>;
  }
  return (
    <div className="mt-4">
      <h3 className="mb-3">Repositories</h3>
      <ul className="list-group mb-3">
        {results.map((repo) => (
          <li key={repo.id} className="list-group-item bg-dark text-github-title border-github mb-2">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-2">
              <div>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="fw-bold text-github-link text-decoration-underline">
                  {repo.full_name || repo.name}
                </a>
                <p className="text-github-muted small mt-1">{repo.description || "No description provided."}</p>
                <div className="d-flex gap-3 mt-2 small">
                  <span className="text-github-title">Language: {repo.language || "N/A"}</span>
                  <span className="text-github-title">Forks: {repo.forks_count}</span>
                  <span className="text-github-title">Open Issues: {repo.open_issues_count}</span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span className="fw-bold text-github-green">⭐ {repo.stargazers_count}</span>
                <span className="text-github-muted small mt-1">Updated: {repo.updated_at ? new Date(repo.updated_at).toLocaleString() : "N/A"}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsDetails;
