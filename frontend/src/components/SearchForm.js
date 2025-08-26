import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import SearchResultsDetails from "./SearchResultsDetails";

function SearchForm() {
	const location = useLocation();
	const [keyword, setKeyword] = useState(location.state?.keyword || "");
	const [results, setResults] = useState(location.state?.results || []);

	useEffect(() => {
		if (location.state?.keyword || location.state?.results) {
			setKeyword(location.state.keyword || "");
			setResults(location.state.results || []);
		}
	}, [location.state]);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!keyword) return;
		try {
			const res = await fetch("https://git-repo-search.onrender.com/api/search", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ keyword })
			});
			const data = await res.json();
			setResults(data.data.items || []);
			setKeyword("");
		} catch (error) {
			console.error("Error fetching search:", error);
		}
	};


	return (
		<div className="card shadow-lg p-4 mb-4 bg-github-dark text-github-title border-github w-100">
			<form onSubmit={handleSearch} className="mb-4">
				<div className="input-group">
					<input
						type="text"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
						placeholder="Enter keyword..."
						className="form-control bg-dark text-github-title border-github"
					/>
					<button
						type="submit"
						className="btn bg-github-green text-light ms-2 border-github"
					>
						Search
					</button>
				</div>
			</form>

			<div>
				<h5 className="mb-3">Search Results</h5>
				{results.length > 0 ? (
					<SearchResultsDetails results={results} />
				) : (
					<p className="text-github-muted">No search results yet.</p>
				)}
				<div className="mt-4 text-github-muted text-center">
					Enter a keyword and click <span className="fw-bold text-github-green">Search</span> to find GitHub repositories.
				</div>
			</div>
		</div>
	);
}

export default SearchForm;
