const Result = require("../models/Result.js");
const axios = require('axios');


const fetchAndStoreResults = async (req, res) => {
  const { keyword } = req.body;

  if (!keyword) return res.status(400).json({ message: "Keyword is required" });

  try {
    
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}`
    );

   
    const newResult = new Result({
      keyword,
      data: response.data,
    });
    await newResult.save();

    res.status(201).json(newResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllResults = async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fetchAndStoreResults, getAllResults };