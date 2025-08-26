const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    keyword: { type: String, required: true },
    data: { type: Object, required: true }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);