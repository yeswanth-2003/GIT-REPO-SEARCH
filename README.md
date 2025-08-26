# GitHub Repo Search

A full-stack web application to search GitHub repositories, view results, and store search history.

## Features
- Search for GitHub repositories by keyword
- Fetches data from the GitHub public API
- Stores search results in MongoDB
- Displays search history on a dashboard
- Clean, modular code structure
- React frontend, Node.js/Express backend
- API error handling and pagination
- Responsive, modern UI

## Tech Stack
- Frontend: React, React Router, Bootstrap, Tailwind CSS
- Backend: Node.js, Express, Mongoose, MongoDB

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yeswanth-2003/GIT-REPO-SEARCH.git
cd GIT REPO SEARCH
```

### 2. Install Dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Environment Variables
Create a `.env` file in the `backend` folder:
```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

### 4. Run Locally
#### Backend
```bash
cd backend
npm start
```
#### Frontend
```bash
cd frontend
npm start
```

### 5. Deploy
- Backend: Render (https://render.com/)
- Frontend: Vercel (https://vercel.com/)

Update API URLs in frontend to match your deployed backend.

## Live Demo
- Backend: [Render Link](https://git-repo-search-1.onrender.com)
- Frontend: [Vercel Link](https://git-repo-search-five.vercel.app/)

## Folder Structure
```
GIT REPO SEARCH/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

## API Reference
- **GET /api/search**: Search GitHub repositories
- **GET /api/results**: Get search history

## Bonus Features
- Pagination for search results
- Robust error handling
- Modern UI with GitHub-inspired branding

## License
MIT

---




