import {useEffect, useState} from "react";

export default function ResultsList({title}) {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchResults = async () => {
			try {
				const res = await fetch("https://git-repo-search-1.onrender.com/api/results");
				const data = await res.json();
				setResults(data);
			} catch (err) {
				console.error("Error fetching results:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchResults();
	}, []);

	 return (
	 		<div className="container mt-4">
	 			<h2 className="mb-3 text-github-green fw-bold" style={{fontFamily: 'Segoe UI, Arial, sans-serif'}}>
	 				{title}
	 			</h2>

	 			{
	 			loading ? (
	 				<p className="text-github-muted">Loading...</p>
	 			) : results.length === 0 ? (
	 				<p className="text-github-muted">No results found.</p>
	 			) : (results.map((res, idx) => (
	 				<div key={idx} className="card mb-3 shadow-sm bg-github-dark text-github-title border-github">
	 					<div className="card-body">
	 						<h5 className="card-title text-github-link fw-bold text-decoration-underline">{res.keyword}</h5>
	 						<h6 className="card-subtitle mb-2 text-github-muted">Stored at: {res.createdAt ? new Date(res.createdAt).toLocaleString() : new Date().toLocaleString()}</h6>
	 						<div className="mt-2">
	 							{res.data?.items?.length > 0 ? (
	 								res.data.items.slice(0, 3).map((repo) => (
	 									<p key={repo.id} className="mb-1">
	 										<a href={repo.html_url} target="_blank" rel="noreferrer" className="fw-bold text-github-link text-decoration-underline">
	 											{repo.full_name}
	 										</a>
	 									</p>
	 								))
	 							) : (
	 								<span className="text-github-muted">No preview data</span>
	 							)}
	 						</div>
	 					</div>
	 				</div>
	 			)))
	 		}
	 		</div>
	);
}
