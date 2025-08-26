const express=require('express');
const { fetchAndStoreResults, getAllResults } = require("../controllers/resultController.js");

const router = express.Router();

router.post("/search", fetchAndStoreResults); 
router.get("/results", getAllResults);     

module.exports = router;